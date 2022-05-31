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
//   var $li = document.createElement('li');
//   var $divRow = document.createElement('div');
//   $divRow.className = 'row';
//   $li.appendChild($divRow);
//   var $divColHalf = document.createElement('div');
//   $divColHalf.className = 'column-half';
//   $divRow.appendChild($divColHalf);
//   var $img = document.createElement('img');
//   $img.setAttribute('src', '/images/placeholder-image-square.jpg');
//   $img.className = 'placeholder-img';
//   $divColHalf.appendChild($img);
//   var $divColHalf2 = document.createElement('div');
//   $divColHalf2.className = 'column-half';
//   $divRow.appendChild($divColHalf2);
//   var $h2 = document.createElement('h2');
//   $h2.textContent = entry.title;
//   $divColHalf2.appendChild($h2);
//   var $p = document.createElement('p');
//   $p.className = 'descriptions';
//   $p.textContent = entry.notes;
//   $divColHalf2.appendChild($p);
//   return $li;
// }
