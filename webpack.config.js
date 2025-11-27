const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Project",
      template: './src/template.html',
    }),
  ],
  // НОВАЯ СЕКЦИЯ ДЛЯ ЗАГРУЗЧИКОВ
  module: {
    rules: [
      {
        test: /\.css$/i, // Проверяет, заканчивается ли файл на .css
        use: ["style-loader", "css-loader"], // Порядок важен!
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource', 
      },
    ],
  },
  devServer: {
    static: "./dist", // Говорим серверу, что готовые файлы лежат в папке dist
  },
};
