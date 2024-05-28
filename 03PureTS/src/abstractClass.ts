abstract class User {
  constructor(
    public name: string,
    public age: number,
    public isAdmin: boolean
  ) {}
  abstract loginUser(): void;
}

// const mukunda = new User("mukunda", 21, true);

class subUser extends User {
  constructor(public gender: string) {
    super("mukunda", 21, true);
  }
  loginUser(): void {
    console.log("Logged in user successfully");
  }
}

// we cannot create an object or instance for an abstract class
// we can only inherit an abstract class and use it in the child class

// when any function is declared in a class it must be defined
// but abstract function is the type of function which is declared in the parent class but is not
//      defined and it is defined inside the child class

// abstract method or abstract function can only be defined inside the abstract class
