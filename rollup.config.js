import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-minification";

const devEnv = process.env.NODE_ENV === "development";

export default [
  // ES module build
  {
    input: "src/index.ts",
    external: ["react", "react-dom"],
    plugins: [
      typescript({
        tsconfig: "./tsconfig.json",
        declaration: true,
        declarationDir: "./dist",
        rootDir: "./src",
      }),
    ],
    output: {
      file: "dist/index.esm.js",
      format: "es",
      sourcemap: devEnv ? "inline" : false,
      plugins: [
        terser({
          ecma: 2020,
          mangle: { toplevel: true },
          compress: {
            module: true,
            toplevel: true,
            unsafe_arrows: true,
            drop_console: !devEnv,
            drop_debugger: !devEnv,
          },
          output: { quote_style: 1 },
        }),
      ],
    },
  },
  // CommonJS build
  {
    input: "src/index.ts",
    external: ["react", "react-dom"],
    plugins: [
      typescript({
        tsconfig: "./tsconfig.json",
        declaration: false,
        rootDir: "./src",
      }),
    ],
    output: {
      file: "dist/index.js",
      format: "cjs",
      sourcemap: devEnv ? "inline" : false,
      plugins: [
        terser({
          ecma: 2020,
          mangle: { toplevel: true },
          compress: {
            module: true,
            toplevel: true,
            unsafe_arrows: true,
            drop_console: !devEnv,
            drop_debugger: !devEnv,
          },
          output: { quote_style: 1 },
        }),
      ],
    },
  },
];
