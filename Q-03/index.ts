//Store a person's name in a variable
let personName: string = "AHMED";
//Function to convert a string to title case
function toTitleCase(str: string): string {
    return str.toLowerCase().replace(/\b\w/g, c=> c.toUpperCase());
}
//Print the person's name in different cases
console.log("Original Name:" , personName);
console.log("Lowercase :" , personName.toLowerCase());
console.log("Uppercase :" , personName.toUpperCase());
console.log("Titlecase :" , toTitleCase(personName));
