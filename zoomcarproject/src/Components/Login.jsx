import React from "react";
import { authcontext } from "../Context/AuthContext/AuthContextProvider";
import { useContext ,useState} from "react";
import {Button,Box,Input,Stack,Container,Image, Center} from '@chakra-ui/react'
import axios from "axios"
import { loading1,success,error1 } from "../Context/AuthContext/action";
import { Navigate } from "react-router-dom";

const Login1 = ({set}) => {
  const{state,dispatch}=useContext(authcontext)
  const [detail,setDetails]=useState({email:"",password:""})
  const{authstatus,loading,error}=state

  const login=(data={})=>{
     dispatch(loading1(true))
    axios.post(`https://reqres.in/api/login`,{
      email:data.email,
      password:data.password
    })
    .then((res)=>dispatch(success(false,res.data.token,true)))
    .catch((err)=>dispatch(error1(false,false)))
}

console.log(state)
const submit=(e)=>{
  e.preventDefault();
  login(detail)
}
if(authstatus){
  return <Navigate to="/"/>
}
if(!error){
  alert("Something went wrong. please refresh")
}
  return (
    <Box textAlign="center" mt="70px">
    <Box color="#32CD32"fontSize="25px"fontWeight="bold" mb="10px">WELCOME TO LOGIN PAGE</Box>
    <Box  w="33%" m="auto" mt="30px" h="auto" bg="white" p="10px 0px" borderRadius="20px">
    <Image src="https://www.zoomcar.com/build/fb65fcc43b8bededb813e093ea2d47d3.svg" h="65%" w="100%"/>
    <Stack spacing={3}   w="70%" m="auto" p="10px 0px" textAlign="center" >
    <Input w="100%" bg="lightgrey" _hover={{bg:"white",transition:"0.5s"}} type='email' name="email" placeholder="your eamil" value={detail.email} onChange={(e)=>setDetails({...detail,email:e.target.value})}/>
    <Input w="100%" bg="lightgrey" _hover={{bg:"white",transition:"0.5s"}}  type='password' name="password" placeholder="your password" value={detail.password} onChange={(e)=>setDetails({...detail,password:e.target.value})}/>
    <Button w="100%" bg="lightgreen"  onClick={submit} isLoading={loading}>SUBMIT</Button>
    <Box>OR</Box>
    <Box onClick={()=>set()} color="#32CD32"fontSize="20px"fontWeight="bold">SIGNUP </Box>
    </Stack>
    </Box>
    </Box>
  )
};

export default Login1;