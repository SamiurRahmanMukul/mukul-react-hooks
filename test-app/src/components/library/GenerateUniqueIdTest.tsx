import { lib } from "mukul-react-hooks";
import { useState } from "react";

export default function GenerateUniqueIdTest() {
  const [generatedIds, setGeneratedIds] = useState<string[]>([]);
  const [batchSize, setBatchSize] = useState(10);
  const [duplicateCheck, setDuplicateCheck] = useState<{ total: number; duplicates: number }>({
    total: 0,
    duplicates: 0,
  });

  const generateSingleId = () => {
    const newId = lib.generateUniqueId();
    setGeneratedIds((prev) => [newId, ...prev].slice(0, 50)); // Keep last 50
  };

  const generateBatch = () => {
    const newIds = Array.from({ length: batchSize }, () => lib.generateUniqueId());
    setGeneratedIds((prev) => [...newIds, ...prev].slice(0, 100)); // Keep last 100
  };

  const checkForDuplicates = () => {
    // Generate a large batch to test for duplicates
    const testIds = Array.from({ length: 10000 }, () => lib.generateUniqueId());
    const uniqueIds = new Set(testIds);
    const duplicates = testIds.length - uniqueIds.size;

    setDuplicateCheck({
      total: testIds.length,
      duplicates: duplicates,
    });
  };

  const clearIds = () => {
    setGeneratedIds([]);
    setDuplicateCheck({ total: 0, duplicates: 0 });
  };

  const analyzeIdStructure = (id: string) => {
    return {
      length: id.length,
      hasNumbers: /\d/.test(id),
      hasLetters: /[a-zA-Z]/.test(id),
      hasUppercase: /[A-Z]/.test(id),
      hasLowercase: /[a-z]/.test(id),
      hasSpecialChars: /[^a-zA-Z0-9]/.test(id),
      firstChar: id[0],
      lastChar: id[id.length - 1],
    };
  };

  const useCaseExamples = [
    {
      title: "👤 User IDs",
      description: "Unique identifiers for user accounts and profiles",
      example: `user_${lib.generateUniqueId()}`,
      code: "const userId = `user_${lib.generateUniqueId()}`",
    },
    {
      title: "📄 Document IDs",
      description: "Unique identifiers for documents, files, or records",
      example: `doc_${lib.generateUniqueId()}`,
      code: "const docId = `doc_${lib.generateUniqueId()}`",
    },
    {
      title: "🎫 Session IDs",
      description: "Unique session identifiers for user sessions",
      example: `session_${lib.generateUniqueId()}`,
      code: "const sessionId = `session_${lib.generateUniqueId()}`",
    },
    {
      title: "🛒 Order IDs",
      description: "Unique identifiers for orders and transactions",
      example: `order_${lib.generateUniqueId()}`,
      code: "const orderId = `order_${lib.generateUniqueId()}`",
    },
    {
      title: "🔗 API Keys",
      description: "Unique API keys and tokens (combine with encryption)",
      example: `api_${lib.generateUniqueId()}`,
      code: "const apiKey = `api_${lib.generateUniqueId()}`",
    },
    {
      title: "🎮 Game Elements",
      description: "Unique IDs for game objects, players, or rooms",
      example: `game_${lib.generateUniqueId()}`,
      code: "const gameId = `game_${lib.generateUniqueId()}`",
    },
  ];

  const latestId = generatedIds[0];
  const analysis = latestId ? analyzeIdStructure(latestId) : null;

  return (
    <div>
      <h1>generateUniqueId Function Test</h1>
      <p>
        This function generates unique identifiers that can be used for various purposes like user
        IDs, session tokens, database keys, and more. It ensures uniqueness through randomness and
        timestamp-based generation.
      </p>

      <div className="test-section">
        <h3>Current Status</h3>
        <div className="demo-output">
          <p>
            <strong>Total Generated:</strong> {generatedIds.length}
          </p>
          <p>
            <strong>Latest ID:</strong> <code>{latestId || "None generated yet"}</code>
          </p>
          {analysis && (
            <div>
              <p>
                <strong>ID Analysis:</strong>
              </p>
              <ul style={{ textAlign: "left", fontSize: "0.875rem" }}>
                <li>Length: {analysis.length} characters</li>
                <li>Contains numbers: {analysis.hasNumbers ? "✅" : "❌"}</li>
                <li>Contains letters: {analysis.hasLetters ? "✅" : "❌"}</li>
                <li>Has uppercase: {analysis.hasUppercase ? "✅" : "❌"}</li>
                <li>Has lowercase: {analysis.hasLowercase ? "✅" : "❌"}</li>
                <li>Has special chars: {analysis.hasSpecialChars ? "✅" : "❌"}</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="test-section">
        <h3>ID Generation Controls</h3>
        <div className="demo-controls">
          <button className="demo-control" onClick={generateSingleId}>
            🎯 Generate Single ID
          </button>
          <button className="demo-control" onClick={generateBatch}>
            📊 Generate {batchSize} IDs
          </button>
          <button className="demo-control" onClick={checkForDuplicates}>
            🔍 Test 10,000 IDs for Duplicates
          </button>
          <button className="demo-control" onClick={clearIds}>
            🗑️ Clear All
          </button>
        </div>

        <div className="form-group" style={{ maxWidth: "200px", margin: "1rem auto" }}>
          <label htmlFor="batchSize">Batch Size:</label>
          <input
            id="batchSize"
            type="number"
            value={batchSize}
            onChange={(e) => setBatchSize(Number(e.target.value))}
            min="1"
            max="100"
          />
        </div>
      </div>

      {duplicateCheck.total > 0 && (
        <div className="test-section">
          <h3>Duplicate Check Results</h3>
          <div className="demo-output">
            <p>
              <strong>Total Generated:</strong> {duplicateCheck.total.toLocaleString()}
            </p>
            <p>
              <strong>Duplicates Found:</strong> {duplicateCheck.duplicates}
            </p>
            <p>
              <strong>Uniqueness Rate:</strong>{" "}
              <span
                className={`status-indicator ${
                  duplicateCheck.duplicates === 0 ? "active" : "inactive"
                }`}
              >
                {(
                  ((duplicateCheck.total - duplicateCheck.duplicates) / duplicateCheck.total) *
                  100
                ).toFixed(4)}
                %
              </span>
            </p>
          </div>
        </div>
      )}

      <div className="test-section">
        <h3>Real-world Use Cases</h3>
        <div className="grid">
          {useCaseExamples.map((useCase, index) => (
            <div key={index} className="result-box">
              <h4>{useCase.title}</h4>
              <p>{useCase.description}</p>
              <div className="demo-output">
                <p>
                  <strong>Example:</strong> <code>{useCase.example}</code>
                </p>
                <code style={{ fontSize: "0.75rem" }}>{useCase.code}</code>
              </div>
              <button
                className="demo-control"
                onClick={() => setGeneratedIds((prev) => [useCase.example, ...prev].slice(0, 50))}
                style={{ marginTop: "0.5rem" }}
              >
                Add to List
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="test-section">
        <h3>Generated IDs History</h3>
        <div className="demo-output">
          {generatedIds.length === 0 ? (
            <p>
              <em>No IDs generated yet. Click the buttons above to start!</em>
            </p>
          ) : (
            <div style={{ maxHeight: "300px", overflowY: "auto" }}>
              <p>
                <strong>Recent IDs (showing last {Math.min(generatedIds.length, 50)}):</strong>
              </p>
              {generatedIds.map((id, index) => (
                <div
                  key={index}
                  style={{
                    padding: "0.5rem",
                    margin: "0.25rem 0",
                    backgroundColor: index === 0 ? "#2a4a2a" : "#2a2a2a",
                    borderRadius: "4px",
                    fontSize: "0.875rem",
                    fontFamily: "monospace",
                    border: index === 0 ? "1px solid #10b981" : "none",
                  }}
                >
                  <strong>#{index + 1}:</strong> {id}
                  {index === 0 && (
                    <span style={{ color: "#10b981", marginLeft: "0.5rem" }}>← Latest</span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="test-section">
        <h3>Performance & Characteristics</h3>
        <div className="grid">
          <div className="result-box">
            <h4>⚡ Performance</h4>
            <p>Fast generation suitable for high-frequency use cases.</p>
            <p>
              <em>Can generate thousands of IDs per second.</em>
            </p>
          </div>

          <div className="result-box">
            <h4>🔒 Uniqueness</h4>
            <p>Extremely low probability of collisions in practical use.</p>
            <p>
              <em>Based on timestamp and random components.</em>
            </p>
          </div>

          <div className="result-box">
            <h4>📏 Length</h4>
            <p>Consistent length for database indexing and storage.</p>
            <p>
              <em>Predictable character count for UI design.</em>
            </p>
          </div>

          <div className="result-box">
            <h4>🌐 Cross-platform</h4>
            <p>Works consistently across different environments.</p>
            <p>
              <em>No dependency on specific browser APIs.</em>
            </p>
          </div>
        </div>
      </div>

      <div className="test-section">
        <h3>Integration Examples</h3>
        <div className="demo-output">
          <h4>Common Patterns:</h4>
          <pre style={{ textAlign: "left", fontSize: "0.875rem" }}>
            {`// React component keys
{items.map(item => (
  <Item key={lib.generateUniqueId()} data={item} />
))}

// Database records
const user = {
  id: lib.generateUniqueId(),
  name: 'John Doe',
  email: 'john@example.com'
}

// Temporary file names
const tempFile = \`temp_\${lib.generateUniqueId()}.json\`

// Event tracking
const eventId = lib.generateUniqueId()
analytics.track(eventId, 'user_action', data)`}
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
              <strong>Parameters:</strong> None required
            </li>
            <li>
              <strong>Algorithm:</strong> Combines timestamp and random elements
            </li>
            <li>
              <strong>Collision Probability:</strong> Extremely low for practical use
            </li>
            <li>
              <strong>Thread Safety:</strong> Safe for concurrent use
            </li>
            <li>
              <strong>Browser Support:</strong> All modern browsers
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
