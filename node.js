console.log('starting nodes.js	....');

var addNote=(title,body)=>{
	console.log('Adding Note',title,body);
};
var getAll=()=>{
	console.log('Getting All Notes');
};
var getNote=(title)=>{
	console.log('Getting Note',title);
};
var removeNote=(title)=>{
	console.log('RemovedNote',title);
};
module.exports={
	addNote,
	getAll,
	getNote,
	removeNote,
	
}
