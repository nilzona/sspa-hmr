# Issue with HMR when using single-spa and single-spa-react

[single-spa](https://single-spa.js.org/) is an upcoming library for working with microfrontends.

## How to reproduce the issue

This repo requires that you have `yarn` installed. https://yarnpkg.com/

1. Clone this repo and step into the folder
2. Run `yarn`
3. Run `yarn start
4. Open <http://localhost:9000/>
5. Open devtools and verify that HMR is enabled
6. Change something in the `packages/hmr-react/src/root.component.js`. E.g. the text in the section element
7. Expected behaviour is that HMR will update the text with no reload.
8. Actual bevavior, nothing happens, no reload, no update.

The webpack config is configured with ReactRefreshWebpackPlugin and I see a two issues:

First I think the websocket URL configuration could be picked up from the values in webpack-config.js devServer.client property.

When changing something in the React app in e.g. `src/root.component.js` It appears as if the HMR was updated correctly according to the logs but the page itself does not refresh the module.
