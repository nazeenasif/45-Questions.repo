var guests = ["Arbish", "Zerlish", "Fatima", "Muskan", "Anousha"];
console.log("unfortunately, I can only inveite two people for dinner.");
while (guests.length > 2) {
    var removedGuests = guests.pop();
    console.log("Sorry, ".concat(removedGuests, ", I can't invite you to dinner."));
}
;
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you're still invited to dinner."));
});
guests.splice(0, guests.length);
console.log(guests);
