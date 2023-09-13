let state= new Map();
state.set('UP','Lucknow');
state.set('BR','Patna');
state.set('TS','Hyderabad');
state.set('UP','Ayodya');                   //set is used to update values
console.log(state);
console.log(state.get('TS'));
console.log(state.has('DL'));
console.log(state.has('TS'));
console.log(state.size);
for(let [Key,Vlaue] of state){
    console.log('key:${Key},value:${value}')
}
state.forEach(function(key,value) {
    console.log("key","value");
});
console.log(state.keys());
state.delete('TS');         
console.log(state);
state.clear();
console.log(state);