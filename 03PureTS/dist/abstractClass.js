"use strict";
class User {
    constructor(name, age, isAdmin) {
        this.name = name;
        this.age = age;
        this.isAdmin = isAdmin;
    }
}
// const mukunda = new User("mukunda", 21, true);
class subUser extends User {
    constructor(gender) {
        super("mukunda", 21, true);
        this.gender = gender;
    }
    loginUser() {
        console.log("Logged in user successfully");
    }
}
// we cannot create an object or instance for an abstract class
// we can only inherit an abstract class and use it in the child class
// when any function is declared in a class it must be defined
// but abstract function is the type of function which is declared in the parent class but is not
//      defined and it is defined inside the child class
// abstract method or abstract function can only be defined inside the abstract class
