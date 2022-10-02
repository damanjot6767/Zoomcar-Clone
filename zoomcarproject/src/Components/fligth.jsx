import {useContext,useEffect} from 'react';
import { SimpleGrid,Box,Image,Heading,Button } from '@chakra-ui/react';
import { authcontext } from "../Context/AuthContext/AuthContextProvider";
import AlertDialogExample from './alert';

function Fligth(){
   const{state}=useContext(authcontext);
   const{data}=state;
  
    return (
          <Box w={{base:"60%",md:"75%",lg:"90%"}} m="auto" style={{marginTop:"76px"}} fontFamily="'Arial Bold', sans-serif" >
         <Heading>Searched Result :</Heading>
             {data.length===0?<Box m="auto" mb="30px" w="50%" textAlign={'center'}>
               <Image w="100%" src="https://img.freepik.com/premium-vector/file-found-illustration-with-confused-people-holding-big-magnifier-search-no-result_258153-336.jpg?w=2000"/>
               <Heading>Oops No Result Found</Heading>
             </Box>
             :<SimpleGrid p="30px 0px"  columns={{base:1,md:2,lg:3}} gap={{base:5,md:7,lg:10}} >

             {data.map(({image,source,destination,price,departure,arrival,duration})=><Box pb="10px" border="3px solid" borderColor="black" borderRadius="20px" _hover={{borderColor:"green",transition:"0.6s",transform: "scale(1.1)",bg:"#F0FFFF"}}>
                <Image height="50%" width="100%" borderTopRadius="20px" src={image} alt={price}/>
                <Box p="7px 10px"  borderBottomRadius="20px">
                <Box fontWeight="bold" fontSize={23}>{`From ${source} to ${destination}`}</Box>
                <Box fontWeight="bold" fontSize={16}>{`Timing ${departure} to ${arrival}`}</Box>
                <Box fontWeight="bold" fontSize={16}>{`Duration Time : ${duration}`}</Box>
                <Box fontWeight="bold" fontSize={16} >{`Ticket Price : ${price}`}</Box>
                <AlertDialogExample/>
                </Box>
             </Box>)}
            </SimpleGrid>
}
  </Box>
    )
}
export default Fligth