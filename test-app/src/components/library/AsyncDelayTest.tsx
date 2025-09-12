import { lib } from "mukul-react-hooks";
import { useState } from "react";

export default function AsyncDelayTest() {
  const [delay, setDelay] = useState(2000);
  const [isRunning, setIsRunning] = useState(false);
  const [startTime, setStartTime] = useState<number>(0);
  const [actualDelay, setActualDelay] = useState<number>(0);
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs((prev) => [`[${timestamp}] ${message}`, ...prev].slice(0, 15));
  };

  const runSingleDelay = async () => {
    setIsRunning(true);
    const start = Date.now();
    setStartTime(start);
    addLog(`Starting ${delay}ms delay...`);

    try {
      await lib.asyncDelay(delay);
      const end = Date.now();
      const actual = end - start;
      setActualDelay(actual);
      addLog(`Delay completed! Expected: ${delay}ms, Actual: ${actual}ms`);
    } catch (error) {
      addLog(`Error: ${error}`);
    } finally {
      setIsRunning(false);
    }
  };

  const runSequentialDelays = async () => {
    setIsRunning(true);
    addLog("Starting sequential delays...");

    const delays = [500, 1000, 1500, 2000];

    for (let i = 0; i < delays.length; i++) {
      const currentDelay = delays[i];
      addLog(`Step ${i + 1}: Starting ${currentDelay}ms delay...`);

      const start = Date.now();
      await lib.asyncDelay(currentDelay);
      const actual = Date.now() - start;

      addLog(`Step ${i + 1}: Completed in ${actual}ms`);
    }

    addLog("All sequential delays completed!");
    setIsRunning(false);
  };

  const runParallelDelays = async () => {
    setIsRunning(true);
    addLog("Starting parallel delays...");

    const delays = [1000, 2000, 1500, 800];
    const startTime = Date.now();

    const promises = delays.map(async (delayTime, index) => {
      addLog(`Parallel ${index + 1}: Starting ${delayTime}ms delay...`);
      await lib.asyncDelay(delayTime);
      addLog(`Parallel ${index + 1}: Completed!`);
      return delayTime;
    });

    await Promise.all(promises);
    const totalTime = Date.now() - startTime;
    addLog(`All parallel delays completed in ${totalTime}ms!`);
    setIsRunning(false);
  };

  const runRandomDelays = async () => {
    setIsRunning(true);
    addLog("Starting random delay sequence...");

    for (let i = 0; i < 5; i++) {
      const randomDelay = Math.floor(Math.random() * 2000) + 500; // 500-2500ms
      addLog(`Random ${i + 1}: ${randomDelay}ms delay...`);

      await lib.asyncDelay(randomDelay);
      addLog(`Random ${i + 1}: Completed!`);
    }

    addLog("Random delay sequence completed!");
    setIsRunning(false);
  };

  const clearLogs = () => setLogs([]);

  return (
    <div>
      <h1>asyncDelay Function Test</h1>
      <p>
        This function creates a Promise that resolves after a specified delay. It's useful for
        creating pauses in async code, testing, animations, and rate limiting.
      </p>

      <div className="test-section">
        <h3>Current Status</h3>
        <div className="demo-output">
          <p>
            Status:{" "}
            <span className={`status-indicator ${isRunning ? "active" : "inactive"}`}>
              {isRunning ? "RUNNING" : "IDLE"}
            </span>
          </p>
          {actualDelay > 0 && (
            <p>
              <strong>Last Delay:</strong> Expected {delay}ms, Actual {actualDelay}ms (±
              {Math.abs(actualDelay - delay)}ms)
            </p>
          )}
        </div>
      </div>

      <div className="test-section">
        <h3>Delay Configuration</h3>
        <div className="form-group">
          <label htmlFor="delay">Delay Duration (milliseconds):</label>
          <input
            id="delay"
            type="number"
            value={delay}
            onChange={(e) => setDelay(Number(e.target.value))}
            min="100"
            max="10000"
            step="100"
          />
        </div>
      </div>

      <div className="test-section">
        <h3>Delay Examples</h3>
        <div className="grid">
          <div className="result-box">
            <h4>⏱️ Single Delay</h4>
            <p>Run a single delay with the configured duration.</p>
            <button className="demo-control" onClick={runSingleDelay} disabled={isRunning}>
              Run {delay}ms Delay
            </button>
          </div>

          <div className="result-box">
            <h4>📋 Sequential Delays</h4>
            <p>Run multiple delays one after another (500ms, 1s, 1.5s, 2s).</p>
            <button className="demo-control" onClick={runSequentialDelays} disabled={isRunning}>
              Run Sequential Delays
            </button>
          </div>

          <div className="result-box">
            <h4>⚡ Parallel Delays</h4>
            <p>Run multiple delays simultaneously using Promise.all.</p>
            <button className="demo-control" onClick={runParallelDelays} disabled={isRunning}>
              Run Parallel Delays
            </button>
          </div>

          <div className="result-box">
            <h4>🎲 Random Delays</h4>
            <p>Run 5 random delays between 500ms and 2500ms.</p>
            <button className="demo-control" onClick={runRandomDelays} disabled={isRunning}>
              Run Random Delays
            </button>
          </div>
        </div>
      </div>

      <div className="test-section">
        <h3>Real-world Use Cases</h3>
        <div className="grid">
          <div className="result-box">
            <h4>🔄 API Rate Limiting</h4>
            <p>Add delays between API calls to respect rate limits.</p>
            <code style={{ fontSize: "0.75rem" }}>
              await lib.asyncDelay(1000); // Wait 1s between calls
            </code>
          </div>

          <div className="result-box">
            <h4>🎭 Animation Sequencing</h4>
            <p>Create timed sequences for animations and transitions.</p>
            <code style={{ fontSize: "0.75rem" }}>
              await lib.asyncDelay(300); // Wait for animation
            </code>
          </div>

          <div className="result-box">
            <h4>🧪 Testing & Debugging</h4>
            <p>Simulate network delays and async behavior in tests.</p>
            <code style={{ fontSize: "0.75rem" }}>
              await lib.asyncDelay(2000); // Simulate slow network
            </code>
          </div>

          <div className="result-box">
            <h4>🎮 Game Timing</h4>
            <p>Control game events, cooldowns, and turn-based mechanics.</p>
            <code style={{ fontSize: "0.75rem" }}>await lib.asyncDelay(5000); // 5s cooldowns</code>
          </div>

          <div className="result-box">
            <h4>📱 User Experience</h4>
            <p>Add deliberate pauses for better UX flow and feedback.</p>
            <code style={{ fontSize: "0.75rem" }}>
              await lib.asyncDelay(800); // Let user see loading
            </code>
          </div>

          <div className="result-box">
            <h4>🔄 Retry Logic</h4>
            <p>Implement exponential backoff in retry mechanisms.</p>
            <code style={{ fontSize: "0.75rem" }}>
              await lib.asyncDelay(attempt * 1000); // Increasing delays
            </code>
          </div>
        </div>
      </div>

      <div className="test-section">
        <h3>Code Examples</h3>
        <div className="demo-output">
          <h4>Basic Usage:</h4>
          <pre style={{ textAlign: "left", fontSize: "0.875rem" }}>
            {`// Simple delay
await lib.asyncDelay(1000); // Wait 1 second

// In a loop with delays
for (let i = 0; i < 5; i++) {
  console.log(\`Step \${i + 1}\`);
  await lib.asyncDelay(500); // Wait 500ms between steps
}

// With error handling
try {
  await lib.asyncDelay(2000);
  console.log('Delay completed');
} catch (error) {
  console.error('Delay failed:', error);
}`}
          </pre>
        </div>
      </div>

      <div className="test-section">
        <h3>Activity Log</h3>
        <div className="demo-controls">
          <button className="demo-control" onClick={clearLogs}>
            🗑️ Clear Logs
          </button>
        </div>
        <div className="demo-output">
          {logs.length === 0 ? (
            <p>
              <em>No activity yet. Try running some delays above!</em>
            </p>
          ) : (
            <div style={{ maxHeight: "300px", overflowY: "auto" }}>
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
        <h3>Function Details</h3>
        <div className="demo-output">
          <ul style={{ textAlign: "left" }}>
            <li>
              <strong>Return Type:</strong> Promise&lt;void&gt;
            </li>
            <li>
              <strong>Parameter:</strong> delay (number) - milliseconds to wait
            </li>
            <li>
              <strong>Implementation:</strong> Uses setTimeout wrapped in a Promise
            </li>
            <li>
              <strong>Precision:</strong> JavaScript timer precision (usually ~4ms minimum)
            </li>
            <li>
              <strong>Browser Support:</strong> All modern browsers with Promise support
            </li>
            <li>
              <strong>Use with await:</strong> Makes async code pause execution
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
