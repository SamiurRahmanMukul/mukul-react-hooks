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

  const executeWait = async () => {
    setIsWaiting(true);
    addLog(`Starting wait for ${duration}ms...`);

    try {
      await lib.waitSomeMoment(duration);
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
          <label>Wait Duration (ms):</label>
          <input
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
              {logs.map((log, index) => (
                <div
                  key={index}
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
