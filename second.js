/* NODE JS Defination :::  is a javascript runtime built on chromeV8 javascript engine.
 *  node.js uses an event-driven non-blcking ,I/O model that makes it lightweight and efficient.
 *  node.js package ecosystem, npm,is the jo bhi module over the world koi bhi banyega vo use kar sakte hai */
 
/*client server model
 * multithread model
 * single thread(event-driven) */
 
console.log("bhai");
 
 
/*modules in node js [uses(call karna) in different files]*/

var f="ansari khalil";


function add(a,b){
	return a+b;
}
function sub(a,b){
	return a-b;
}
function mul(a,b){
	return a*b;
}

/*Shared resources And Object Factory [jo file mai "value"(use.js,use1.js,use2.js) 
 * wala part change ho  raha hai ]*/

var value=10;
module.exports=
{
	add,sub,mul,f,value
}

/*EVENTS [(event on) se jo event fire karna hai vo occur ho jaye ga ] */

var event=require("events");

var event1 = new event.EventEmitter();
var event2 = new event.EventEmitter();
var event3 = new event.EventEmitter();

event1.on("pulsar",function(){
console.log("pulsar")})

event1.on("honda",function(){
console.log("unicorn")})

event1.on("yamaha",function(){
console.log("FZ")})

event1.emit("pulsar");
event1.emit("honda");
event1.emit("yamaha");

/*FILE SYSTEM [overwrite of data] 
 * read mai only  read hoga
 * write mai puura overwrite hoga and new file bhi banake dega*/

/*
const fs = require("fs");
data=fs.readFileSync("file2.txt","utf8")
console.log(data);


fs.writeFile("file2.txt","second day",function(err){
	if(err){
		console.log(err);
	}
});

data=fs.writeFile("file3.txt","welcome to the file 3")
console.log(data);

data=fs.appendFile("file3.txt","welcome to the file 3")
console.log(data);

fs.rename("file2.txt","file1.txt",function(err){
	if(err){
		console.log(err);
	}
});

fs.renameSync("file3.txt","file2.txt");
console.log(data)

data=fs.writeFile("file3.txt","welcome to the file 3")
console.log(data);

data=fs.unlink("file3.txt")
console.log(data);
*/















