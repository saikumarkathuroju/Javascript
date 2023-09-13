//------------------------------IN ARRAY--------------------------------//
let arr=['a','b','c'];
let iterator=arr.entries();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
//---------------------------------IN SETS-----------------------------//
let set=new Set(['a','b','c']);
let iteratar=set.entries();
console.log(iteratar.next());
console.log(iteratar.next());
console.log(iteratar.next());
console.log(iteratar.next());
//-----------------------------IN OBJECTS-----------------------------//
let object= {prop1:'value1',prop2:'values2'};
let entries= Object.entries(object);
console.log(entries);
