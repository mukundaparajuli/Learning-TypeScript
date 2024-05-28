const score: Array<number> = [];

// can accept either number or a boolean and can return either a number or a boolean independent of the type of the argument
function identityOne(val: number | boolean): number | boolean {
  return val;
}

// can accept any type of data and can return any type of data
const identityTwo = (val: any): any => {
  return val;
};

// can accept an argument of any type and returns that of the same type
function identityThree<Type>(val: Type): Type {
  return val;
}

//
function identityFour<T>(val: T): T {
  return val;
}
identityThree("3");

interface Bottle {
  brand: string;
  price: number;
}

identityFour<Bottle>({ brand: "test", price: 210 });

// generics and arrays
function identityFive<T>(val: T[]): T {
  const index = 3;
  return val[index];
}

function identitySix<T>(val: Array<T>): T {
  return val[4];
}

// generics with arrow functions
const identitySeven = <T>(val: T): T => {
  return val;
};

const identityEight = <T>(val: Array<T>): T => {
  return val[4];
};
