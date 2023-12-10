const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  target: "web",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/",
            },
          },
        ],
      },
      {
        test: /\.json$/,
        type: "asset/resource",
        generator: {
          filename: "feed/[name][ext]",
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  devServer: {
    port: 8000,
    static: [
      {
        directory: path.join(__dirname, "dist"),
        publicPath: "/",
        watch: true,
      },
      {
        directory: path.join(__dirname, "assets"),
        publicPath: "/assets",
        watch: true,
      },
      {
        directory: path.join(__dirname, "feed"),
        publicPath: "/feed",
        watch: true,
      },
    ],
    hot: true,
    open: true,
    historyApiFallback: true,
  },
};
