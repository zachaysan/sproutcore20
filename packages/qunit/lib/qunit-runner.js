/*globals QUnit spade */

var qunit = require('./qunit');

var packageName = location.search.match(/package=([^&]+)&?/);
packageName = packageName && packageName[1];

var prefix = location.search.match(/prefix=([^&]+)&?/);
prefix = prefix && prefix[1];

if (!packageName) {
  $('#qunit-header').text('Pass package=foo on URL to test package');
} else {
  console.log('requiring',packageName);
  require(packageName);
  $.extend(window, qunit);

  QUnit.config.autostart = false;
  QUnit.onload();
  $('h1 > a').text(packageName);

  QUnit.jsDump.setParser('object', function(obj) {
    return obj.toString();
  });

}


