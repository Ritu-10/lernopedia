import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../Atom/CustomButton/CustomButton";
import style from "./Introduction.module.css";
import { FiToggleRight } from "react-icons/fi";
import { WiStars } from "react-icons/wi";

export default function Introduction() {
  return (
    <div className={style.main}>
      <div className={style.image}>
        <img
          className={style.img}
          src="https://i.pinimg.com/originals/5a/14/2f/5a142f3e0eb5dcf54f2990099440198a.png"
          alt="intro"
        />
        <div className={style.text}>
          <h6 style={{ color: "rgb(7, 197, 181)", marginBottom: "3vh" }}>
            <b>
              INTRODUCTION <WiStars style={{ fontSize: "2rem" }} />
            </b>
          </h6>
          <h2 style={{ marginBottom: "3vh" }}>
            <b>Learn - O - Pedia for Web Development</b>
          </h2>
          <h4 style={{ marginBottom: "3vh" }}>Online Classes!</h4>
          <ul>
            <li>
              <FiToggleRight style={{ color: "rgb(7, 197, 181)" }} /> Access To
              Online Learning
            </li>
            <li>
              <FiToggleRight style={{ color: "rgb(7, 197, 181)" }} /> Free
              Online Learning
            </li>
          </ul>
          <Link to="/courses">
            <CustomButton className={style.btn} text="GET STARTED" />
          </Link>
        </div>
      </div>
    </div>
  );
}
