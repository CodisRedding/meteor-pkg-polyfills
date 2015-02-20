Package.describe({
  name: 'fourq:polyfill',
  summary: 'Polyfilling dat js',
  git: 'https://github.com/fourq/meteor-pkg-polyfills.git',
  version: '1.0.0'
});

Package.onUse(function(api) {
  api.versionsFrom('0.9.4');
  api.addFiles('polyfill.js');
});
