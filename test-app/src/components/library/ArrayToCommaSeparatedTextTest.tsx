import { lib } from "mukul-react-hooks";
import { useState } from "react";

export default function ArrayToCommaSeparatedTextTest() {
  const [inputArray, setInputArray] = useState<string>('["apple", "banana", "cherry", "date"]');
  const [customArray, setCustomArray] = useState<any[]>([]);

  const predefinedArrays = [
    { name: "Fruits", value: ["apple", "banana", "cherry", "date"] },
    { name: "Numbers", value: [1, 2, 3, 4, 5] },
    { name: "Mixed Types", value: ["text", 42, true, "hello"] },
    { name: "Empty Array", value: [] },
    { name: "Single Item", value: ["only-item"] },
    { name: "Countries", value: ["USA", "Canada", "UK", "Australia", "Germany"] },
    { name: "Boolean Values", value: [true, false, true, false] },
    { name: "Decimal Numbers", value: [3.14, 2.71, 1.41, 0.57] },
  ];

  const parseArrayInput = (input: string): any[] => {
    try {
      return JSON.parse(input);
    } catch {
      // If JSON parsing fails, try to split by comma
      return input.split(",").map((item) => item.trim().replace(/['"]/g, ""));
    }
  };

  const getCurrentArray = (): any[] => {
    if (customArray.length > 0) return customArray;
    return parseArrayInput(inputArray);
  };

  const result = lib.arrayToCommaSeparatedText(getCurrentArray());

  return (
    <div>
      <h1>arrayToCommaSeparatedText Function Test</h1>
      <p>
        This function converts an array to a comma-separated text string. It's useful for displaying
        lists, tags, or any array data in a readable format.
      </p>

      <div className="test-section">
        <h3>Current Result</h3>
        <div className="demo-output">
          <p>
            <strong>Input Array:</strong> {JSON.stringify(getCurrentArray())}
          </p>
          <p>
            <strong>Output String:</strong> "{result}"
          </p>
          <p>
            <strong>Type:</strong> {typeof result}
          </p>
        </div>
      </div>

      <div className="test-section">
        <h3>Custom Array Input</h3>
        <div className="form-group">
          <label htmlFor="arrayInput">Enter array as JSON or comma-separated values:</label>
          <textarea
            id="arrayInput"
            value={inputArray}
            onChange={(e) => {
              setInputArray(e.target.value);
              setCustomArray([]);
            }}
            placeholder='["item1", "item2", "item3"] or item1, item2, item3'
            rows={3}
          />
        </div>
      </div>

      <div className="test-section">
        <h3>Predefined Test Cases</h3>
        <div className="grid">
          {predefinedArrays.map((testCase, index) => {
            const testResult = lib.arrayToCommaSeparatedText(testCase.value);
            return (
              <div key={index} className="result-box">
                <h4>{testCase.name}</h4>
                <p>
                  <strong>Array:</strong> {JSON.stringify(testCase.value)}
                </p>
                <p>
                  <strong>Result:</strong> "{testResult}"
                </p>
                <button
                  className="demo-control"
                  onClick={() => setCustomArray(testCase.value)}
                  style={{ marginTop: "0.5rem" }}
                >
                  Use This Array
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <div className="test-section">
        <h3>Interactive Array Builder</h3>
        <div className="demo-controls">
          <button
            className="demo-control"
            onClick={() => setCustomArray((prev) => [...prev, `item-${prev.length + 1}`])}
          >
            Add String Item
          </button>
          <button
            className="demo-control"
            onClick={() => setCustomArray((prev) => [...prev, Math.floor(Math.random() * 100)])}
          >
            Add Random Number
          </button>
          <button
            className="demo-control"
            onClick={() => setCustomArray((prev) => [...prev, Math.random() > 0.5])}
          >
            Add Random Boolean
          </button>
          <button className="demo-control" onClick={() => setCustomArray([])}>
            Clear Array
          </button>
        </div>
      </div>

      <div className="test-section">
        <h3>Real-world Use Cases</h3>
        <div className="grid">
          <div className="result-box">
            <h4>🏷️ Display Tags</h4>
            <p>Convert tag arrays to readable strings for UI display.</p>
            <div className="demo-output">
              <p>
                Tags: {lib.arrayToCommaSeparatedText(["react", "typescript", "hooks", "library"])}
              </p>
            </div>
          </div>

          <div className="result-box">
            <h4>👥 User Lists</h4>
            <p>Show multiple users, authors, or contributors in a compact format.</p>
            <div className="demo-output">
              <p>
                Authors: {lib.arrayToCommaSeparatedText(["John Doe", "Jane Smith", "Bob Johnson"])}
              </p>
            </div>
          </div>

          <div className="result-box">
            <h4>🌍 Location Lists</h4>
            <p>Display multiple locations, cities, or countries.</p>
            <div className="demo-output">
              <p>
                Available in:{" "}
                {lib.arrayToCommaSeparatedText(["New York", "London", "Tokyo", "Sydney"])}
              </p>
            </div>
          </div>

          <div className="result-box">
            <h4>🔧 Feature Lists</h4>
            <p>Show product features or capabilities in a readable way.</p>
            <div className="demo-output">
              <p>
                Features:{" "}
                {lib.arrayToCommaSeparatedText(["Fast", "Secure", "Scalable", "User-friendly"])}
              </p>
            </div>
          </div>

          <div className="result-box">
            <h4>📱 Device Support</h4>
            <p>List supported platforms or devices.</p>
            <div className="demo-output">
              <p>
                Platforms: {lib.arrayToCommaSeparatedText(["iOS", "Android", "Web", "Desktop"])}
              </p>
            </div>
          </div>

          <div className="result-box">
            <h4>💳 Payment Methods</h4>
            <p>Display accepted payment options.</p>
            <div className="demo-output">
              <p>
                Payment:{" "}
                {lib.arrayToCommaSeparatedText(["Visa", "MasterCard", "PayPal", "Apple Pay"])}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="test-section">
        <h3>Edge Cases & Behavior</h3>
        <div className="grid">
          <div className="result-box">
            <h4>❌ Empty Array</h4>
            <p>Result: "{lib.arrayToCommaSeparatedText([])}"</p>
            <p>
              <em>Returns "N/A" for empty arrays</em>
            </p>
          </div>

          <div className="result-box">
            <h4>❌ Undefined/Null</h4>
            <p>Result: "{lib.arrayToCommaSeparatedText(undefined as any)}"</p>
            <p>
              <em>Safely handles undefined input</em>
            </p>
          </div>

          <div className="result-box">
            <h4>1️⃣ Single Item</h4>
            <p>Result: "{lib.arrayToCommaSeparatedText(["single"])}"</p>
            <p>
              <em>No comma for single items</em>
            </p>
          </div>

          <div className="result-box">
            <h4>🔢 Numbers</h4>
            <p>Result: "{lib.arrayToCommaSeparatedText([1, 2, 3, 4, 5])}"</p>
            <p>
              <em>Numbers are converted to strings</em>
            </p>
          </div>

          <div className="result-box">
            <h4>✅ Booleans</h4>
            <p>Result: "{lib.arrayToCommaSeparatedText([true, false, true])}"</p>
            <p>
              <em>Booleans become "true" and "false"</em>
            </p>
          </div>

          <div className="result-box">
            <h4>🏷️ Objects</h4>
            <p>Result: "{lib.arrayToCommaSeparatedText([{ id: 1 }, { name: "test" }])}"</p>
            <p>
              <em>Objects are stringified</em>
            </p>
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
            {`import { lib } from 'mukul-react-hooks';

const result = lib.arrayToCommaSeparatedText(array);`}
          </pre>

          <h4>Parameters</h4>
          <ul style={{ textAlign: "left", margin: "1rem 0" }}>
            <li>
              <strong>array</strong> (any[]): Array of items to convert to comma-separated text
            </li>
          </ul>

          <h4>Return Value</h4>
          <ul style={{ textAlign: "left", margin: "1rem 0" }}>
            <li>
              <strong>string</strong>: Comma-separated text or "N/A" for empty/invalid arrays
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
            {`// Basic usage
const tags = ['react', 'typescript', 'hooks'];
const tagString = lib.arrayToCommaSeparatedText(tags);
// Result: "react, typescript, hooks"

// In React components
const TagDisplay = ({ tags }) => (
  <div>Tags: {lib.arrayToCommaSeparatedText(tags)}</div>
);

// With mixed types
const mixedArray = ['text', 42, true, null];
const result = lib.arrayToCommaSeparatedText(mixedArray);
// Result: "text, 42, true, null"

// Error handling
const emptyResult = lib.arrayToCommaSeparatedText([]);
// Result: "N/A"

const nullResult = lib.arrayToCommaSeparatedText(null);
// Result: "N/A"`}
          </pre>
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
              <strong>Fallback Value:</strong> "N/A" for empty or invalid arrays
            </li>
            <li>
              <strong>Separator:</strong> ", " (comma + space)
            </li>
            <li>
              <strong>Type Conversion:</strong> All items are converted to strings
            </li>
            <li>
              <strong>Safety:</strong> Handles undefined/null inputs gracefully
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
