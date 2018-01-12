var path = require("path");
var entry = { main: "./src/main/entry.tsx", list: "./src/main/entry.tsx" };
var output = {
  path: path.join(__dirname, '..', 'public', 'webpack'),
  publicPath: '//localhost:8080/webpack/',
  filename: '[name].js'
};
var devtool = "eval";
var rules = [
  {
    test: [/\.scss$/, /\.css$/],
    use: ["style-loader", "css-loader", "sass-loader"]
  },
  {
    test: /\.tsx?$/,
    use: "ts-loader"
  },
  {
    test: [/\.woff$/, /\.woff2$/, /\.ttf$/],
    use: "url-loader"
  },
  {
    test: [/\.eot$/, /\.svg(\?v=\d+\.\d+\.\d+)?$/],
    use: "file-loader"
  }
];
var plugins = [];
var resolve = { extensions: [".js", ".ts", ".tsx", ".css", ".scss", ".json"] };
var devServer = {
  port: 8080,
  disableHostCheck: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  host: "0.0.0.0",
  headers: { 'Access-Control-Allow-Origin': '*' }
};
module.exports = {
  entry,
  output,
  devtool,
  devServer,
  resolve,
  plugins,
  module: { rules },
};
