import babel from "rollup-plugin-babel";

export default {
  input: "src/main.js",
  output: {
    file: "bundle.js",
    format: "cjs",
    name: "evenbus",
    minify: true
  },
  plugins: [
    babel({
      exclude: "node_modules/**"
    })
  ]
};
