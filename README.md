# Issue with HMR when using single-spa and single-spa-react

[single-spa](https://single-spa.js.org/) is an upcoming library for working with microfrontends.

I have deployed a simple single-spa application at <https://sspa-hmr.herokuapp.com/> that is running a "single-spa-root-config" which then uses SystemJS to load and mount a microfrontend application to the page.

One great feature with single-spa is the [import-map-overrides](https://github.com/joeldenning/import-map-overrides/) feature that allows you to tell the browser to fetch certain SystemJS modules from another URL (e.g. localhost). This is really useful when working with microfrontends because you only have to spin up a local webpack-dev-server for the one you're working with and then override that module to your localhost. All other microfrontends will be loaded from the normal deployment.

## How to reproduce the issue

You will need authorized ssl certificates (or you'll need to bypass the security check with e.g. chrome) if you're using a mac use [this guide](docs/how-to-install-certs.md).

1. Clone this repo and step into the folder `hmr-react`
2. Run `npm install`
3. Run `npm start` (if you didn't install the certs with the guide above you'll need to either remove or update the wepack.config.js so that the devServer.https points to correct certs or none at all)
4. Open <https://sspa-hmr.herokuapp.com/>
5. Click the little override icon in the lower right corner of the page
6. Find and click the item `@hmr/react` in the list and enter `8500` in the input box for the override value
7. Reload the page
8. Now the `@hmr/react` module will be loaded from <https://localhost:8500/hmr-react-js> with webpack-dev-server

The webpack config is configured with ReactRefreshWebpackPlugin and I see a two issues:

First I think the websocket URL configuration could be picked up from the values in webpack-config.js devServer.client property.

When changing something in the React app in e.g. `src/root.component.js` It appears as if the HMR was updated correctly according to the logs but the page itself does not refresh the module.
