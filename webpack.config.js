const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", // Chèn CSS vào DOM
          "css-loader",   // Biến CSS thành module
          {
            loader: "sass-loader", // Biến SCSS thành CSS
            options: {
              implementation: require("sass"), // Đảm bảo sử dụng Dart Sass
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".scss"],
  },
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
