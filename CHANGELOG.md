# Changelog

All notable changes to this project will be documented in this file.

## [2.0.0] - 2025-09-11

### 🎉 Major Release: Full TypeScript Support

#### Added

- **Full TypeScript Support**: Complete rewrite of all hooks and utility functions in TypeScript
- **Type Definitions**: Comprehensive `.d.ts` files for all exports
- **Dual Module Support**: Both CommonJS and ES modules build outputs
- **Type Safety**: Strict TypeScript configuration with proper type checking
- **Enhanced IDE Support**: IntelliSense and autocompletion for all functions and hooks

#### Changed

- **Source Files**: Migrated all JavaScript files (`.js`) to TypeScript (`.ts`)
- **Build Process**: Updated Rollup configuration to support TypeScript compilation
- **Package Configuration**: Added proper exports map for module resolution
- **Dependencies**: Moved React dependencies to peerDependencies for better compatibility

#### Enhanced Hooks

- `useFullScreen`: Added proper vendor prefix typing and return type definitions
- `useTimeout`: Generic type support for callback arguments
- `useMediaQuery`: Improved parameter and return type validation
- `useIsTopOfPage`: Explicit boolean return type
- `useUnsavedChangeAlert`: Proper event typing for browser APIs

#### Enhanced Library Functions

- `arrayToCommaSeparatedText`: Type-safe array parameter
- `asyncDelay`: Promise<void> return type
- `downloadString`: Strict parameter typing
- `generateUniqueId`: String return type guarantee
- `internationalCurrencyConvert`: Union return types (string | number)
- `isEmptyObject`: Generic object parameter
- `isValidEmail`: String parameter validation
- `numberFormatWithCommas`: Flexible number/string input
- `randomColor`: Guaranteed string format
- `transformString`: String manipulation with type safety
- `truncateStringEnd`: Parameter validation
- `truncateStringMiddle`: Optional parameters with defaults
- `unixToDateTime`: Number timestamp parameter
- `waitSomeMoment`: Blocking delay with number parameter

#### Technical Improvements

- **TypeScript Configuration**: Optimized tsconfig.json for React projects
- **Build Optimization**: Separate CommonJS and ES module builds
- **Declaration Maps**: Source map support for TypeScript definitions
- **Rollup Integration**: @rollup/plugin-typescript for seamless compilation
- **Package Exports**: Modern package.json exports field for better module resolution

#### Backward Compatibility

- **Zero Breaking Changes**: All existing JavaScript usage patterns remain functional
- **Gradual Migration**: Projects can migrate to TypeScript gradually
- **Runtime Compatibility**: Same runtime behavior for all functions

#### Documentation

- **Updated README**: Comprehensive TypeScript examples alongside JavaScript
- **Type Examples**: Detailed usage patterns for TypeScript projects
- **Migration Guide**: Clear instructions for upgrading from JavaScript

### Files Changed

- All source files converted from `.js` to `.ts`
- Updated build configuration (rollup.config.js)
- Enhanced package.json with TypeScript support
- Comprehensive README updates
- Added TypeScript configuration (tsconfig.json)

### Breaking Changes

None - this release maintains full backward compatibility while adding TypeScript support.

### Migration Guide

For existing JavaScript users: No changes required - continue using the package as before.

For TypeScript users:

1. Update your imports (no changes needed)
2. Enjoy enhanced IntelliSense and type checking
3. Optionally add explicit type annotations for better type safety

---

## [1.1.5] - Previous Release

Previous JavaScript-only version. See git history for earlier changelog entries.
