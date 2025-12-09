// Simple syntax highlighter for code blocks
export const highlightCodeBlocks = () => {
  // Find all pre elements in demo-output sections that haven't been highlighted yet
  const codeBlocks = document.querySelectorAll(".demo-output pre:not(.highlighted)");

  codeBlocks.forEach((block) => {
    const code = block.textContent || "";
    if (code.trim() && !code.includes("<span")) {
      const highlightedCode = highlightSyntax(code);
      block.innerHTML = `<code>${highlightedCode}</code>`;
      block.classList.add("highlighted");
    }
  });
};

const replaceAll = (value: string, searchValue: RegExp | string, replacement: string): string =>
  (value as any).replaceAll(searchValue, replacement);

const keywordPatternA =
  /\b(import|from|export|default|const|let|var|function|return|if|else|for|while|do|switch)\b/g;
const keywordPatternB =
  /\b(case|break|continue|try|catch|finally|throw|async|await|class|extends|interface|type|enum)\b/g;

const highlightSyntax = (code: string): string => {
  let highlighted = code;

  // Escape HTML
  highlighted = highlighted
    .split("&")
    .join("&amp;")
    .split("<")
    .join("&lt;")
    .split(">")
    .join("&gt;");

  // Apply syntax highlighting in order (most specific first)
  // Comments first (to avoid highlighting inside comments)
  highlighted = replaceAll(highlighted, /(\/\/.*$)/gm, "###COMMENT_START###$1###COMMENT_END###");
  highlighted = replaceAll(
    highlighted,
    /(\/\*[\s\S]*?\*\/)/g,
    "###COMMENT_START###$1###COMMENT_END###"
  );

  // Strings (to avoid highlighting inside strings)
  highlighted = replaceAll(
    highlighted,
    /(["'`])([^"'`\\]*(\\.[^"'`\\]*)*)\1/g,
    "###STRING_START###$1$2$1###STRING_END###"
  );

  // Keywords
  highlighted = replaceAll(highlighted, keywordPatternA, "###KEYWORD_START###$1###KEYWORD_END###");
  highlighted = replaceAll(highlighted, keywordPatternB, "###KEYWORD_START###$1###KEYWORD_END###");

  // Types
  highlighted = replaceAll(
    highlighted,
    /\b(string|number|boolean|object|undefined|null|void|any|Promise|Array)\b/g,
    "###TYPE_START###$1###TYPE_END###"
  );

  // React/Hooks
  highlighted = replaceAll(
    highlighted,
    /\b(React|useState|useEffect|useCallback|useMemo|useRef|Component|Props|FC)\b/g,
    "###REACT_START###$1###REACT_END###"
  );

  // Function calls
  highlighted = replaceAll(
    highlighted,
    /\b([a-zA-Z_$][a-zA-Z0-9_$]*)\s*(?=\()/g,
    "###FUNCTION_START###$1###FUNCTION_END###"
  );

  // Numbers
  highlighted = replaceAll(highlighted, /\b(\d+\.?\d*)\b/g, "###NUMBER_START###$1###NUMBER_END###");

  // Booleans
  highlighted = replaceAll(
    highlighted,
    /\b(true|false)\b/g,
    "###BOOLEAN_START###$1###BOOLEAN_END###"
  );

  // Replace placeholders with actual HTML spans
  highlighted = replaceAll(
    highlighted,
    /###COMMENT_START###(.*?)###COMMENT_END###/g,
    '<span style="color: #6a9955; font-style: italic;">$1</span>'
  );
  highlighted = replaceAll(
    highlighted,
    /###STRING_START###(.*?)###STRING_END###/g,
    '<span style="color: #ce9178;">$1</span>'
  );
  highlighted = replaceAll(
    highlighted,
    /###KEYWORD_START###(.*?)###KEYWORD_END###/g,
    '<span style="color: #569cd6; font-weight: bold;">$1</span>'
  );
  highlighted = replaceAll(
    highlighted,
    /###TYPE_START###(.*?)###TYPE_END###/g,
    '<span style="color: #4ec9b0;">$1</span>'
  );
  highlighted = replaceAll(
    highlighted,
    /###REACT_START###(.*?)###REACT_END###/g,
    '<span style="color: #4ec9b0; font-weight: bold;">$1</span>'
  );
  highlighted = replaceAll(
    highlighted,
    /###FUNCTION_START###(.*?)###FUNCTION_END###/g,
    '<span style="color: #dcdcaa;">$1</span>'
  );
  highlighted = replaceAll(
    highlighted,
    /###NUMBER_START###(.*?)###NUMBER_END###/g,
    '<span style="color: #b5cea8;">$1</span>'
  );
  highlighted = replaceAll(
    highlighted,
    /###BOOLEAN_START###(.*?)###BOOLEAN_END###/g,
    '<span style="color: #569cd6;">$1</span>'
  );

  return highlighted;
};

// Auto-run when DOM is loaded
if (typeof globalThis !== "undefined" && globalThis.window !== undefined) {
  const { document } = globalThis.window;
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", highlightCodeBlocks);
  } else {
    // Run immediately if DOM is already loaded
    setTimeout(highlightCodeBlocks, 100);
  }
}
