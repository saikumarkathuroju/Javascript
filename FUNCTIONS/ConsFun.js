function Alien(name, tech){
this.name=name;
this.tech=tech;
//retun this;             by default it has happen internally
}
let alien1 = new Alien('saikumar', 'java'); //every new object it goes to return function by default internally
let alien2 = new Alien('kathuroju', 'python'); // new keyword every time create new object.
console.log(alien1);
console.log(alien2);
alien1.tech='springboot';              //assining the new property value
console.log(alien1);
alien1.tech='javascript';
console.log(alien2);

//-------------------------------------------------------------------------------------------------------------------
//Constructor function for creating a person object.
function Person(name,age){
    this.name = name;
    this.age= age;
    this.greet= function(){
        console.log("hello my name is " + this.name + "My age is " + this.age);
    };
}
let person1= new Person('saikumar',25);         
let person2= new Person('kathuroju',29);
console.log(person1);                      //Accessing th object proeprties             
console.log(person2);
console.log(person1.age);  //Print new objects with constractutor functions.
console.log(person2.name);
person1.greet();
person2.greet();
//person1.age=55;
//person2.age='ramachary';
//console.log(person1);
//console.log(person2);


