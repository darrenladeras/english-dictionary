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
        h2 = document.createElement('h2'),
        cols = document.createElement('div'),
        col1 = document.createElement('div'),
        col2 = document.createElement('div'),
        col3 = document.createElement('div'),
        AtoZlist = document.createElement('ul'),
        nameList = document.createElement('ul'),
        p2 = document.createElement('p'),
        p = document.createElement('p');

    // Set Attributes
    cols.className = 'cols three-cols';
    col1.className = 'col-item col-1';
    col2.className = 'col-item col-2';
    col3.className = 'col-item col-3';

    var AtoZ = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

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
        a.setAttribute('class', 'link' + ' ' + toSlug(words[i].name));
        li.appendChild(a);
        nameList.appendChild(li);
        col2.appendChild(nameList);
        cols.appendChild(col2);
        container.appendChild(cols);
    }

    if ( typeof getUrl !== 'undefined' ) { // Remove error on index page
    function definitions() {
        var container = document.getElementById('container');
        h2.appendChild(document.createTextNode(words[getUrl].name));
        p.appendChild(document.createTextNode(words[getUrl].description));
        p2.appendChild(document.createTextNode(words[getUrl].secondDescription));
        col3.appendChild(h2);
        col3.appendChild(p);
        col3.appendChild(p2);
        cols.appendChild(col3);
        container.appendChild(cols);
    }

    definitions();
}
})(window, document);

(function(window, document) {
    var inputs = document.getElementsByTagName('input');
    var submit = document.getElementsByTagName('button');

    var text = inputs[0];
    var submit = submit[0];

    function toTitleCase(str) {
        return str.replace(/\b\w/g, function (txt) { return txt.toUpperCase(); });
    }

    submit.addEventListener('click', function() {
        var convertToTitleCase = toTitleCase(text.value);

        if ( text.value !== "" ) {
            alert(convertToTitleCase);
            if ( convertToTitleCase = words[0].name ) {
                console.log('shit!');
            }
        } else {
            return false;
            // alert('Not Found!');
        }
    }, false)
})(window, document);