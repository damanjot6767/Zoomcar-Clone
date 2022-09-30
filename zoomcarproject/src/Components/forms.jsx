import {FormLabel,Select,Stack,Input,Button} from '@chakra-ui/react'
  import database from "../database.json"
  import { useState,useContext } from 'react';
  import { authcontext } from "../Context/AuthContext/AuthContextProvider";
  import { Navigate, NavLink } from 'react-router-dom';
  const{fligth}=database;
  
  function Forms(){
     const{dispatch,state}=useContext(authcontext)
     const[detail,setDetail]=useState({source:"",destination:"",category:"Select Tour"})
     const{source,destination,category}=detail;
     const[status,setStatus]=useState(false)
     const handle=()=>{  
     let filterdata = fligth.filter((ele)=> (source===ele.source  && category===ele.category && destination===ele.destination));
     dispatch({type:"data",data:filterdata})
     setDetail({...detail,source:"",destination:"",category:"Select Tour"})
     setStatus(true)
    }
    if(status){
      return (
        <Navigate to = "/fligth"/>
       )
    }
    return (
        <Stack  borderRadius="20px" p="20px" bg="white" w="25%" m="auto" spacing={2} mt="40px">
                <FormLabel textAlign="center" fontWeight="bold">Select A Tour Type:</FormLabel>
                <Select value={detail.category} border="1px" borderColor="green" focusBorderColor='#008000' fontWeight="bold" _hover={{bg:"white",transition:"0.5s"}} bg="lightgray"  placeholder='Select Tour' onChange={(e)=>setDetail({...detail,category:e.target.value})}>
                <option >Car Round Trip</option>
                <option>Airport Round Trip</option>
               </Select>
               <Input value={detail.source}  _hover={{bg:"white",transition:"0.5s"}} bg="lightgray" border="1px" borderColor="green" focusBorderColor='#008000' fontWeight="bold" placeholder="Source" type="text" onChange={(e)=>setDetail({...detail,source:e.target.value})}  />
               <Input value={detail.destination} _hover={{bg:"white",transition:"0.5s"}} bg="lightgray" border="1px" borderColor="green" focusBorderColor='#008000' fontWeight="bold"  placeholder="Destination" type="text" onChange={(e)=>setDetail({...detail,destination:e.target.value})} />
               <Button onClick={handle} border="1px" borderColor="green" bg="green" color="white" _hover={{color:"black"}} focusBorderColor='#008000'>Search</Button>
        </Stack>
    )
  }
  export default Forms