import React, { useEffect, useState } from "react";
import CustomButton from "../../Atom/CustomButton/CustomButton";
import Navbar from "../../Components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import style from "./Courses.module.css";
import Footer from "../../Components/Footer/Footer";
import { useRecoilState, useRecoilValue } from "recoil";
import { adminLoggedin, myCourse, newUserLoggedIn } from "../../Recoil/Recoil";
import SearchBar from "../../Atom/SearchBar/SearchBar";
import { AiOutlineSearch } from "react-icons/ai";
export default function Courses() {
  const nav = useNavigate();
  const [myData, setMyData] = useRecoilState(myCourse);
  const getsCourses = JSON.parse(localStorage.getItem("courses"));
  const [search, setSearch] = useState("");
  const isAdminLoggedIn = useRecoilValue(adminLoggedin)
  const isUserLoggedIn = useRecoilValue(newUserLoggedIn)


  useEffect(() => {
    if (!isUserLoggedIn && !isAdminLoggedIn) {
      nav("/");
    }
  });

  function handleLesson(e) {
    console.log(e);
    localStorage.setItem("dynamicLesson", JSON.stringify(e));
    nav("/lessons");
  }
  function handleSave(e) {
    console.log(e);
    setMyData([e, ...myData]);
    alert("Added Successfully")
  }
  function handleSearch(e) {
    setSearch(e.target.value);
  }

  return (
    <div className={style.background}>
      <div className={style.main}>
        <Navbar />

        <h3 className={style.title}>Courses</h3>
        <div className={style.search}>
          <SearchBar
            placeholder="Search"
            className={style.searchbar}
            type="text"
            onChange={handleSearch}
          />
          <AiOutlineSearch />
        </div>
        <div className={style.courseCard}>
          {getsCourses
            .filter(e => e.name.toLowerCase().includes(search.toLowerCase()))
            .map(e =>
              <div key={e.id} className={style.swing}>
                <img
                  src={e.thumbnail}
                  className={style.thumbnail}
                  height="60%"
                  width="90%"
                  alt="thumbnail"
                />
                <h5 onClick={() => handleLesson(e)}>
                  {e.name}
                </h5>
                <p>
                  {e.author}
                </p>
                <CustomButton
                  text="Save For Later"
                  onClick={() => handleSave(e)}
                  className={style.btn}
                />
              </div>
            )}
        </div>
        <Footer />
      </div>
    </div>
  );
}
