Package.describe({
  name: 'kenasco2010:juststart',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.addFiles(['juststart.js',

      'lib/jquery.simple-text-rotator.min.js',
      'lib/rangeSlider/js/ion.rangeSlider.min.js',
      'lib/jflickrfeed.min.js',
      'lib/jquery.validate.min.js',
      'lib/jquery.zoom.min.js',
      'lib/magnific-popup/jquery.magnific-popup.min.js',
      'lib/raty/jquery.raty.min.js',
      'lib/sharrre/jquery.sharrre.min.js',
      'lib/rs-slider.js'

  ], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('kenasco2010:juststart');
  api.addFiles('juststart-tests.js');
});
