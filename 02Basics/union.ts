// union => combination of two or more data types
//          used when a single variable can have different types of data

// union and objects
let score: number | string | boolean;

score = 12;
score = true;
score = "32";
score = "ramesh";

// union and functions
type User = {
  name: string;
  _id: number;
};

type Admin = {
  username: string;
  _id: number;
};

let Mukunda: User | Admin = { name: "Mukunda Parajuli", _id: 22737 };
Mukunda = { username: "mukundaparajuli13", _id: 22737 };

function getDB_id(id: number | string) {
  //   id.toLowerCase();  ==> not allowed
  if (typeof id === "string") {
    id.toLowerCase();
  }
  console.log(`The id is: ${id}`);
}

getDB_id(23);
getDB_id("23");

// unions and arrays
let array: number[] = [1, 2, 3, 4]; //array of number only
let array2: string[] = ["mukunda", "ramesh", "suresh"]; //array of string only
let array3: number[] | string[] = [1, 2, 3]; //array of either number or string only
let array4: (number | string)[] = [1, 2, 3, "hari"]; //array can be of both numbers and strings

// strict values for a variable
let pi: 3.14 = 3.14;

let seatAllotment: "window" | "aisle" | "middle";
seatAllotment = "window";
// seatAllotment = "crew"; //not allowed

export {};
