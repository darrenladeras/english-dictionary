var glossary = function (values, name) {
     var d = document,
          b = d.body

     div = d.createElement('div');
     div.setAttribute("id", "main-content");
     // console.log(s);
     b = document.getElementById("container");
     b.appendChild(div);
     // console.log(b);

     h2 = d.createElement('h2');
     h2.appendChild(d.createTextNode(name));
     div.appendChild(h2);

     ol = d.createElement('ol');
     ol.setAttribute("class", "list-1");

     for (var i = 0; i < values.length; i++) {
          li = d.createElement('li');
          a = d.createElement('a');
          a.appendChild(d.createTextNode(values[i]));
          li.appendChild(a);
          ol.appendChild(li);

          // Set Attribute for 'for loop'
          a.href = "pages/" + i + ".html";
     }
     div.appendChild(ol);
};

glossary([
     'Abandon',
     'Abandoned',
     'Ability',
     'Able',
     'About',
     'Above',
     'Abroad',
     'Absence',
     'Absent',
     'Absolute',
     'Absolutely',
     'Absorb',
     'Abuse',
     'Abuse',
     'Academic',
     'Accent',
     'Accept',
     'Acceptable',
     'Access',
     'Accident',
     'Accidental',
     'Accidentally',
     'Accommodation',
     'Accompany',
     'Account',
     'Accurate',
     'Accurately',
     'Accuse',
     'Achieve',
     'Achievement'
], 'Glossary');