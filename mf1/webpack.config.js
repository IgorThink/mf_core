
const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'mf1',
  filename: 'remoteEntry.js',
  exposes: {
    './Component': './src/app/forms/components/auth-form.component.ts',
    './Module': './src/app/forms/app-froms.module',
  },
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
});

