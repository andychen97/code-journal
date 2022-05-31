/* global data */

var $imageLink = document.querySelector('input[name="user-URL"]');
var $image = document.querySelector('.placeholder-img');

$imageLink.addEventListener('input', imageLink);

function imageLink(event) {
  $image.setAttribute('src', event.target.value);
}

var $entry = document.querySelector('form');
var $title = document.querySelector('input[name="user-title"]');
var $notes = document.querySelector('textarea');

$entry.addEventListener('submit', dataSet);

function dataSet(event) {
  event.preventDefault();
  var singleData = {
    title: $title.value,
    photoURL: $imageLink.value,
    notes: $notes.value,
    entryId: data.nextEntryId++
  };
  data.entries.unshift(singleData);
  $image.setAttribute('src', 'images/placeholder-image-square.jpg');
  event.target.reset();
}

// function createEntries(entry) {
//   var $empty = document.createElement('div');
//   var $divColHalf = document.createElement('div');
//   $divColHalf.className = 'column-half';
//   $empty.appendChild($divColHalf);
//   var $unorder = document.createElement('ul');
//   $divColHalf.appendChild($unorder);
//   var $item = document.createElement('li');
//   $unorder.appendChild($item);
//   var $image = document.createElement('img');
//   $image.setAttribute('src', entry.photoURL);
//   $image.className = 'descriptions';
//   $item.appendChild($image);
//   var $divColHalf2 = document.createElement('div');
//   $divColHalf2.className = 'column-half';
//   $empty.appendChild($divColHalf2);
//   var $unorder2 = document.createElement('ul');
//   $divColHalf2.appendChild($unorder2);
//   var $item2 = document.createElement('li');
//   $unorder2.appendChild($item2);
//   var $h2 = document.createElement('h2');
//   $h2.textContent = entry.title;
//   $item2.appendChild($h2);
//   var $item3 = document.createElement('li');
//   $unorder2.appendChild($item3);
//   var $p = document.createElement('p');
//   $p.className = 'descriptions';
//   $p.textContent = entry.notes;
//   $item3.appendChild($p);

//   return $empty;
// }

// var entry1 = {
//   photoURL: '/images/favicon.ico',
//   title: 'something',
//   notes: 'black and yellow'
// };
