var array= [1,2,3,"hello",true,false];
console.log("Ans1 ",array);
console.log("Ans2 ",array[0]);
console.log("Ans3 ",array[5]);
console.log("Ans4 ",array[3]);
console.log("Ans5 ",array[1]);
console.log("Ans6 ",array[7]);
array.pop();               //To delete last element in arrey
console.log("Ans7 ",array);
array.shift();             //To delete firat element in arrey
console.log("Ans8 ",array);
array.unshift(10);
console.log("Ans9 ",array);
array.push("water");
console.log("Ans10 ",array);
var index=array.indexOf("hello");  //To remove perticular function or from perticular function
array.splice(index,1);      //the (index,1) removes self declared function, (index,2) remove self and after self
console.log(array);