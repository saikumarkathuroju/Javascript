let data =['saikumar',5,{tech:'python'},function greet(){console.log("hellow world");}];
console.log(data);
data[3]();
//-----------------------------------------------------------------------------------------
var str=[1,2,
function(){
    return 3;
},
function(name){
console.log("hello "+name);
}]
console.log(str[2]());      //call of return function
str[3]('saikumar');     // call od assign function
