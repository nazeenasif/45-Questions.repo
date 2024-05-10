let guests :string[] = ["Arbish","Zerlish","Fatima","Muskan","Anousha"];
console.log("unfortunately, I can only inveite two people for dinner.");
while(guests.length > 2) {
    let removedGuests = guests.pop();
    console.log(`Sorry, ${removedGuests}, I can't invite you to dinner.`);
};
guests.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});
guests.splice(0, guests.length);
console.log(guests);
