const fs = require("fs");
const path = require("path");
const homedir = require("os").homedir();
const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const readCertificate = (certName) =>
  fs.readFileSync(path.join(homedir, ".certs", certName), "utf8");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "hmr",
    projectName: "react",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    // output: {
    //   library: "@hmr/react",
    // },
    plugins: [
      new ReactRefreshWebpackPlugin({
        // library: "@hmr/react",
        overlay: {
          sockHost: "localhost",
          sockPort: 8500,
          sockProtocol: "wss",
        },
      }),
    ],
    devServer: {
      client: {
        webSocketURL: {
          hostname: "localhost",
        },
      },
      https: {
        key: readCertificate("key.pem"),
        cert: readCertificate("cert.pem"),
      },
    },
  });
};
