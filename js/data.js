/* exported data */

var data = {
  view: 'edit-entry',
  entries: [],
  editing: null,
  nextEntryId: 1
};

// {
//   title: $title.value,
//   photoURL: $imageLink.value,
//   notes: $notes.value,
//   entryId: data.nextEntryId++
// };

var previousSaveDataJSON = localStorage.getItem('code-journal-data');
if (previousSaveDataJSON !== null) {
  data = JSON.parse(previousSaveDataJSON);
}

window.addEventListener('beforeunload', saveData);
function saveData(event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('code-journal-data', dataJSON);
}
