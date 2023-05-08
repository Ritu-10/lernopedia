import React, { useEffect, useState } from "react";
import CustomButton from "../../Atom/CustomButton/CustomButton";
import CustomInput from "../../Atom/CustomInput/CustomInput";
import style from "./Registration.module.css";
import { Link, useNavigate } from "react-router-dom";

export default function Registration() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [EM, setEM] = useState("");
  const [PW, setPW] = useState("");
  const [US, setUS] = useState("");
  const nav = useNavigate()

  useEffect(() => {
    if (localStorage.getItem("userDetails")) {
      let data = JSON.parse(localStorage.getItem("userDetails"));
      setData(data);
    }
  }, []);
  function handleName(e) {
    setName(e.target.value);
  }

  function handleUserName(e) {
    setUserName(e.target.value);
    const userRegEx = /\s/g;
    if (userRegEx.test(!userName)) {
      setUS("");
    } else if (userRegEx.test(userName) && userName !== "") {
      setUS("UserName is not Valid");
    } else {
      setUS("");
    }
  }

  function handleEmail(e) {
    setEmail(e.target.value);
    const regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (regEmail.test(email)) {
      setEM("");
    } else if (!regEmail.test(email) && email !== "") {
      setEM("Email is Not Valid");
    }
  }

  function handlePassword(e) {
    setPassword(e.target.value);
    setPassword(e.target.value);
    const pwRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,20}$/;
    if (pwRegEx.test(password)) {
      setPW("");
    } else if (!pwRegEx.test(password) && password !== " ") {
      setPW("Password is Not Valid");
    } else if (
      EM === "Email is not valid" ||
      PW === "Password is not valid" ||
      US === "UserName is not valid"
    ) {
      alert("you have enter wrong details");
    } else {
      setPW("");
    }
  }

  function handleRegister(event) {
    event.preventDefault();
    const alreadyRegister = data.find(
      x => x.Email === email && x.UserName === userName
    );
    if (alreadyRegister) {
      alert("User Already Register");
    } else {
      if (email === "" || userName === "" || password === "") {
        alert("Please Fill the Details");
      } else {
        const userData = {
          Name: name,
          UserName: userName,
          Email: email,
          Password: password
        };
        data.push(userData);
        setData([...data]);
        localStorage.setItem("userDetails", JSON.stringify(data));
        setEmail("");
        setUserName("");
        setPassword("");
        setName("");
        setEM("");
        setPW("");
        setUS("");
        nav("/")
      }
    }
  }
  return (
    <div className={style.main}>
      <div className={style.form}>
        <h4>Register</h4>
        <hr />
        <p>
          <CustomInput
            id={style.num}
            className={style.inpt}
            placeholder="Name"
            type="text"
            onChange={handleName}
            value={name}
          />
        </p>
        <p>
          <CustomInput
            id={style.num}
            className={style.inpt}
            placeholder="UserName"
            type="text"
            onChange={handleUserName}
            value={userName}
          />
          <br />
          {US}
        </p>
        <p>
          <CustomInput
            id={style.num}
            className={style.inpt}
            placeholder="Email"
            type="email"
            onChange={handleEmail}
            value={email}
          />
          <br />
          {EM}
        </p>
        <p>
          <CustomInput
            id={style.num}
            className={style.inpt}
            placeholder="Password"
            type="password"
            onChange={handlePassword}
            value={password}
          />
          <br />
          {PW}
        </p>
        <CustomButton
          text="Register"
          className={style.btn}
          onClick={handleRegister}
        /><br/>
        <h6>Already Registered ? <Link to ="/">LogIn</Link></h6>
      </div>
    </div>
  );
}
