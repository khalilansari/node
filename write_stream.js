const fs=require("fs");
data="this is write stream";

writeStream=fs.createWriteStream("output.txt");

writeStream.write(data);

writeStream.end();

writeStream.on("finish",function(){
	console.log("finish writing");
});
writeStream.on('error',function(err){
	if(err){
		console.log("error occured");
		}
	});
	
