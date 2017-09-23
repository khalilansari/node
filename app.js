const notes=require('./node.js')
const argv=Yargs.argv;
var command = argv._[0];
console.log('Command:'+command);
console.log('Yargs:'.argv);

if(command === 'add'){
	node.addNote(argv.title,argv.body);
}
else if (command==='list'){
	node.getAll();
}
else if(command==='read'){
	node.getNote(argv.title);
}
else if(command==='remove'){
	node.removeNote(argv.title);
}
else{
	console.log('Command not recongzined');
}
