# mukul-react-hooks - Collections of Custom React Hooks

Introducing the `mukul-react-hooks` NPM package, designed to streamline complex problem-solving within React web applications. Our custom hooks services offer an effortless solution for efficiently addressing intricate challenges. Experience seamless integration and enhanced functionality with `mukul-react-hooks`.

## Installation

```sh
npm i mukul-react-hooks     # using npm, Or
yarn add mukul-react-hooks  # using yarn, Or
pnpm add mukul-react-hooks  # using pnpm
```

## Collections of Custom React Hooks

1. [useMediaQuery - Hooks 🚀](#1-usemediaquery)

### 1. useMediaQuery

Custom React hook to detect whether the specified media query matches the current viewport. Example:

```js
"use client"; // if using Next.js to use `use client` directives

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

<p align="center">
  <strong><> HAPPY DEVELOPMENT 😄 & I 💖 PROGRAMMING <></strong>
</p>
