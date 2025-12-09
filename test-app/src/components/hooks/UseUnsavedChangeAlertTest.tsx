import { useUnsavedChangeAlert } from "mukul-react-hooks";
import { useState } from "react";

export default function UseUnsavedChangeAlertTest() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    preferences: {
      newsletter: false,
      notifications: false,
    },
  });

  const [originalData] = useState(formData);
  const [isSaved, setIsSaved] = useState(true);
  const [saveCount, setSaveCount] = useState(0);

  // Check if there are unsaved changes
  const hasUnsavedChanges = !isSaved && JSON.stringify(formData) !== JSON.stringify(originalData);

  // This hook will show browser alert when trying to leave with unsaved changes
  useUnsavedChangeAlert(hasUnsavedChanges);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => {
      if (field.includes(".")) {
        const [parent, child] = field.split(".");
        return {
          ...prev,
          [parent]: {
            ...(prev[parent as keyof typeof prev] as any),
            [child]: value,
          },
        };
      }
      return {
        ...prev,
        [field]: value,
      };
    });
    setIsSaved(false);
  };

  const handleSave = () => {
    // Simulate save operation
    setTimeout(() => {
      setIsSaved(true);
      setSaveCount((prev) => prev + 1);
    }, 500);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
      preferences: {
        newsletter: false,
        notifications: false,
      },
    });
    setIsSaved(true);
  };

  const handleLoadSample = () => {
    setFormData({
      name: "John Doe",
      email: "john.doe@example.com",
      message: "This is a sample message to test the unsaved changes alert.",
      preferences: {
        newsletter: true,
        notifications: false,
      },
    });
    setIsSaved(false);
  };

  return (
    <div>
      <h1>useUnsavedChangeAlert Hook Test</h1>
      <p>
        This hook displays a browser confirmation dialog when users try to leave the page with
        unsaved changes. It's essential for forms and editors to prevent data loss.
      </p>

      <div className="test-section">
        <h3>Current State</h3>
        <div className="demo-output">
          <p>
            Unsaved Changes:{" "}
            <span className={`status-indicator ${hasUnsavedChanges ? "active" : "inactive"}`}>
              {hasUnsavedChanges ? "YES - ALERT ACTIVE" : "NO - ALERT INACTIVE"}
            </span>
          </p>
          <p>
            Form Saved:{" "}
            <span className={`status-indicator ${isSaved ? "active" : "inactive"}`}>
              {isSaved ? "YES" : "NO"}
            </span>
          </p>
          <p>
            <strong>Save Count:</strong> {saveCount}
          </p>
        </div>
      </div>

      <div className="test-section">
        <h3>Interactive Form Demo</h3>
        <p>
          <strong>Instructions:</strong> Make changes to the form below, then try to:
        </p>
        <ul style={{ textAlign: "left", margin: "1rem 0" }}>
          <li>Refresh the page (F5 or Ctrl+R)</li>
          <li>Close the browser tab</li>
          <li>Navigate to another website</li>
          <li>Use browser back/forward buttons</li>
        </ul>

        <div style={{ textAlign: "left", maxWidth: "600px", margin: "0 auto" }}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              placeholder="Enter your message"
              rows={4}
            />
          </div>

          <div className="form-group">
            <label>
              <input
                type="checkbox"
                checked={formData.preferences.newsletter}
                onChange={(e) => handleInputChange("preferences.newsletter", e.target.checked)}
                style={{ marginRight: "0.5rem" }}
              />
              <span>Subscribe to newsletter</span>
            </label>
          </div>

          <div className="form-group">
            <label>
              <input
                type="checkbox"
                checked={formData.preferences.notifications}
                onChange={(e) => handleInputChange("preferences.notifications", e.target.checked)}
                style={{ marginRight: "0.5rem" }}
              />
              <span>Enable notifications</span>
            </label>
          </div>
        </div>

        <div className="demo-controls">
          <button
            className="demo-control"
            onClick={handleSave}
            disabled={isSaved}
            style={{ backgroundColor: isSaved ? "#555" : "#10b981" }}
          >
            💾 Save Form
          </button>
          <button className="demo-control" onClick={handleReset}>
            🔄 Reset Form
          </button>
          <button className="demo-control" onClick={handleLoadSample}>
            📝 Load Sample Data
          </button>
        </div>
      </div>

      <div className="test-section">
        <h3>Testing Scenarios</h3>
        <div className="grid">
          <div className="result-box">
            <h4>✅ Safe Navigation</h4>
            <p>When form is saved, no alert appears on page leave.</p>
            <p>
              <em>Save the form and try navigating away - no interruption!</em>
            </p>
          </div>

          <div className="result-box">
            <h4>⚠️ Unsaved Changes Alert</h4>
            <p>When form has changes, browser shows confirmation dialog.</p>
            <p>
              <em>Make changes and try to refresh or close tab!</em>
            </p>
          </div>

          <div className="result-box">
            <h4>🔄 Dynamic Detection</h4>
            <p>Alert status updates immediately when changes are made or saved.</p>
            <p>
              <em>Watch the status indicators change as you edit!</em>
            </p>
          </div>

          <div className="result-box">
            <h4>🎯 Data Comparison</h4>
            <p>Compares current form state with original/saved state.</p>
            <p>
              <em>Even after typing and deleting, it detects no real changes!</em>
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
            {`import { useUnsavedChangeAlert } from 'mukul-react-hooks';

useUnsavedChangeAlert(hasUnsavedChanges);`}
          </pre>

          <h4>Parameters</h4>
          <ul style={{ textAlign: "left", margin: "1rem 0" }}>
            <li>
              <strong>hasUnsavedChanges</strong> (boolean): Whether there are unsaved changes to
              protect
            </li>
          </ul>

          <h4>Return Value</h4>
          <ul style={{ textAlign: "left", margin: "1rem 0" }}>
            <li>
              <strong>void</strong>: This hook doesn't return anything, it manages the beforeunload
              event
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
            {`// Form protection
const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [originalData] = useState(formData);
  const [isSaved, setIsSaved] = useState(true);
  
  const hasChanges = !isSaved && JSON.stringify(formData) !== JSON.stringify(originalData);
  useUnsavedChangeAlert(hasChanges);
  
  return (
    <form>
      <input 
        value={formData.name}
        onChange={(e) => {
          setFormData(prev => ({ ...prev, name: e.target.value }));
          setIsSaved(false);
        }}
      />
      <button onClick={() => setIsSaved(true)}>Save</button>
    </form>
  );
};

// Editor protection
const TextEditor = () => {
  const [content, setContent] = useState('');
  const [lastSaved, setLastSaved] = useState('');
  
  const hasUnsavedChanges = content !== lastSaved;
  useUnsavedChangeAlert(hasUnsavedChanges);
  
  return (
    <textarea 
      value={content}
      onChange={(e) => setContent(e.target.value)}
    />
  );
};

// Settings page protection
const SettingsPage = () => {
  const [settings, setSettings] = useState(initialSettings);
  const [isDirty, setIsDirty] = useState(false);
  
  useUnsavedChangeAlert(isDirty);
  
  const handleSettingChange = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
    setIsDirty(true);
  };
  
  return <div>Settings form...</div>;
};`}
          </pre>
        </div>
      </div>

      <div className="test-section">
        <h3>Real-world Use Cases</h3>
        <div className="grid">
          <div className="result-box">
            <h4>📝 Form Protection</h4>
            <p>Protect user input in contact forms, surveys, and registration forms.</p>
            <code style={{ fontSize: "0.75rem" }}>useUnsavedChangeAlert(formIsDirty)</code>
          </div>

          <div className="result-box">
            <h4>✏️ Content Editors</h4>
            <p>Prevent data loss in blog editors, document editors, and CMS interfaces.</p>
            <code style={{ fontSize: "0.75rem" }}>useUnsavedChangeAlert(hasUnsavedEdits)</code>
          </div>

          <div className="result-box">
            <h4>⚙️ Settings Pages</h4>
            <p>Warn users when leaving configuration pages with unsaved settings.</p>
            <code style={{ fontSize: "0.75rem" }}>useUnsavedChangeAlert(settingsChanged)</code>
          </div>

          <div className="result-box">
            <h4>🛒 E-commerce</h4>
            <p>Protect shopping cart changes and checkout form data.</p>
            <code style={{ fontSize: "0.75rem" }}>useUnsavedChangeAlert(cartModified)</code>
          </div>

          <div className="result-box">
            <h4>🎨 Creative Tools</h4>
            <p>Protect work in drawing apps, design tools, and creative software.</p>
            <code style={{ fontSize: "0.75rem" }}>useUnsavedChangeAlert(projectModified)</code>
          </div>

          <div className="result-box">
            <h4>📊 Data Entry</h4>
            <p>Prevent loss in financial forms, inventory systems, and databases.</p>
            <code style={{ fontSize: "0.75rem" }}>useUnsavedChangeAlert(dataModified)</code>
          </div>
        </div>
      </div>

      <div className="test-section">
        <h3>Current Form Data (JSON)</h3>
        <div className="demo-output">
          <pre
            style={{
              textAlign: "left",
              fontSize: "0.75rem",
              overflow: "auto",
              backgroundColor: "#2a2a2a",
              padding: "1rem",
              borderRadius: "4px",
            }}
          >
            {JSON.stringify(formData, null, 2)}
          </pre>
        </div>
      </div>

      <div className="test-section">
        <h3>Hook Implementation Details</h3>
        <div className="demo-output">
          <ul style={{ textAlign: "left" }}>
            <li>
              <strong>Browser API:</strong> Uses the standard 'beforeunload' event
            </li>
            <li>
              <strong>Cross-browser:</strong> Works in all modern browsers
            </li>
            <li>
              <strong>Automatic Cleanup:</strong> Removes event listeners on unmount
            </li>
            <li>
              <strong>Conditional:</strong> Only shows alert when hasUnsavedChanges is true
            </li>
            <li>
              <strong>Custom Message:</strong> Uses a clear, user-friendly warning message
            </li>
            <li>
              <strong>Performance:</strong> Minimal overhead, only one event listener
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
