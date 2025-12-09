import { lib } from "mukul-react-hooks";
import { useState } from "react";

export default function IsEmptyObjectTest() {
  const [jsonInput, setJsonInput] = useState("{}");
  const [testObjects] = useState([
    { name: "Empty Object", obj: {}, expected: true },
    { name: "Object with Property", obj: { name: "test" }, expected: false },
    { name: "Null", obj: null, expected: true },
    { name: "Undefined", obj: undefined, expected: true },
    { name: "Array", obj: [], expected: false },
    { name: "Non-empty Array", obj: [1, 2, 3], expected: false },
  ]);

  const parseInput = () => {
    try {
      return JSON.parse(jsonInput);
    } catch {
      return jsonInput;
    }
  };

  const currentObject = parseInput();
  const result = lib.isEmptyObject(currentObject);

  return (
    <div>
      <h1>isEmptyObject Function Test</h1>
      <p>
        This function checks whether an object is empty (has no properties) or is null/undefined.
        It's useful for validation, conditional rendering, and data processing.
      </p>

      <div className="test-section">
        <h3>Object Tester</h3>
        <div className="form-group">
          <label htmlFor="jsonInput">Enter JSON object:</label>
          <textarea
            id="jsonInput"
            value={jsonInput}
            onChange={(e) => setJsonInput(e.target.value)}
            placeholder='{"key": "value"}'
            rows={3}
          />
        </div>

        <div className="demo-output">
          <p>
            <strong>Object:</strong> {JSON.stringify(currentObject)}
          </p>
          <p>
            <strong>Is Empty:</strong>{" "}
            <span className={`status-indicator ${result ? "active" : "inactive"}`}>
              {result ? "YES" : "NO"}
            </span>
          </p>
        </div>
      </div>

      <div className="test-section">
        <h3>Test Cases</h3>
        <div className="grid">
          {testObjects.map((test) => {
            const testResult = lib.isEmptyObject(test.obj as any);
            const isCorrect = testResult === test.expected;

            return (
              <div key={test.name} className="result-box">
                <h4>{test.name}</h4>
                <p>
                  <strong>Object:</strong> {JSON.stringify(test.obj)}
                </p>
                <p>
                  <strong>Expected:</strong> {test.expected ? "Empty" : "Not Empty"}
                </p>
                <p>
                  <strong>Result:</strong> {testResult ? "Empty" : "Not Empty"}
                </p>
                <p>
                  <span className={`status-indicator ${isCorrect ? "active" : "inactive"}`}>
                    {isCorrect ? "PASS" : "FAIL"}
                  </span>
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="test-section">
        <h3>Real-world Use Cases</h3>
        <div className="grid">
          <div className="result-box">
            <h4>📝 Form Validation</h4>
            <p>Check if form data is empty before submission</p>
            <code style={{ fontSize: "0.75rem" }}>if (lib.isEmptyObject(formData)) return</code>
          </div>
          <div className="result-box">
            <h4>🎨 Conditional Rendering</h4>
            <p>Show different UI based on data availability</p>
            <code style={{ fontSize: "0.75rem" }}>
              {"{!lib.isEmptyObject(data) && <DataView />}"}
            </code>
          </div>
          <div className="result-box">
            <h4>📊 Data Processing</h4>
            <p>Filter out empty objects from arrays</p>
            <code style={{ fontSize: "0.75rem" }}>
              {`data.filter(item => !lib.isEmptyObject(item))`}
            </code>
          </div>
        </div>
      </div>
    </div>
  );
}
