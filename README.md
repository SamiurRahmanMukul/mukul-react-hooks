<div align="center">

# 🪝 mukul-react-hooks

<p align="center">
  <img src="https://img.shields.io/npm/v/mukul-react-hooks?style=for-the-badge&logo=npm&color=CB3837" alt="NPM Version" />
  <img src="https://img.shields.io/npm/dt/mukul-react-hooks?style=for-the-badge&logo=npm&color=CB3837" alt="NPM Downloads" />
  <img src="https://img.shields.io/github/license/SamiurRahmanMukul/mukul-react-hooks?style=for-the-badge&color=green" alt="License" />
  <img src="https://img.shields.io/bundlephobia/minzip/mukul-react-hooks?style=for-the-badge&logo=webpack&color=8CC84B" alt="Bundle Size" />
</p>

<p align="center">
  <strong>🚀 A comprehensive collection of custom React hooks and utility functions</strong>
</p>

<p align="center">
  Streamline complex problem-solving within React applications with our carefully crafted hooks and utilities. Experience seamless integration, enhanced functionality, and developer-friendly APIs.
</p>

<p align="center">
  <a href="https://mukul-react-hooks.vercel.app" target="_blank">
    <img src="https://img.shields.io/badge/📖_Documentation-Visit_Live_Demo-blue?style=for-the-badge&logo=vercel" alt="Documentation" />
  </a>
</p>

</div>

---

## ✨ Features

<table>
<tr>
<td>

### 🎯 **TypeScript First**

- Full TypeScript support with comprehensive type definitions
- IntelliSense and autocompletion in modern IDEs
- Type safety for all hooks and utility functions
- Zero breaking changes for JavaScript users

</td>
<td>

### ⚡ **Performance Optimized**

- Tree-shakable exports for minimal bundle size
- Optimized for modern React applications
- No external dependencies
- Lightweight and efficient

</td>
</tr>
<tr>
<td>

### 🛠️ **Developer Experience**

- Intuitive and consistent API design
- Comprehensive documentation with examples
- Live demo and test suite available
- Easy integration with existing projects

</td>
<td>

### 🔧 **Production Ready**

- Thoroughly tested and battle-tested
- Compatible with React 16.8+ and React 18
- SSR/SSG friendly
- Works with Next.js, Vite, and CRA

</td>
</tr>
</table>

## 📦 Installation

```bash
# Using npm
npm install mukul-react-hooks

# Using yarn
yarn add mukul-react-hooks

# Using pnpm
pnpm add mukul-react-hooks
```

## 🎮 Quick Start

```tsx
import { useTimeout, useMediaQuery, lib } from "mukul-react-hooks";

function MyComponent() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [startTimer] = useTimeout(() => console.log("Timer executed!"), 3000);

  return (
    <div>
      <p>Device: {isMobile ? "Mobile" : "Desktop"}</p>
      <button onClick={startTimer}>Start 3s Timer</button>
    </div>
  );
}
```

## 🪝 React Hooks Collection

<div align="center">

