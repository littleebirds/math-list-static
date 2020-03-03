define( function(require,exports,module ) {
    'use strict';
    function getQuery(){
        var search = window.location.search ? window.location.search .substring(1).split('&'):[];
        var obj = {};
        for(var i=0;i<search.length;i++){
            var arr = search[i].split('=');
            obj[arr[0]] = arr[1]
        }
        return obj;
    }

    module.exports = {
        getQuery:getQuery
    }
});