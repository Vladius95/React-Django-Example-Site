const path = require("path");
const webpack = require("webpack");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || "true"))
});

module.exports = {
  entry: {
    main: path.join(__dirname, "static/index.ts")
  },
  output: {
    pathinfo: true,
    path: path.join(__dirname, "build"),
    filename: "bundle.js"
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      static: path.resolve("./static")
    }
  },
  plugins: [
    definePlugin,
    new BrowserSyncPlugin({
      host: process.env.IP || "localhost",
      port: process.env.PORT || 3000,
      server: {
        baseDir: "build",
        index: "index.html"
      }
    }),
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, "data/**/*"),
        to: path.join(__dirname, "build")
      }
    ]),
    new HtmlWebpackPlugin({
      title: "React Examples",
      template: "template.html",
      filename: "index.html" // output file
    })
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: "/node-modules/"
      },
      {
        test: /\.scss?$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              // minimize: true,
              url: false
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: "url-loader",
        options: {
          limit: 25000
        }
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|)$/,
        loader: "url-loader",
        options: {
          limit: 8192,
          name: "[path][name].[ext]",
          context: "fonts" // prevent display of src/ in filename
        }
      }
    ]
  },
  devtool: "source-map",
  mode: "development"
};
