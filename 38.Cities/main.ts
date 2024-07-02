function describe_city(city:string , country:string="pakistan"){
    console.log(`${city} is in ${country}`);
}

// calling a function
describe_city("Karachi");
describe_city("Lahore");
describe_city("Ankara" , "turkey")