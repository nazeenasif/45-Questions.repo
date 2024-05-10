function make_shirt(size:string="large",message:string="I love Typescript!") {
    console.log(`making a ${size} T-shirt with the message ${message} printing on it.`);
};
make_shirt();//default large and message
make_shirt("medium");//default message and medium size
make_shirt("small","World of Programming");//custom message and small size
