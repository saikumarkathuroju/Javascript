//Return the value with out assign
function great()            
{
    return "hellow world"  //value in the function bod7y assign to veriable and print by console.
}
let str= great();           //by calling function it self return the value.calling the function by assigning the veriable
console.log(str);           //  to perint return value
//return data assigned to str and print data
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
//return the value with assign
function hello(user)    //Aceept the assigned veriable argumants values while defineing function.this paramenter will hold value when calling the function
{
    return "hellow    " + user
}
let user="saikumar.kathuroju";
let data= hello(user); //do not use quotes at assigning
console.log(data); //do not use quotes for assigning the value
//console.log(hello('saikumar.kathuroju')); code is equal to line 15,16,17.
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------
//console the function with out assign
function greet(name){
    console.log("hellow   " + name + "!");
}
greet("saikumar");
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//console the function with assign
function angular(good){
    console.log("hello  "+good+"!");
}
let good="saikumar";
angular(good);