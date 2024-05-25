interface User {
  readonly dbId: number;
  email: string;
  id: number;
  google?: string;
  startTrial(): string;
  getCoupon(couponName: string): number;
}

// you can totally add other options like this as well
// also called reopening of an interface
interface User {
  github?: string;
}

interface Admin extends User {
  role: "admin" | "user";
}

const mukundaparajuli: User = {
  dbId: 123,
  email: "mukunda@mukunda.com",
  id: 22737,
  startTrial: () => {
    return "Mukunda";
  },

  //you dont need to match the variable as of interface
  getCoupon: (name: "name of the coupon") => {
    return 13;
  },
};

// mukundaparajuli.dbId = 1234;     =>not allowed since it is 'readonly'
mukundaparajuli.email = "m@m.com";

// Difference between type and interface
// ==> ways to extend an interface and type
// ==> a type cannot be changed once created unlike interface
