import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineLinkedin
} from "react-icons/ai";
import { FiYoutube } from "react-icons/fi";
import { RxTwitterLogo } from "react-icons/rx";
import { BsJournalCode } from "react-icons/bs";
import Style from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={Style.box}>
      <div className={Style.social}>
        <div className={Style.box2}>
          <h6>Learn-O-Pedia Bussiness</h6>
          <h6>Careers</h6>
          <h6>Terms</h6>
          <h6>Tech on Learn-O-Pedia</h6>
          <h6>Blog</h6>
          <h6>Privacy policy</h6>
          <h6>Get the app</h6>
          <h6>Help and Support</h6>
          <h6>Cookie settings</h6>
          <h6>About Us</h6>
          <h6>Affiliate</h6>
          <h6>Sitemap</h6>
          <h6>Contact us</h6>
          <h6>Investors</h6>
          <h6>Accessibilty statement</h6>
        </div>
        <div className={Style.socialLogo}>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineInstagram />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiYoutube />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineFacebook />
          </a>
          <a
            href="https://twitter.com/home?lang=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RxTwitterLogo />
          </a>
          <a
            href="https://in.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}<AiOutlineLinkedin />
          </a>
        </div>
      </div>
      <label className={Style.boxIcon}>
        <img src="https://imgur.com/z7v4JDN.png"  alt="logo" height="40vh"/> Learn - O - Pedia
      </label>
      <div className={Style.boxFooter}>
        <span>
          All trademarks are properties of their respective owners. 2008-2023 ©
          Learn-O-Pedia™ Ltd. All rights reserved.
        </span>
      </div>
      <h3 className={Style.boxDesigned}>
        Designed by <span className={Style.boxownername}> Abhishek</span>😎
      </h3>
    </div>
  );
}
