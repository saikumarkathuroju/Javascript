//------------------------OBJECT--------------------------------------------//
let Newcar={
    Brand:'TATA',
    Modal:'Nexon',
    Variant:'Petrol',
    System:"Full Autometic",
    Power:'10 Hp'
};
console.log(Newcar);
console.log("Provided Key value Prasence= ",Newcar.hasOwnProperty('Brand'));
console.log("Provided Key value Prasence= ",Newcar.hasOwnProperty('Tyre type'));
//--------------------------ARREY--------------------------------------------//
let num=[1,2,30,4,5.5,10];
console.log(num.includes(2));
console.log(num.includes(5.5));
//--------------------------SET------------------------------------------------//
let str= new Set();
str.add();
str.add(1);
str.add(2);
str.add(3);
str.add(4);
console.log(str);
console.log(str.has());
//-----------------------------------MAP-------------------------------------------//
let map=new Map();
map.set('key1','value1');
map.set('key2','value2');
console.log(map.has('key1'));
console.log(map.has('key3'));


