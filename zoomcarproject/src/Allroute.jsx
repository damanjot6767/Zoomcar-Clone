import React from "react";
import {Route,Routes} from "react-router-dom"
import Fligth from "./Components/fligth";
import Home from "./Components/Home";
import Login from "./Components/Signup";
import Private from "./private";

function AllRoute(){
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/signup/login" element={<Login/>}></Route>
            <Route path="/fligth" element={<Private><Fligth/></Private>}></Route>
        </Routes>
    )
}
export default AllRoute