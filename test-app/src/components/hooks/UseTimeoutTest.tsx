import { useTimeout } from "mukul-react-hooks";
import { useState } from "react";
import { v4 } from "uuid";

export default function UseTimeoutTest() {
  const [message, setMessage] = useState("");
  const [delay, setDelay] = useState(2000);
  const [counter, setCounter] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (msg: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs((prev) => [`[${timestamp}] ${msg}`, ...prev].slice(0, 10));
  };

  // Basic timeout example
  const [basicTimeout] = useTimeout(() => {
    setMessage("⏰ Basic timeout executed!");
    setIsRunning(false);
    addLog("Basic timeout executed");
  }, delay);

  // Timeout with parameters
  const [paramTimeout] = useTimeout((data?: { count: number; message: string }) => {
    if (data) {
      setMessage(`🎯 Timeout with data: ${data.message} (Count: ${data.count})`);
      setCounter(data.count);
      addLog(`Parametrized timeout executed with count: ${data.count}`);
    }
    setIsRunning(false);
  }, delay);

  // Auto-incrementing counter with timeout
  const [incrementTimeout] = useTimeout(() => {
    setCounter((prev) => {
      const newCount = prev + 1;
      addLog(`Counter incremented to: ${newCount}`);
      if (newCount < 5) {
        // Continue incrementing
        setTimeout(() => {
          setIsRunning(true);
          incrementTimeout();
        }, 500);
      } else {
        setIsRunning(false);
        setMessage("🔢 Counter reached 5!");
        addLog("Counter sequence completed");
      }
      return newCount;
    });
  }, 1000);

  // Debounced timeout (cancels previous timeout when called again)
  const [debouncedTimeout] = useTimeout(() => {
    addLog("Debounced timeout executed (no more calls for 1 second)");
    setMessage("🛑 Debounced timeout executed!");
    setIsRunning(false);
  }, 1000);

  const triggerBasicTimeout = () => {
    setIsRunning(true);
    setMessage("⏳ Basic timeout started...");
    addLog(`Basic timeout started (${delay}ms delay)`);
    basicTimeout();
  };

  const triggerParametrizedTimeout = () => {
    setIsRunning(true);
    const data = { count: Math.floor(Math.random() * 100), message: "Hello from timeout!" };
    setMessage(`⏳ Timeout with parameters started... (Count: ${data.count})`);
    addLog(`Parametrized timeout started with count: ${data.count}`);
    paramTimeout(data);
  };

  const startCounterSequence = () => {
    setIsRunning(true);
    setCounter(0);
    setMessage("⏳ Starting counter sequence...");
    addLog("Counter sequence started");
    incrementTimeout();
  };

  const triggerDebouncedTimeout = () => {
    setIsRunning(true);
    setMessage("⏳ Debounced timeout started... (call multiple times to see debouncing)");
    debouncedTimeout();
  };

  return (
    <div>
      <h1>useTimeout Hook Test</h1>
      <p>
        This hook provides a convenient way to handle timeouts in React components with automatic
        cleanup. It's useful for delayed actions, debouncing, and timed operations.
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
          <p>
            <strong>Last Message:</strong> {message || "No timeouts executed yet"}
          </p>
          <p>
            <strong>Counter:</strong> {counter}
          </p>
        </div>
      </div>

      <div className="test-section">
        <h3>Timeout Configuration</h3>
        <div className="form-group">
          <label htmlFor="delay">Delay (milliseconds):</label>
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
        <h3>Timeout Examples</h3>
        <div className="grid">
          <div className="result-box">
            <h4>🚀 Basic Timeout</h4>
            <p>Simple timeout execution after specified delay.</p>
            <button className="demo-control" onClick={triggerBasicTimeout} disabled={isRunning}>
              Start Basic Timeout ({delay}ms)
            </button>
          </div>

          <div className="result-box">
            <h4>🎯 Parametrized Timeout</h4>
            <p>Timeout that receives parameters when executed.</p>
            <button
              className="demo-control"
              onClick={triggerParametrizedTimeout}
              disabled={isRunning}
            >
              Start With Parameters
            </button>
          </div>

          <div className="result-box">
            <h4>🔢 Counter Sequence</h4>
            <p>Chained timeouts creating an auto-incrementing counter.</p>
            <button className="demo-control" onClick={startCounterSequence} disabled={isRunning}>
              Start Counter (0→5)
            </button>
          </div>

          <div className="result-box">
            <h4>🛑 Debounced Timeout</h4>
            <p>Click multiple times rapidly - only the last timeout executes.</p>
            <button className="demo-control" onClick={triggerDebouncedTimeout}>
              Trigger Debounced (1s)
            </button>
          </div>
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
            {`import { useTimeout } from 'mukul-react-hooks';

const [triggerTimeout] = useTimeout(callback, delay);`}
          </pre>

          <h4>Parameters</h4>
          <ul style={{ textAlign: "left", margin: "1rem 0" }}>
            <li>
              <strong>callback</strong> (function): Function to execute after the delay
            </li>
            <li>
              <strong>delay</strong> (number): Delay in milliseconds before executing callback
            </li>
          </ul>

          <h4>Return Value</h4>
          <ul style={{ textAlign: "left", margin: "1rem 0" }}>
            <li>
              <strong>triggerTimeout</strong> (function): Function to start/restart the timeout
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
            {`// Basic timeout
const NotificationComponent = () => {
  const [message, setMessage] = useState('');
  const [showTimeout] = useTimeout(() => {
    setMessage('');
  }, 3000);
  
  const showNotification = (text) => {
    setMessage(text);
    showTimeout(); // Auto-hide after 3 seconds
  };
  
  return <div>{message && <div>{message}</div>}</div>;
};

// Debounced search
const SearchComponent = () => {
  const [query, setQuery] = useState('');
  const [searchTimeout] = useTimeout(() => {
    // Perform search API call
    performSearch(query);
  }, 500);
  
  const handleInputChange = (e) => {
    setQuery(e.target.value);
    searchTimeout(); // Restart timeout on each keystroke
  };
  
  return <input value={query} onChange={handleInputChange} />;
};

// Auto-save functionality
const AutoSaveEditor = () => {
  const [content, setContent] = useState('');
  const [autoSave] = useTimeout(() => {
    saveToServer(content);
  }, 2000);
  
  const handleContentChange = (newContent) => {
    setContent(newContent);
    autoSave(); // Save after 2 seconds of inactivity
  };
  
  return <textarea value={content} onChange={handleContentChange} />;
};`}
          </pre>
        </div>
      </div>

      <div className="test-section">
        <h3>Real-world Use Cases</h3>
        <div className="grid">
          <div className="result-box">
            <h4>🔍 Search Debouncing</h4>
            <p>Delay API calls until user stops typing for better performance.</p>
            <code style={{ fontSize: "0.75rem" }}>
              const [searchTimeout] = useTimeout(searchAPI, 500)
            </code>
          </div>

          <div className="result-box">
            <h4>💾 Auto-save</h4>
            <p>Automatically save user data after a period of inactivity.</p>
            <code style={{ fontSize: "0.75rem" }}>
              const [saveTimeout] = useTimeout(saveData, 3000)
            </code>
          </div>

          <div className="result-box">
            <h4>🚨 Notification Auto-dismiss</h4>
            <p>Automatically hide notifications after a few seconds.</p>
            <code style={{ fontSize: "0.75rem" }}>
              const [hideTimeout] = useTimeout(hideNotification, 5000)
            </code>
          </div>

          <div className="result-box">
            <h4>🎮 Game Mechanics</h4>
            <p>Implement cooldowns, delayed actions, and timed events.</p>
            <code style={{ fontSize: "0.75rem" }}>
              const [cooldownTimeout] = useTimeout(resetCooldown, 2000)
            </code>
          </div>

          <div className="result-box">
            <h4>📊 Data Polling</h4>
            <p>Periodically refresh data from an API or update analytics.</p>
            <code style={{ fontSize: "0.75rem" }}>
              const [pollTimeout] = useTimeout(fetchData, 30000)
            </code>
          </div>

          <div className="result-box">
            <h4>🎭 Animation Delays</h4>
            <p>Create sequential animations or delayed UI state changes.</p>
            <code style={{ fontSize: "0.75rem" }}>
              const [animTimeout] = useTimeout(triggerAnimation, 1000)
            </code>
          </div>
        </div>
      </div>

      <div className="test-section">
        <h3>Activity Log</h3>
        <div className="demo-output">
          {logs.length === 0 ? (
            <p>
              <em>No timeout activities yet. Try the examples above!</em>
            </p>
          ) : (
            <div style={{ maxHeight: "200px", overflowY: "auto" }}>
              {logs.map((log) => (
                <div
                  key={v4()}
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
        <h3>Hook Features</h3>
        <div className="demo-output">
          <ul style={{ textAlign: "left" }}>
            <li>
              <strong>Automatic Cleanup:</strong> Timeouts are cleared when component unmounts
            </li>
            <li>
              <strong>Cancellation:</strong> New timeout calls cancel the previous timeout
            </li>
            <li>
              <strong>Type Safety:</strong> Full TypeScript support with generic parameters
            </li>
            <li>
              <strong>Memory Efficient:</strong> Uses refs to avoid unnecessary re-renders
            </li>
            <li>
              <strong>Flexible:</strong> Can pass parameters to the timeout callback
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
