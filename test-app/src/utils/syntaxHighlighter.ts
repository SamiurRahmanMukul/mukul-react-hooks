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

const highlightSyntax = (code: string): string => {
  let highlighted = code;

  // Escape HTML
  highlighted = highlighted.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  // Apply syntax highlighting in order (most specific first)
  highlighted = highlighted
    // Comments first (to avoid highlighting inside comments)
    .replace(/(\/\/.*$)/gm, "###COMMENT_START###$1###COMMENT_END###")
    .replace(/(\/\*[\s\S]*?\*\/)/g, "###COMMENT_START###$1###COMMENT_END###")

    // Strings (to avoid highlighting inside strings)
    .replace(/(["'`])([^"'`\\]*(\\.[^"'`\\]*)*)\1/g, "###STRING_START###$1$2$1###STRING_END###")

    // Keywords
    .replace(
      /\b(import|from|export|default|const|let|var|function|return|if|else|for|while|do|switch|case|break|continue|try|catch|finally|throw|async|await|class|extends|interface|type|enum)\b/g,
      "###KEYWORD_START###$1###KEYWORD_END###"
    )

    // Types
    .replace(
      /\b(string|number|boolean|object|undefined|null|void|any|Promise|Array)\b/g,
      "###TYPE_START###$1###TYPE_END###"
    )

    // React/Hooks
    .replace(
      /\b(React|useState|useEffect|useCallback|useMemo|useRef|Component|Props|FC)\b/g,
      "###REACT_START###$1###REACT_END###"
    )

    // Function calls
    .replace(/\b([a-zA-Z_$][a-zA-Z0-9_$]*)\s*(?=\()/g, "###FUNCTION_START###$1###FUNCTION_END###")

    // Numbers
    .replace(/\b(\d+\.?\d*)\b/g, "###NUMBER_START###$1###NUMBER_END###")

    // Booleans
    .replace(/\b(true|false)\b/g, "###BOOLEAN_START###$1###BOOLEAN_END###");

  // Replace placeholders with actual HTML spans
  highlighted = highlighted
    .replace(
      /###COMMENT_START###(.*?)###COMMENT_END###/g,
      '<span style="color: #6a9955; font-style: italic;">$1</span>'
    )
    .replace(/###STRING_START###(.*?)###STRING_END###/g, '<span style="color: #ce9178;">$1</span>')
    .replace(
      /###KEYWORD_START###(.*?)###KEYWORD_END###/g,
      '<span style="color: #569cd6; font-weight: bold;">$1</span>'
    )
    .replace(/###TYPE_START###(.*?)###TYPE_END###/g, '<span style="color: #4ec9b0;">$1</span>')
    .replace(
      /###REACT_START###(.*?)###REACT_END###/g,
      '<span style="color: #4ec9b0; font-weight: bold;">$1</span>'
    )
    .replace(
      /###FUNCTION_START###(.*?)###FUNCTION_END###/g,
      '<span style="color: #dcdcaa;">$1</span>'
    )
    .replace(/###NUMBER_START###(.*?)###NUMBER_END###/g, '<span style="color: #b5cea8;">$1</span>')
    .replace(
      /###BOOLEAN_START###(.*?)###BOOLEAN_END###/g,
      '<span style="color: #569cd6;">$1</span>'
    );

  return highlighted;
};

// Auto-run when DOM is loaded
if (typeof window !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", highlightCodeBlocks);
  } else {
    // Run immediately if DOM is already loaded
    setTimeout(highlightCodeBlocks, 100);
  }
}
