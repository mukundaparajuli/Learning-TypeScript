"use strict";
// console.log("TypeScript is here!");
// console.log("TypeScript is amazing!");
Object.defineProperty(exports, "__esModule", { value: true });
// class User {
//   name: string;
//   #age: number; // ==> a way to declare a variable private
//   city: string;
//   private readonly email: string = "";
//   constructor(name: string, age: number, city: string) {
//     this.name = name;
//     this.#age = age;
//     this.city = city;
//   }
// }
// const mukunda = new User("Mukunda Parajuli", 21, "Pokhara");
// mukunda.email = "12";
// mukunda.email;
// mukunda.#age;
class User {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.courseCount = 1;
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get getCourseCount() {
        return this.courseCount;
    }
    // setter cannot have a return type annotaion
    set setCourseCount(courseNumber) {
        if (courseNumber < 1) {
            throw new Error("Course no. cannot be less than 1");
        }
        this.courseCount = courseNumber;
    }
}
class subUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this.courseCount = 12;
    }
}
