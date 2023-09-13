const backpack={
    company :"jocky",
    colour : "black",
    capacity : "15L",
    'pocket num' : 5,
    straplength : {
        left:26,
        right:26,
    },
    lidOpen:false,
    togglelid:fuction(lidstatus){
        this.lidOpen=lidstatus;
    },
    newStrapLength: funnction(lengthleft,legthright){
        this.straplength.left = lengthleft;
        this.straplength.right=lengthright;
    },
}