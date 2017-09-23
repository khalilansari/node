var math=require("./second");
console.log(math.value);
math.value = 30;
module.exports=
{
	value: math.value
}
