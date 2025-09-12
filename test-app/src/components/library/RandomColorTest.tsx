import { lib } from "mukul-react-hooks";
import { useState } from "react";

export default function RandomColorTest() {
  const [currentColor, setCurrentColor] = useState("#FF5733");
  const [colorHistory, setColorHistory] = useState<string[]>([]);
  const [palette, setPalette] = useState<string[]>([]);

  const generateRandomColor = () => {
    const newColor = lib.randomColor();
    setCurrentColor(newColor);
    setColorHistory((prev) => [newColor, ...prev].slice(0, 50));
  };

  const generatePalette = (count: number = 6) => {
    const newPalette = Array.from({ length: count }, () => lib.randomColor());
    setPalette(newPalette);
  };

  const clearHistory = () => {
    setColorHistory([]);
    setPalette([]);
  };

  const copyToClipboard = (color: string) => {
    navigator.clipboard.writeText(color).then(() => {
      // Could add a toast notification here
      console.log(`Copied ${color} to clipboard`);
    });
  };

  const hexToRgb = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgb(${r}, ${g}, ${b})`;
  };

  const hexToHsl = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0,
      s = 0,
      l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }

    return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
  };

  const getLuminance = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;

    // Apply gamma correction
    const rsRGB = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
    const gsRGB = g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4);
    const bsRGB = b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4);

    return 0.2126 * rsRGB + 0.7152 * gsRGB + 0.0722 * bsRGB;
  };

  const getTextColor = (backgroundColor: string) => {
    const luminance = getLuminance(backgroundColor);
    return luminance > 0.5 ? "#000000" : "#FFFFFF";
  };

  const realWorldExamples = [
    {
      title: "🎨 UI Themes",
      description: "Generate random color schemes for UI components and themes",
      demo: () => generatePalette(5),
      code: `const themeColor = lib.randomColor()
setTheme({ primary: themeColor })`,
    },
    {
      title: "👤 User Avatars",
      description: "Create unique background colors for user profile pictures",
      demo: () => generateRandomColor(),
      code: `const avatarBg = lib.randomColor()
<Avatar style={{ backgroundColor: avatarBg }} />`,
    },
    {
      title: "🏷️ Tag Colors",
      description: "Assign random colors to tags, categories, or labels",
      demo: () => generatePalette(8),
      code: `const tagColors = tags.map(tag => ({
  ...tag,
  color: lib.randomColor()
}))`,
    },
    {
      title: "📊 Chart Data",
      description: "Generate distinct colors for chart series and data visualization",
      demo: () => generatePalette(10),
      code: `const chartColors = Array.from({length: dataPoints}, 
  () => lib.randomColor()
)`,
    },
  ];

  return (
    <div>
      <h1>randomColor Function Test</h1>
      <p>
        This function generates random hexadecimal color strings. It's perfect for creating dynamic
        UI elements, color schemes, avatars, and data visualizations with unique colors.
      </p>

      <div className="test-section">
        <h3>Current Random Color</h3>
        <div className="demo-output">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <div
              className="color-preview"
              style={{
                backgroundColor: currentColor,
                width: "150px",
                height: "100px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: getTextColor(currentColor),
                fontWeight: "bold",
                cursor: "pointer",
              }}
              onClick={() => copyToClipboard(currentColor)}
              title="Click to copy"
            >
              {currentColor}
            </div>
            <div style={{ textAlign: "left" }}>
              <p>
                <strong>Hex:</strong> {currentColor}
              </p>
              <p>
                <strong>RGB:</strong> {hexToRgb(currentColor)}
              </p>
              <p>
                <strong>HSL:</strong> {hexToHsl(currentColor)}
              </p>
              <p>
                <strong>Luminance:</strong> {getLuminance(currentColor).toFixed(3)}
              </p>
            </div>
          </div>
        </div>

        <div className="demo-controls">
          <button className="demo-control" onClick={generateRandomColor}>
            🎲 Generate Random Color
          </button>
          <button className="demo-control" onClick={() => copyToClipboard(currentColor)}>
            📋 Copy to Clipboard
          </button>
        </div>
      </div>

      <div className="test-section">
        <h3>Color Palette Generator</h3>
        <div className="demo-controls">
          <button className="demo-control" onClick={() => generatePalette(3)}>
            🎨 3 Colors
          </button>
          <button className="demo-control" onClick={() => generatePalette(6)}>
            🎨 6 Colors
          </button>
          <button className="demo-control" onClick={() => generatePalette(12)}>
            🎨 12 Colors
          </button>
          <button className="demo-control" onClick={() => generatePalette(20)}>
            🎨 20 Colors
          </button>
        </div>

        {palette.length > 0 && (
          <div className="demo-output">
            <p>
              <strong>Generated Palette ({palette.length} colors):</strong>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
                gap: "0.5rem",
                marginTop: "1rem",
              }}
            >
              {palette.map((color, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: color,
                    padding: "1rem 0.5rem",
                    borderRadius: "4px",
                    textAlign: "center",
                    color: getTextColor(color),
                    cursor: "pointer",
                    fontSize: "0.875rem",
                    fontWeight: "bold",
                  }}
                  onClick={() => copyToClipboard(color)}
                  title="Click to copy"
                >
                  {color}
                </div>
              ))}
            </div>
          </div>
        )}
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

const color = lib.randomColor();`}
          </pre>

          <h4>Parameters</h4>
          <ul style={{ textAlign: "left", margin: "1rem 0" }}>
            <li>
              <strong>None</strong>: This function takes no parameters
            </li>
          </ul>

          <h4>Return Value</h4>
          <ul style={{ textAlign: "left", margin: "1rem 0" }}>
            <li>
              <strong>string</strong>: Random hexadecimal color (e.g., "#FF5733")
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
            {`// Dynamic styling
const ColorfulButton = () => {
  const [bgColor, setBgColor] = useState(lib.randomColor());
  
  return (
    <button 
      style={{ backgroundColor: bgColor }}
      onClick={() => setBgColor(lib.randomColor())}
    >
      Click for new color!
    </button>
  );
};

// Avatar placeholders
const UserAvatar = ({ name, hasImage }) => {
  const bgColor = hasImage ? 'transparent' : lib.randomColor();
  
  return (
    <div 
      className="avatar"
      style={{ backgroundColor: bgColor }}
    >
      {!hasImage && name.charAt(0)}
    </div>
  );
};

// Chart data visualization
const generateChartData = (labels) => {
  return labels.map(label => ({
    label,
    color: lib.randomColor(),
    value: Math.random() * 100
  }));
};

// Tag colors
const TagComponent = ({ text }) => (
  <span 
    className="tag"
    style={{ 
      backgroundColor: lib.randomColor(),
      color: 'white'
    }}
  >
    {text}
  </span>
);

// Generate color palette
const generatePalette = (count) => {
  return Array.from({ length: count }, () => lib.randomColor());
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
              <button
                className="demo-control"
                onClick={example.demo}
                style={{ marginTop: "0.5rem" }}
              >
                Try Demo
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="test-section">
        <h3>Color History</h3>
        <div className="demo-controls">
          <button className="demo-control" onClick={clearHistory}>
            🗑️ Clear History
          </button>
        </div>

        <div className="demo-output">
          {colorHistory.length === 0 ? (
            <p>
              <em>No colors generated yet. Click "Generate Random Color" to start!</em>
            </p>
          ) : (
            <div>
              <p>
                <strong>Recent Colors (last {colorHistory.length}):</strong>
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
                  gap: "0.5rem",
                  maxHeight: "300px",
                  overflowY: "auto",
                  marginTop: "1rem",
                }}
              >
                {colorHistory.map((color, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundColor: color,
                      padding: "0.75rem 0.25rem",
                      borderRadius: "4px",
                      textAlign: "center",
                      color: getTextColor(color),
                      cursor: "pointer",
                      fontSize: "0.75rem",
                      fontWeight: "bold",
                      border: color === currentColor ? "2px solid #646cff" : "none",
                    }}
                    onClick={() => {
                      setCurrentColor(color);
                      copyToClipboard(color);
                    }}
                    title="Click to select and copy"
                  >
                    {color}
                    {index === 0 && (
                      <div style={{ fontSize: "0.6rem", marginTop: "0.25rem" }}>Latest</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="test-section">
        <h3>Color Analysis Tools</h3>
        <div className="grid">
          <div className="result-box">
            <h4>🔍 Color Information</h4>
            <p>Current color analysis:</p>
            <ul style={{ textAlign: "left", fontSize: "0.875rem" }}>
              <li>Hex: {currentColor}</li>
              <li>RGB: {hexToRgb(currentColor)}</li>
              <li>HSL: {hexToHsl(currentColor)}</li>
              <li>Luminance: {getLuminance(currentColor).toFixed(3)}</li>
              <li>Best text color: {getTextColor(currentColor)}</li>
            </ul>
          </div>

          <div className="result-box">
            <h4>📏 Format Examples</h4>
            <p>Different ways to use the color:</p>
            <div style={{ fontSize: "0.875rem", textAlign: "left" }}>
              <p>
                <strong>CSS:</strong> <code>background-color: {currentColor}</code>
              </p>
              <p>
                <strong>RGB:</strong> <code>{hexToRgb(currentColor)}</code>
              </p>
              <p>
                <strong>HSL:</strong> <code>{hexToHsl(currentColor)}</code>
              </p>
            </div>
          </div>

          <div className="result-box">
            <h4>♿ Accessibility</h4>
            <div
              style={{
                backgroundColor: currentColor,
                color: getTextColor(currentColor),
                padding: "1rem",
                borderRadius: "4px",
                marginBottom: "0.5rem",
              }}
            >
              Sample text on this background
            </div>
            <p style={{ fontSize: "0.875rem" }}>
              Recommended text color: <strong>{getTextColor(currentColor)}</strong>
            </p>
          </div>
        </div>
      </div>

      <div className="test-section">
        <h3>Function Details</h3>
        <div className="demo-output">
          <ul style={{ textAlign: "left" }}>
            <li>
              <strong>Return Type:</strong> string (hexadecimal format)
            </li>
            <li>
              <strong>Format:</strong> #RRGGBB (always 6 characters + #)
            </li>
            <li>
              <strong>Range:</strong> #000000 to #FFFFFF (16,777,216 possible colors)
            </li>
            <li>
              <strong>Case:</strong> Always uppercase letters (A-F)
            </li>
            <li>
              <strong>Randomness:</strong> Uses Math.random() for color generation
            </li>
            <li>
              <strong>Performance:</strong> Very fast, suitable for real-time generation
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
