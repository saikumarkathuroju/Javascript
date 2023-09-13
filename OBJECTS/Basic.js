const input='name';
const alien={
    name : 'sai',
    tech: 'js',
    'work exp': 5
}
console.log(alien);
console.log("Ans1",JSON.stringify(alien));
console.log("Ans2",alien.name);
console.log("Ans3",alien['tech']);
console.log("Ans3",alien['work exp']);
console.log("Ans4",alien[input]);