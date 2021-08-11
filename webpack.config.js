const path = require("path");
const mode =
  process.env.NODE_ENV == "production" ? "production" : "development";

const MiniCssExtractLoader = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",

  entry: ['babel-polyfill',"./src/index.js"],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },

  plugins: [new MiniCssExtractLoader()],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },

      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          MiniCssExtractLoader.loader,
          "css-loader",
          "sass-loader",
          "postcss-loader",
        ],
      },
    ],
  },
  devtool: "source-map",
  devServer: {
    contentBase: "./dist",
  },
};
