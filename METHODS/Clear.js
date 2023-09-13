//------------------------------object--------------------------//
let newbike={
    company: 'Bajaj',
    modal:'pelsar',
    cc:'180',
    msr:'2s',
}
console.log("object before clear",newbike);
newbike={};
console.log("object after clear",newbike);
//--------------------------------Array------------------------------//
let num=[1,2,3,4,5,6];
console.log("Array before clear", num);
num.length=0;
console.log("Array after clear",num);
//-------------------------------Map-----------------------------------//
let str=new Set();
str.add(1);
str.add(2);
str.add(3);
console.log("set before clear",str);
str.clear();
console.log("set after clear",str);
let data=new Map();
data.set('key1','value1');
data.set('key2','value2');
console.log("data before clear",data);
data.clear();
console.log("data after clear",data);