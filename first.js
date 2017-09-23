/*ES6*/

console.log("Hello World");

a = "kasim";
console.log(a);

b = "bhai";  
console.log(b);

console.log(a+b);

c = 25;
d = 15; 


function addition(){
console.log(c);
e = 100;
console.log(e);
}
addition();


if(e>d)
{
console.log("e is greater");
}else console.log("d is greater");



switch(5){
case 1:{console.log(1);
break;}
case 2:{console.log(2);
break;}
case 3:{console.log(3);
break;}
default:
console.log("no. out of bond");
}


name = ["shazan","khalil","kasim","haris"];
console.log(name[1]);

obj = {key1:"bhai",2:"bahen"}
for(a in obj){
console.log(obj[a]);
}


name1 = ["shazan","khalil","kasim","haris"];

for(a of name1)
{
	console.log(a);
}

for(a in name1)
{
	console.log("\n"+a);
}


c=1
do{
	console.log("the no is \n"+c);
}
while(c>=9);

TV={model:"V12",manufacture:"sharp",month:"6month",
	volumeUp:function()
	{
		console.log("++");
		return 0;
	},
	volumeDown:function()
	{
		console.log("--");
		return 0;
	}
}
console.log(TV.model);
console.log(TV.manufacture);
console.log(TV.volumeUp());
console.log(TV.volumeDown());
console.log(TV.month);


TV.madein = "japan";
console.log(TV.madein);


var a=100;
console.log(a);
var b=200;
if(a>b)
{
  console.log("a is greater");
}
else
{
  console.log("b is greater");
}

//**closure**//

function makeAdder(x){
  return function add(y){
    return x+y;
  }
}
var adder1=makeAdder(20);
var adder2=makeAdder(40);
var adder3=makeAdder(60);
adder1(10);
adder2(10);
adder3(10);
console.log(adder1(10));
console.log(adder2(10));
console.log(adder3(10));



function makeAdder(x){
  return function add(y){
    return x+y;
  }
}
console.log(makeAdder(20)(10));



/**   function changeSize(x){
  return function (y){
    var fontSize = x+y;
    document.body.style="font-size:"+fontSize+"pt";
  }
}
var fontIncrementBase16=changeSize(16);
fontIncrementBase16(2);  **/

/** fattarrow
const changeSize=(x) => {
  return (y) => {
    var fontSize = x+y;
    document.body.style="font-size:"+fontSize+"pt";
  }
}
var fontIncrementBase16=changeSize(16);
fontIncrementBase16(-1);  **/

/**DESTRUCTURING**/
var obj={
a:1,
b:2,
}
/**obj.a;
 * obj.b;**/
console.log(obj.a);
console.log(obj.b);


var obj={
  f:1,
  e:2,
  c:{x:1,y:2}
}

const {f,e,c:{x,y}}=obj;
console.log(f,e,x,y);















