const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'core', // Name of the microfrontend
  remotes: {
    childMfe: 'mf1@http://localhost:4201/remoteEntry.js', // Reference the child microfrontend
  },
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
});
