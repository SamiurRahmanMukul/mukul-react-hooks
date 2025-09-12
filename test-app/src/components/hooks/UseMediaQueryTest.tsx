import { useMediaQuery } from "mukul-react-hooks";
import { useState } from "react";

export default function UseMediaQueryTest() {
  const [customQuery, setCustomQuery] = useState("(min-width: 768px)");

  // Common responsive breakpoints
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(min-width: 769px) and (max-width: 1024px)");
  const isDesktop = useMediaQuery("(min-width: 1025px)");
  const isLandscape = useMediaQuery("(orientation: landscape)");
  const isPortrait = useMediaQuery("(orientation: portrait)");
  const isDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const isHighDPI = useMediaQuery("(min-resolution: 2dppx)");
  const isPrintMode = useMediaQuery("print");
  const isCustomQuery = useMediaQuery(customQuery);

  const commonQueries = [
    "(max-width: 480px)", // Mobile small
    "(max-width: 768px)", // Mobile
    "(min-width: 769px) and (max-width: 1024px)", // Tablet
    "(min-width: 1025px)", // Desktop
    "(orientation: landscape)",
    "(orientation: portrait)",
    "(prefers-color-scheme: dark)",
    "(prefers-color-scheme: light)",
    "(min-resolution: 2dppx)", // High DPI
    "(hover: hover)", // Devices that can hover
    "(pointer: coarse)", // Touch devices
    "print", // Print media
  ];

  return (
    <div>
      <h1>useMediaQuery Hook Test</h1>
      <p>
        This hook allows you to test CSS media queries in React components. It's essential for
        creating responsive designs and adapting to different device capabilities and user
        preferences.
      </p>

      <div className="test-section">
        <h3>Current Device Status</h3>
        <div className="grid">
          <div className="result-box">
            <h4>📱 Device Type</h4>
            <p>
              Mobile:{" "}
              <span className={`status-indicator ${isMobile ? "active" : "inactive"}`}>
                {isMobile ? "YES" : "NO"}
              </span>
            </p>
            <p>
              Tablet:{" "}
              <span className={`status-indicator ${isTablet ? "active" : "inactive"}`}>
                {isTablet ? "YES" : "NO"}
              </span>
            </p>
            <p>
              Desktop:{" "}
              <span className={`status-indicator ${isDesktop ? "active" : "inactive"}`}>
                {isDesktop ? "YES" : "NO"}
              </span>
            </p>
          </div>

          <div className="result-box">
            <h4>🔄 Orientation</h4>
            <p>
              Landscape:{" "}
              <span className={`status-indicator ${isLandscape ? "active" : "inactive"}`}>
                {isLandscape ? "YES" : "NO"}
              </span>
            </p>
            <p>
              Portrait:{" "}
              <span className={`status-indicator ${isPortrait ? "active" : "inactive"}`}>
                {isPortrait ? "YES" : "NO"}
              </span>
            </p>
          </div>

          <div className="result-box">
            <h4>🎨 Preferences</h4>
            <p>
              Dark Mode:{" "}
              <span className={`status-indicator ${isDarkMode ? "active" : "inactive"}`}>
                {isDarkMode ? "YES" : "NO"}
              </span>
            </p>
            <p>
              High DPI:{" "}
              <span className={`status-indicator ${isHighDPI ? "active" : "inactive"}`}>
                {isHighDPI ? "YES" : "NO"}
              </span>
            </p>
          </div>

          <div className="result-box">
            <h4>🖨️ Media Type</h4>
            <p>
              Print Mode:{" "}
              <span className={`status-indicator ${isPrintMode ? "active" : "inactive"}`}>
                {isPrintMode ? "YES" : "NO"}
              </span>
            </p>
            <p>
              <em>Try Ctrl+P (or Cmd+P) to see print mode detection!</em>
            </p>
          </div>
        </div>
      </div>

      <div className="test-section">
        <h3>Custom Media Query Tester</h3>
        <div className="form-group">
          <label htmlFor="customQuery">Enter your own media query:</label>
          <select
            id="customQuery"
            value={customQuery}
            onChange={(e) => setCustomQuery(e.target.value)}
          >
            {commonQueries.map((query) => (
              <option key={query} value={query}>
                {query}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="customQueryInput">Or type a custom query:</label>
          <input
            id="customQueryInput"
            type="text"
            value={customQuery}
            onChange={(e) => setCustomQuery(e.target.value)}
            placeholder="e.g., (min-width: 1200px)"
          />
        </div>
        <div className="demo-output">
          <p>
            Query: <code>{customQuery}</code>
          </p>
          <p>
            Result:{" "}
            <span className={`status-indicator ${isCustomQuery ? "active" : "inactive"}`}>
              {isCustomQuery ? "MATCHES" : "NO MATCH"}
            </span>
          </p>
        </div>
      </div>

      <div className="test-section">
        <h3>Responsive Design Demo</h3>
        <div className="demo-output">
          <div
            style={{
              padding: "1rem",
              backgroundColor: isMobile ? "#ef4444" : isTablet ? "#f59e0b" : "#10b981",
              borderRadius: "4px",
              color: "white",
              textAlign: "center",
              fontSize: isMobile ? "0.875rem" : isTablet ? "1rem" : "1.125rem",
            }}
          >
            <h4>Responsive Component</h4>
            <p>
              {isMobile && "📱 Mobile View - Red background, smaller text"}
              {isTablet && "📊 Tablet View - Orange background, medium text"}
              {isDesktop && "🖥️ Desktop View - Green background, larger text"}
            </p>
            <p>Resize your browser window to see this change!</p>
          </div>
        </div>
      </div>

      <div className="test-section">
        <h3>Real-world Use Cases</h3>
        <div className="grid">
          <div className="result-box">
            <h4>📐 Responsive Layouts</h4>
            <p>Switch between different component layouts based on screen size.</p>
            <code style={{ fontSize: "0.75rem" }}>
              const isMobile = useMediaQuery('(max-width: 768px)')
            </code>
          </div>

          <div className="result-box">
            <h4>🎨 Theme Detection</h4>
            <p>Adapt to user's dark/light mode preference automatically.</p>
            <code style={{ fontSize: "0.75rem" }}>
              const isDark = useMediaQuery('(prefers-color-scheme: dark)')
            </code>
          </div>

          <div className="result-box">
            <h4>🖨️ Print Styles</h4>
            <p>Show/hide elements or change styling when user prints the page.</p>
            <code style={{ fontSize: "0.75rem" }}>const isPrint = useMediaQuery('print')</code>
          </div>

          <div className="result-box">
            <h4>👆 Touch vs Mouse</h4>
            <p>Adapt UI for touch interfaces vs mouse/trackpad interactions.</p>
            <code style={{ fontSize: "0.75rem" }}>
              const isTouch = useMediaQuery('(pointer: coarse)')
            </code>
          </div>

          <div className="result-box">
            <h4>🔄 Orientation Changes</h4>
            <p>Respond to device rotation and orientation changes.</p>
            <code style={{ fontSize: "0.75rem" }}>
              const isLandscape = useMediaQuery('(orientation: landscape)')
            </code>
          </div>

          <div className="result-box">
            <h4>📱 Device Capabilities</h4>
            <p>Detect high-DPI screens for crisp images and graphics.</p>
            <code style={{ fontSize: "0.75rem" }}>
              const isHighDPI = useMediaQuery('(min-resolution: 2dppx)')
            </code>
          </div>
        </div>
      </div>

      <div className="test-section">
        <h3>Testing Instructions</h3>
        <div className="demo-output">
          <ol style={{ textAlign: "left" }}>
            <li>
              <strong>Resize Browser:</strong> Change window width to see mobile/tablet/desktop
              detection
            </li>
            <li>
              <strong>Rotate Device:</strong> On mobile/tablet, rotate to test orientation detection
            </li>
            <li>
              <strong>System Theme:</strong> Change your OS dark/light mode to test theme detection
            </li>
            <li>
              <strong>Print Preview:</strong> Use Ctrl+P (Cmd+P) to test print media query
            </li>
            <li>
              <strong>Custom Queries:</strong> Try different media queries in the tester above
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
