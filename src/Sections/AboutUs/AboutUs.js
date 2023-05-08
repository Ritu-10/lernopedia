import React from "react"
import style from "./AboutUs.module.css"
export default function AboutUs(){

    return(
    <>
        <div className={style.card}>
            <div className={style.card1}><img className={style.image} src="https://static.uacdn.net/web-cms/dailyliveclasses_0c0023950f_c187155ee3.svg?q=75&fm=webp&w=384" alt="card1"/>
            <div className={style.cardContent}>
            <h3>Daily Live Classes </h3>
            <p>Chat with educators, ask questions, answer live polls, and get your doubts cleared - all while the class is going on</p></div></div>
            <div className={style.card1}><img className={style.image} src="https://static.uacdn.net/web-cms/syllabus_a9da21d824_b20b285483.svg?q=75&fm=webp&w=384" alt="card2"/>
            <div className={style.cardContent}>
            <h3>Practice and revise</h3>
            <p>Learning isn't just limited to classes with our practice section, mock tests and lecture notes shared as PDFs for your revision</p></div></div>
            <div className={style.card1}><img className={style.image} src="https://static.uacdn.net/web-cms/learnanytimeanywhere_cb19d5de30_b92bc0c6a1.svg?q=75&fm=webp&w=384" alt="card3"/>
            <div className={style.cardContent}>
            <h3>Learn anytime, anywhere</h3>
            <p>One subscription gets you access to all our live and recorded classes to watch from the comfort of any of your devices</p></div></div>
        </div>
    </>
    )
}