let magician:string[]=["David","Harry","Dynamo"];
function show_magicians(magicians:string[]) {
    magicians.forEach(magician => {
        console.log(magician)
    })
}
let magicians:string[]=["David","Harry","Dynamo"];
function make_great(magicians) {
    for(let i=0;i<magicians.length;i++) {
       console.log(magicians[i] = magicians[i]+" the Great!");
    }   
}
show_magicians(magician)//modifies original array
make_great(magicians)//shows modofied names
 