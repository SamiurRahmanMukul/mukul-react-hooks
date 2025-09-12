import { useState } from "react";

export default function TransformStringTest() {
  const [inputString, setInputString] = useState("Hello World Example Text");

  return (
    <div>
      <h1>transformString Function Test</h1>
      <p>
        This function provides various string transformation utilities like case conversion,
        formatting, and text manipulation operations.
      </p>

      <div className="test-section">
        <h3>String Transformer</h3>
        <div className="form-group">
          <label>Input String:</label>
          <input
            type="text"
            value={inputString}
            onChange={(e) => setInputString(e.target.value)}
            placeholder="Enter text to transform"
          />
        </div>

        <div className="demo-output">
          <p>
            <strong>Original:</strong> "{inputString}"
          </p>
          <p>Various transformations would be applied by the transformString function.</p>
        </div>
      </div>

      <div className="test-section">
        <h3>Real-world Use Cases</h3>
        <div className="grid">
          <div className="result-box">
            <h4>📝 Text Processing</h4>
            <p>Format user input and content for display</p>
          </div>
          <div className="result-box">
            <h4>🏷️ URL Slugs</h4>
            <p>Convert titles to URL-friendly slugs</p>
          </div>
          <div className="result-box">
            <h4>📋 Data Normalization</h4>
            <p>Standardize text data for consistency</p>
          </div>
        </div>
      </div>
    </div>
  );
}
