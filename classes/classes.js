




class Vehicle {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
}



let truck = new Vehicle()


truck.make = "Ford";
truck.model = "f250",
truck.year = 2009;


let atv = new Vehicle()

atv.make = "raptor",
atv.model ="t56",
atv.year = 2020

console.log(truck)
console.log(atv)

let boat = new Vehicle()

boat.year = 2000;
boat.model = "yahmaha";
boat.make = "sharkbait";

console.log(boat.make)



// Make a user class with a username and password
// then assign a username and password to a user objecy and console.log that object

class User {
    constructor(userName, userEmail, userPassword){
        this.userName = userName;
        this.userEmail = userEmail;
        this.userPassword = userPassword;
    }
}

let hamzah = new User()
hamzah.userName = "hamer15";
hamzah.userEmail = "hamer15@gmail.com";
hamzah.userPassword = 14235948;

console.log(hamzah);

let daniel = new User()


