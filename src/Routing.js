import React from 'react'
import { Routes, Route } from 'react-router-dom'
import App from './App'
import AddCourse from './Pages/AddCourse/AddCourse'
import Courses from './Pages/Courses/Courses'
import Lessons from './Pages/Lessons/Lessons'
import Login from './Pages/Login/Login'
import MyCourses from './Pages/MyCourses/MyCourses'
import Registration from './Pages/Registration/Registration'


export default function Routing(){
  
  return(
    <>
    <Routes>
    <Route path='/' element={<Login/>}/>
      <Route path='/home' element={<App/>}/>
      <Route path='/courses' element={<Courses/>}/>
      <Route path='/mycourses' element={<MyCourses/>}/>
      <Route path='/lessons' element={<Lessons/>}/>
      <Route path='/addcourse' element={<AddCourse/>}/>
      <Route path='/register' element={<Registration/>}/>
 </Routes>
    </>
  ) 
}

