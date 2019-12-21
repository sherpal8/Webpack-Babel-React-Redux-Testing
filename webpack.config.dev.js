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
  },
  devServer: {
    //settings to serve the App locally in dev mode using webpack
    stats: "minimal", // minimise output in console so not much noise when running
    overlay: true, // overlay errors in browser
    historyApiFallback: true, // all request sent to index.html. Deeplinks handled by React-Router
    // last 3 entries below to offset open-issue between webpack and latest version of chrome
    disableHostCheck: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    https: false
  }
};
