/* Задача 1 */

function changeContent() {
  var elems = document.getElementsByClassName('zzz');
  for (var i = 0; i < elems.length; i++) {
    elems[i].innerHTML = i + 1;
  }
}


/* Задача 2 */

function changeColor() {
  var findText = document.querySelectorAll('body > *');

  findText.forEach(function (elem) {
    if (elem.textContent.includes('www')) {
      elem.style.color = 'blue';
    };
  })
}

/* Задача 3 */


function createUlLi() {
  var ul = document.createElement('ul'),
      zzzClass = document.querySelectorAll('.zzz');

  document.querySelector('body').append(ul);

  zzzClass.forEach(function (item) {
    var li = document.createElement('li');
    ul.append(li);
    li.innerText = item.innerText;
  })
}

