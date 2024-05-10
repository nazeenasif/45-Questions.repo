var magician = ["David", "Harry", "Dynamo"];
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
var magicians = ["David", "Harry", "Dynamo"];
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i] = magicians[i] + " the Great!");
    }
}
show_magicians(magician); //modifies original array
make_great(magicians); //shows modofied names
