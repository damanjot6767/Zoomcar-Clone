import React from "react";
import { authcontext } from "../Context/AuthContext/AuthContextProvider";
import { useContext ,useState} from "react";
import {Button,Box,Input,Stack,Container,Image, Center} from '@chakra-ui/react'
import axios from "axios"
import { loading1,success,error1 } from "../Context/AuthContext/action";
import { Navigate } from "react-router-dom";
import Login1 from "./Login";

const Login = () => {
  const{state,dispatch}=useContext(authcontext)
  const [detail,setDetails]=useState({email:"",password:""})
  const{authstatus,loading,error}=state
  const[status,setStatus]=useState(true)

  const login=(data={})=>{
     dispatch(loading1(true))
    axios.post(`https://reqres.in/api/register`,{
      email:data.email,
      password:data.password
    })
    .then((res)=>dispatch(success(false,res.data.token,true)))
    .catch((err)=>dispatch(error1(false,false)))
}

const submit=(e)=>{
  e.preventDefault();
  login(detail)
}

const setsignup=()=>{
    setStatus(true)
}
if(authstatus){
  return <Navigate to="/"/>
}
if(!error){
  alert("Something went wrong. please refresh")
}
 if(status){
    return (
        <Box textAlign="center" mt="70px">  
        <Box color="#32CD32"fontSize="25px"fontWeight="bold" mb="10px">WELCOME TO SIGNUP PAGE</Box>
        <Box  w="33%" m="auto" h="auto" bg="white" p="10px 0px" borderRadius="20px" border="2px" borderColor="green">
        <Image src="https://www.zoomcar.com/build/fb65fcc43b8bededb813e093ea2d47d3.svg" h="65%" w="100%"/>
         <Box w="70%" m="auto">
         <Stack spacing={3}   w="90%" m="auto" p="10px 0px" textAlign="center" >
        <Input w="100%" bg="lightgrey" _hover={{bg:"white",transition:"0.5s"}} type='email' name="email" placeholder="your email" value={detail.email} onChange={(e)=>setDetails({...detail,email:e.target.value})}/>
        <Input w="100%" bg="lightgrey" _hover={{bg:"white",transition:"0.5s"}}  type='password' name="password" placeholder="your password" value={detail.password} onChange={(e)=>setDetails({...detail,password:e.target.value})}/>
        <Button w="100%" bg="lightgreen"  onClick={submit} isLoading={loading}>SUBMIT</Button>
        <Box>OR</Box>
        <Box onClick={()=>setStatus(false)} color="#32CD32"fontSize="20px"fontWeight="bold">LOGIN</Box>
        </Stack>
         </Box>
        </Box>
        </Box>
      )
 }
 else{
    return <Login1 set={setsignup}/>
 }

};

export default Login;