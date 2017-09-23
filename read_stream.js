const fs=require("fs");
data="";
readStream=fs.createReadStream("input.txt");

readStream.on("data",function(chunk){
	data+=chunk;
});
readStream.on("end",function(chunk){
	console.log(data)
});

readStream.on('error',function(err){
	if(err){
		console.log("error occured");
	}
	else{
		console.log("error not occured");
	}});	
	
	
