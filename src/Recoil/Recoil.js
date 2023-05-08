import { atom } from "recoil";

export const myCourse = atom({
  key: "myCourse",
  default: []
});

export const admin = atom({
  key: "adminLogin",
  default: {
    Name: "Abhishek",
    UserName: "starlordAbhi",
    Email: "abhi123@gmail.com",
    Password: "Abhi123@"
  }
});

export const adminLoggedin = atom({
  key: "adminLoggedIn",
  default: false
});

export const LoggedinUser = atom({
  key: "loggedinUser",
  default: {}
});

export const newUserLoggedIn = atom({
  key: "userLoggedIn",
  default: false
});
