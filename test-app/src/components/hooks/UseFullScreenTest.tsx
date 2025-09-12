import { useFullScreen } from "mukul-react-hooks";

export default function UseFullScreenTest() {
  const { isFullscreen, toggleFullscreen } = useFullScreen();

  const handleToggle = async () => {
    try {
      await toggleFullscreen();
    } catch (error) {
      console.error("Fullscreen toggle failed:", error);
    }
  };

  return (
    <div>
      <h1>useFullScreen Hook Test</h1>
      <p>
        This hook provides functionality to toggle fullscreen mode and track the current fullscreen
        state. It handles cross-browser compatibility for fullscreen API.
      </p>

      <div className="test-section">
        <h3>Current Fullscreen Status</h3>
        <div className="demo-output">
          <p>
            Fullscreen Status:{" "}
            <span className={`status-indicator ${isFullscreen ? "active" : "inactive"}`}>
              {isFullscreen ? "FULLSCREEN" : "NORMAL"}
            </span>
          </p>
        </div>
      </div>

      <div className="test-section">
        <h3>Fullscreen Controls</h3>
        <div className="demo-controls">
          <button className="demo-control" onClick={handleToggle}>
            {isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
          </button>
        </div>
        <div className="demo-output">
          <p>
            <strong>Instructions:</strong> Click the button above to toggle fullscreen mode. You can
            also use the Escape key to exit fullscreen mode when active.
          </p>
          <p>
            <strong>Note:</strong> Some browsers may require user interaction before allowing
            fullscreen mode. If the toggle doesn't work immediately, try clicking somewhere on the
            page first.
          </p>
        </div>
      </div>

      <div className="test-section">
        <h3>Real-world Scenarios</h3>
        <div className="grid">
          <div className="result-box">
            <h4>🎥 Video Player</h4>
            <p>
              Perfect for implementing fullscreen video players where users expect seamless
              fullscreen toggle.
            </p>
          </div>
          <div className="result-box">
            <h4>🎮 Game Applications</h4>
            <p>Essential for web games that need immersive fullscreen experience.</p>
          </div>
          <div className="result-box">
            <h4>📊 Dashboard Views</h4>
            <p>Useful for data dashboards that benefit from maximum screen real estate.</p>
          </div>
          <div className="result-box">
            <h4>🖼️ Image Galleries</h4>
            <p>Great for photo galleries with fullscreen viewing capabilities.</p>
          </div>
        </div>
      </div>

      <div className="test-section">
        <h3>Browser Compatibility</h3>
        <div className="demo-output">
          <p>This hook handles the following browser prefixes:</p>
          <ul style={{ textAlign: "left", margin: "1rem 0" }}>
            <li>
              <strong>Standard:</strong> requestFullscreen() / exitFullscreen()
            </li>
            <li>
              <strong>Firefox:</strong> mozRequestFullScreen() / mozCancelFullScreen()
            </li>
            <li>
              <strong>Webkit (Chrome/Safari):</strong> webkitRequestFullscreen() /
              webkitExitFullscreen()
            </li>
            <li>
              <strong>IE/Edge:</strong> msRequestFullscreen() / msExitFullscreen()
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
