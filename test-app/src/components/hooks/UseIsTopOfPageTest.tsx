import { useIsTopOfPage } from "mukul-react-hooks";

export default function UseIsTopOfPageTest() {
  const isTopOfPage = useIsTopOfPage();

  // Create some content to scroll through
  const generateContent = () => {
    const sections = [];
    for (let i = 1; i <= 20; i++) {
      sections.push(
        <div key={i} className="test-section">
          <h3>Section {i}</h3>
          <p>
            This is section {i} of the scrollable content. The useIsTopOfPage hook will detect when
            you scroll back to the top of the page. Try scrolling up and down to see the hook's
            behavior change.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      );
    }
    return sections;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  const scrollToMiddle = () => {
    window.scrollTo({ top: document.body.scrollHeight / 2, behavior: "smooth" });
  };

  return (
    <div>
      <h1>useIsTopOfPage Hook Test</h1>
      <p>
        This hook detects whether the user has scrolled to the top of the page. It's useful for
        implementing features like "back to top" buttons, sticky headers, or scroll-based
        animations.
      </p>

      <div
        className="test-section"
        style={{ position: "sticky", top: 0, zIndex: 100, backgroundColor: "#1a1a1a" }}
      >
        <h3>Current Scroll Status (Sticky Header)</h3>
        <div className="demo-output">
          <p>
            Is at top of page:{" "}
            <span className={`status-indicator ${isTopOfPage ? "active" : "inactive"}`}>
              {isTopOfPage ? "YES - AT TOP" : "NO - SCROLLED DOWN"}
            </span>
          </p>
        </div>

        <div className="demo-controls">
          <button className="demo-control" onClick={scrollToTop}>
            📄 Scroll to Top
          </button>
          <button className="demo-control" onClick={scrollToMiddle}>
            ⏸️ Scroll to Middle
          </button>
          <button className="demo-control" onClick={scrollToBottom}>
            📄 Scroll to Bottom
          </button>
        </div>
      </div>

      <div className="test-section">
        <h3>Real-world Use Cases</h3>
        <div className="grid">
          <div className="result-box">
            <h4>🔝 Back to Top Button</h4>
            <p>Show/hide a "back to top" button when user scrolls down from the top.</p>
            {!isTopOfPage && (
              <button
                className="demo-control"
                onClick={scrollToTop}
                style={{ marginTop: "0.5rem" }}
              >
                ↑ Back to Top
              </button>
            )}
          </div>
          <div className="result-box">
            <h4>📱 Sticky Navigation</h4>
            <p>
              Change navigation styling when user scrolls away from the top (see the sticky header
              above).
            </p>
          </div>
          <div className="result-box">
            <h4>🎨 Header Animations</h4>
            <p>Trigger animations or change header opacity based on scroll position.</p>
          </div>
          <div className="result-box">
            <h4>📊 Analytics Tracking</h4>
            <p>Track user engagement by monitoring when they return to the top of the page.</p>
          </div>
        </div>
      </div>

      <div className="test-section">
        <h3>Hook Implementation Notes</h3>
        <div className="demo-output">
          <p>
            <strong>Performance:</strong> Uses throttled scroll events to avoid excessive
            re-renders.
          </p>
          <p>
            <strong>Threshold:</strong> Considers "top of page" as scroll position 0.
          </p>
          <p>
            <strong>Browser Support:</strong> Works in all modern browsers with scroll event
            support.
          </p>
          <p>
            <strong>Memory Management:</strong> Automatically cleans up event listeners on unmount.
          </p>
        </div>
      </div>

      {/* Generate scrollable content */}
      <h2>Scrollable Content</h2>
      <p>
        <strong>Instructions:</strong> Scroll through the content below to test the hook. Watch the
        sticky header above to see the real-time status changes.
      </p>

      {generateContent()}

      <div className="test-section">
        <h3>🎉 You've reached the bottom!</h3>
        <p>Now scroll back up to see the hook detect when you return to the top.</p>
        <button className="demo-control" onClick={scrollToTop}>
          🚀 Go back to top
        </button>
      </div>
    </div>
  );
}
