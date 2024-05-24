function addTwoNum(num: number): number {
  return num + 4;
  // return "Mukunda";
}

function getToUpper(val: string) {
  val.toUpperCase();
}

function signUp(
  name: string,
  email: string,
  password: string,
  isPaid: boolean
) {}

function getValue(myVal: number) {
  if (myVal > 5) {
    return true;
  }
  return "200 OK";
}

const getHello = (s: string): string => {
  return "";
};

const heroes = ["Rajesh Hamal", "Biraj Bhatta", "Nikhil Uprety"];
heroes.map((hero): string => {
  return `The hero is ${hero}`;
  //   return 1;
});

const consoleError = (errMsg: string): void => {
  console.log(errMsg);
};

const handleError = (errMsg: string): never => {
  throw new Error(errMsg);
};

addTwoNum(5);
getToUpper("mukunda");
signUp("Mukunda", "mukunda@mukunda.com", "password", false);

export {};
