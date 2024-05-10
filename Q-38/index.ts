function describe_city(city:string,country:string="Pakistan") {
    console.log(`${city} is in ${country}.`);
};
describe_city("Karachi")//default country                          
describe_city("Islamabad")//default country
describe_city("Istanbul","Turkey")//custom city and country

