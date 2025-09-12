import { lib } from "mukul-react-hooks";
import { useState } from "react";

export default function NumberFormatWithCommasTest() {
  const [inputNumber, setInputNumber] = useState("1234567.89");
  const [formatHistory, setFormatHistory] = useState<
    Array<{ input: string; output: string; timestamp: string }>
  >([]);

  const formatNumber = (numberToFormat: string = inputNumber) => {
    const output = lib.numberFormatWithCommas(Number(numberToFormat));
    const format = {
      input: numberToFormat,
      output,
      timestamp: new Date().toLocaleTimeString(),
    };
    setFormatHistory((prev) => [format, ...prev].slice(0, 20));
    return output;
  };

  const testCases = [
    { input: 1000, description: "Thousand", category: "Basic" },
    { input: 1234567, description: "Million", category: "Large Numbers" },
    { input: 1234567.89, description: "Decimal", category: "Decimals" },
    { input: 0, description: "Zero", category: "Edge Cases" },
    { input: -1234567, description: "Negative", category: "Negative Numbers" },
    { input: 1234567890123, description: "Trillion", category: "Very Large" },
    { input: 0.123456, description: "Small Decimal", category: "Small Numbers" },
    { input: -0.99, description: "Negative Decimal", category: "Negative Decimals" },
    { input: 999, description: "No Commas Needed", category: "Small Numbers" },
    { input: 1000.001, description: "Precise Decimal", category: "Precision" },
  ];

  const quickNumbers = [1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000];

  const currentResult = lib.numberFormatWithCommas(Number(inputNumber));

  const clearHistory = () => setFormatHistory([]);

  const realWorldExamples = [
    {
      title: "💰 Currency Display",
      description: "Format currency amounts for better readability",
      code: `const price = lib.numberFormatWithCommas(1234567.99)
// Result: "1,234,567.99"
return <span>$&#123;price&#125;</span>`,
    },
    {
      title: "📊 Statistics",
      description: "Display large statistical numbers in dashboards",
      code: `const visitors = lib.numberFormatWithCommas(2543891)
// Result: "2,543,891"
return <div>Total Visitors: &#123;visitors&#125;</div>`,
    },
    {
      title: "🏠 Real Estate",
      description: "Format property prices and measurements",
      code: `const price = lib.numberFormatWithCommas(875000)
// Result: "875,000"
return <span>$&#123;price&#125;</span>`,
    },
    {
      title: "📈 Financial Data",
      description: "Display stock prices, market caps, and financial metrics",
      code: `const marketCap = lib.numberFormatWithCommas(45600000000)
// Result: "45,600,000,000"
return <span>Market Cap: $&#123;marketCap&#125;</span>`,
    },
  ];

  return (
    <div>
      <h1>numberFormatWithCommas Function Test</h1>
      <p>
        This function formats numbers with commas as thousands separators for improved readability.
        It's essential for displaying currency, statistics, and any large numbers in user
        interfaces.
      </p>

      <div className="test-section">
        <h3>Number Formatter</h3>
        <div className="form-group">
          <label htmlFor="inputNumber">Enter a number to format:</label>
          <input
            id="inputNumber"
            type="text"
            value={inputNumber}
            onChange={(e) => setInputNumber(e.target.value)}
            placeholder="1234567.89"
          />
        </div>

        <div className="demo-output">
          <p>
            <strong>Input:</strong> {inputNumber || "<empty>"}
          </p>
          <p>
            <strong>Formatted:</strong>{" "}
            <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#10b981" }}>
              {currentResult}
            </span>
          </p>
          <p>
            <strong>Type:</strong> {typeof currentResult}
          </p>
        </div>

        <div className="demo-controls">
          <button className="demo-control" onClick={() => formatNumber()}>
            📊 Add to History
          </button>
          <button className="demo-control" onClick={() => setInputNumber("")}>
            🗑️ Clear Input
          </button>
        </div>
      </div>

      <div className="test-section">
        <h3>Quick Number Tests</h3>
        <div className="grid">
          {quickNumbers.map((num, index) => {
            const formatted = lib.numberFormatWithCommas(num);
            return (
              <div key={index} className="result-box">
                <h4>{num.toLocaleString()}</h4>
                <p>
                  <strong>Input:</strong> {num}
                </p>
                <p>
                  <strong>Formatted:</strong> {formatted}
                </p>
                <button
                  className="demo-control"
                  onClick={() => setInputNumber(num.toString())}
                  style={{ marginTop: "0.5rem" }}
                >
                  Use This Number
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <div className="test-section">
        <h3>Comprehensive Test Cases</h3>
        <div className="demo-controls">
          <button
            className="demo-control"
            onClick={() => testCases.forEach((test) => formatNumber(test.input.toString()))}
          >
            🧪 Run All Tests
          </button>
          <button className="demo-control" onClick={clearHistory}>
            🗑️ Clear History
          </button>
        </div>

        <div className="grid">
          {testCases.map((testCase, index) => {
            const result = lib.numberFormatWithCommas(testCase.input);
            return (
              <div key={index} className="result-box">
                <h4>{testCase.description}</h4>
                <p>
                  <strong>Category:</strong> {testCase.category}
                </p>
                <p>
                  <strong>Input:</strong> {testCase.input}
                </p>
                <p>
                  <strong>Output:</strong> <code>{result}</code>
                </p>
                <button
                  className="demo-control"
                  onClick={() => setInputNumber(testCase.input.toString())}
                  style={{ marginTop: "0.5rem" }}
                >
                  Test This
                </button>
              </div>
            );
          })}
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

const formatted = lib.numberFormatWithCommas(number);`}
          </pre>

          <h4>Parameters</h4>
          <ul style={{ textAlign: "left", margin: "1rem 0" }}>
            <li>
              <strong>x</strong> (string | number): Number to format with comma separators
            </li>
          </ul>

          <h4>Return Value</h4>
          <ul style={{ textAlign: "left", margin: "1rem 0" }}>
            <li>
              <strong>string</strong>: Formatted number string with commas as thousands separators
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
            {`// Basic number formatting
const price = 1234567.89;
const formatted = lib.numberFormatWithCommas(price);
// Result: "1,234,567.89"

// In React components
const PriceDisplay = ({ amount }) => (
  <span className="price">
    $&#123;lib.numberFormatWithCommas(amount)&#125;
  </span>
);

// Statistics display
const StatsCard = ({ label, value }) => (
  <div className="stat">
    <h3>&#123;lib.numberFormatWithCommas(value)&#125;</h3>
    <p>&#123;label&#125;</p>
  </div>
);

// Handle string inputs
const userInput = "9876543";
const result = lib.numberFormatWithCommas(userInput);
// Result: "9,876,543"

// Large numbers
const views = 1000000;
const formattedViews = lib.numberFormatWithCommas(views);
// Result: "1,000,000"`}
          </pre>
        </div>
      </div>

      <div className="test-section">
        <h3>Real-world Use Cases</h3>
        <div className="grid">
          {realWorldExamples.map((example, index) => (
            <div key={index} className="result-box">
              <h4>{example.title}</h4>
              <p>{example.description}</p>
              <pre
                style={{
                  fontSize: "0.75rem",
                  backgroundColor: "#2a2a2a",
                  padding: "0.5rem",
                  borderRadius: "4px",
                  textAlign: "left",
                  overflow: "auto",
                }}
              >
                {example.code}
              </pre>
            </div>
          ))}
        </div>
      </div>

      <div className="test-section">
        <h3>Format History</h3>
        <div className="demo-output">
          {formatHistory.length === 0 ? (
            <p>
              <em>No numbers formatted yet. Try formatting some numbers above!</em>
            </p>
          ) : (
            <div style={{ maxHeight: "300px", overflowY: "auto" }}>
              <p>
                <strong>Recent Formatting Operations:</strong>
              </p>
              {formatHistory.map((format, index) => (
                <div
                  key={index}
                  style={{
                    padding: "0.5rem",
                    margin: "0.25rem 0",
                    backgroundColor: "#2a2a2a",
                    borderRadius: "4px",
                    fontSize: "0.875rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <strong>{format.input}</strong> →{" "}
                    <span style={{ color: "#10b981" }}>{format.output}</span>
                  </div>
                  <small style={{ color: "#888" }}>{format.timestamp}</small>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="test-section">
        <h3>Interactive Examples</h3>
        <div className="grid">
          <div className="result-box">
            <h4>💰 Price Display</h4>
            <div
              style={{
                padding: "1rem",
                backgroundColor: "#2a4a2a",
                borderRadius: "4px",
                border: "1px solid #10b981",
              }}
            >
              <div style={{ fontSize: "0.875rem", color: "#888" }}>Product Price</div>
              <div style={{ fontSize: "2rem", fontWeight: "bold", color: "#10b981" }}>
                ${lib.numberFormatWithCommas(Number(inputNumber) || 0)}
              </div>
            </div>
          </div>

          <div className="result-box">
            <h4>📊 Statistics Card</h4>
            <div
              style={{
                padding: "1rem",
                backgroundColor: "#2a3a4a",
                borderRadius: "4px",
                border: "1px solid #646cff",
              }}
            >
              <div style={{ fontSize: "0.875rem", color: "#888" }}>Total Views</div>
              <div style={{ fontSize: "2rem", fontWeight: "bold", color: "#646cff" }}>
                {lib.numberFormatWithCommas(Number(inputNumber) || 0)}
              </div>
            </div>
          </div>

          <div className="result-box">
            <h4>🏠 Real Estate</h4>
            <div
              style={{
                padding: "1rem",
                backgroundColor: "#4a2a3a",
                borderRadius: "4px",
                border: "1px solid #f59e0b",
              }}
            >
              <div style={{ fontSize: "0.875rem", color: "#888" }}>Property Value</div>
              <div style={{ fontSize: "2rem", fontWeight: "bold", color: "#f59e0b" }}>
                ${lib.numberFormatWithCommas(Number(inputNumber) || 0)}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="test-section">
        <h3>Comparison with Native Methods</h3>
        <div className="demo-output">
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #555" }}>
                <th style={{ padding: "0.5rem", textAlign: "left" }}>Method</th>
                <th style={{ padding: "0.5rem", textAlign: "left" }}>Result</th>
                <th style={{ padding: "0.5rem", textAlign: "left" }}>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "0.5rem" }}>lib.numberFormatWithCommas</td>
                <td style={{ padding: "0.5rem", fontFamily: "monospace" }}>{currentResult}</td>
                <td style={{ padding: "0.5rem" }}>Custom implementation</td>
              </tr>
              <tr>
                <td style={{ padding: "0.5rem" }}>Number.toLocaleString()</td>
                <td style={{ padding: "0.5rem", fontFamily: "monospace" }}>
                  {Number(inputNumber || 0).toLocaleString()}
                </td>
                <td style={{ padding: "0.5rem" }}>Native browser method</td>
              </tr>
              <tr>
                <td style={{ padding: "0.5rem" }}>Intl.NumberFormat</td>
                <td style={{ padding: "0.5rem", fontFamily: "monospace" }}>
                  {new Intl.NumberFormat().format(Number(inputNumber || 0))}
                </td>
                <td style={{ padding: "0.5rem" }}>Internationalization API</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="test-section">
        <h3>Function Details</h3>
        <div className="demo-output">
          <ul style={{ textAlign: "left" }}>
            <li>
              <strong>Return Type:</strong> string
            </li>
            <li>
              <strong>Parameter:</strong> number (required)
            </li>
            <li>
              <strong>Separator:</strong> Comma (,) for thousands
            </li>
            <li>
              <strong>Decimal Support:</strong> Preserves decimal places
            </li>
            <li>
              <strong>Negative Numbers:</strong> Maintains negative sign
            </li>
            <li>
              <strong>Performance:</strong> Fast string manipulation approach
            </li>
            <li>
              <strong>Browser Support:</strong> All browsers with basic JavaScript support
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
