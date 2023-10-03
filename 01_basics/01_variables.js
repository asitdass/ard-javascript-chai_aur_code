const accountId = 1223;
let myName = "Asit";
var city = "Bengaluru";
surname = "Dass" //js also identifies the variable without let, var, const
let pinCode; //this will give undefined

// accountId = 2;  // Not Allowed
myName = "Rohan"
city = "Berhampur"
console.table([accountId, myName, city, surname, pinCode]);
// Prefer not to use var because of block scope and functional scope