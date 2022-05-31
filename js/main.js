var $imageLink = document.getElementById('img-link');
var $image = document.querySelector('.placeholder-img');

$imageLink.addEventListener('input', function (event) {
  $image.setAttribute('src', event.target.value);
});

var $entry = document.getElementById('entry');
var $title = document.getElementById('title');
var $notes = document.getElementById('notes');

$entry.addEventListener('submit', function (event) {
  event.preventDefault();
  var singleData = {
    title: $title.value,
    photoURL: $imageLink.value,
    notes: $notes.value,
    entryId: data.nextEntryId++
  };
  data.entries.unshift(singleData);
  $image.setAttribute('src', 'images/placeholder-image-square.jpg');
  $title.value = '';
  $imageLink.value = '';
  $notes.value = '';
});
