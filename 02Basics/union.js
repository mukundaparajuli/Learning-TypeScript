"use strict";
// union => combination of two or more data types
//          used when a single variable can have different types of data
Object.defineProperty(exports, "__esModule", { value: true });
// union and objects
var score;
score = 12;
score = true;
score = "32";
score = "ramesh";
var Mukunda = { name: "Mukunda Parajuli", _id: 22737 };
Mukunda = { username: "mukundaparajuli13", _id: 22737 };
function getDB_id(id) {
    //   id.toLowerCase();  ==> not allowed
    if (typeof id === "string") {
        id.toLowerCase();
    }
    console.log("The id is: ".concat(id));
}
getDB_id(23);
getDB_id("23");
// unions and arrays
var array = [1, 2, 3, 4]; //array of number only
var array2 = ["mukunda", "ramesh", "suresh"]; //array of string only
var array3 = [1, 2, 3]; //array of either number or string only
var array4 = [1, 2, 3, "hari"]; //array can be of both numbers and strings
// strict values for a variable
var pi = 3.14;
var seatAllotment;
seatAllotment = "window";
