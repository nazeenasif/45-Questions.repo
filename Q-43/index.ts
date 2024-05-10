let magician:string[]=["David","Harry","Dynamo"];
function show_magicians(magicians:string[]) {
    magicians.forEach(magician => {
        console.log(magician)
    })
}
let magicians:string[]=["Harry","Dynamo","David"];
function make_great(magicians: string[]): string[] {
    let greatMagicians:string[]= [];
    magicians.forEach(magician => {
        greatMagicians.push(`${magician} the Great`);
    });
    return greatMagicians;
}

let greatMagicians = make_great(magicians.slice()); // Creates a new modified array
console.log("Original magicians:");
show_magicians(magicians); // Shows original names
console.log("Great magicians:");
show_magicians(greatMagicians); // Shows modified names
