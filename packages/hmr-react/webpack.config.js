const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "sspa-hmr",
    projectName: "hmr-react",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    plugins: [
      new ReactRefreshWebpackPlugin({
        // library: "@hmr/react",
        overlay: {
          sockHost: "localhost",
          sockPort: 8500,
          sockProtocol: "ws",
        },
      }),
    ],
    // modify the webpack config however you'd like to by adding to this object
  });
};
