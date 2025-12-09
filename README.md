<div align="center">

# 🪝 mukul-react-hooks

<p align="center">
  <img src="https://img.shields.io/npm/v/mukul-react-hooks?style=for-the-badge&logo=npm&color=CB3837" alt="NPM Version" />
  <img src="https://img.shields.io/npm/dt/mukul-react-hooks?style=for-the-badge&logo=npm&color=CB3837" alt="NPM Downloads" />
  <img src="https://img.shields.io/github/license/SamiurRahmanMukul/mukul-react-hooks?style=for-the-badge&color=green" alt="License" />
  <img src="https://img.shields.io/bundlephobia/minzip/mukul-react-hooks?style=for-the-badge&logo=webpack&color=8CC84B" alt="Bundle Size" />
</p>

<p align="center">
  <strong>A comprehensive collection of custom React hooks and Utility functions.</strong>
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

- Full TypeScript support with comprehensive type definitions.
- IntelliSense and autocompletion in modern IDEs.
- Type safety for all hooks and utility functions.
- Zero breaking changes for JavaScript users.

</td>
<td>

### ⚡ **Performance Optimized**

- Tree-shakable exports for minimal bundle size.
- Optimized for modern React applications.
- No external dependencies.
- Lightweight and efficient.

</td>
</tr>
<tr>
<td>

### 🛠️ **Developer Experience**

- Intuitive and consistent API design.
- Comprehensive documentation with examples.
- Live demo and test suite available.
- Easy integration with existing projects.

</td>
<td>

### 🔧 **Production Ready**

- Thoroughly tested and battle-tested.
- Compatible with React 16.8+ and React 18.
- SSR/SSG friendly.
- Works with Next.js, Vite, and CRA.

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

Quick snapshot of available hooks. Visit the docs for full usage and examples.

| Hook                  | Description                                       | Docs                                                                              |
| --------------------- | ------------------------------------------------- | --------------------------------------------------------------------------------- |
| useTimeout            | Execute callbacks after specified delays          | [Documentation](https://mukul-react-hooks.vercel.app/hooks/useTimeout)            |
| useMediaQuery         | Responsive design with CSS media queries          | [Documentation](https://mukul-react-hooks.vercel.app/hooks/useMediaQuery)         |
| useIsTopOfPage        | Detect when the user is at the top of the page    | [Documentation](https://mukul-react-hooks.vercel.app/hooks/useIsTopOfPage)        |
| useFullScreen         | Manage fullscreen mode with cross-browser support | [Documentation](https://mukul-react-hooks.vercel.app/hooks/useFullScreen)         |
| useUnsavedChangeAlert | Warn users about unsaved changes                  | [Documentation](https://mukul-react-hooks.vercel.app/hooks/useUnsavedChangeAlert) |

## 🛠️ Utility Library Functions

Lightweight utilities for everyday tasks. See docs for examples and typing.

| Function                     | Purpose                                 | Docs                                                                                       |
| ---------------------------- | --------------------------------------- | ------------------------------------------------------------------------------------------ |
| transformString              | Convert text to snake_case              | [Documentation](https://mukul-react-hooks.vercel.app/library/transformString)              |
| truncateStringEnd            | Truncate text with ellipsis             | [Documentation](https://mukul-react-hooks.vercel.app/library/truncateStringEnd)            |
| truncateStringMiddle         | Truncate text in the middle             | [Documentation](https://mukul-react-hooks.vercel.app/library/truncateStringMiddle)         |
| numberFormatWithCommas       | Add thousand separators                 | [Documentation](https://mukul-react-hooks.vercel.app/library/numberFormatWithCommas)       |
| internationalCurrencyConvert | Format numbers as K/M/B                 | [Documentation](https://mukul-react-hooks.vercel.app/library/internationalCurrencyConvert) |
| isValidEmail                 | Validate email strings                  | [Documentation](https://mukul-react-hooks.vercel.app/library/isValidEmail)                 |
| isEmptyObject                | Check if an object has no keys          | [Documentation](https://mukul-react-hooks.vercel.app/library/isEmptyObject)                |
| randomColor                  | Generate a random hex color             | [Documentation](https://mukul-react-hooks.vercel.app/library/randomColor)                  |
| generateUniqueId             | Create a unique identifier              | [Documentation](https://mukul-react-hooks.vercel.app/library/generateUniqueId)             |
| downloadString               | Download text content as a file         | [Documentation](https://mukul-react-hooks.vercel.app/library/downloadString)               |
| asyncDelay                   | Promise-based delay helper              | [Documentation](https://mukul-react-hooks.vercel.app/library/asyncDelay)                   |
| waitSomeMoment               | Alternative delay helper                | [Documentation](https://mukul-react-hooks.vercel.app/library/waitSomeMoment)               |
| arrayToCommaSeparatedText    | Join arrays with commas                 | [Documentation](https://mukul-react-hooks.vercel.app/library/arrayToCommaSeparatedText)    |
| unixToDateTime               | Convert Unix timestamp to readable date | [Documentation](https://mukul-react-hooks.vercel.app/library/unixToDateTime)               |

---

## 🤝 Contributing

We welcome contributions! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

<div align="center">

### 🔗 Links & Resources

| Resource                  | Link                                                                                                                   | Description                    |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| 📖 **Live Documentation** | [mukul-react-hooks.vercel.app](https://mukul-react-hooks.vercel.app)                                                   | Interactive docs & test suite  |
| 📦 **NPM Package**        | [npmjs.com/package/mukul-react-hooks](https://www.npmjs.com/package/mukul-react-hooks)                                 | Official package page          |
| 🐙 **GitHub Repository**  | [github.com/SamiurRahmanMukul/mukul-react-hooks](https://github.com/SamiurRahmanMukul/mukul-react-hooks)               | Source code & issues           |
| 🐛 **Bug Reports**        | [github.com/SamiurRahmanMukul/mukul-react-hooks/issues](https://github.com/SamiurRahmanMukul/mukul-react-hooks/issues) | Report bugs & request features |

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
