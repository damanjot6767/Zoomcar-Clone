import React from "react";
import { createContext,useReducer ,useState} from "react";
import reducer from "./reducer";
export const authcontext = createContext();



const AuthContextProvider = ({children}) => {
const[state,dispatch]=useReducer(reducer,{loading:false,error:true,authstatus:false,token:null,email:"eve.holt@reqres.in",data:[]})
  return <authcontext.Provider value={{state,dispatch}}>{children}</authcontext.Provider>
};

export default AuthContextProvider;