var guests = ["Laiba", "Ummaima", "Fatima"];
console.log("GreatNews! I found a bigger dinner table!");
//Adding more guests
guests.unshift("Zerlish");
guests.splice(guests.length / 2, 0, "Arbish");
guests.push("Muskan");
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for a dinner?"));
});
