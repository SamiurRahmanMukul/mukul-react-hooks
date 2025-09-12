import { lib } from "mukul-react-hooks";
import { useState } from "react";

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
          <label>Input String:</label>
          <input
            type="text"
            value={inputString}
            onChange={(e) => setInputString(e.target.value)}
            placeholder="Enter string to truncate from middle"
          />
        </div>
        <div className="form-group">
          <label>Max Length:</label>
          <input
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
            <div key={index} className="result-box">
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
