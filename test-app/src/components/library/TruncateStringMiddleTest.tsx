import { lib } from "mukul-react-hooks";
import { useState } from "react";
import { v4 } from "uuid";

export default function TruncateStringMiddleTest() {
  const [inputString, setInputString] = useState("very_long_filename_with_important_extension.tsx");
  const [maxLength, setMaxLength] = useState(25);

  const result = lib.truncateStringMiddle(inputString, maxLength);

  return (
    <div>
      <h1>truncateStringMiddle Function Test</h1>
      <p>
        This function truncates strings from the middle, preserving both the beginning and end.
        Ideal for filenames, URLs, and paths where both start and end are important.
      </p>

      <div className="test-section">
        <h3>Middle Truncator</h3>
        <div className="form-group">
          <label htmlFor="middleInput">Input String:</label>
          <input
            id="middleInput"
            type="text"
            value={inputString}
            onChange={(e) => setInputString(e.target.value)}
            placeholder="Enter string to truncate from middle"
          />
        </div>
        <div className="form-group">
          <label htmlFor="middleMaxLength">Max Length:</label>
          <input
            id="middleMaxLength"
            type="number"
            value={maxLength}
            onChange={(e) => setMaxLength(Number(e.target.value))}
            min="10"
            max="100"
          />
        </div>

        <div className="demo-output">
          <p>
            <strong>Original ({inputString.length} chars):</strong> "{inputString}"
          </p>
          <p>
            <strong>Truncated ({maxLength} max):</strong> "{result}"
          </p>
          <p>
            <strong>Result Length:</strong> {result.length} characters
          </p>
        </div>
      </div>

      <div className="test-section">
        <h3>Common Examples</h3>
        <div className="grid">
          {[
            "very_long_filename_with_extension.js",
            "https://example.com/very/long/path/to/resource.html",
            "user@very-long-domain-name.com",
            "This is a very long sentence that needs middle truncation",
          ].map((text, index) => (
            <div key={v4()} className="result-box">
              <h4>Example {index + 1}</h4>
              <p>
                <strong>Original:</strong> {text}
              </p>
              <p>
                <strong>Truncated:</strong> {lib.truncateStringMiddle(text, 30)}
              </p>
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

const truncated = lib.truncateStringMiddle(string, maxLength, separator);`}
          </pre>

          <h4>Parameters</h4>
          <ul style={{ textAlign: "left", margin: "1rem 0" }}>
            <li>
              <strong>str</strong> (string): String to truncate
            </li>
            <li>
              <strong>max</strong> (number, optional): Maximum length (default: 10)
            </li>
            <li>
              <strong>sep</strong> (string, optional): Separator string (default: "...")
            </li>
          </ul>

          <h4>Return Value</h4>
          <ul style={{ textAlign: "left", margin: "1rem 0" }}>
            <li>
              <strong>string</strong>: Original string or truncated string with separator in the
              middle
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
            {`// File path display
const FilePathDisplay = ({ path }) => (
  <span title={path}>
    {lib.truncateStringMiddle(path, 30)}
  </span>
);
// "/very/long/path/to/file.txt" -> "/very/long...file.txt"

// URL display
const URLPreview = ({ url }) => (
  <a href={url}>
    {lib.truncateStringMiddle(url, 40, '...')}
  </a>
);

// Hash/ID display
const HashDisplay = ({ hash }) => (
  <code>
    {lib.truncateStringMiddle(hash, 16, '...')}
  </code>
);
// "abc123def456ghi789" -> "abc123...hi789"

// Custom separator
const CustomTruncate = ({ text }) => (
  <span>
    {lib.truncateStringMiddle(text, 20, ' [...] ')}
  </span>
);

// Email display
const EmailDisplay = ({ email }) => (
  <span>
    {lib.truncateStringMiddle(email, 25)}
  </span>
);
// "verylongemail@domain.com" -> "verylong...domain.com"

// Breadcrumb items
const BreadcrumbItem = ({ item }) => (
  <span>
    {lib.truncateStringMiddle(item, 15)}
  </span>
);`}
          </pre>
        </div>
      </div>

      <div className="test-section">
        <h3>Real-world Use Cases</h3>
        <div className="grid">
          <div className="result-box">
            <h4>📁 File Names</h4>
            <p>Display long filenames while preserving extensions</p>
          </div>
          <div className="result-box">
            <h4>🔗 URLs</h4>
            <p>Show URLs while keeping domain and important parts visible</p>
          </div>
          <div className="result-box">
            <h4>📧 Email Addresses</h4>
            <p>Truncate long emails while preserving username and domain</p>
          </div>
        </div>
      </div>
    </div>
  );
}
