import { lib } from "mukul-react-hooks";
import { useState } from "react";
import { v4 } from "uuid";

export default function DownloadStringTest() {
  const [data, setData] = useState("Hello, World! This is a test file.");
  const [filename, setFilename] = useState("test-file");
  const [extension, setExtension] = useState("txt");
  const [downloadHistory, setDownloadHistory] = useState<
    Array<{ filename: string; size: number; timestamp: string }>
  >([]);

  const handleDownload = () => {
    try {
      lib.downloadString(data, filename, extension);

      // Add to download history
      const download = {
        filename: `${filename}.${extension}`,
        size: new Blob([data]).size,
        timestamp: new Date().toLocaleTimeString(),
      };
      setDownloadHistory((prev) => [download, ...prev].slice(0, 10));
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  const downloadPresets = [
    {
      name: "JSON Data",
      data: JSON.stringify(
        { name: "John Doe", age: 30, city: "New York", hobbies: ["reading", "swimming", "coding"] },
        null,
        2
      ),
      filename: "user-data",
      extension: "json",
    },
    {
      name: "CSV Data",
      data: "Name,Age,City\nJohn Doe,30,New York\nJane Smith,25,Los Angeles\nBob Johnson,35,Chicago",
      filename: "users",
      extension: "csv",
    },
    {
      name: "HTML Page",
      data: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Generated Page</title>\n</head>\n<body>\n  <h1>Hello World!</h1>\n  <p>This HTML was generated and downloaded.</p>\n</body>\n</html>",
      filename: "generated-page",
      extension: "html",
    },
    {
      name: "JavaScript Code",
      data: 'function greet(name) {\n  return `Hello, ${name}!`;\n}\n\nconsole.log(greet("World"));',
      filename: "hello-world",
      extension: "js",
    },
    {
      name: "Log File",
      data: "[2024-01-01 10:00:00] INFO: Application started\n[2024-01-01 10:01:15] DEBUG: User logged in\n[2024-01-01 10:05:32] WARN: Low memory warning\n[2024-01-01 10:10:45] ERROR: Database connection failed",
      filename: "application",
      extension: "log",
    },
    {
      name: "Markdown Document",
      data: '# My Document\n\n## Introduction\nThis is a sample markdown document.\n\n## Features\n- Easy to read\n- Easy to write\n- Portable\n\n## Code Example\n```javascript\nconsole.log("Hello, Markdown!");\n```',
      filename: "document",
      extension: "md",
    },
  ];

  const loadPreset = (preset: (typeof downloadPresets)[0]) => {
    setData(preset.data);
    setFilename(preset.filename);
    setExtension(preset.extension);
  };

  const generateRandomData = () => {
    const words = ["lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit"];
    const randomText = Array.from(
      { length: 50 },
      () => words[Math.floor(Math.random() * words.length)]
    ).join(" ");

    setData(randomText);
    setFilename("random-text");
    setExtension("txt");
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  return (
    <div>
      <h1>downloadString Function Test</h1>
      <p>
        This function downloads a string as a file to the user's computer. It's perfect for
        generating reports, exporting data, saving user content, and creating downloadable files
        dynamically.
      </p>

      <div className="test-section">
        <h3>Current Download Configuration</h3>
        <div className="demo-output">
          <p>
            <strong>Filename:</strong> {filename}.{extension}
          </p>
          <p>
            <strong>Content Size:</strong> {formatFileSize(new Blob([data]).size)}
          </p>
          <p>
            <strong>Content Preview:</strong>
          </p>
          <div
            style={{
              backgroundColor: "#2a2a2a",
              padding: "1rem",
              borderRadius: "4px",
              maxHeight: "150px",
              overflowY: "auto",
              fontSize: "0.875rem",
              fontFamily: "monospace",
              whiteSpace: "pre-wrap",
            }}
          >
            {data.length > 500 ? data.substring(0, 500) + "..." : data}
          </div>
        </div>
      </div>

      <div className="test-section">
        <h3>File Configuration</h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <div className="form-group">
            <label htmlFor="filename">Filename (without extension):</label>
            <input
              id="filename"
              type="text"
              value={filename}
              onChange={(e) => setFilename(e.target.value)}
              placeholder="my-file"
            />
          </div>

          <div className="form-group">
            <label htmlFor="extension">File Extension:</label>
            <select id="extension" value={extension} onChange={(e) => setExtension(e.target.value)}>
              <option value="txt">txt</option>
              <option value="json">json</option>
              <option value="csv">csv</option>
              <option value="html">html</option>
              <option value="js">js</option>
              <option value="css">css</option>
              <option value="md">md</option>
              <option value="xml">xml</option>
              <option value="log">log</option>
              <option value="sql">sql</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="data">File Content:</label>
          <textarea
            id="data"
            value={data}
            onChange={(e) => setData(e.target.value)}
            rows={8}
            placeholder="Enter the content you want to download..."
          />
        </div>

        <div className="demo-controls">
          <button className="demo-control" onClick={handleDownload}>
            💾 Download File
          </button>
          <button className="demo-control" onClick={generateRandomData}>
            🎲 Generate Random Text
          </button>
        </div>
      </div>

      <div className="test-section">
        <h3>Preset Downloads</h3>
        <div className="grid">
          {downloadPresets.map((preset) => (
            <div key={v4()} className="result-box">
              <h4>{preset.name}</h4>
              <p>
                <strong>File:</strong> {preset.filename}.{preset.extension}
              </p>
              <p>
                <strong>Size:</strong> {formatFileSize(new Blob([preset.data]).size)}
              </p>
              <div className="demo-controls">
                <button
                  className="demo-control"
                  onClick={() => loadPreset(preset)}
                  style={{ marginRight: "0.5rem" }}
                >
                  📝 Load
                </button>
                <button
                  className="demo-control"
                  onClick={() => {
                    setData(preset.data);
                    setFilename(preset.filename);
                    setExtension(preset.extension);
                    handleDownload();
                  }}
                >
                  💾 Download
                </button>
              </div>
            </div>
          ))}
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

lib.downloadString(data, filename, extension);`}
          </pre>

          <h4>Parameters</h4>
          <ul style={{ textAlign: "left", margin: "1rem 0" }}>
            <li>
              <strong>data</strong> (string): String content to download
            </li>
            <li>
              <strong>filename</strong> (string): Name of the file (without extension)
            </li>
            <li>
              <strong>ext</strong> (string): File extension
            </li>
          </ul>

          <h4>Return Value</h4>
          <ul style={{ textAlign: "left", margin: "1rem 0" }}>
            <li>
              <strong>void</strong>: Triggers browser download, no return value
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
            {String.raw`// Export JSON data
const exportData = (userData) => {
  const jsonData = JSON.stringify(userData, null, 2);
  lib.downloadString(jsonData, 'user-data', 'json');
};

// Export CSV report
const exportCSV = (tableData) => {
  const csvContent = tableData.map(row => row.join(',')).join('\n');
  lib.downloadString(csvContent, 'report', 'csv');
};

// Save text content
const saveNote = (content) => {
  lib.downloadString(content, 'my-note', 'txt');
};

// Export configuration
const exportConfig = (settings) => {
  const configXML = generateXMLFromSettings(settings);
  lib.downloadString(configXML, 'app-config', 'xml');
};

// Download log files
const downloadLogs = (logEntries) => {
  const logContent = logEntries.join('\n');
  lib.downloadString(logContent, 'application-logs', 'log');
};

// Export code snippets
const exportCode = (codeContent, language) => {
  lib.downloadString(codeContent, 'code-snippet', language);
};`}
          </pre>
        </div>
      </div>

      <div className="test-section">
        <h3>Real-world Use Cases</h3>
        <div className="grid">
          <div className="result-box">
            <h4>📊 Data Export</h4>
            <p>Export user data, analytics, or reports as CSV/JSON files.</p>
            <code style={{ fontSize: "0.75rem" }}>
              lib.downloadString(csvData, 'report', 'csv')
            </code>
          </div>

          <div className="result-box">
            <h4>💾 Backup & Save</h4>
            <p>Allow users to save their work, settings, or progress locally.</p>
            <code style={{ fontSize: "0.75rem" }}>
              lib.downloadString(gameState, 'save-game', 'json')
            </code>
          </div>

          <div className="result-box">
            <h4>🎨 Generated Content</h4>
            <p>Download dynamically generated HTML, CSS, or code files.</p>
            <code style={{ fontSize: "0.75rem" }}>
              lib.downloadString(htmlContent, 'webpage', 'html')
            </code>
          </div>

          <div className="result-box">
            <h4>📋 Log Downloads</h4>
            <p>Enable users to download application logs or debug information.</p>
            <code style={{ fontSize: "0.75rem" }}>
              lib.downloadString(logData, 'debug-log', 'log')
            </code>
          </div>

          <div className="result-box">
            <h4>📝 Document Generation</h4>
            <p>Create and download documentation, markdown files, or text content.</p>
            <code style={{ fontSize: "0.75rem" }}>
              lib.downloadString(markdownDoc, 'readme', 'md')
            </code>
          </div>

          <div className="result-box">
            <h4>⚙️ Configuration Export</h4>
            <p>Export application settings, preferences, or configuration files.</p>
            <code style={{ fontSize: "0.75rem" }}>
              lib.downloadString(configJson, 'config', 'json')
            </code>
          </div>
        </div>
      </div>

      <div className="test-section">
        <h3>Download History</h3>
        <div className="demo-output">
          {downloadHistory.length === 0 ? (
            <p>
              <em>No downloads yet. Try downloading a file above!</em>
            </p>
          ) : (
            <div>
              <p>
                <strong>Recent Downloads:</strong>
              </p>
              {downloadHistory.map((download) => (
                <div
                  key={v4()}
                  style={{
                    padding: "0.5rem",
                    margin: "0.25rem 0",
                    backgroundColor: "#2a2a2a",
                    borderRadius: "4px",
                    fontSize: "0.875rem",
                  }}
                >
                  <strong>{download.filename}</strong> - {formatFileSize(download.size)} -{" "}
                  {download.timestamp}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="test-section">
        <h3>Browser Compatibility & Notes</h3>
        <div className="demo-output">
          <ul style={{ textAlign: "left" }}>
            <li>
              <strong>Modern Browsers:</strong> Works in all modern browsers with download attribute
              support
            </li>
            <li>
              <strong>Firefox Compatibility:</strong> Specifically handles Firefox requirements
              (temporary DOM append)
            </li>
            <li>
              <strong>File Format:</strong> Uses data URI with UTF-8 encoding
            </li>
            <li>
              <strong>Security:</strong> Downloads are initiated by user interaction (click)
            </li>
            <li>
              <strong>Size Limits:</strong> Browser-dependent (typically several MB for data URIs)
            </li>
            <li>
              <strong>Auto-cleanup:</strong> Temporary DOM elements are automatically removed
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
