function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love Typescript!"; }
    console.log("making a ".concat(size, " T-shirt with the message ").concat(message, " printing on it."));
}
;
make_shirt(); //default large and message
make_shirt("medium"); //default message and medium size
make_shirt("small", "World of Programming"); //custom message and small size
