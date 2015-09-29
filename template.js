angular.module('module').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('index.html',
    "{{'Hello'}}"
  );

}]);
