module.exports = function (api) {
  console.log("NODE_ENV is:", process.env.NODE_ENV);
  const isProduction = process.env.NODE_ENV === "production";
  api.cache(true);

  const presets = [
    "@babel/preset-env",
    [
      "@babel/preset-react",
      {
        runtime: "automatic",
      },
    ],
  ];
  const plugins = [
    !isProduction && "react-refresh/babel",
    [
      "@babel/plugin-transform-runtime",
      {
        useESModules: true,
        regenerator: false,
      },
    ],
  ].filter(Boolean);

  return {
    presets,
    plugins,
  };
};
