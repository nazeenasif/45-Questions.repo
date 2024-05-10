function make_car(manufacturer:string,model:string,...options:[string,any][]):object {
    let car={manufacturer, model};
    options.forEach(([key,value]) =>car[key]=value);
    return  car;
}
console.log(make_car("Suzuki","Mehran",["color","white"],["year",2015]));   
console.log(make_car("Honda","Civic",["color","white"],["year","2018"]));








