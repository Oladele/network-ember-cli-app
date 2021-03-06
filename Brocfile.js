/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

app.import('bower_components/vis/dist/vis.js');

// Bootstrap
app.import('bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js');

app.import('bower_components/DataTables/media/js/jquery.dataTables.js');
app.import('bower_components/DataTables/media/css/jquery.dataTables.css');

// Glyphicons
// http://hbrysiewicz.github.io/2014-10-14-ember-bootstrap-sass-summernote.html
// var pickFiles = require('broccoli-static-compiler'); //**Deprecated**
var pickFiles = require('broccoli-funnel');
var bootstrapFonts = pickFiles('bower_components/bootstrap-sass-official/assets/fonts/bootstrap', {
    srcDir: '/',
    destDir: 'fonts/bootstrap'
});

var fontawesomeFonts = pickFiles('bower_components/fontawesome/fonts', {
    srcDir: '/',
    destDir: 'fonts'
});

module.exports = app.toTree([bootstrapFonts, fontawesomeFonts]);
// module.exports = app.toTree();