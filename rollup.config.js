import babel from "rollup-plugin-babel";
import {
  uglify
} from "rollup-plugin-uglify";
export default {
  input: "src/main.js",
  output: {
    file: "dist/index.js",
    format: "cjs",
    name: "evenbus",
    minify: true
  },
  plugins: [
    babel({
      exclude: "node_modules/**"
    }),
    uglify()
  ]
};