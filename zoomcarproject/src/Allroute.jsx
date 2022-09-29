import React from "react";
import {Route,Routes} from "react-router-dom"
import Home from "./Components/Home";
import Login from "./Components/Signup";
function AllRoute(){
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/signup/login" element={<Login/>}></Route>
        </Routes>
    )
}
export default AllRoute