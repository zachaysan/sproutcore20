// ==========================================================================
// Project:  SproutCore Runtime
// Copyright: ©2011 Strobe Inc. and contributors.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================

require('sproutcore-runtime/~tests/suites/enumerable');

var suite = SC.EnumerableTests;

suite.module('lastObject');

suite.test('lastObject return first item in enumerable', function() {
  var obj = this.newObject(),
      ary = this.toArray(obj);
  equals(SC.get(obj, 'lastObject'), ary[ary.length-1]);
});
 