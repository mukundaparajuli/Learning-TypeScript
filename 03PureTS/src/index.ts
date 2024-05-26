// console.log("TypeScript is here!");
// console.log("TypeScript is amazing!");

class User {
  name: string;
  age: number;
  city: string;
  readonly email: string = "";

  constructor(name: string, age: number, city: string) {
    this.name = name;
    this.age = age;
    this.city = city;
  }
}

const mukunda = new User("Mukunda Parajuli", 21, "Pokhara");
mukunda.email = "12";
export {};
