const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

process.env.NODE_ENV = "development";

module.exports = {
  mode: "development", // disable production only features
  target: "web", // the target app is for the browser
  devTool: "cheap-module-source-map", // source map debugging to view code in browser
  entry: "./src/index",
  output: {
    // there is no output in 'dev' as stored in RAM memory, but
    // webpack still needs the output config
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "bundle.js"
  }
};
