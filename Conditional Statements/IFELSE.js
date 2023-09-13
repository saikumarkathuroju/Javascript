var A=5;
var B=10;
var result=A>B;
if(result){
    console.log("A is grater than B");
}
else{
    console.log("B is greter than A"); 
}       
var num1=5;
var num2=7;
var num3=9;
if(num1>num2 && num1>num3){
    console.log("num1 is grater");
}
else if(num2>num1 && num2>num3){
    console.log("num2 is grater");
}
else{
    console.log("num3 is grater");
}    
if(num1>num2 || num1>num3){
    console.log("num1 is grater");
}
else if(num2>num1 || num2>num3){
    console.log("num2 is grater");
}
else{
    console.log("num3 is grater");
}
