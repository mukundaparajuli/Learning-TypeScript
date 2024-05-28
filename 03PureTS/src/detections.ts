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
