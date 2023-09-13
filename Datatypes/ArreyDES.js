let num=[5,6,7,8,9]
console.log(num);
console.log("extract the value from array ",num[0]);
let z = num[3];
console.log("extract the value from array ",z);
let [a,b,c,d,e]=num;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
let [,n2,,n4,n5]=num;
console.log("Ans1 ",n2);
console.log("ANS2 ",n5);
let [m1,m2,m3,m4=0]=[1,2,,]
console.log(m1);
console.log(m2);
console.log(m3);
console.log(m4);
console.log(a,b);
[a,b]=[b,a];
console.log(a,b);
let words="my name is digital india transfom india".split(' ');
console.log(words);
let [a1,a2,a3,a4,a5] = words;
console.log(a1,a2);
console.log(a1,a4);
console.log(a5,a2);
let [b1,b2,,...b4] = words;
console.log(b4);




