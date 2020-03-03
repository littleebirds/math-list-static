define(function(require,exports,module){
    var list = require('../data/listdata.js').list1;
    var content = document.getElementsByClassName('content')[0];
    
    var listLen = list.length;
    for(var i=0;i<listLen;i++){
        var chapter = document.createElement('div');
        chapter.className = 'chapter';
        var title = document.createElement('div');
        title.className = 'title'
        title.innerText = list[i].name;
        chapter.appendChild(title);
        var childrenList = document.createElement('div');
        childrenList.className.className = 'childrenList'
        var childrenLen = list[i].children.length
        var children = list[i].children;
        for(var j=0;j<childrenLen;j++){
            var item = document.createElement('a');
            item.className = 'item'
            item.href = './detail.html?'+'id='+children[j].id;
            item.innerText = children[j].name;
            childrenList.appendChild(item);
        }
        chapter.appendChild(childrenList);
        content.appendChild(chapter);
    }
    
})