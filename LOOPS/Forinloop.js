let alien={
    firstname : 'saikumar',
    'last name':   'Kathuroju',
    tech: 'JSON',
    Laptop: {
        Brand : 'Lenovo',
        Processor: 'Snapdragon',
        'Operating system': 'Windows',
    }
}
for(let key in alien)
{
    console.log("Ans1 ",key);
    console.log("Ans3 ",key, alien[key]);
}
for(let key in alien.Laptop){
    console.log("Ans4 ", key);
    console.log("Ans5 ", key,alien.Laptop[key]);
}
//for (let key of alien){
    //console.log(key);
//}
    