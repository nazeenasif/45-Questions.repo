function city_country(city, country) {
    if (city === void 0) { city = ""; }
    if (country === void 0) { country = ""; }
    console.log("".concat(city, ",").concat(country));
}
;
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Jalalabad", "Afghanistan"));
console.log(city_country("Dhaka", "Bangladesh"));
