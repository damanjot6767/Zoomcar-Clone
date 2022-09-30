import { authcontext } from "../Context/AuthContext/AuthContextProvider";
import {useContext} from "react"
import {Box,Flex,Button,Image} from "@chakra-ui/react"
function Profile(){
   const{state,dispatch} = useContext(authcontext)
   const{email}=state;
    return (
        <Box>
        <Flex gap={3}>
        <Box borderRadius="20px" p ="5px 10px" color="black" bg="white" fontSize="13px">
        <Flex>
        <Image borderRadius="50%" mr="9px" h="25px" m="" src="https://image.shutterstock.com/image-vector/social-member-vector-icon-person-260nw-1139787308.jpg"/>
        <Box mt="5px" fontSize='12px'>{email}</Box>
        </Flex>
        </Box>
         <Button color="black" onClick={()=>dispatch({type:"status",authstatus:false})}>Logout</Button>
        </Flex>
       </Box>
    )
}
export default Profile