//-----------------------------------Array-----------------------//
let num1=[1,2,3];
let num2=[4,5,6];
let result=[...num1,...num2];
console.log(result);
let num3=[0,...num1,4,5];
console.log(num3);
//------------------------------OBJECT------------------------------//
let obj1={prop1:'value1'};
let obj2={prop2:'value2'};
let newobj={...obj1,...obj2};
console.log(newobj);
let obj3={...obj1,prop3:'value3'};
console.log(obj3);
//----------------------------Function---------------------------//
let numbers=[1,2,3];
function sum(a,b,c){
    return a+b+c;
}
console.log(sum(...numbers));

