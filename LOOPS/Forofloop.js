let num=[];
num[0]=5;
num[45]=9;
num[99]=8;
console.log(num);
for(let ele of num){
    console.log("Ans1 ",ele);
}
for(let ele in num){
    console.log("Ans2 ",ele);
    console.log("Ans3 ",ele,num[ele]);
}