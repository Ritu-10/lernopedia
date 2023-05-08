import React, { useState } from "react";
import CustomButton from "../../Atom/CustomButton/CustomButton";
import CustomInput from "../../Atom/CustomInput/CustomInput";
import style from "./Login.module.css";
import {
  admin,
  adminLoggedin,
  newUserLoggedIn,
  LoggedinUser
} from "../../Recoil/Recoil";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {

  
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const Data = JSON.parse(localStorage.getItem("userDetails")) || [];
  const adminRecoiled = useRecoilValue(admin);
  const setAdminLoggedin = useSetRecoilState(adminLoggedin);
  const setUserLoggedin = useSetRecoilState(newUserLoggedIn);
  const LoggedinUserDetails = useSetRecoilState(LoggedinUser);
  const isAdminLoggedIn = useRecoilValue(adminLoggedin)
  const nav = useNavigate();

  function handleUserName(e) {
    setUserName(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit() {
    const userFind =
      Data.find(x => x.UserName === userName && x.Password === password) || "";
    if (userFind) {
      alert("Sucessfully Logged In");
      setUserLoggedin(true);
      LoggedinUserDetails(userFind);
      nav("/home");
    } else if (
      adminRecoiled.UserName === userName &&
      adminRecoiled.Password === password
    ) {
      alert("Admin Logged In");
      setAdminLoggedin(true);
      nav("/home");
    } else {
      alert("Please Register");
    }
  }

  return (
    <div className={style.main}>
      <div className={style.form}>
        <h4>Login</h4>
        <hr />
        <p>
          <CustomInput
            id={style.num}
            className={style.inpt}
            placeholder="UserName"
            type="text"
            onChange={handleUserName}
          />
        </p>
        <p>
          <CustomInput
            id={style.num}
            className={style.inpt}
            placeholder="Password"
            type="password"
            onChange={handlePassword}
          />
        </p>
        <CustomButton
          text="Login"
          className={style.btn}
          onClick={handleSubmit}
        />
        <br />
        <h6>
          New User ? <Link to="/register">Register</Link>
        </h6>
      </div>
    </div>
  );
}
