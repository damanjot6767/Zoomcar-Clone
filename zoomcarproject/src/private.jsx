import { useContext } from "react";
import { authcontext } from "./Context/AuthContext/AuthContextProvider";
import {Navigate} from "react-router-dom"
function Private({children}){
    const{state}=useContext(authcontext);
    const{authstatus,token}=state;
   if(!authstatus){
    return <Navigate to ="/signup/login"/>
   }

   return children
}
export default Private