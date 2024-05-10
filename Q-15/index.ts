let guests :string[] = ["Laiba","Ummaima","Sara","Fatima"];
let unableToAttend = "Laiba";
console.log(`${unableToAttend} can't make it to dinner.`);
// Replace the guest
let newGuest = "Sanober";
guests[guests.indexOf(unableToAttend)] = newGuest;
//New invitation
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});