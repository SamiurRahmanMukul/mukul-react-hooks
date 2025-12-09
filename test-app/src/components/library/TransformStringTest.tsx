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
          <label htmlFor="inputString">Input String:</label>
          <input
            id="inputString"
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

const transformed = lib.transformString(inputString);`}
          </pre>

          <h4>Parameters</h4>
          <ul style={{ textAlign: "left", margin: "1rem 0" }}>
            <li>
              <strong>inputString</strong> (string): String to transform
            </li>
          </ul>

          <h4>Return Value</h4>
          <ul style={{ textAlign: "left", margin: "1rem 0" }}>
            <li>
              <strong>string</strong>: Transformed string with spaces replaced by underscores and
              converted to lowercase
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
            {`// URL slug generation
const createSlug = (title) => {
  return lib.transformString(title);
  // "My Blog Post" -> "my_blog_post"
};

// File naming
const generateFileName = (userInput) => {
  const safeName = lib.transformString(userInput);
  return \`\${safeName}.txt\`;
  // "My Document" -> "my_document.txt"
};

// CSS class names
const generateClassName = (componentName) => {
  return \`component-\${lib.transformString(componentName)}\`;
  // "User Profile" -> "component-user_profile"
};

// Database field names
const createFieldName = (label) => {
  return lib.transformString(label);
  // "First Name" -> "first_name"
};

// API endpoint generation
const createEndpoint = (resourceName) => {
  return \`/api/\${lib.transformString(resourceName)}\`;
  // "User Settings" -> "/api/user_settings"
};

// Form field IDs
const generateFieldId = (fieldLabel) => {
  return \`field_\${lib.transformString(fieldLabel)}\`;
  // "Email Address" -> "field_email_address"
};`}
          </pre>
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
