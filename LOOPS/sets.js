let str=new Set();
str.add(1);
str.add(2);
str.add(3);
str.add(4);
str.add(1);
console.log("set",str);
console.log("set size",str.size);        //Size to know set size
str.delete(2);                              //delete the set
console.log("set after delete",str);
console.log("availbel of 2 in set",str.has(2));      //has is used for element presence
console.log("available of 3 in set",str.has(3));
str.forEach(function(value){
    console.log(value);
});
str.clear();                                //clear is used for clear the set.
console.log("Empty set",str);


