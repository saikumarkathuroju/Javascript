let num=[10,25,30,35,40,45];
num.filter(n=> n%2===0)
    .map(n => n*2)
     .forEach(n =>   {
    console.log(n);
});
let m=[1,2,3,4,5];
let evennumbers= m.filter((n)=> {
    return n%2===0;
});
console.log(evennumbers);
let z=[1,2,3,4,5];
let double=z.map((n) => {
    return n*2;
});
