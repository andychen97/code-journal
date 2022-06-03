/* global data */
var $cancel = document.querySelector('.cancel-button');
var $confirm = document.querySelector('.confirm-button');
var $dataViewEntries = document.querySelector('div[data-view="entries"]');
var $delete = document.querySelector('.delete-button');
var $editDivButton = document.querySelector('div[id="editDivButton"]');
var $editEntryTitle = document.querySelector('h1[id="edit-entry"]');
var $entriesTab = document.querySelector('.entries');
var $form = document.querySelector('form[data-view="entry-form"');
var $imageLink = document.querySelector('input[name="user-URL"]');
var $image = document.querySelector('.placeholder-img');
var $newButton = document.querySelector('a[id="newButton"]');
var $modal = document.querySelector('.modal');
var $newEntryTitle = document.querySelector('h1[id="new-entry"]');
var $noEntriesText = document.querySelector('p');
var $notes = document.querySelector('textarea[name="notes"]');
var $title = document.querySelector('input[name="user-title"]');
var $ul = document.querySelector('ul');

function entryText() {
  if (data.entries.length < 1) {
    $noEntriesText.className = 'display-block';
  } else {
    $noEntriesText.className = 'hidden';
  }
}
entryText();

$imageLink.addEventListener('input', imageLink);

function imageLink(event) {
  $image.setAttribute('src', event.target.value);
}

$form.addEventListener('submit', dataSet);

function dataSet(event) {
  event.preventDefault();
  if (data.editing === null) {
    var singleData = {
      title: $title.value,
      photoURL: $imageLink.value,
      notes: $notes.value,
      entryId: data.nextEntryId++
    };
    data.entries.unshift(singleData);
    $image.setAttribute('src', 'images/placeholder-image-square.jpg');
    event.target.reset();
    $ul.prepend(createEntries(data.entries[0]));
  } else {
    var $li = document.querySelectorAll('li');
    for (var i = 0; i < data.entries.length; i++) {
      if (Number(data.editing.entryId) === Number(data.entries[i].entryId)) {
        data.entries[i].title = $title.value;
        data.entries[i].photoURL = $imageLink.value;
        data.entries[i].notes = $notes.value;
        data.entries[i].entryId = data.editing.entryId;
        $li[i].replaceWith(createEntries(data.entries[i]));
      }
    }
  }
  data.editing = null;
  data.view = 'entries';
  entryText();
  viewSwap();
}

function createEntries(entry) {
  var $li = document.createElement('li');
  var $divRow = document.createElement('div');
  $divRow.className = 'row margin-bottom-40';
  $li.appendChild($divRow);
  var $divColHalf = document.createElement('div');
  $divColHalf.className = 'column-half';
  $divRow.appendChild($divColHalf);
  var $img = document.createElement('img');
  $img.setAttribute('src', entry.photoURL);
  $img.className = 'placeholder-img';
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

window.addEventListener('DOMContentLoaded', loaded);
function loaded(event) {
  for (var i = 0; i < data.entries.length; i++) {
    $ul.append(createEntries(data.entries[i]));
  }
}

$entriesTab.addEventListener('click', viewEntries);

function viewEntries(event) {
  data.view = 'entries';
  viewSwap();
}

$newButton.addEventListener('click', newButton);

function newButton(event) {
  data.view = 'entry-form';
  $image.setAttribute('src', 'images/placeholder-image-square.jpg');
  $form.reset();
  viewSwap();
}

function viewSwap() {
  if (data.view === 'entry-form') {
    $form.className = 'display-block';
    $dataViewEntries.className = 'hidden';
    $newEntryTitle.className = 'font28px';
    $editEntryTitle.className = 'font28px hidden';
    $editDivButton.className = 'align-right';
    $delete.className = 'delete-button hidden';
  } else if (data.view === 'entries') {
    $dataViewEntries.className = 'display-block';
    $form.className = 'hidden';
  } else if (data.view === 'edit-form') {
    $form.className = 'display-block';
    $dataViewEntries.className = 'hidden';
    $editEntryTitle.className = 'font28px';
    $newEntryTitle.className = 'font28px hidden';
    $editDivButton.className = 'row space-between';
    $delete.className = 'delete-button';
  }
}

function editPage(event) {
  data.view = 'edit-form';
  viewSwap();
  for (var i = 0; i < data.entries.length; i++) {
    if (Number(event.target.dataset.entryId) === data.entries[i].entryId) {
      data.editing = { ...data.entries[i] };
      $title.value = data.editing.title;
      $imageLink.value = data.editing.photoURL;
      $notes.value = data.editing.notes;
      event.target.dataset.entryId = data.editing.entryId;
      $image.setAttribute('src', data.editing.photoURL);
    }
  }
}

$delete.addEventListener('click', function modalDisplay(event) {
  $modal.className = 'modal display-block';
});

$cancel.addEventListener('click', cancelModalDisplay);
function cancelModalDisplay(event) {
  $modal.className = 'modal hidden';
}

$confirm.addEventListener('click', deleteEntry);
function deleteEntry(event) {
  $modal.className = 'modal hidden';
  var $li = document.querySelectorAll('li');
  for (var i = 0; i < data.entries.length; i++) {
    if (Number(data.editing.entryId) === Number(data.entries[i].entryId)) {
      data.entries.splice(i, 1);
      $ul.removeChild($li[i]);
    }
  }
  data.view = 'entries';
  viewSwap();
  entryText();
}
