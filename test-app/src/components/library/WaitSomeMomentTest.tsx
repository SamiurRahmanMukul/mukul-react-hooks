import { lib } from "mukul-react-hooks";
import { useState } from "react";

export default function WaitSomeMomentTest() {
  const [isWaiting, setIsWaiting] = useState(false);
  const [duration, setDuration] = useState(3000);
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs((prev) => [`[${timestamp}] ${message}`, ...prev].slice(0, 10));
  };

  const executeWait = () => {
    setIsWaiting(true);
    addLog(`Starting wait for ${duration}ms...`);

    try {
      lib.waitSomeMoment(duration);
      addLog(`Wait completed after ${duration}ms`);
    } catch (error) {
      addLog(`Wait failed: ${error}`);
    } finally {
      setIsWaiting(false);
    }
  };

  return (
    <div>
      <h1>waitSomeMoment Function Test</h1>
      <p>
        This function creates a delay/pause in execution. Similar to asyncDelay, it's useful for
        timing operations, animations, and creating pauses in async workflows.
      </p>

      <div className="test-section">
        <h3>Wait Controls</h3>
        <div className="form-group">
          <label htmlFor="waitDuration">Wait Duration (ms):</label>
          <input
            id="waitDuration"
            type="number"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            min="100"
            max="10000"
            step="100"
          />
        </div>

        <div className="demo-output">
          <p>
            Status:{" "}
            <span className={`status-indicator ${isWaiting ? "active" : "inactive"}`}>
              {isWaiting ? "WAITING" : "READY"}
            </span>
          </p>
        </div>

        <div className="demo-controls">
          <button className="demo-control" onClick={executeWait} disabled={isWaiting}>
            {isWaiting ? `Waiting ${duration}ms...` : `Wait ${duration}ms`}
          </button>
        </div>
      </div>

      <div className="test-section">
        <h3>Activity Log</h3>
        <div className="demo-output">
          {logs.length === 0 ? (
            <p>
              <em>No wait operations yet. Try the button above!</em>
            </p>
          ) : (
            <div style={{ maxHeight: "200px", overflowY: "auto" }}>
              {logs.map((log) => (
                <div
                  key={log}
                  style={{
                    padding: "0.25rem",
                    borderBottom: "1px solid #555",
                    fontSize: "0.875rem",
                    fontFamily: "monospace",
                  }}
                >
                  {log}
                </div>
              ))}
            </div>
          )}
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

lib.waitSomeMoment(milliseconds); // BLOCKING - Use with caution!`}
          </pre>

          <h4>Parameters</h4>
          <ul style={{ textAlign: "left", margin: "1rem 0" }}>
            <li>
              <strong>ms</strong> (number): Number of milliseconds to wait (blocks main thread)
            </li>
          </ul>

          <h4>Return Value</h4>
          <ul style={{ textAlign: "left", margin: "1rem 0" }}>
            <li>
              <strong>void</strong>: No return value, blocks execution for specified time
            </li>
          </ul>

          <h4>⚠️ Important Warning</h4>
          <div
            style={{
              backgroundColor: "#2a1a1a",
              padding: "1rem",
              borderRadius: "4px",
              border: "1px solid #ff6b6b",
              margin: "1rem 0",
            }}
          >
            <p style={{ color: "#ff6b6b", margin: 0 }}>
              <strong>CAUTION:</strong> This function blocks the main thread and can freeze the UI.
              Use <code>lib.asyncDelay()</code> for non-blocking delays instead.
            </p>
          </div>

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
            {`// ❌ AVOID - Blocks UI
const handleClick = () => {
  setLoading(true);
  lib.waitSomeMoment(2000); // UI freezes for 2 seconds!
  setLoading(false);
};

// ✅ BETTER - Use asyncDelay instead
const handleClickAsync = async () => {
  setLoading(true);
  await lib.asyncDelay(2000); // Non-blocking
  setLoading(false);
};

// Limited use case: Testing/debugging
const debugFunction = () => {
  console.log('Before wait');
  lib.waitSomeMoment(1000); // Only for testing!
  console.log('After wait');
};

// Synchronous processing with forced delay
const processItemsWithDelay = (items) => {
  return items.map((item, index) => {
    if (index > 0) {
      lib.waitSomeMoment(100); // Small delay between items
    }
    return processItem(item);
  });
};

// ⚠️ Remember: This blocks the entire browser tab!
// Use only when absolutely necessary and with short delays`}
          </pre>
        </div>
      </div>

      <div className="test-section">
        <h3>Real-world Use Cases</h3>
        <div className="grid">
          <div className="result-box">
            <h4>⏱️ Animation Timing</h4>
            <p>Coordinate animation sequences and transitions</p>
          </div>
          <div className="result-box">
            <h4>🔄 Retry Logic</h4>
            <p>Add delays between retry attempts</p>
          </div>
          <div className="result-box">
            <h4>🎮 Game Events</h4>
            <p>Create timed events and cooldowns in games</p>
          </div>
        </div>
      </div>
    </div>
  );
}
