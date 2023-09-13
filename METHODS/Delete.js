//-----------------object------------------------//
let system={
        HDD:'1TB',
        RAM:'4GB',
        Screen:'18inches',
        processer:'i7 proceser',
};
console.log("object before Delete =",system);
delete(system.RAM);
console.log("object after delete =",system);
//-----------------Array-------------------------//
let num=[1,2,3,4,5,6];
console.log("Array before Delete =",num);
delete num[2];
console.log("Arrey after Delete= ",num);
//------------------set--------------------------//
let str=new Set();
str.add(1);
str.add(2);
str.add("india");
str.add(4);
console.log("set before Delete", str);
str.delete(2);
console.log("set after Delete",str);

