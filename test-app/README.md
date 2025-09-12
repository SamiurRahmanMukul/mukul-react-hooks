# Mukul React Hooks Test Application

This is a comprehensive testing application for the `mukul-react-hooks` npm package. It provides interactive demos and real-world scenarios for all hooks and library functions.

## Features

### 🎣 React Hooks Tests

- **useFullScreen** - Cross-browser fullscreen functionality
- **useIsTopOfPage** - Scroll position detection
- **useMediaQuery** - Responsive design queries
- **useTimeout** - Delayed execution with cleanup
- **useUnsavedChangeAlert** - Prevent data loss warnings

### 📚 Library Functions Tests

- **arrayToCommaSeparatedText** - Array to string conversion
- **asyncDelay** - Promise-based delays
- **downloadString** - File download from strings
- **generateUniqueId** - Unique identifier generation
- **internationalCurrencyConvert** - Currency conversion utilities
- **isEmptyObject** - Object emptiness validation
- **isValidEmail** - Email format validation
- **numberFormatWithCommas** - Number formatting with commas
- **randomColor** - Random color generation
- **transformString** - String transformation utilities
- **truncateStringEnd** - End-truncation with ellipsis
- **truncateStringMiddle** - Middle-truncation preserving ends
- **unixToDateTime** - Unix timestamp conversion
- **waitSomeMoment** - Execution pausing utilities

## Getting Started

### Prerequisites

- Node.js 16+
- npm

### Installation

```bash
# From the main package directory
npm run test:install

# Or directly in test-app directory
cd test-app
npm install
```

### Development Server

```bash
# From the main package directory
npm run test:dev

# Or directly in test-app directory
cd test-app && npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build for Production

```bash
# From the main package directory
npm run test:build

# Or directly in test-app directory
cd test-app
npm run build
```

## Project Structure

```path
test-app/
├── src/
│   ├── components/
│   │   ├── hooks/          # Hook test components
│   │   └── library/        # Library function test components
│   ├── App.tsx            # Main application with routing
│   ├── main.tsx           # React entry point
│   └── index.css          # Global styles
├── public/
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## Testing Scenarios

Each test component provides:

- **Interactive demos** with real-time feedback
- **Multiple test cases** covering edge cases
- **Real-world examples** showing practical usage
- **Visual feedback** with status indicators
- **Code examples** demonstrating integration
- **Performance insights** and implementation details

## Technology Stack

- **Vite** - Fast build tool and dev server
- **React 18** - UI framework
- **TypeScript** - Type safety
- **React Router** - Client-side routing
- **CSS Modules** - Scoped styling

## Usage Examples

### Testing Hooks

Navigate to any hook test (e.g., `/hooks/fullscreen`) to:

- See the hook in action
- Test different scenarios
- View implementation examples
- Understand browser compatibility

### Testing Library Functions

Navigate to any library test (e.g., `/lib/randomColor`) to:

- Input custom parameters
- See real-time results
- Test edge cases
- Copy generated code examples

## Contributing

This test application serves as both documentation and validation for the mukul-react-hooks package. When adding new hooks or library functions:

1. Create corresponding test components
2. Add comprehensive test scenarios
3. Include real-world usage examples
4. Update the main App.tsx routing

## License

MIT License - see the main package LICENSE.txt for details.
