/* global data */
var $noEntriesText = document.querySelector('p');
function entryText() {
  if (data.entries.length < 1) {
    $noEntriesText.className = '';
  } else {
    $noEntriesText.className = 'hidden';
  }
}
entryText();

var $imageLink = document.querySelector('input[name="user-URL"]');
var $image = document.querySelector('.placeholder-img');

$imageLink.addEventListener('input', imageLink);

function imageLink(event) {
  $image.setAttribute('src', event.target.value);
}

var $form = document.querySelector('form');
var $title = document.querySelector('input[name="user-title"]');
var $notes = document.querySelector('textarea');

$form.addEventListener('submit', dataSet);

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
  $dataViewEntries.className = '';
  $form.className = 'hidden';
  $ul.prepend(createEntries(data.entries[0]));
  entryText();
  data.view = 'entries';
  viewSwap();
}

function createEntries(entry) {
  var $li = document.createElement('li');
  var $divRow = document.createElement('div');
  $divRow.className = 'row';
  $li.appendChild($divRow);
  var $divColHalf = document.createElement('div');
  $divColHalf.className = 'column-half';
  $divRow.appendChild($divColHalf);
  var $img = document.createElement('img');
  $img.setAttribute('src', entry.photoURL);
  $img.className = 'placeholder-img margin-bottom-40';
  $divColHalf.appendChild($img);
  var $divColHalf2 = document.createElement('div');
  $divColHalf2.className = 'column-half';
  $divRow.appendChild($divColHalf2);
  var $h2 = document.createElement('h2');
  $h2.textContent = entry.title;
  $divColHalf2.appendChild($h2);
  var $p = document.createElement('p');
  $p.className = 'descriptions';
  $p.textContent = entry.notes;
  $divColHalf2.appendChild($p);
  return $li;
}

var $ul = document.querySelector('ul');
window.addEventListener('DOMContentLoaded', loaded);
function loaded(event) {
  for (var i = 0; i < data.entries.length; i++) {
    $ul.append(createEntries(data.entries[i]));
  }
}

var $entriesPage = document.querySelector('.entries');
$entriesPage.addEventListener('click', viewEntries);

function viewEntries(event) {
  $dataViewEntries.className = '';
  $form.className = 'hidden';
  data.view = 'entries';
  viewSwap();
}

var $newButton = document.querySelector('div .row .space-between > a');
var $dataViewEntries = document.querySelector('div[data-view="entries"]');
$newButton.addEventListener('click', newButton);

function newButton(event) {
  $form.className = '';
  $dataViewEntries.className = 'hidden';
  data.view = 'entry-form';
  viewSwap();
}

function viewSwap() {
  if (data.view === 'view-entries') {
    $dataViewEntries.className = '';
    $form.className = 'hidden';
  } else if (data.view === 'entry-form') {
    $dataViewEntries.className = 'hidden';
    $form.className = '';
  }
}
viewSwap();
