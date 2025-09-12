import { lib } from "mukul-react-hooks";
import { useState } from "react";

export default function IsValidEmailTest() {
  const [email, setEmail] = useState("test@example.com");
  const [validationHistory, setValidationHistory] = useState<
    Array<{ email: string; isValid: boolean; timestamp: string }>
  >([]);

  const validateEmail = (emailToValidate: string = email) => {
    const isValid = lib.isValidEmail(emailToValidate);
    const validation = {
      email: emailToValidate,
      isValid,
      timestamp: new Date().toLocaleTimeString(),
    };
    setValidationHistory((prev) => [validation, ...prev].slice(0, 20));
    return isValid;
  };

  const testCases = [
    // Valid emails
    { email: "user@example.com", expected: true, category: "Valid - Basic" },
    { email: "test.email+tag@domain.co.uk", expected: true, category: "Valid - Complex" },
    { email: "user123@test-domain.org", expected: true, category: "Valid - Numbers & Hyphens" },
    { email: "firstname.lastname@company.travel", expected: true, category: "Valid - Long TLD" },
    { email: "user_name@domain123.co", expected: true, category: "Valid - Underscore" },

    // Invalid emails
    { email: "plainaddress", expected: false, category: "Invalid - No @ symbol" },
    { email: "@missinglocal.com", expected: false, category: "Invalid - Missing local part" },
    { email: "missing-domain@", expected: false, category: "Invalid - Missing domain" },
    { email: "spaces in@email.com", expected: false, category: "Invalid - Spaces" },
    { email: "user@", expected: false, category: "Invalid - Incomplete domain" },
    { email: "user@@domain.com", expected: false, category: "Invalid - Double @" },
    { email: ".user@domain.com", expected: false, category: "Invalid - Leading dot" },
    { email: "user.@domain.com", expected: false, category: "Invalid - Trailing dot" },
    { email: "user@domain", expected: false, category: "Invalid - No TLD" },
    { email: "", expected: false, category: "Invalid - Empty string" },
  ];

  const runAllTests = () => {
    testCases.forEach((testCase) => {
      validateEmail(testCase.email);
    });
  };

  const clearHistory = () => setValidationHistory([]);

  const currentResult = lib.isValidEmail(email);

  const realWorldExamples = [
    {
      title: "📝 Form Validation",
      description: "Validate email inputs in registration and contact forms",
      code: `const isValid = lib.isValidEmail(userInput)
if (!isValid) {
  setError('Please enter a valid email address')
}`,
    },
    {
      title: "🔐 User Authentication",
      description: "Ensure email format is correct before authentication attempts",
      code: `if (lib.isValidEmail(email)) {
  await signIn(email, password)
} else {
  showError('Invalid email format')
}`,
    },
    {
      title: "📧 Email Marketing",
      description: "Validate email addresses before adding to mailing lists",
      code: `const validEmails = subscribers.filter(email => 
  lib.isValidEmail(email)
)`,
    },
    {
      title: "💾 Data Import",
      description: "Clean and validate email data during import processes",
      code: `const cleanData = csvData.map(row => ({
  ...row,
  isValidEmail: lib.isValidEmail(row.email)
}))`,
    },
  ];

  return (
    <div>
      <h1>isValidEmail Function Test</h1>
      <p>
        This function validates email addresses using a robust regular expression. It's essential
        for form validation, user registration, and data quality assurance.
      </p>

      <div className="test-section">
        <h3>Email Validation Tester</h3>
        <div className="form-group">
          <label htmlFor="email">Enter an email address to validate:</label>
          <input
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="user@example.com"
            style={{
              borderColor: email ? (currentResult ? "#10b981" : "#ef4444") : "#555",
            }}
          />
        </div>

        <div className="demo-output">
          <p>
            <strong>Email:</strong> {email || "<empty>"}
          </p>
          <p>
            <strong>Is Valid:</strong>{" "}
            <span className={`status-indicator ${currentResult ? "active" : "inactive"}`}>
              {currentResult ? "✅ VALID" : "❌ INVALID"}
            </span>
          </p>
        </div>

        <div className="demo-controls">
          <button className="demo-control" onClick={() => validateEmail()}>
            🔍 Add to History
          </button>
          <button className="demo-control" onClick={() => setEmail("")}>
            🗑️ Clear Input
          </button>
        </div>
      </div>

      <div className="test-section">
        <h3>Comprehensive Test Suite</h3>
        <div className="demo-controls">
          <button className="demo-control" onClick={runAllTests}>
            🧪 Run All Test Cases
          </button>
          <button className="demo-control" onClick={clearHistory}>
            🗑️ Clear History
          </button>
        </div>

        <div className="grid">
          {testCases.map((testCase, index) => {
            const actualResult = lib.isValidEmail(testCase.email);
            const isCorrect = actualResult === testCase.expected;

            return (
              <div key={index} className="result-box">
                <h4>{testCase.category}</h4>
                <p>
                  <strong>Email:</strong> <code>{testCase.email || "<empty>"}</code>
                </p>
                <p>
                  <strong>Expected:</strong> {testCase.expected ? "✅ Valid" : "❌ Invalid"}
                </p>
                <p>
                  <strong>Actual:</strong> {actualResult ? "✅ Valid" : "❌ Invalid"}
                </p>
                <p>
                  <strong>Result:</strong>{" "}
                  <span className={`status-indicator ${isCorrect ? "active" : "inactive"}`}>
                    {isCorrect ? "✅ PASS" : "❌ FAIL"}
                  </span>
                </p>
                <button
                  className="demo-control"
                  onClick={() => setEmail(testCase.email)}
                  style={{ marginTop: "0.5rem" }}
                >
                  Test This Email
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <div className="test-section">
        <h3>Validation History</h3>
        <div className="demo-output">
          {validationHistory.length === 0 ? (
            <p>
              <em>No validations performed yet. Try testing some emails above!</em>
            </p>
          ) : (
            <div style={{ maxHeight: "300px", overflowY: "auto" }}>
              <p>
                <strong>Recent Validations:</strong>
              </p>
              {validationHistory.map((validation, index) => (
                <div
                  key={index}
                  style={{
                    padding: "0.5rem",
                    margin: "0.25rem 0",
                    backgroundColor: validation.isValid ? "#2a4a2a" : "#4a2a2a",
                    borderRadius: "4px",
                    fontSize: "0.875rem",
                    border: `1px solid ${validation.isValid ? "#10b981" : "#ef4444"}`,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <code>{validation.email || "<empty>"}</code>
                    <span
                      className={`status-indicator ${validation.isValid ? "active" : "inactive"}`}
                    >
                      {validation.isValid ? "VALID" : "INVALID"}
                    </span>
                  </div>
                  <small style={{ color: "#888" }}>{validation.timestamp}</small>
                </div>
              ))}
            </div>
          )}
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

const isValid = lib.isValidEmail(email);`}
          </pre>

          <h4>Parameters</h4>
          <ul style={{ textAlign: "left", margin: "1rem 0" }}>
            <li>
              <strong>email</strong> (string): Email address string to validate
            </li>
          </ul>

          <h4>Return Value</h4>
          <ul style={{ textAlign: "left", margin: "1rem 0" }}>
            <li>
              <strong>boolean</strong>: True if email format is valid, false otherwise
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
            {`// Form validation
const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!lib.isValidEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    // Process valid email
    submitForm({ email });
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={!lib.isValidEmail(email) && email ? 'error' : ''}
      />
      {error && <span className="error">{error}</span>}
      <button type="submit">Submit</button>
    </form>
  );
};

// Real-time validation
const EmailInput = () => {
  const [email, setEmail] = useState('');
  const isValid = lib.isValidEmail(email);
  
  return (
    <div>
      <input 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email address"
      />
      {email && (
        <span className={isValid ? 'valid' : 'invalid'}>
          {isValid ? '✓ Valid email' : '✗ Invalid email format'}
        </span>
      )}
    </div>
  );
};

// Bulk email validation
const validateEmailList = (emails) => {
  return emails.map(email => ({
    email,
    isValid: lib.isValidEmail(email)
  }));
};

// Filter valid emails
const getValidEmails = (emailList) => {
  return emailList.filter(email => lib.isValidEmail(email));
};`}
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
        <h3>Email Format Rules</h3>
        <div className="demo-output">
          <p>
            <strong>This validator checks for:</strong>
          </p>
          <ul style={{ textAlign: "left", margin: "1rem 0" }}>
            <li>✅ Presence of exactly one @ symbol</li>
            <li>✅ Non-empty local part (before @)</li>
            <li>✅ Non-empty domain part (after @)</li>
            <li>✅ At least one dot in the domain part</li>
            <li>✅ No spaces in the email address</li>
            <li>✅ Valid characters in local and domain parts</li>
          </ul>

          <p>
            <strong>Regular Expression Used:</strong>
          </p>
          <code style={{ fontSize: "0.875rem", wordBreak: "break-all" }}>
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/
          </code>

          <p style={{ marginTop: "1rem" }}>
            <strong>Note:</strong> This is a basic validation for most common use cases. For
            production applications, consider additional server-side validation and email
            verification.
          </p>
        </div>
      </div>

      <div className="test-section">
        <h3>Quick Test Buttons</h3>
        <div className="demo-controls">
          <button className="demo-control" onClick={() => setEmail("user@example.com")}>
            ✅ Valid Example
          </button>
          <button className="demo-control" onClick={() => setEmail("invalid.email")}>
            ❌ Invalid Example
          </button>
          <button className="demo-control" onClick={() => setEmail("test.email+tag@domain.co.uk")}>
            ✅ Complex Valid
          </button>
          <button className="demo-control" onClick={() => setEmail("user@@domain.com")}>
            ❌ Double @ Error
          </button>
          <button className="demo-control" onClick={() => setEmail("")}>
            ❌ Empty String
          </button>
        </div>
      </div>

      <div className="test-section">
        <h3>Function Details</h3>
        <div className="demo-output">
          <ul style={{ textAlign: "left" }}>
            <li>
              <strong>Return Type:</strong> boolean
            </li>
            <li>
              <strong>Parameter:</strong> email (string)
            </li>
            <li>
              <strong>Performance:</strong> Very fast regex-based validation
            </li>
            <li>
              <strong>Browser Support:</strong> All browsers with regex support
            </li>
            <li>
              <strong>Case Sensitivity:</strong> Case-insensitive (standard email behavior)
            </li>
            <li>
              <strong>International Support:</strong> Basic ASCII character validation
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
