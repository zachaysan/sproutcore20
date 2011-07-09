/*globals QUnit spade */

var qunit = require('./qunit');

var packageName = location.search.match(/package=([^&]+)&?/);
packageName = packageName && packageName[1];

var prefix = location.search.match(/prefix=([^&]+)&?/);
prefix = prefix && prefix[1];

if (!packageName) {
  $('#qunit-header').text('Pass package=foo on URL to test package');
} else {
  packageName = decodeURIComponent(packageName);
  var packages = packageName.split(','), runtime, match, file, i, l;

  for(i=0, l=packages.length; i<l; i++) {
    require(packages[i]);
  }

  $.extend(window, qunit);

  QUnit.config.autostart = false;
  QUnit.onload();
  $('h1 > a').text(packageName);

  QUnit.jsDump.setParser('object', function(obj) {
    return obj.toString();
  });

  for (i=0, l=packages.length; i<l; i++) {
    match = packages[i]+'/~tests/'
    for (file in spade._factories) {
      if (file.substring(0, match.length) === match && file.match(/\.js$/)) {
        require(file);
      }
    }
  }

  QUnit.start();
}

