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
        div = document.createElement('div'),
        ul = document.createElement('ul'),
        p = document.createElement('p');

    // Create a list for all the words
    for ( var i = 0; i < words.length; i++ ) {
        var li = document.createElement('li'),
        a  = document.createElement('a');

        a.href = '?id=' + i //toSlug(name);
        a.appendChild(document.createTextNode(words[i].name));
        a.setAttribute('id', 'link' + ' ' + words[i].name);
        a.setAttribute('class', words[i].name);
        li.appendChild(a);
        ul.appendChild(li);
        div.appendChild(ul);
        b.appendChild(div);
    }

    // Remove error on index page
    if ( typeof getUrl !== 'undefined' ) {
        h1.appendChild(document.createTextNode(words[getUrl].name));
        p.appendChild(document.createTextNode(words[getUrl].description));
        div.appendChild(h1);
        div.appendChild(p);
        b.appendChild(div);
    }
})(window, document);