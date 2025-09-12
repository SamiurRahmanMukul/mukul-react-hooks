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
          <label>Input String:</label>
          <textarea
            value={inputString}
            onChange={(e) => setInputString(e.target.value)}
            placeholder="Enter a long string to truncate"
            rows={3}
          />
        </div>
        <div className="form-group">
          <label>Max Length:</label>
          <input
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
