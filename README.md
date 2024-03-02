Introducing the `mukul-react-hooks` NPM package, designed to streamline complex problem-solving within React web applications. Our custom hooks services offer an effortless solution for efficiently addressing intricate challenges. Experience seamless integration and enhanced functionality with `mukul-react-hooks`.

## Installation

```sh
npm i mukul-react-hooks     # using npm, Or
yarn add mukul-react-hooks  # using yarn, Or
pnpm add mukul-react-hooks  # using pnpm
```

## Collections of Custom React Hooks

1. [useMediaQuery - Hooks 🚀](#1-usemediaquery)
2. [useIsTopOfPage - Hooks 🚀](#2-useistopofpage)
3. [useFullScreen - Hooks 🚀](#3-usefullscreen)

### 1. useMediaQuery

Custom React hook to detect whether the specified media query matches the current viewport.
Examples of usage are provided below:

```js
"use client"; // if using Next.js to use `use client` directive

import { useMediaQuery } from "mukul-react-hooks";

export default function MyComponents() {
  const isDesktop = useMediaQuery("(min-width: 992px)"); // define your preferable breakpoints

  return (
    <div style={{ backgroundColor: isDesktop ? "red" : "green" }}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel
      sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam
      eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!
    </div>
  );
}
```

### 2. useIsTopOfPage

Custom React hook to determine if the user is at the top of the page.
Examples of usage are provided below:

```js
"use client"; // if using Next.js to use `use client` directive

import { useIsTopOfPage } from "mukul-react-hooks";

export default function MyComponents() {
  const isTopOfPage = useIsTopOfPage();

  return (
    <div style={{ backgroundColor: isTopOfPage ? "red" : "green" }}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel
      sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam
      eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!
    </div>
  );
}
```

### 3. useFullScreen

A custom React hook to manage browser full screen functionality.
Examples of usage are provided below:

```js
"use client"; // if using Next.js to use `use client` directive

import { useFullScreen } from "mukul-react-hooks";

export default function MyComponents() {
  const { isFullScreen, toggleFullScreen } = useFullScreen();

  return (
    <button onClick={() => toggleFullScreen()}>
      {isFullScreen ? "Exit Full Screen" : "Enter Full Screen"}
    </button>
  );
}
```

<p align="center">
  HAPPY DEVELOPMENT 😄 & I 💖 PROGRAMMING.
</p>
