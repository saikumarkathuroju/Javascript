function add(num1,num2,num3=1)  
{
    console.log(num1,num2,num3);
    return num1+num2+num3;
}
let str= add(5,4,5);
console.log(str);

//If we not mention the num3 at while defining Error is num3 is not defined
//After defining also we are not calling function at console time num3 show undefined
//Missing and incorrect arguments whdile calling function it give NAN error
//If you define any value at function difing time we no need to pass the value while calling time
//If you pass the value while calling define value not applicable.
