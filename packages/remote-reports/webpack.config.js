const path = require("path");
const webpack = require("webpack");
const deps = require("./package.json").dependencies;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
const Dotenv = require("dotenv-webpack");
const WorkboxPlugin = require("workbox-webpack-plugin");
const { FederatedTypesPlugin } = require("@module-federation/typescript");

module.exports = (env) => {
  const federationConfig = {
    name: "remote_reports",
    filename: "remoteEntry.js",
    exposes: {
      "./ReportForm": "./src/views/ReportForm",
    },
    shared: {
      ...deps,
      "react-router-dom": {
        singleton: true,
        requiredVersion: deps["react-router-dom"],
      },
      "react-dom": {
        singleton: true,
        requiredVersion: deps["react-dom"],
      },
      react: {
        singleton: true,
        requiredVersion: deps["react"],
      },
      "@mui/material": {
        singleton: true,
        requiredVersion: deps["@mui/material"],
      },
      "@emotion/react": {
        singleton: true,
        requiredVersion: deps["@emotion/react"],
      },
      "@emotion/styled": {
        singleton: true,
        requiredVersion: deps["@emotion/styled"],
      },
      formik: {
        singleton: true,
        requiredVersion: deps["formik"],
      },
    },
  };

  return {
    entry: "./src/index",
    mode: env.NODE_ENV === "development" ? "development" : "production",
    devtool: "inline-source-map",
    target: "web",
    devServer: {
      static: {
        directory: "./dist",
      },
      port: 3002,
      historyApiFallback: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":
          "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers":
          "X-Requested-With, content-type, Authorization",
      },
    },
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
    output: {
      publicPath: "auto",
    },
    resolve: {
      extensions: [".jsx", ".js", ".ts", ".tsx", ".json"],
    },
    infrastructureLogging: {
      level: "log",
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          type: "javascript/auto",
          resolve: {
            fullySpecified: false,
          },
        },
        {
          test: /\.jsx?$/,
          loader: require.resolve("babel-loader"),
          exclude: /node_modules/,
          options: {
            presets: [require.resolve("@babel/preset-react")],
          },
        },
        {
          test: /\.(ts|tsx)$/,
          loader: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
      new Dotenv(),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
      /*     new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
      maximumFileSizeToCacheInBytes: 4000000000,
    }), */
      new Dotenv({
        path: `./environments/.env.${env.NODE_ENV}`,
        systemvars: true,
      }),
      new FederatedTypesPlugin({
        federationConfig,
        disableTypeCompilation:
          env.NODE_ENV === "production" || Boolean(process.env.FEDERATION_TYPES)
            ? false
            : true,

        disableDownloadingRemoteTypes:
          env.NODE_ENV === "production" || Boolean(process.env.FEDERATION_TYPES)
            ? false
            : true,
      }),
      new ModuleFederationPlugin(federationConfig),
    ],
  };
};
