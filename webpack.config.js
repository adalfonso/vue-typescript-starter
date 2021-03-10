const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/ts/app.ts",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/app.js",
  },

  resolve: {
    alias: { "@": path.resolve(__dirname, "src"), vue: "vue/dist/vue.js" },
    extensions: [".ts", ".js", ".json"],
  },

  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },

  devServer: {
    contentBase: path.join(__dirname, "/dist"),
    compress: true,
    port: 9000,
    hot: true,
  },
};
