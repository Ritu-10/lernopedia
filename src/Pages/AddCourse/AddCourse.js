import React, { useEffect, useState } from "react";
import CustomButton from "../../Atom/CustomButton/CustomButton";
import CustomInput from "../../Atom/CustomInput/CustomInput";
import style from "./AddCourse.module.css";
import Navbar from "../../Components/Navbar/Navbar";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import { adminLoggedin, newUserLoggedIn } from "../../Recoil/Recoil";

export default function AddCourse() {
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [lessons, setLessons] = useState("");
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [coursesLocal, setCoursesLocal] = useState([]);
  const [lessonsLocal, setLessonsLocal] = useState([]);
  const isAdminLoggedIn = useRecoilValue(adminLoggedin);
  const isUserLoggedIn = useRecoilValue(newUserLoggedIn);
  const nav = useNavigate();

  useEffect(() => {
    const getsCourses = JSON.parse(localStorage.getItem("courses"));
    const getsLessons = JSON.parse(localStorage.getItem("lessons"));
    setCoursesLocal(getsCourses);
    setLessonsLocal(getsLessons);
  }, []);

  useEffect(() => {
    if (!isUserLoggedIn && !isAdminLoggedIn) {
      nav("/");
    }
  });

  function handleChange(e) {
    if (e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  }

  function handleChangeVideo(e) {
    if (e.target.files[0]) {
      setVideo(URL.createObjectURL(e.target.files[0]));
    }
  }

  function handleAdd() {
    const course = {
      id: id,
      name: name,
      author: author,
      thumbnail: image
    };

    const lesson = {
      id: id,
      lession: lessons,
      title: title,
      details: details,
      video: video
    };

    coursesLocal.push(course);
    setCoursesLocal([...coursesLocal]);
    lessonsLocal.push(lesson);
    setLessonsLocal([...lessonsLocal]);
    localStorage.setItem("courses", JSON.stringify(coursesLocal));
    localStorage.setItem("lessons", JSON.stringify(lessonsLocal));
  }

  return (
    <div className={style.main}>
      <Navbar />
      <div className={style.form}>
        <h4>Add Course</h4>
        <p>
          <CustomInput
            id={style.num}
            className={style.inpt}
            placeholder="Id"
            type="number"
            onChange={e => setId(e.target.value)}
          />
          <CustomInput
            className={style.inpt}
            placeholder="Course Name"
            type="text"
            onChange={e => setName(e.target.value)}
          />
        </p>
        <p>
          <CustomInput
            className={style.inpt}
            placeholder="Author"
            type="text"
            onChange={e => setAuthor(e.target.value)}
          />
          <CustomInput
            id={style.num}
            className={style.inpt}
            placeholder="Lession"
            type="number"
            onChange={e => setLessons(e.target.value)}
          />
        </p>
        <p>
          <CustomInput
            id={style.title}
            className={style.inpt}
            placeholder="Title"
            type="text"
            onChange={e => setTitle(e.target.value)}
          />
        </p>
        <p>
          <CustomInput
            id={style.title}
            className={style.inpt}
            placeholder="Details"
            type="text"
            onChange={e => setDetails(e.target.value)}
          />
        </p>
        <p className={style.thumbnail}>
          Thumbnail
          <CustomInput
            id={style.link}
            className={style.inpt}
            placeholder="Img link"
            type="file"
            onChange={handleChange}
          />
        </p>
        <p className={style.vdo}>
          Choose Video
          <CustomInput
            id={style.link}
            className={style.inpt}
            placeholder="Video link"
            type="file"
            onChange={handleChangeVideo}
          />
        </p>
        <CustomButton
          onClick={handleAdd}
          text="Add Course"
          className={style.btn}
        />
      </div>
    </div>
  );
}