| Hook                                                 | Description                              | Use Case                     |
| ---------------------------------------------------- | ---------------------------------------- | ---------------------------- |
| [⏰ useTimeout](#-usetimeout)                        | Execute callbacks after specified delays | Debouncing, delayed actions  |
| [📱 useMediaQuery](#-usemediaquery)                  | Responsive design with CSS media queries | Responsive components        |
| [⬆️ useIsTopOfPage](#️-useistopofpage)               | Detect if user is at the top of page     | Scroll-based UI changes      |
| [🖥️ useFullScreen](#️-usefullscreen)                 | Manage fullscreen mode                   | Media players, presentations |
| [⚠️ useUnsavedChangeAlert](#️-useunsavedchangealert) | Warn users about unsaved changes         | Forms, editors               |

</div>

### ⏰ useTimeout

> Execute callbacks after specified delays with easy control and cleanup

<details>
<summary><strong>📋 API Reference</strong></summary>

```typescript
const [startTimeout, clearTimeout] = useTimeout(callback, delay);
```

**Parameters:**

- `callback: () => void` - Function to execute after delay
- `delay: number` - Delay in milliseconds

**Returns:**

- `[startTimeout, clearTimeout]` - Tuple with start and clear functions

</details>

<table>
<tr>
<td width="50%">

#### 🟡 JavaScript

```js
import { useTimeout } from "mukul-react-hooks";

function DelayedMessage() {
  const [startTimer] = useTimeout(() => {
    alert("3 seconds have passed!");
  }, 3000);

  return (
    <div>
      <button onClick={startTimer}>Start 3s Timer</button>
    </div>
  );
}
```

</td>
<td width="50%">

#### 🔵 TypeScript

```tsx
import { useTimeout } from "mukul-react-hooks";

function DelayedMessage(): JSX.Element {
  const [startTimer] = useTimeout<string>((message?: string) => {
    console.log(message || "Timer executed!");
  }, 3000);

  const handleClick = () => startTimer("Hello TypeScript!");

  return (
    <div>
      <button onClick={handleClick}>Start 3s Timer</button>
    </div>
  );
}
```

</td>
</tr>
</table>

### 📱 useMediaQuery

> Responsive design made easy with CSS media query detection

<details>
<summary><strong>📋 API Reference</strong></summary>

```typescript
const matches = useMediaQuery(query);
```

**Parameters:**

- `query: string` - CSS media query string

**Returns:**

- `boolean` - Whether the media query matches

</details>

```tsx
import { useMediaQuery } from "mukul-react-hooks";

function ResponsiveComponent() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(min-width: 769px) and (max-width: 1024px)");
  const isDesktop = useMediaQuery("(min-width: 1025px)");

  return (
    <div className={`layout ${isMobile ? "mobile" : isTablet ? "tablet" : "desktop"}`}>
      <h2>Current Device: {isMobile ? "📱 Mobile" : isTablet ? "📟 Tablet" : "🖥️ Desktop"}</h2>
      <p>Resize your window to see the magic! ✨</p>
    </div>
  );
}
```

### ⬆️ useIsTopOfPage

> Detect when users are at the top of the page for scroll-based UI changes

<details>
<summary><strong>📋 API Reference</strong></summary>

```typescript
const isTop = useIsTopOfPage(threshold?);
```

**Parameters:**

- `threshold?: number` - Scroll threshold in pixels (default: 0)

**Returns:**

- `boolean` - Whether user is at the top of the page

</details>

```tsx
import { useIsTopOfPage } from "mukul-react-hooks";

function ScrollIndicator() {
  const isTop = useIsTopOfPage();

  return (
    <div>
      <header className={`navbar ${!isTop ? "navbar-scrolled" : ""}`}>
        <h1>My Website</h1>
        {!isTop && <div className="scroll-indicator">📍 You've scrolled down</div>}
      </header>

      <main style={{ height: "200vh", padding: "2rem" }}>
        <h2>Scroll down to see the navbar change! 👇</h2>
        <p>Status: {isTop ? "⬆️ At the top" : "⬇️ Scrolled down"}</p>
      </main>
    </div>
  );
}
```

### 🖥️ useFullScreen

> Manage fullscreen mode with cross-browser compatibility

<details>
<summary><strong>📋 API Reference</strong></summary>

```typescript
const { isFullscreen, toggleFullscreen, enterFullscreen, exitFullscreen } = useFullScreen();
```

**Returns:**

- `isFullscreen: boolean` - Current fullscreen state
- `toggleFullscreen: () => void` - Toggle fullscreen mode
- `enterFullscreen: () => void` - Enter fullscreen mode
- `exitFullscreen: () => void` - Exit fullscreen mode

</details>

```tsx
import { useFullScreen } from "mukul-react-hooks";

function VideoPlayer() {
  const { isFullscreen, toggleFullscreen, enterFullscreen, exitFullscreen } = useFullScreen();

  return (
    <div className="video-container">
      <video controls width="100%" height="400">
        <source src="sample-video.mp4" type="video/mp4" />
      </video>

      <div className="controls">
        <button onClick={toggleFullscreen} className="fullscreen-btn">
          {isFullscreen ? "🔲 Exit Fullscreen" : "⛶ Enter Fullscreen"}
        </button>

        <div className="control-group">
          <button onClick={enterFullscreen}>🔍 Enter</button>
          <button onClick={exitFullscreen}>🔍 Exit</button>
        </div>
      </div>

      <p>Status: {isFullscreen ? "🖥️ Fullscreen Active" : "📱 Normal View"}</p>
    </div>
  );
}
```

### ⚠️ useUnsavedChangeAlert

> Prevent accidental data loss with unsaved change warnings

<details>
<summary><strong>📋 API Reference</strong></summary>

```typescript
useUnsavedChangeAlert(hasUnsavedChanges, message?);
```

**Parameters:**

- `hasUnsavedChanges: boolean` - Whether there are unsaved changes
- `message?: string` - Custom warning message

**Behavior:**

- Shows browser confirmation dialog when leaving page
- Prevents accidental navigation away from unsaved work

</details>

```tsx
import { useUnsavedChangeAlert } from "mukul-react-hooks";
import { useState } from "react";

function FormEditor() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [originalData] = useState({ name: "", email: "" });

  // Check if form has unsaved changes
  const hasUnsavedChanges = JSON.stringify(formData) !== JSON.stringify(originalData);

  // Show warning when leaving page with unsaved changes
  useUnsavedChangeAlert(
    hasUnsavedChanges,
    "You have unsaved changes. Are you sure you want to leave?"
  );

  return (
    <form>
      <div>
        <label>Name:</label>
        <input
          value={formData.name}
          onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
        />
      </div>

      <div>
        <label>Email:</label>
        <input
          value={formData.email}
          onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
        />
      </div>

      <div className="status">
        {hasUnsavedChanges ? "⚠️ Unsaved changes" : "✅ All changes saved"}
      </div>

      <button type="submit">Save Changes</button>
    </form>
  );
}
```

## 🛠️ Utility Library Functions

> A comprehensive collection of utility functions with full TypeScript support

<div align="center">

### 📚 Available Functions

| Category            | Functions                                                      | Description                               |
| ------------------- | -------------------------------------------------------------- | ----------------------------------------- |
| **🔤 String Utils** | `transformString`, `truncateStringEnd`, `truncateStringMiddle` | String manipulation and formatting        |
| **🔢 Number Utils** | `numberFormatWithCommas`, `internationalCurrencyConvert`       | Number formatting and currency conversion |
| **📧 Validation**   | `isValidEmail`, `isEmptyObject`                                | Data validation utilities                 |
| **🎨 Generators**   | `randomColor`, `generateUniqueId`                              | Random value generators                   |
| **📁 File Utils**   | `downloadString`                                               | File download utilities                   |
| **⏱️ Async Utils**  | `asyncDelay`, `waitSomeMoment`                                 | Async operation helpers                   |
| **📋 Array Utils**  | `arrayToCommaSeparatedText`                                    | Array manipulation                        |
| **📅 Date Utils**   | `unixToDateTime`                                               | Date and time utilities                   |

</div>

### 🚀 Quick Examples

<table>
<tr>
<td width="50%">

#### 🟡 JavaScript Usage

```js
import { lib } from "mukul-react-hooks";

const {
  arrayToCommaSeparatedText,
  randomColor,
  isValidEmail,
  numberFormatWithCommas,
  downloadString,
} = lib;

function UtilityDemo() {
  const handleDemo = () => {
    // String and array utilities
    console.log(arrayToCommaSeparatedText(["React", "Vue", "Angular"]));
    // → "React, Vue, Angular"

    // Validation
    console.log(isValidEmail("user@example.com"));
    // → true

    // Number formatting
    console.log(numberFormatWithCommas(1234567));
    // → "1,234,567"

    // Generate random color
    console.log(randomColor());
    // → "#ff6b35"
  };

  return (
    <div>
      <button onClick={handleDemo}>Run Demo</button>
      <button onClick={() => downloadString("Hello World!", "demo", "txt")}>
        📥 Download File
      </button>
    </div>
  );
}
```

</td>
<td width="50%">

#### 🔵 TypeScript Usage

```tsx
import { lib } from "mukul-react-hooks";

const {
  generateUniqueId,
  internationalCurrencyConvert,
  truncateStringEnd,
  unixToDateTime,
  asyncDelay,
} = lib;

async function TypeSafeDemo(): Promise<JSX.Element> {
  // Type-safe function calls
  const uniqueId: string = generateUniqueId();
  const currency: string | number = internationalCurrencyConvert(1500000);
  const truncated: string = truncateStringEnd("Long text here", 10);
  const dateTime: string = unixToDateTime(Date.now() / 1000);

  // Async operations with proper typing
  await asyncDelay(1000);

  const handleAsyncAction = async (): Promise<void> => {
    await asyncDelay(2000);
    console.log("Action completed!");
  };

  return (
    <div>
      <p>ID: {uniqueId}</p>
      <p>Currency: {currency}</p>
      <p>Truncated: {truncated}</p>
      <p>DateTime: {dateTime}</p>
      <button onClick={handleAsyncAction}>⏳ Async Action</button>
    </div>
  );
}
```

</td>
</tr>
</table>

### 📖 Detailed Function Reference

<details>
<summary><strong>🔍 Click to expand full API documentation</strong></summary>

```typescript
// String utilities
transformString(text: string): string                    // Convert to snake_case
truncateStringEnd(text: string, length: number): string  // Truncate with "..."
truncateStringMiddle(text: string, length: number, separator: string): string

// Number utilities
numberFormatWithCommas(number: number): string           // Add thousand separators
internationalCurrencyConvert(amount: number): string | number // Convert to K, M, B format

// Validation utilities
isValidEmail(email: string): boolean                     // Email validation
isEmptyObject(obj: object): boolean                      // Check if object is empty

// Generator utilities
randomColor(): string                                    // Generate random hex color
generateUniqueId(): string                              // Generate unique identifier

// File utilities
downloadString(content: string, filename: string, extension: string): void

// Async utilities
asyncDelay(ms: number): Promise<void>                   // Promise-based delay
waitSomeMoment(ms: number): Promise<void>               // Alternative delay function

// Array utilities
arrayToCommaSeparatedText(array: string[]): string     // Join array with commas

// Date utilities
unixToDateTime(timestamp: number): string              // Convert Unix timestamp to readable date
```

</details>

---

## 🤝 Contributing

We welcome contributions! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

<div align="center">

### 🔗 Links & Resources

| Resource                  | Link                                                                                                     | Description                    |
| ------------------------- | -------------------------------------------------------------------------------------------------------- | ------------------------------ |
| 📖 **Live Documentation** | [mukul-react-hooks.vercel.app](https://mukul-react-hooks.vercel.app)                                     | Interactive docs & test suite  |
| 📦 **NPM Package**        | [npmjs.com/package/mukul-react-hooks](https://www.npmjs.com/package/mukul-react-hooks)                   | Official package page          |
| 🐙 **GitHub Repository**  | [github.com/SamiurRahmanMukul/mukul-react-hooks](https://github.com/SamiurRahmanMukul/mukul-react-hooks) | Source code & issues           |
| 🐛 **Bug Reports**        | [GitHub Issues](https://github.com/SamiurRahmanMukul/mukul-react-hooks/issues)                           | Report bugs & request features |

</div>

## 📊 Package Stats

<div align="center">

![NPM Version](https://img.shields.io/npm/v/mukul-react-hooks?style=flat-square&logo=npm)
![NPM Downloads](https://img.shields.io/npm/dm/mukul-react-hooks?style=flat-square&logo=npm)
![Bundle Size](https://img.shields.io/bundlephobia/minzip/mukul-react-hooks?style=flat-square&logo=webpack)
![GitHub Stars](https://img.shields.io/github/stars/SamiurRahmanMukul/mukul-react-hooks?style=flat-square&logo=github)
![GitHub Forks](https://img.shields.io/github/forks/SamiurRahmanMukul/mukul-react-hooks?style=flat-square&logo=github)
![License](https://img.shields.io/github/license/SamiurRahmanMukul/mukul-react-hooks?style=flat-square)

</div>

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE.txt](LICENSE.txt) file for details.

## 👨‍💻 Author

<div align="center">

### Md. Samiur Rahman (Mukul)

[![Portfolio](https://img.shields.io/badge/🌐_Portfolio-srmukul.com-blue?style=for-the-badge)](https://srmukul.com)
[![GitHub](https://img.shields.io/badge/GitHub-SamiurRahmanMukul-black?style=for-the-badge&logo=github)](https://github.com/SamiurRahmanMukul)

</div>

---

<div align="center">

### 🌟 If this package helped you, please consider giving it a star

  <p align="center">
    Made with ❤️ by <a href="https://srmukul.com">Mukul</a>
  </p>

</div>
