import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { useRecoilValue } from "recoil";
import { adminLoggedin, myCourse, newUserLoggedIn } from "../../Recoil/Recoil";
import { useNavigate } from "react-router-dom";
import style from "./MyCourses.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import SearchBar from "../../Atom/SearchBar/SearchBar";

export default function MyCourses() {
  const recoiledData = useRecoilValue(myCourse);
  const [search, setSearch] = useState("");
  const nav = useNavigate();
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

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  return (
    <div className={style.background}>
      <div className={style.main}>
        <Navbar />
        <h3 className={style.title}>My Courses</h3>
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
          {recoiledData
            .filter(e => e.name.toLowerCase().includes(search.toLowerCase()))
            .map(e =>
              <div
                key={e.id}
                className={style.swing}
                onClick={() => handleLesson(e)}
              >
                <img
                  src={e.thumbnail}
                  className={style.thumbnail}
                  height="60%"
                  width="90%"
                  alt="thumbnail"
                />
                <h5>
                  {e.name}
                </h5>
                <p>
                  {e.author}
                </p>
              </div>
            )}
        </div>
      </div>
    </div>
  );
}
