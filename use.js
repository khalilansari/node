var math=require("./second");
console.log(math.add(15,10));
console.log(math.sub(15,10));
console.log(math.mul(15,10));
console.log(math.f);



math.value = 20;
module.exports=
{
	value: math.value
}
