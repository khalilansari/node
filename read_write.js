const fs=require("fs");
data="";
readStream=fs.createReadStream("input1.txt");

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
	
	

data="this is read write stream dono sath mai";

writeStream=fs.createWriteStream("input1.txt");

writeStream.write(data);

writeStream.end();

writeStream.on("finish",function(){
	console.log("dono a gaya finish writing");
});
writeStream.on('error',function(err){
	if(err){
		console.log("error occured");
		}
	});
	

