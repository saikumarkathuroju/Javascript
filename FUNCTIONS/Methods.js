let laptop ={
    cpu: 'I7',
    ram: 16 ,
    rom: 1 ,
    brand: 'Lenovo',
    Greet : function(){
        console.log("Hellow World");
    }
}    
laptop.Greet();                     // output  is object function 
//-----------------------------------------------------------------------------------------------------------------------------
let laptop1 ={
    cpu: 'I9',
    ram: 16 ,
    rom: 1 ,
    brand: 'Lenovo',
    Greet: function(){
        console.log(laptop1.cpu); //if you enter laptop instead of laptop1 it provide cpu of program laptop
    }                              // to aoid this 'this' parameter is used
}    
laptop1.Greet();                    //  output is object property value.

//---------------------------------------------------------------------------------------------------------------------------------
let laptop2 ={
    cpu: 'I8',
    ram: 16 ,
    rom: 1 ,
    brand: 'Lenovo',
    Greet: function(){
        console.log(this.cpu);
    }
}
laptop2.Greet();    