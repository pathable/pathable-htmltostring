Package.describe({
  name: 'pathable-htmltostring',
  version: '0.0.1',
  documentation: 'README.md',
});

Package.registerBuildPlugin({
  name: 'htmlToString',
  use: ['ecmascript'],
  sources: [
    './html-to-string.js',
  ],
});


Package.onUse(function(api) {
  api.use('isobuild:compiler-plugin@1.0.0');
});
