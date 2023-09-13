//Any veriable that create out side functions is konwn as globel variable.
//globel veraibles will have only one copy of the data.we can modify the globel veriable data any where in application.
var a=10;
var b=20;
function f1() {
    console.log(a);
    console.log(b);
}
f1();
        function f2(){ 
       console.log(a);      
}

f2();

// q.  a=90 at last secound function why effection on the values.
// q.  if we declare var a=90 it is not print the value. It not changed 
