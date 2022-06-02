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

var $form = document.querySelector('form[data-view="entry-form"');
var $title = document.querySelector('input[name="user-title"]');
var $notes = document.querySelector('textarea[name="notes"]');

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
  var $divRowBetween = document.createElement('div');
  $divRowBetween.className = 'row space-between';
  $divColHalf2.appendChild($divRowBetween);
  var $h2 = document.createElement('h2');
  $h2.textContent = entry.title;
  $divRowBetween.appendChild($h2);
  var $editPic = document.createElement('img');
  $editPic.setAttribute('src', 'images/edit-icon.png');
  $editPic.setAttribute('data-entry-id', entry.entryId);
  $editPic.className = 'edit-icon';
  $divRowBetween.appendChild($editPic);
  var $divRow2 = document.createElement('div');
  $divRow2.className = 'row';
  $divColHalf2.appendChild($divRow2);
  var $p = document.createElement('p');
  $p.className = 'descriptions';
  $p.textContent = entry.notes;
  $divRow2.appendChild($p);
  $editPic.addEventListener('click', editPage);
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
}

var $newButton = document.querySelector('div .row .space-between > a');
var $dataViewEntries = document.querySelector('div[data-view="entries"]');
$newButton.addEventListener('click', newButton);

function newButton(event) {
  $form.className = '';
  $dataViewEntries.className = 'hidden';
  data.view = 'entry-form';
}

function viewSwap() {
  if (data.view === 'entries') {
    $dataViewEntries.className = '';
    $form.className = 'hidden';
    $dataViewEntries.className = 'hidden';
  } else if (data.view === 'entry-form') {
    $form.className = '';
    $dataViewEntries.className = 'hidden';
    $editView.className = 'hidden';
  } else if (data.view === 'edit-entry') {
    $editView.className = '';
    $dataViewEntries.className = 'hidden';
    $form.className = 'hidden';
  }
}

viewSwap();

var $editView = document.querySelector('form[data-view="edit-entry"]');

function editPage(event) {
  $editView.className = '';
  $dataViewEntries.className = 'hidden';
  $form.className = 'hidden';

}
