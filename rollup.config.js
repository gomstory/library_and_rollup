import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import filesize from "rollup-plugin-filesize";
import json from 'rollup-plugin-json';

const env = process.env.NODE_ENV;
const pkg = require("./package.json");

export default {
  input: "src/index.js",
  output: {
    name: "webpackNumber",
    file: {
      es: pkg.module,
      umd: pkg.main
    }[env],
    format: env
  },
  external: ["lodash"],
  plugins: [
    resolve(),
    json(),
    babel({
      exclude: "node_modules/**",
      babelrc: true
    }),
    commonjs(),
    filesize()
  ]
};