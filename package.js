Package.describe({
  name: 'superlumen:react-jsonschema-form',
  version: '0.11.0_1',
  // Brief, one-line summary of the package.
  summary: 'A browserified react-jsonschema-form',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  // documentation: 'README.md'
});

Npm.depends({
  'react-jsonschema-form': '0.11.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2');

  // Export `Form` on both client and server
  api.export('Form');

  // User browserify to load `Form` on the client
  api.use('cosmos:browserify@0.9.2', 'client');
  api.addFiles('react-jsonschema-form.browserify.js', 'client');

  // Use `Npm.require()` to load Form on the server
  api.addFiles('react-jsonschema-form.server.js', 'server');
})
