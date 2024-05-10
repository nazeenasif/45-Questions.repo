//Store a person's name in a variable
var personName = "AHMED";
//Function to convert a string to title case
function toTitleCase(str) {
    return str.toLowerCase().replace(/\b\w/g, function (c) { return c.toUpperCase(); });
}
//Print the person's name in different cases
console.log("Original Name:", personName);
console.log("Lowercase :", personName.toLowerCase());
console.log("Uppercase :", personName.toUpperCase());
console.log("Titlecase :", toTitleCase(personName));
