const detectType = (val: string | number) => {
  if (typeof val === "string") {
    return val.toLowerCase();
  }
  return val + 5;
};

const provideId = (_id: string | null) => {
  if (!_id) {
    console.log("Please provide the id.");
    return;
  }
  return _id.toLowerCase();
};

// Dont do this
const printAll = (strs: string | string[] | null) => {
  if (strs) {
    if (typeof strs === "string") {
      return strs.toLowerCase();
    } else if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
      return;
    }
  }
};

// 👆 This doesnot check the case of empty string

interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

function isAdminAccount(acc: User | Admin) {
  if ("isAdmin" in acc) {
    return acc.isAdmin;
  }
  return false;
}

function logValue(val: Date | string) {
  if (val instanceof Date) {
    console.log(val.toUTCString());
    return;
  }
  console.log(val.toLowerCase());
  return;
}

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird) {
  return (pet as Fish).swim !== undefined;
}
function isBird(pet: Fish | Bird): pet is Fish {
  return (pet as Bird).fly !== undefined;
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    console.log("Fish Food!");
    return;
  }
  console.log("Bird Food!");
  return;
}

//
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  side: number;
}

interface Rectangle {
  kind: "rectangle";
  length: number;
  breadth: number;
}

type Shape = Circle | Square | Rectangle;

function getShape(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  } else if (shape.kind === "square") {
    return shape.side * shape.side;
  }
  return shape.length * shape.breadth;
}

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side ** 2;
    case "rectangle":
      return shape.length * shape.breadth;
    default:
      const _defaultforshape: never = shape;
      return _defaultforshape;
  }
}
