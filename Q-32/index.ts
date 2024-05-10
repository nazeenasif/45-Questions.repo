let current_users:string[]=["Admin","John","lisa","Jack","Jasmine","Mark"];
let new_users:string[]=["Frank","Bravo","George","Rock","Samrik"];
new_users.forEach(newUser => {
    if (current_users.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase()))
   { console.log(`${newUser} will need to enter a new username.`);
}else{
    console.log(`${newUser} is available.`);
}
});
