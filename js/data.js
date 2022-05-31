/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

var previousSaveDataJSON = localStorage.getItem('code-journal-data');
if (previousSaveDataJSON !== null) {
  data = JSON.parse(previousSaveDataJSON);
}

window.addEventListener('beforeunload', saveData);
function saveData(event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('code-journal-data', dataJSON);
}
