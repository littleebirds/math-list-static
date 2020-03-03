define(function(require,exports,module){
    var list = require('../data/itemData.js').list1;
    var method = require('../js/method');
    var content = document.getElementsByClassName('content')[0];
    var query = method.getQuery();

    var item = list.filter((i)=>i.id == query.id)[0] || {};
    var titleEle = document.createElement('div');
    var itemListEle = document.createElement('div');
    titleEle.innerText = item.name || '';
    titleEle.className = 'title';
    itemListEle.className = 'itemList'
    var children = Array.isArray(item.children) ? item.children : [];
    var itemListLen = children.length;
    var itemList = children;
    for(var i = 0;i<itemListLen;i++){
        var itemEle = document.createElement('a');
        itemEle.className = 'item';
        itemEle.innerText = itemList[i].name;
        itemEle.href = itemList[i].href || ''; 
        itemListEle.appendChild(itemEle)
    }
    content.appendChild(titleEle);
    content.appendChild(itemListEle)
})