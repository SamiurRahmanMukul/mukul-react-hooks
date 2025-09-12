import { lib } from "mukul-react-hooks";
import { useState } from "react";

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
          <label>Unix Timestamp:</label>
          <input
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
          {commonTimestamps.map((item, index) => (
            <div key={index} className="result-box">
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
