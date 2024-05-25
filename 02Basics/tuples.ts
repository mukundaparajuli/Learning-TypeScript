let user: [number, string, boolean];

user = [13, "Mukunda Parajuli", false]; // => you should abide by the order of the data types in the array

let rgb: [number, number, number] = [224, 213, 112]; // => no of datas inside the array is strict

type User = [number, string];
const newUser: User = [22737, "mukunda@mukunda.com"];

newUser[1] = "harihar@harihar.com";

// since newUser is an array we can use all the array methods for this as well
// this is one of the drawback of tuples here
newUser.push();
newUser.push(12);
export {};
