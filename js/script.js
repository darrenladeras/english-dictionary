(function(window, document, undefined) {
    var toSlug = function (name) {
    var convertToSlug;
        convertToSlug = name.toLowerCase().replace(/\s/g,'-');
        return convertToSlug;
    }

    // Get the Url value
    function getUrlVars() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
            vars[key] = value;
        });

        return vars;
    }

    var getUrl = getUrlVars()['id'];

    // Create elements
    var b  = document.body,
        h1 = document.createElement('h1'),
        cols = document.createElement('div'),
        col1 = document.createElement('div'),
        col2 = document.createElement('div'),
        col3 = document.createElement('div'),
        AtoZlist = document.createElement('ul'),
        nameList = document.createElement('ul'),
        p = document.createElement('p');

    // Set Attributes
    cols.id = 'cols three-cols';
    col1.className = 'col-item col-1';
    col2.className = 'col-item col-2';
    col3.className = 'col-item col-3';

    var AtoZ = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    console.log(AtoZ);

    var container = document.getElementById('container');
    // Create a list for all the letters a-z
    for ( var x = 0; x < AtoZ.length; x++ ) {
        var li = document.createElement('li'),
        a  = document.createElement('a');

        a.href = '#' + AtoZ[x];
        a.appendChild(document.createTextNode(AtoZ[x]));
        a.setAttribute('class', 'test');
        li.appendChild(a);
        AtoZlist.appendChild(li);
        col1.appendChild(AtoZlist);
        cols.appendChild(col1);
        container.appendChild(cols);
    }

    // Create a list for all the words
    for ( var i = 0; i < words.length; i++ ) {
        var li = document.createElement('li'),
        a  = document.createElement('a');

        a.href = '?id=' + i; //toSlug(name);
        a.appendChild(document.createTextNode(words[i].name));
        a.setAttribute('id', 'link' + ' ' + words[i].name);
        a.setAttribute('class', words[i].name);
        li.appendChild(a);
        nameList.appendChild(li);
        col2.appendChild(nameList);
        cols.appendChild(col2);
        container.appendChild(cols);
    }

    if ( typeof getUrl !== 'undefined' ) { // Remove error on index page
        var container = document.getElementById('container');
        h1.appendChild(document.createTextNode(words[getUrl].name));
        p.appendChild(document.createTextNode(words[getUrl].description));
        col3.appendChild(h1);
        col3.appendChild(p);
        cols.appendChild(col3);
        container.appendChild(cols);
    }
})(window, document);