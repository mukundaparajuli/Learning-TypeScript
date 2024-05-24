const User = {
  name: "Mukunda Parajuli",
  email: "mukundaparajuli@gmail.com",
  age: 20,
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}

const newUser = { name: "Ramesh", isPaid: false };
createUser(newUser);

function createCourse(): { name: string; price: number } {
  return { name: "Harihar", price: 4000 };
}

createCourse();

export {};
