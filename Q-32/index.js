var current_users = ["Admin", "John", "lisa", "Jack", "Jasmine", "Mark"];
var new_users = ["Frank", "Bravo", "George", "Rock", "Samrik"];
new_users.forEach(function (newUser) {
    if (current_users.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " will need to enter a new username."));
    }
    else {
        console.log("".concat(newUser, " is available."));
    }
});
