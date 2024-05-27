// console.log("TypeScript is here!");
// console.log("TypeScript is amazing!");

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
  protected courseCount: number = 1;
  constructor(public name: string, public age: number, public email: string) {}
  get getAppleEmail(): string {
    return `apple${this.email}`;
  }
  get getCourseCount(): number {
    return this.courseCount;
  }

  // setter cannot have a return type annotaion
  set setCourseCount(courseNumber: number) {
    if (courseNumber < 1) {
      throw new Error("Course no. cannot be less than 1");
    }
    this.courseCount = courseNumber;
  }
}

class subUser extends User {
  isFamily: boolean = true;
  changeCourseCount() {
    this.courseCount = 12;
  }
}
export {};
