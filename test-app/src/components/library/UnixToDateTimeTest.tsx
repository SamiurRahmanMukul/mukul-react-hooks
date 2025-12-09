import { lib } from "mukul-react-hooks";
import { useState } from "react";
import { v4 } from "uuid";

export default function UnixToDateTimeTest() {
  const [unixTimestamp, setUnixTimestamp] = useState(Math.floor(Date.now() / 1000));

  const result = lib.unixToDateTime(unixTimestamp);

  const commonTimestamps = [
    { name: "Current Time", value: Math.floor(Date.now() / 1000) },
    { name: "Unix Epoch", value: 0 },
    { name: "Y2K", value: 946684800 },
    { name: "One Week Ago", value: Math.floor(Date.now() / 1000) - 604800 },
    { name: "Future Date", value: Math.floor(Date.now() / 1000) + 2592000 },
  ];

  return (
    <div>
      <h1>unixToDateTime Function Test</h1>
      <p>
        This function converts Unix timestamps to human-readable date and time strings. Essential
        for displaying timestamps from APIs, databases, and logs.
      </p>

      <div className="test-section">
        <h3>Timestamp Converter</h3>
        <div className="form-group">
          <label htmlFor="unixTimestamp">Unix Timestamp:</label>
          <input
            id="unixTimestamp"
            type="number"
            value={unixTimestamp}
            onChange={(e) => setUnixTimestamp(Number(e.target.value))}
            placeholder="1640995200"
          />
        </div>

        <div className="demo-output">
          <p>
            <strong>Unix Timestamp:</strong> {unixTimestamp}
          </p>
          <p>
            <strong>Converted Date:</strong> {result}
          </p>
          <p>
            <strong>JavaScript Date:</strong> {new Date(unixTimestamp * 1000).toString()}
          </p>
        </div>
      </div>

      <div className="test-section">
        <h3>Common Timestamps</h3>
        <div className="grid">
          {commonTimestamps.map((item) => (
            <div key={v4()} className="result-box">
              <h4>{item.name}</h4>
              <p>
                <strong>Timestamp:</strong> {item.value}
              </p>
              <p>
                <strong>Converted:</strong> {lib.unixToDateTime(item.value)}
              </p>
              <button
                className="demo-control"
                onClick={() => setUnixTimestamp(item.value)}
                style={{ marginTop: "0.5rem" }}
              >
                Use This Timestamp
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="test-section">
        <h3>📚 Implementation Documentation</h3>
        <div className="demo-output">
          <h4>API Reference</h4>
          <pre
            style={{
              backgroundColor: "#1a1a1a",
              padding: "1rem",
              borderRadius: "4px",
              textAlign: "left",
            }}
          >
            {`import { lib } from 'mukul-react-hooks';

const formatted = lib.unixToDateTime(timestamp);`}
          </pre>

          <h4>Parameters</h4>
          <ul style={{ textAlign: "left", margin: "1rem 0" }}>
            <li>
              <strong>unix</strong> (number): Unix timestamp to convert
            </li>
          </ul>

          <h4>Return Value</h4>
          <ul style={{ textAlign: "left", margin: "1rem 0" }}>
            <li>
              <strong>string</strong>: Formatted date string (e.g., "15 Jan 2024, 2:30 PM")
            </li>
          </ul>

          <h4>Usage Examples</h4>
          <pre
            style={{
              backgroundColor: "#1a1a1a",
              padding: "1rem",
              borderRadius: "4px",
              textAlign: "left",
              fontSize: "0.875rem",
            }}
          >
            {`// Display message timestamps
const MessageItem = ({ message, timestamp }) => (
  <div className="message">
    <p>{message}</p>
    <small>{lib.unixToDateTime(timestamp)}</small>
  </div>
);

// Format API response dates
const formatApiDates = (apiData) => {
  return apiData.map(item => ({
    ...item,
    createdAt: lib.unixToDateTime(item.created_timestamp),
    updatedAt: lib.unixToDateTime(item.updated_timestamp)
  }));
};

// Event scheduling
const EventCard = ({ event }) => (
  <div className="event">
    <h3>{event.title}</h3>
    <p>Start: {lib.unixToDateTime(event.start_time)}</p>
    <p>End: {lib.unixToDateTime(event.end_time)}</p>
  </div>
);

// Log entries
const LogEntry = ({ entry }) => (
  <tr>
    <td>{lib.unixToDateTime(entry.timestamp)}</td>
    <td>{entry.level}</td>
    <td>{entry.message}</td>
  </tr>
);

// Current timestamp
const now = Date.now();
const currentTime = lib.unixToDateTime(now);
// Result: "15 Jan 2024, 2:30 PM"`}
          </pre>
        </div>
      </div>

      <div className="test-section">
        <h3>Real-world Use Cases</h3>
        <div className="grid">
          <div className="result-box">
            <h4>📊 API Responses</h4>
            <p>Convert API timestamps to readable dates</p>
          </div>
          <div className="result-box">
            <h4>📝 Log Files</h4>
            <p>Display log timestamps in human format</p>
          </div>
          <div className="result-box">
            <h4>💬 Chat Messages</h4>
            <p>Show when messages were sent</p>
          </div>
        </div>
      </div>
    </div>
  );
}
