import webpack from "webpack";
import path from "path";

const WebpackConfigBase: webpack.Configuration = {
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true
          }
        }
      }
    ]
  },

  output: {
    path: path.join(__dirname, "..", "app"),
    libraryTarget: "commonjs2"
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx", ".json"]
  },

  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: "production"
    })
  ]
};

export default WebpackConfigBase;