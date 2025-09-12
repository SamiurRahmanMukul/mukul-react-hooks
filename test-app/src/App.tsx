import { useEffect, useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { highlightCodeBlocks } from "./utils/syntaxHighlighter";

// Hook test components
import UseFullScreenTest from "./components/hooks/UseFullScreenTest";
import UseIsTopOfPageTest from "./components/hooks/UseIsTopOfPageTest";
import UseMediaQueryTest from "./components/hooks/UseMediaQueryTest";
import UseTimeoutTest from "./components/hooks/UseTimeoutTest";
import UseUnsavedChangeAlertTest from "./components/hooks/UseUnsavedChangeAlertTest";

// Library test components
import ArrayToCommaSeparatedTextTest from "./components/library/ArrayToCommaSeparatedTextTest";
import AsyncDelayTest from "./components/library/AsyncDelayTest";
import DownloadStringTest from "./components/library/DownloadStringTest";
import GenerateUniqueIdTest from "./components/library/GenerateUniqueIdTest";
import InternationalCurrencyConvertTest from "./components/library/InternationalCurrencyConvertTest";
import IsEmptyObjectTest from "./components/library/IsEmptyObjectTest";
import IsValidEmailTest from "./components/library/IsValidEmailTest";
import NumberFormatWithCommasTest from "./components/library/NumberFormatWithCommasTest";
import RandomColorTest from "./components/library/RandomColorTest";
import TransformStringTest from "./components/library/TransformStringTest";
import TruncateStringEndTest from "./components/library/TruncateStringEndTest";
import TruncateStringMiddleTest from "./components/library/TruncateStringMiddleTest";
import UnixToDateTimeTest from "./components/library/UnixToDateTimeTest";
import WaitSomeMomentTest from "./components/library/WaitSomeMomentTest";

const hookTests = [
  { path: "/hooks/fullscreen", name: "useFullScreen", component: UseFullScreenTest },
  { path: "/hooks/istopofpage", name: "useIsTopOfPage", component: UseIsTopOfPageTest },
  { path: "/hooks/mediaquery", name: "useMediaQuery", component: UseMediaQueryTest },
  { path: "/hooks/timeout", name: "useTimeout", component: UseTimeoutTest },
  {
    path: "/hooks/unsavedchangealert",
    name: "useUnsavedChangeAlert",
    component: UseUnsavedChangeAlertTest,
  },
];

const libraryTests = [
  {
    path: "/lib/arraytocommaseparatedtext",
    name: "arrayToCommaSeparatedText",
    component: ArrayToCommaSeparatedTextTest,
  },
  { path: "/lib/asyncdelay", name: "asyncDelay", component: AsyncDelayTest },
  { path: "/lib/downloadstring", name: "downloadString", component: DownloadStringTest },
  { path: "/lib/generateuniqueid", name: "generateUniqueId", component: GenerateUniqueIdTest },
  {
    path: "/lib/internationalcurrencyconvert",
    name: "internationalCurrencyConvert",
    component: InternationalCurrencyConvertTest,
  },
  { path: "/lib/isemptyobject", name: "isEmptyObject", component: IsEmptyObjectTest },
  { path: "/lib/isvalidemail", name: "isValidEmail", component: IsValidEmailTest },
  {
    path: "/lib/numberformatwithcommas",
    name: "numberFormatWithCommas",
    component: NumberFormatWithCommasTest,
  },
  { path: "/lib/randomcolor", name: "randomColor", component: RandomColorTest },
  { path: "/lib/transformstring", name: "transformString", component: TransformStringTest },
  { path: "/lib/truncatestringend", name: "truncateStringEnd", component: TruncateStringEndTest },
  {
    path: "/lib/truncatestringmiddle",
    name: "truncateStringMiddle",
    component: TruncateStringMiddleTest,
  },
  { path: "/lib/unixtodatetime", name: "unixToDateTime", component: UnixToDateTimeTest },
  { path: "/lib/waitsomemoment", name: "waitSomeMoment", component: WaitSomeMomentTest },
];

function HomePage() {
  const [copiedStates, setCopiedStates] = useState({
    npm: false,
    yarn: false,
  });

  const handleCopy = async (text: string, type: "npm" | "yarn") => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedStates((prev) => ({ ...prev, [type]: true }));

      // Reset after 2 seconds
      setTimeout(() => {
        setCopiedStates((prev) => ({ ...prev, [type]: false }));
      }, 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div>
      <h1>Mukul React Hooks</h1>
      <p>
        This is a comprehensive testing application for all hooks and library functions in the
        mukul-react-hooks package. Select a test from the navigation below to explore different
        scenarios and see real-world examples.
      </p>

      <div className="card">
        <h2>📦 Installation</h2>
        <p className="installation-intro">
          Get started with <strong>mukul-react-hooks</strong> in your React project.{" "}
          <a
            href="https://www.npmjs.com/package/mukul-react-hooks"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on NPM →
          </a>
        </p>

        <div className="installation-commands">
          <div className="command-container">
            <code className="command-code">npm install mukul-react-hooks</code>
            <button
              onClick={() => handleCopy("npm install mukul-react-hooks", "npm")}
              className={`copy-button ${copiedStates.npm ? "copied" : ""}`}
            >
              {copiedStates.npm ? "✓" : "Copy"}
            </button>
          </div>

          <div className="command-container">
            <code className="command-code">yarn add mukul-react-hooks</code>
            <button
              onClick={() => handleCopy("yarn add mukul-react-hooks", "yarn")}
              className={`copy-button ${copiedStates.yarn ? "copied" : ""}`}
            >
              {copiedStates.yarn ? "✓" : "Copy"}
            </button>
          </div>
        </div>

        <div className="installation-tip">
          💡 <strong>Tip:</strong> Use this test app as your implementation reference!
        </div>
      </div>

      <div className="card">
        <h2>🎣 React Hooks Tests & Documentation</h2>
        <div className="nav-links">
          {hookTests.map((test) => (
            <Link key={test.path} to={test.path} className="nav-link">
              {test.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="card">
        <h2>📚 Library Functions Tests & Documentation</h2>
        <div className="nav-links">
          {libraryTests.map((test) => (
            <Link key={test.path} to={test.path} className="nav-link">
              {test.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Apply syntax highlighting when route changes
  useEffect(() => {
    const timer = setTimeout(() => {
      highlightCodeBlocks();
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="App">
      {!isHomePage && (
        <Link to="/" className="back-button">
          ← Back to Home
        </Link>
      )}

      <Routes>
        <Route path="/" element={<HomePage />} />
        {hookTests.map((test) => (
          <Route key={test.path} path={test.path} element={<test.component />} />
        ))}
        {libraryTests.map((test) => (
          <Route key={test.path} path={test.path} element={<test.component />} />
        ))}
      </Routes>

      <footer className="footer">
        <p className="footer__copy">
          © 2025
          <a href="https://srmukul.com/" target="_blank" rel="noopener noreferrer">
            <span className="footer__author">Md. Samiur Rahman (Mukul).</span>
          </a>
          All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
