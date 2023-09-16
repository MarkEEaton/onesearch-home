(function(){
"use strict";
'use strict';

var app = angular.module('viewCustom', ['angularLoad']);

/************************************* BEGIN LibChat widget *************************************/
(function() {
  var lc = document.createElement('script');
  lc.type = 'text/javascript';
  lc.src = 'https://kbcc-cuny.libanswers.com/load_chat.php?hash=f7d1629a91e178fd0f799322e803b6e7';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(lc, s);
})();
/************************************* END LibChat widget *************************************/

})();