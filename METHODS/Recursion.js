let num=1;
function show(){
    console.log("hi",num);
    num++;
    if(num<=100)
    show();
}
show();