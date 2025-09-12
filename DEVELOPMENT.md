# mukul-react-hooks - Development Guide

Introducing the `mukul-react-hooks` NPM package, designed to streamline complex problem-solving within React web applications. Our custom hooks services offer an effortless solution for efficiently addressing intricate challenges. Experience seamless integration and enhanced functionality with `mukul-react-hooks`.

## 1. List of Hooks are Developed

1. useTimeout [✅ DONE]
2. useMediaQuery [✅ DONE]
3. useIsTopOfPage [✅ DONE]
4. useFullScreen [✅ DONE]
5. useUnsavedChangeAlert [✅ DONE]
6. useCountryList [🚀 COMING SOON]
7. useReactToPrint [🚀 COMING SOON]
8. useScreenSize [🚀 COMING SOON]
9. useCopyClipboard [🚀 COMING SOON]
10. useDebounce [🚀 COMING SOON]
11. useResponsive [🚀 COMING SOON]

## 2. List of Hooks are Library

1. arrayToCommaSeparatedText [✅ DONE]
2. asyncDelay [✅ DONE]
3. downloadString [✅ DONE]
4. generateUniqueId [✅ DONE]
5. internationalCurrencyConvert [✅ DONE]
6. isEmptyObject [✅ DONE]
7. isValidEmail [✅ DONE]
8. numberFormatWithCommas [✅ DONE]
9. randomColor [✅ DONE]
10. transformString [✅ DONE]
11. truncateStringEnd [✅ DONE]
12. truncateStringMiddle [✅ DONE]
13. unixToDateTime [✅ DONE]
14. waitSomeMoment [✅ DONE]

## 3. How to build NPM Package and testing locally

A. Generate .tgz file to run bellow command:

```sh
npm run pack
```

B. After generate copy .tgz extension file to Create new React/Next project or existing React/Next project root directory paste .tgz extension file. Then `package.json` file inside `dependencies` object inside example looks like add package name. Be sure you'r using generated .tgz extension file name and version are same.

```json
"mukul-react-hooks": "file:mukul-react-hooks-<version>.tgz"
```

C. Then run command `npm install` in your React/Next project and continue to testing project

## 4. How to version Published/Unpublished in NPM registry

A. Login NPM registry using your credential to your project root directory path open your computer terminal and run bellow command:

```sh
npm login
```

B. Publish your updated package to `package.json` file update `version` to replace your preferable version and make sure updated version is current version then larger. Then your project root directory path open your computer terminal and run bellow command:

```sh
npm publish
```

C. To verify the capability of unblushing a specific version from the NPM registry, please follow these steps:

1. Navigate to the root directory of your project on your computer.
2. Open your terminal.
3. Run the following command, making sure to specify the version you intend to unpublished:

```sh
npm publish <your-package-name>@<version>
```

NPM publish <your-package-name>@<version> Replace <your-package-name> with the name of your package and <version> with the specific version you wish to publish.

This process will help ensure that the correct version is unpublished from the NPM registry.

<p align="center">
  HAPPY CODDING 🙂
</p>
