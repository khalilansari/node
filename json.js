const fs=require('fs');

var originalNotes={
	title:'some title',
	body:'some body'
};
/* object ko json*/
var originalNoteString=JSON.stringify(originalNotes);
console.log(originalNoteString);
fs.writeFileSync('notes.json',originalNoteString);

/*json to object*/
var noteString=fs.readFileSync('notes.json');
var note=JSON.parse(noteString);
console.log(typeof note);
console.log(note);

