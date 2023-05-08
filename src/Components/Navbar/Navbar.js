import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsJournalCode } from "react-icons/bs";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import style from "./Navbar.module.css";
import { useRecoilState, useRecoilValue } from "recoil";
import { admin, adminLoggedin, LoggedinUser } from "../../Recoil/Recoil";

export default function Navbar() {
  const nav = useNavigate();
  const [show, setShow] = useState(false);
  const [logout, setLogout] = useState(false);
  const [adminLoggedinStatus, setAdminLoggedinStatus] = useRecoilState(
    adminLoggedin
  );
  const [LoggedinUserDetails, setLoggedinUserDetails] = useRecoilState(
    LoggedinUser
  );
  const AdminDetails = useRecoilValue(admin);
  function handleLogoRedirect() {
    nav("/home");
  }
  function handleClick() {
    setShow(!show ? true : false);
  }

  function handleLogOutClick() {
    setLogout(!logout ? true : false);
  }

  function handleLogOut() {
    setAdminLoggedinStatus(false);
    setLoggedinUserDetails(false);
    nav("/");
  }
  return (
    <div className={style.main}>
      <div className={style.logo} onClick={handleLogoRedirect}>
        <img src="https://imgur.com/z7v4JDN.png" height="30vh" /> Learn - O - Pedia
      </div>

      <div className={style.options}>
        <div className={style.hide} id={show ? style.showMe : ""}>
          <Link to="/courses" className={style.link}>
            Courses
          </Link>
          <Link to="/mycourses" className={style.link}>
            My Courses
          </Link>
          {adminLoggedinStatus
            ? <Link to="/addcourse" className={style.link}>
                AddCourse
              </Link>
            : ""}
        </div>
        <div className={style.info} onClick={handleLogOutClick}>
          <p style={{ color: "white", fontFamily: "cursive" }}>
            {!adminLoggedinStatus
              ? LoggedinUserDetails.Name
              : AdminDetails.Name}
          </p>
          <img
            src="https://img.freepik.com/premium-vector/brunette-man-avatar-portrait-young-guy-vector-illustration-face_217290-1035.jpg?w=2000"
            height="40vh"
            alt="profile"
            style={{
              borderRadius: "10px"
            }}
          />
        </div>
        <div className={style.mobile}>
          <h1 onClick={handleClick}>
            {show ? <RxCross2 /> : <RxHamburgerMenu />}
          </h1>
        </div>
      </div>
      {logout
        ? <div className={style.logout} onClick={handleLogOut}>
            LogOut
          </div>
        : ""}
    </div>
  );
}
