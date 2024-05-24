// const User = {
//   name: "Mukunda Parajuli",
//   email: "mukundaparajuli@gmail.com",
//   age: 20,
//   isActive: true,
// };

// const newUser = { name: "Ramesh", isPaid: false };
// createUser(newUser);

// function createCourse(): { name: string; price: number } {
//   return { name: "Harihar", price: 4000 };
// }

// createCourse();

// type User = {
//   name: string;
//   email: string;
//   age: number;
// };
// function createUser(user: User): User {
//   return { name: user.name, email: user.email, age: user.age };
// }

// createUser({ name: "Mukunda", email: "mukunda@mukunda.com", age: 21 });

type User = {
  readonly _id: string;
  name: string;
  email: string;
  age: number;
  creditCardDetail?: number; // ?==>optional
};

let myUser: User = {
  _id: "12345",
  name: "Mukunda Parajuli",
  email: "m@m.com",
  age: 21,
};

myUser.email = "h@h.com";
// myUser._id = "1111"; //readonly values cannot be manipulated

type cardNumber = {
  cardnumber: number;
};

type cardDate = {
  carddate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: string;
  };
export {};
