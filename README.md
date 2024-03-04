# mukul-react-hooks

Introducing the `mukul-react-hooks` NPM package, designed to streamline complex problem-solving within React web applications. Our custom hooks services offer an effortless solution for efficiently addressing intricate challenges. Experience seamless integration and enhanced functionality with `mukul-react-hooks`.

## Installation

```sh
npm i mukul-react-hooks
```

## Collections of Custom React Hooks

1. [useTimeout - Hook 🚀](#1-usetimeout)
2. [useMediaQuery - Hook 🚀](#2-usemediaquery)
3. [useIsTopOfPage - Hook 🚀](#3-useistopofpage)
4. [useFullScreen - Hook 🚀](#4-usefullscreen)
5. [useUnsavedChangeAlert - Hook 🚀](#5-useunsavedchangealert)

### 1. useTimeout

Custom React hook to handle a timeout and execute a callback function after the specified delay.

```js
"use client";

import { useTimeout } from "mukul-react-hooks";

export default function MyComponents() {
  const [timeout] = useTimeout(() => {
    // your codeblocks
  }, 3000); // define time with milliseconds

  timeout();

  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel
      sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam
      eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!
    </div>
  );
}
```

### 2. useMediaQuery

Custom React hook to detect whether the specified media query matches the current viewport.

```js
"use client";

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

### 3. useIsTopOfPage

Custom React hook to determine if the user is at the top of the page.

```js
"use client";

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

### 4. useFullScreen

A custom React hook to manage browser full screen functionality.

```js
"use client";

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

### 5. useUnsavedChangeAlert

A custom React hook that provides functionality for handling unsaved changes and displaying an alert when attempting to leave the page.

```js
"use client";

import { useUnsavedChangeAlert } from "mukul-react-hooks";
import { useState } from "react";

export default function MyComponents() {
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(true);

  // Display an alert only when the value of `hasUnsavedChanges` is `true`.
  useUnsavedChangesAlert(hasUnsavedChanges);

  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel
      sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam
      eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!
    </div>
  );
}
```

<p align="center">
  HAPPY DEVELOPMENT 😄😊🙂
</p>
