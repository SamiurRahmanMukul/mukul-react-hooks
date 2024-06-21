import { terser } from "rollup-plugin-minification";

const devEnv = process.env.NODE_ENV === "development";

export default [
  {
    input: "src/index.js",
    external: ["react", "react-dom"],
    output: {
      file: "dist/index.js",
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
];
