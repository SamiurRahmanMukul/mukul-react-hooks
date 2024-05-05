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
6. [useLibrary - Hook 🚀](#6-uselibrary)

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

## 6. useLibrary

```js
"use client";

import { useLibrary } from "mukul-react-hooks";

export default async function MyComponents() {
  const {
    arrayToCommaSeparatedText,
    asyncDelay,
    downloadString,
    internationalCurrencyConvert,
    isEmptyObject,
    isValidEmail,
    numberFormatWithCommas,
    randomColor,
    transformString,
    truncateStringEnd,
    truncateStringMiddle,
    unixToDateTime,
    waitSomeMoment,
  } = useLibrary;

  // Outputs
  console.log(arrayToCommaSeparatedText(["a", "b", "c"])); // a, b, c
  console.log(internationalCurrencyConvert(1000000)); // 1 M
  console.log(isEmptyObject({})); // true
  console.log(isValidEmail("example@mail.com")); // true
  console.log(numberFormatWithCommas(1000000)); // 1,000,000
  console.log(randomColor()); // #ff0000 --> generated random color in hex format
  console.log(transformString("My Name Is Mukul")); // my_name_is_mukul
  console.log(truncateStringEnd("My Name Is Mukul", 10)); // My Name Is...
  console.log(truncateStringMiddle("My Name Is Mukul", 10, "...")); // My ...ukul
  console.log(unixToDateTime(1668300000)); // 20 Jan 1970, 1:25 PM

  // Asynchronous Components or JavaScript functions delay
  asyncDelay(3000); // define time with milliseconds

  // Any functions inner code next line exexution delay
  function example() {
    console.log("exuction start");
    waitSomeMoment(3000); // define time with milliseconds
    console.log("delay exexution after 3000 milliseconds");
  }

  return (
    <div>
      {/* 
          Download any string with your prefarable extention:
          --> 1st parameter recived your string, 
          --> 2nd parameter recived file name and 
          --> 3rd parameter recived file extention
      */}
      <button onClick={() => downloadString("My Name Is Mukul", "mukul", "txt")}>Download</button>
    </div>
  );
}
```

<p align="center">
  HAPPY DEVELOPMENT 🙂
</p>
