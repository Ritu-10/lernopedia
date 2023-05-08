import React, { useEffect, useState } from "react";
import { MdOndemandVideo } from "react-icons/md";
import { AiOutlineBars } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import Style from "./Lessons.module.css";
import { adminLoggedin, newUserLoggedIn } from "../../Recoil/Recoil";
import { useRecoilValue } from "recoil";

export default function Lessons() {
  const [render, setRender] = useState([]);
  const [show, setShow] = useState(false);
  const [video, setVideo] = useState("");
  const nav = useNavigate()
  const isAdminLoggedIn = useRecoilValue(adminLoggedin)
  const isUserLoggedIn = useRecoilValue(newUserLoggedIn)


  useEffect(() => {
    if (!isUserLoggedIn && !isAdminLoggedIn) {
      nav("/");
    }
  });

  useEffect(() => {
    const lessonData = JSON.parse(localStorage.getItem("dynamicLesson"));
    const getsLessons = JSON.parse(localStorage.getItem("lessons"));
    const renderData = getsLessons.filter(x => x.id === lessonData.id);
    setRender(renderData);
  }, []);

  function handleVideo(x) {
    console.log(x.video);
    setVideo(x);
    if (show === true) {
      setShow(false);
    } else {
      setShow(true);
    }
  }
  return (
    <div className={Style.main}>
      <div className={Style.frame}>
        <div style={{ height: "10vh" }} />
        <div className={Style.header}>
          <h6>
            <Link to="/courses">
              <BiArrowBack />
            Back to courses
            </Link>
          </h6>
        </div>
        <p>Course Discussions</p>
        <h6>
          {" "}<AiOutlineBars /> Contents
        </h6>
        {render.map(x =>
          <div key={Math.random()}>
            <div
              onClick={() => {
                handleVideo(x);
              }}
            >
              <div className={Style.content}>
                <MdOndemandVideo /> {x.title}
              </div>
            </div>
          </div>
        )}
        {show
          ? <div className={Style.video}>
              <h4>
                {video.title}
              </h4>
              <ReactPlayer
                url={video.video}
                width="45vw"
                height="60vh"
                controls={true}
                className={Style.player}
              />
              <p>
                {video.details}
              </p>
            </div>
          : " "}
      </div>
    </div>
  );
}
