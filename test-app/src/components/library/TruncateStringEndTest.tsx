import { lib } from "mukul-react-hooks";
import { useState } from "react";

export default function TruncateStringEndTest() {
  const [inputString, setInputString] = useState(
    "This is a very long string that needs to be truncated for display purposes"
  );
  const [maxLength, setMaxLength] = useState(20);

  const result = lib.truncateStringEnd(inputString, maxLength);

  return (
    <div>
      <h1>truncateStringEnd Function Test</h1>
      <p>
        This function truncates strings from the end, adding ellipsis (...) when the string exceeds
        the specified length. Perfect for displaying long text in limited spaces.
      </p>

      <div className="test-section">
        <h3>String Truncator</h3>
        <div className="form-group">
          <label htmlFor="truncateInput">Input String:</label>
          <textarea
            id="truncateInput"
            value={inputString}
            onChange={(e) => setInputString(e.target.value)}
            placeholder="Enter a long string to truncate"
            rows={3}
          />
        </div>
        <div className="form-group">
          <label htmlFor="maxLength">Max Length:</label>
          <input
            id="maxLength"
            type="number"
            value={maxLength}
            onChange={(e) => setMaxLength(Number(e.target.value))}
            min="1"
            max="200"
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
        <h3>Visual Examples</h3>
        <div className="grid">
          {[10, 20, 30, 50].map((length) => (
            <div key={length} className="result-box">
              <h4>Max {length} chars</h4>
              <div
                style={{
                  padding: "0.5rem",
                  backgroundColor: "#2a2a2a",
                  borderRadius: "4px",
                  fontSize: "0.875rem",
                  fontFamily: "monospace",
                }}
              >
                {lib.truncateStringEnd(inputString, length)}
              </div>
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

const truncated = lib.truncateStringEnd(string, maxLength);`}
          </pre>

          <h4>Parameters</h4>
          <ul style={{ textAlign: "left", margin: "1rem 0" }}>
            <li>
              <strong>str</strong> (string): String to truncate
            </li>
            <li>
              <strong>maxLength</strong> (number): Maximum allowed length before truncation
            </li>
          </ul>

          <h4>Return Value</h4>
          <ul style={{ textAlign: "left", margin: "1rem 0" }}>
            <li>
              <strong>string</strong>: Original string or truncated string with "..." appended
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
            {`// Basic truncation
const longText = "This is a very long text that needs truncation";
const short = lib.truncateStringEnd(longText, 20);
// Result: "This is a very long..."

// Card titles
const ArticleCard = ({ title, content }) => (
  <div className="card">
    <h3>{lib.truncateStringEnd(title, 50)}</h3>
    <p>{lib.truncateStringEnd(content, 100)}</p>
  </div>
);

// Navigation breadcrumbs
const Breadcrumb = ({ path }) => (
  <nav>
    {path.map(item => (
      <span key={item}>
        {lib.truncateStringEnd(item, 15)}
      </span>
    ))}
  </nav>
);

// Table cell content
const DataTable = ({ rows }) => (
  <table>
    {rows.map(row => (
      <tr key={row.id}>
        <td>{lib.truncateStringEnd(row.description, 30)}</td>
      </tr>
    ))}
  </table>
);

// No truncation needed
const shortText = "Short";
const result = lib.truncateStringEnd(shortText, 20);
// Result: "Short" (unchanged)`}
          </pre>
        </div>
      </div>

      <div className="test-section">
        <h3>Real-world Use Cases</h3>
        <div className="grid">
          <div className="result-box">
            <h4>📰 Article Previews</h4>
            <p>Show article excerpts in cards or lists</p>
          </div>
          <div className="result-box">
            <h4>💬 Comments</h4>
            <p>Truncate long comments in feeds</p>
          </div>
          <div className="result-box">
            <h4>📱 Mobile UI</h4>
            <p>Fit text in limited mobile screen space</p>
          </div>
        </div>
      </div>
    </div>
  );
}
