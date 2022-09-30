import {Link} from "react-router-dom";
import { useRef,useContext } from "react";
import {Box,Flex,Spacer,ButtonGroup,Button,Image,IconButton,Icon,Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,useDisclosure,VStack,} from "@chakra-ui/react"
import {HamburgerIcon} from "@chakra-ui/icons"
import { authcontext } from "../Context/AuthContext/AuthContextProvider";
import Profile from "./profile";
function Navbar(){
    const{state,dispatch}=useContext(authcontext)
    const{authstatus,email}=state
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

    return (<Box style={{position:"fixed",zIndex:"1",width:"100%",marginTop:"-5rem"}}>
    <Drawer
        isOpen={isOpen}
        placement='left'cd 
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent backgroundImage="linear-gradient(to right, #DECBA4, #3E5151)">
          <DrawerCloseButton color="white" />
          <DrawerHeader color="white">SideBar</DrawerHeader>

          <DrawerBody>
         <VStack spacing={5}>
         
         {authstatus?<Profile/>:
         <Box w="90%" borderRadius="20px" p ="5px 10px" color="black" bg="#C2C2C2" fontSize="13px" _hover={{bg:"black",color:"white",transition:"0.5s"}}>
          <Link to ="/signup/login">
         <Flex>
       <Image borderRadius="50%" mr="9px" h="25px" m="" src="https://image.shutterstock.com/image-vector/social-member-vector-icon-person-260nw-1139787308.jpg"/>
       <Box mt="1px" fontSize="15px">Login/Signup</Box>
       </Flex>
       </Link>
       </Box>}

        <Box w= "90%" borderRadius="20px" p ="5px 10px" color="black" bg="#C2C2C2" fontSize="13px" _hover={{bg:"black",color:"white",transition:"0.5s"}}>
        <Flex>
        <Image borderRadius="50%" mr="9px" h="25px" m="" src="https://assets.zoomcar.com/assets/z_logo-8bef0838cf40518a24965abcbcc8bc88.png"/>
        <Box mt="1px" fontSize='15px'>Become a Host</Box>
        </Flex>
        </Box>

        <Box w="90%" borderRadius="20px" p ="5px 10px" color="black" bg="#C2C2C2" fontSize="13px" _hover={{bg:"black",color:"white",transition:"0.5s"}}>
          <Flex>
        <Image borderRadius="35%" mr="9px" h="25px" m="" src="https://w7.pngwing.com/pngs/863/167/png-transparent-computer-icons-symbol-copying-cut-copy-and-paste-symbol-miscellaneous-angle-text.png"/>
        <Box mt="1px" fontSize="15px">Fleet Vehicles Policies</Box>
        </Flex>
        </Box>

        <Box w= "90%" borderRadius="20px" p ="5px 10px" color="black" bg="#C2C2C2" fontSize="13px" _hover={{bg:"black",color:"white",transition:"0.5s"}}>
        <Flex>
        <Image borderRadius="35%" mr="9px" h="25px" m="" src="https://w7.pngwing.com/pngs/863/167/png-transparent-computer-icons-symbol-copying-cut-copy-and-paste-symbol-miscellaneous-angle-text.png"/>
        <Box mt="1px" fontSize="15px">Host Vehicles Policies</Box>
        </Flex>
        </Box>

        <Box w= "90%" borderRadius="20px" p ="5px 10px" color="black" bg="#C2C2C2" fontSize="13px" _hover={{bg:"black",color:"white",transition:"0.5s"}}>
        <Flex>
        <Image borderRadius="50%" mr="9px" h="25px" m="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN4AAADjCAMAAADdXVr2AAAAqFBMVEUURpz////+/v7t7e3s7OwURpv39/f6+vr09PTx8fH7+/sAPpkAPZkQRJsAQJrx8O4AOZdLbK3h5OnM1uj09/vBy9wfUaI5YqnCzuSbq8/f4ugVS58zXqnU2uTS2+vt8fexvdTi6PKitNUcT6Got9JffraRosYnVqSgr81aeLNGa691j8G8yeG+yNp2kcKzwt6Dl8Ffe7Pa4u+KocsANJVrh7zM1OB0jbzSibFOAAAdEUlEQVR4nO0daVvqOrOhlKVtEkAWERBRBEFFjlz0//+zN0uXrG1a4Nz74Z3zHK1J2s40mTWTxGsQAF2fQAfQ6ya5arLCDi3s0kLACtvkErTyQrU+VOrpQ5stWtim9T4rFOp9Uz3DhBY2Qo6JXAp4af5+AelQRoo9wMvIa2rkNRXyGHp5YVk9R58+qp3jZK/PyeOYhBkmwpdqCOSpSIcyUv8n75rk+YCCNjhvTB57abdJoEOvGvSKjHgCHXrVZfWssM3Qo1ccU7U+zOp5oU8vW+yhGOPmw5LBA4UhLcUcZwJtdr+CSZhjwktbeakT0rTU61JotQm06FUnJFdhRy7s0sI2K+zQq3bXWt/K69sheWGr6y9/Rl/T6et4S/8xGO+n0/XH3WrYClutToe/VH0oe1PY5Y8ylSrvD9X306aenwtF0pnNROg1JaHWzAvpYAB8MBTWY+yD5ePX9NzfzuI4jiIERaAlsTfen49vTwu/w4dALn5zTHw/K+3kpU0ZaV9Bmo9g2jQhT2GbfKy37WNdlRppPR13D6P1b38MCVWELM/zAvbPCwjQP/h/CBEiLWaT1+n9ityEUwZSGFhjK5Ah3WgpbJszqH8D8ohyAsPH6W7r0f7yXID0JYrRuH8k3Yjx1ckzSY1cKhi5nrOyVu9TAfLxPkE92mW8o2gvJX3H+i0IeBcm/RikhZTE7W4zWprkE5daZaJOlT+0qdeh0GKQXxoLW9ZCdklky2Kzm/UiKAzDhBQvpS6j0kvIZgM1oRKS7zI53hNBo2Dihp9aSK+vpBhIxy2edzBGSa9l/cZ/JczGS2CQFeRtU6Jh1Jsf7xp1FIPaxUwxXEWt48HTaxAjJ14rZ8Yo3j+TQer/J6wWAt+nOXIUJG4Eomj2ftfEVyOvaSHPqGcE8shN4d37LL4mcZzCCPbfBtgvIq9pIa+pkNegCt/vsDKfXoaskF6ywgYr5IKYXnbTm3C3+7HzomvTxgHFk+mAIdqg7/S5ImKoZEh3jUhz/Gipp5iLqmIoYGVS3/jo967EcUYCe/PpA/YdRZ1RMdRW634IKHG36bkUYG+7IUP071st2L/f3Zo4RmC0XQ8A+Mvk4Z+z9xeIYwSi/j2hrx55tXgPDzbb6K/QxumDh1VN3qsjOTv3+xtJy5Qg9ToaT/n7RcnpG5BuKZKzut7Dg3NVJR4IPzPzrAqpEEb7R8qBdfReFavFx+sxSl8M+duT/wGUP32QVfGiAMKsVmoLRZrzDwdh8jd7AApOxKu9sVEWPpyhtecCW+cYes/aViZR+AJExDyCG4eS7idOXHchZxpvDyDaPrf9ah5DFX+q1doEZUYK1C6lwepBcRxqQ1KmCwo/+K/4fRlW8vcqeOt4sCvuuiBDKnFUU3wzDzDw5JEKxRtzPzcRJ4ZXRPPHGxllrc/xldRBRdnpCb0KEXoGN7BaAJjaZcq1QRct+V+wdxjiiuSVxjlBeKqi62ASWElAkZz5EDW0LSKVQ7RbYNc4pyk23Nai1OEyY7vqI+vaANH8rlUUJW/lUWonxYAXkzh9uIG8vzZoU0CzO8c5Bie1PpojZaCVQKA1y3W6XmcGo65I6+AXm6m8htUC7rZXccnLbU5TlUEV0t/xunUd8sD9dagzYVtcD9UCqW6Dr2KU3Y9RIIk96+dPbWiLKNQkJ8zVeSWJxc0fSOgr5b0ydxY/vUD92QWvzUH97oH1D3cQbT44vdhqAU9jTZtLWkwoFXgLKq0CL1Cki+QxVO469guiqZpUUdFqIVKlltQPjJcFRbWAyJfQv4A88DgXpQo0S7HKOFclD1rkC4RwjR1CSTaPYTW5YZD2GgBfnnAh77WzWXchK4BbZp1mP9K1lfjpM78nSCaxcrlI/4aZcZnO5CW3GdoWi6zUS9TYHr48AhHpPP+BlXpyVCbJCmhwa/V8jWDfjW1UNFkmSKv5BSVqvXUsde9uKDbKn5uUoP4Q1LFa1hf4dzUkfW2ID9y9rWa1uKmEynTIvp7rwwtRQc90FkkLJVEB41lCR+26QtMF9TrBCFmiyZWzz7Ylq8ESSvL915pipYo/cC0+peKlklGGN059d3U54vZATT2g1waoYLXgzwvDRsYYdJFHfOGHiqaF5ClZAQ/9GoynfBCIEGI/oaHB1TMNZndm8rqGrABwiDTzUvj0mccsthAtCUJTD8365x2E291uj9RvZe1WO/plDdB+2MnzC3iaJLkyKQb8FFyg8WhSyv68fvwetD570RGA5f0rRLZP4Qil+EB0BI6hpMG8tiENYTzrP/3w8Boe9aIDS4Ac7W4eAobeHXCyWvCvs05QFRBNRVlgnEyAU/LeWagb+xsE9TuuattQ48yBPCY1C751HlBJiUrLIdp/dWnSaUreoofOSSQfr+vS5QoQbQzk6bxnk5qFE44E0Mt0KKVi+g+UPD7N5ONz8Yi/vCfh+NucKi5KTvAcG7rO1F0KxP1RR57KB8se+pMmJYDnXlV8S1+pADp3cZ6ZxSWnqveWVkta6D0dHQjPgyzumK6PWf6DdulkRiF5FcH2NeATLrFa8KEWFjQolwfFU/KGnDwe6l47PPhC8Yomg2Ly8OhFyHZIIVDjB/kVV/IwOAF9AQloj9Eui+R/9bLn5oEJ6AmjQglKZ7oEBkGOERQqxbbsb/TWVskTPQYfv9ZSeUT+m5zGcB71m37C6nd/ISoF50vFY5CcpPZdwfgwSM6kMZo8tExT+d1J1B8mha1PSl4AofoQxb+1T8waqFEvYDxty/4esyqyD7+r84lhsMZNwxoiv0nJ44qBqtMaj66MyvyBjZY011xS6+AxLn+CHk2IDtg3eFUpeXyCXiSveuzdOWLc22Cr1QIsnKdMFyjPh+jRSh4x5K9CnjOQ7sOS1SLEOR85dWkWl5fJ0BQzmUdSztsJcUZpdRPpPUoeyMhLxW8AjZRJ8jHIS4PkbVDyZNLgrtQWxhssxjmFVIHwqIxNJ26B8bphyz/YR5NlyAs7I/vTiqaZqwKcDzpClDqfY2gvZnVeAF8WQoxfUgyNPUpYnSmGC9AvmrtRWqIvcyipcSq2Kyycgvq2daEAnGNCXjpBjyxPcuFAA3fYAPXNVovd2ix6IUREbprJa4D3eGsiT56WsZmxeXEgk2ejMamM7oGJvGKjUJxmlQA9YTW/UiBvvMDX6D25bfEd6MznNJVU8TrRMQKzH9+6VJeSl/Le4yWSo9K4mq38jPdSzHCBZEtVnTIPx/6C46F15TP+jWar1GoZpXd46aRg2hfZ6kXtpeL70x9BsixOjcrnf/emeigJH4sjLLYgCSfPrNZp1GaVqvVRoN3uMtRqAIu6qFbLWO89a8aM+EcReUSRmsi7NcSPKnn4SYhBQE+xIBhI88V52wLyuhbygkQU3sDm5OQdMvIS3pMjPYE0vAufVsh7b5S8lPdmzsRcCtztE3YdCIcvNQUbHA86wqp/Kf8ArGNv0eFT+Y3vWjZRPZzQZ/LWNJR03zO83CACtJ4k5Gm7DmR6bx3HPzgJJa108m7GjfEvlnYdAKe6SRACebpa/4r++UzVuoG8mwGcN0WrJWzPTZFMUagIoaRAFi2F5PWeUvIevexp2qhwzWB1ViVwhIVQUuNbcoWC8pA0fwj9x8izWC2EPBqnoKJmaItzcB0PAycCXcmLj1jYdaCxicVbhKVMnArzWxL4adl2JQjXhLw2y0TonJOH1goVZatQcvwsDdOCfVvcdWCH6rI5RPd2xUDIe6aKAQ8KFlbdAqC3FIyyhzE09biTJ8bIs1gtIxSf6GD93JcSd10pCuMvIelqJPtCKbO7qPUgei4iD+2+H7/2Fkf9RjYnhegkkHeKjS/JJacQfJUt9SCIN0DI6RLJw803JnwiJNlyqdOQ5QNmEX5P+Kaax8AuAqGJ5nqIbdGeJdJ5jTBsgD8oMEkuJ3aJjiBdW0sIbCVTT+SyM9pZctmrBwKr9zBcprsO+A9zF7ks6AqxMTqbFQP+GkcGzBJbWvneeV6o3NCTwpLyODK0FaD3iZNQEvU0C8lT1LpC3s4YSsJvgWE23ZOK3HlPDiW53BFvOonVgtexPjad5TicmMjDC88cqq0MgYANdCGPt0V/UqOMONVG1jO/TPsO26aJvDOyY2EIJeltjQxqIc/QFs4HSSgJlwWRJEYRvFL2MaFnCOP6Px7fVkjVp4LOySWnl20NZbY+WbtAbKvhIuPK8HoAya4DVKlbEpEcOhU9Am0/F9NMemC4KnhblaFtavvPXZftOgBW2jcuAs3eQ/e63gOH6Co4XgC9Z8zUOrhHnjPv6QCjL91qCQvnQavrvRoQHRPyvmJVMUCDVS6C5F7EUwN5lJ2viH0Nexy9Yh5KmvaKDYtAfkValag1GL0bPIZ8IrSAn+rSX8rFTLTsiSNK/L3WGQWBNjrV5A/rEwPU72pJ2q1jVIy99pSCtvUAblftFtV7NScXsucQDaMqBpzPx9yUwYrQellxo2wCS4wyAYyOxUJT63jhHJqqwVZuuKJvQK0WPGbk1f/K8dpgtewKrJZqaNa8jy5eJOTh6aULoaKpHue8OJf+cqAun9dtbSJPlyyZYoB5JpiX/FDxjo4NfW/cFg3fWHzIIPOL+M88Z0KAwBN9orzQBBJW6QXqA7rrwDRWx6ZJ7SqWreQSscQxNZR0r90YqDcXDrIyJVJqwME+bnoNSh68hPWICH7QYy1U9dmGZyV/T3L4LXcYX4T62OfkFUnOzItVLfrckUGf2BBKGkFplkv1z2VkA0OFhH9gvqPg60CBPJ0i7QXqRQ4skUtfiFR3lZUrlHU7JY/yXlDetvCh0a8pI7BrzQE0uLP1X24FRHmviTfmKKD20GyUag42YmmN2hxDg629tbmclbA3fKiiWAfkWFGrhZLn8LQigLMVMGUlfZcs1rmtvUbIazDyghKjJQsaSL0nAHH5jElX76gwuG8QFBaoNrfOISOvznCRgC0VMszvlUw4OymG2sDIS3hP0doFGIm9l5kV+6F5ffF7ZGIRV289r6/KLfQH470w0XvGFpaXGRD56bBV/6Fw6gG9WBgzEqpIGxM2roOz3U2Msgqvg6ba+A3r2bg0Vn34e7uUquBmtSSQzeQEchG/oDrGdFiIv0on7cXJHFejTDMrpf3Yq5F3kf8CxwvfeBZKw7R7W3VhUgc5lFotzGMQnhCI0jpQvrIeeWbPWmPjWSjt5VxFzZAZ4QAGy7SkMfMYWiExygJ5cMphJC2nLElNF2qhh/5YNpQMN5GePxZIvxygnmgJO8xbd04rKXj/y7JjUAygQycPL314PeBGGYu1XOTvMeg9tzS1Tpfq+vjttrsg2wBGzyyU5M/dyCtugfa+kbymP5j8O92XRMoujXOmTxupqy8T8v6l7qNxTrbrgB6lNi4LEdx2U0dGv/wAgTDMtsEmlzS+1Nwj+Tma5KzI/E6N4XbZCOkcAzE6tf1QHDQn9KQF4HC8MigGtsHIh6X3BCXtGEeuoEr4HAPL21OeXi2nLAUa7jQecQbaf1Cmba6RU6bPMRpu5jNEdAEFvCxSlj6PpvgaT3BrjMx33NSdzeb3vtnYvPxd0clCXtthS7Crk8pnZylvjB2zKUuAZmgbea/t/xj92pu6s707n6eKd4z5elpcUlvaLckg+oHIeDCdekB3HThG8nMMOWXJQyzOYCaGRBvY1pb+gA9SXouhaRV1xZ748tPS9R71/8BqK5vs0u+rQ5DltVDy3gxZScZ7DJcSoJ1BrfMdaJ9ly9owNhSApmBEUHSHjEqelXRRTpmEEnq2kTec6Avc3Hmvdk6ZLSPQaLgYQL6PbSpi3qv2q0B4Fs0FSgrZhTyuIZOMQOqZNWg+ZzEV+ctKxsSuazlAoGVOlvDo7kqzmbZdlJlBLeQZ2sJlO9t1QF3yrN2dJHnk9iYPKInzRYn0Q1OsKwaW3/k4g/pRfJS48enn560PoacOfBHrjEHEmLNFclI09kKq+Mi6rrSI04wAZz9YV+v0GpiWHsNofFgBTOBpUjrXUQGkXOqHCgukSg3Fvu3U4KXu+EXj4zfg2xPj4fF65zbB+AMIuw7UX8egP7nHZBaPc0qnHoCPRLpk75qdH/ngZb3b+Bhfi0C6jiHfdaAtr0KplFOmP3o2UlIJslMF3mXHFvb5UQO8vh2Cu51poyaveiAQ7hvCrgPKGiIv41ATMarc02rRhG41YDgOxx8Iji29b3YcYKG+iQcHl3VigeFKbpCtIcpWgCkt1ZyyjFT1ifq7IPzV1HqDHWZEz3WA/BF0Xz0EYf8Hi4em++HzVdbB5SvA+Pq9knXPFR9Od8M2ntWEl8dxDyEUxePXx9UZQrR9wtKZ8OCxf3loRlm/R1dfqi2Uv1hvwqxKw0BaaQC3I2w+iqoFVs+H/p/j24NPrJsThHC8kU4dAGB51jtQcvWh9EKdNrp3Exa3ggpB7bWz5jfQTB7jUVQszDtsYsxmb8HXFkF0HuT1LJI/nV24Ix3d6EHadaBwjzurEWRviw7ms5pkd9fHdCjCHV1gmy9l8VtfW7PglmM11lkfYeVzvm7djnIdiL+wqtZNM0jh8n1Gz3/E8r7137tL0ImP2q4DTbddB5y1P5yxVKUy8kjvPgcIjTcDLGZNguHBtBTb8dXxnUYe/k1HJ49fQsjjgYWbWRYBmiywA3mEA+/nEEavD1JSKKG6ygkssrWwz/eMSEc8Hl0zAZN2MuoP/BLeS3hztYuIMPqWM5bBU91NXsUdP9JdnMKw0lSDw6eA6BAmWxGkqQR0fwPpVARe31oSaxqN1x0p/6DxPc/m8R2/PG87W2VvFTawvOIOkwl98Fk7QFPalUAINT2PEXo5NX0x/wB81eI/9CqcAeZnqZirkr2SHKYdlLYQfbR9Wa0bQ010MN5NIOwRBgQ5g4JGvwZ5MDbvlRQer9F9sudBbT8X8uhOVK+EASd3QJioACUbzgovyi+Vna7YBD8TAOZQ8kWA5iOsWy2hKdQEBifyOWbPovypsSMjXdIk7FMmBnwuPBzEOE8zuWsbjxLoaFsVtFrURJsdO+20Pt9Fw2bD6FVwsmoLZ18CQRw//lOMK4MS7ssW7yYb+KHJd6liyOof94iaaG3exfipJz7TDaJNGsrSdhW37fBYlUQJ0GTVKFLreaiJlA3PCEaMASkD1fDSIN0YzbaBpdh9RTSVkic2QHO+waUDeUTUbGZEQ6wJfaE/qHGClXl/zmQBSd2t2IoBTahLbrM501BTYlLj0TyC0SEEIXbZC1kB1nnSmc9hMsFPZ/3BXTrHm3mvFSaLbd0L0fyzg7vsTcmuBPSSWzE0v6AtFuLFjji5u29QJ5swOnWyR4VZKClLB8t2NlY3RpbQdaRRuOPlS1QMBScvU0zCAzGx5yNDWLQM4HyVKx7DWSh4dJsdjei23La0Hl+KtTBM3mgQpl/dV0EbbV9qiTy/Y9tVPBAvDPZZ8cQdsc8O2qbqdvLwzwQWODC26AEs21Xc75ZZnhVAxqI3GWFn8haF1qZFcMN4re0JL/Ne0zfv6C8/prTa2AJtN03ccuA9MDiqsSSnT45efe0cooY4wU8Ix4Pax0cVasOAngDz+k3Fmc/Ok2l0/exoFj8vxHgwnaA6rjU9q45Twh/F9muR9F6Dn6ahTs2KTOTZcsrUtqZW0XY6wAV6j/Tmw2ZSOo9ifn2UnqbRtFgtnAPwGdnGl/3ZcjXfwlHfJpR04GTdtM3/Ua/v+GLsOYdsXLbDt8sBdYNb5s/CeLKmlKjkYQxWz30vrh3xQcaTbESPIeF6vL6AvHJrm9jMp28iQnDmMYQ+9hdPr7PoApOwdzQeq2vywtR5uJpgTQ+Bkdc/jlYhPcadho6Wd6fdS1RLnqSAJkt1lzvm7yXeOtN7TDFQBl8USE979zhmb3B0Yjh5PxwOvxT6KC4RJ6Y0FImpZ/fpAXUsVMX70PEEt1Qa5ukMeQXzWYM0MyLPYAgUySlOA/LbYJRCtjuIJf0kN5SC7J1yVkN0qnJAXRefKrGBaonxKcpA/0TydYmiFKCkb9Hr0OmAumZ2avDuemkKNwc0Z6s/s1QFIc5pOWugsxDcEUWtO0yABcqlqU2VmEah3oOzr4YhVYGSUnByqeoaFaNsbWurtSFbBEICgOCL9qbYZMPaDqhLjPkpkqZ8q0GVey7jAhidG37mbLgfq9v5TdlPGZziqBXTu6TuFdJtRZCMUbGtZsDJN0nDRhKwaL+sdWpwq7mL5FdoCFjmNw1pyULbQGsLzQa4cIftSGvoofEKNOzkWXmPLt4qN97/baBnelr8R8Z7mjsrBpC/6x8T+XcAztbF562b1XqiIcEdmwE2x0/MUCWAXaWtESCc4jxE6m61ZJ7mvSGjoBpcTAOjw1wcP/NzQWqTB54StpZWPqvi0pNtTl1yisImKGlr/iwm0dI7SgFuE3nNbH7PwHuAhsL/q+IFxkcJaSPvCWcNmGb1OyH4YjkgWk4Z5Dkh7IJliPDKVC1qLgzMbvHyGKbeVgz0wOzvJAUlLWCPig8dHel81wOezwnUUJIUgmSf4ONi/rsyMCcsOirKOgQNMZQEyqyWlBeJfEGewi7GV/LfyfRlUKFtWhjYhIgWs4PRtKWSV9Eoy0XNZ5UMIQstVwW6rLnjQl6B1ZIbAPhnK0Rf6g7V6xGKvLWOdKggzU5PdJrV77RW9onNkohoIP9paejoaHGItveh6YAEJRWBrkLxixVDNqs/PPxXFASM9yz/U0W6ulEmJPMBIO3d4U7qpUMyUF8Xvy6zwygbrRK17koeqX8K/gMGNkQnAPyK5AGbUSaQ18WLvWsOW3Ew4gIgbAfS8x8ypAvIS07sdpjV73Rx8wihUygpuzR+DrdAoJpuRP/Hr8R5TfArQ5qWuimGXPDSvKjyb3wbIIbYaYgTUVeOdEkoSV2CwNMGf16ts7eVw0eG3jPmiSVdhyYfSQgTmJCub7Xk5LUwnnrFO4bLOWVORllpwgw1qaPDENycPHrUwq5+lnpdgL35KMk0q0ReRd6jatTHH/OSGbJioVlZpMIIHgftXGO78x79BulZA5RwetVghcmsPgVWSE3YJL+g+6DlLtwSEHr9Jl82x893QZqWVlDrUn4BHu2gKkO1iJO1ulrkPZp8DaWsAKAo66tYLfJYx/hrb5KhLnhXGZwwGp8GQJ42r2y1VCfP98PhetK78ebaMH45LrCvSI0K5JWEktp2Vib1w69Jz67mHWeICojrjSlxuitnRNroMZT4e8YNBPLL1nLdRzYCL4zoonh7emi3qyMlXKahJNYx5Co7S7yRfi2m9/jXEvMLkvoOGH7sZhGUfSX7iHUdyxChyeYB+40cPyErgPGiinSoIB3WMMoEBk3qCTz+bvPpf5fuKdt5Akbe68cAJwtwNba6qdWikEc9XfzwtkORMEirzM6qRTCK56fvxKm7lDxZpSVTZQ0lZCj7V82cvKweN0ebfhynhzAksXZ5s8tksjM/2k9p67GMnt72934IUuuykeMnZAUYg7PGOGdbP2uAB3zb6jG5en6BWN/phMPHUx/16icXQRjH89+nQacth571rAAjfm0Fv3zXgbqKQa4nqn6weH6d92JkTxU2ltM4ftR76R8/lxkmwlIVsw181VCSPtbVdaPc5gNgeX/sj0vTqAR6IWk8mxzWC2LrZev3xA12Vbb6G1aLkTy+7BXgxefb6yRAkTUPLplJQVQgbXenj+8GwNg3nDD575FnrQ9JNxCVtbpfn3aTFxTHURRBCQjhcRzP5rvf6fonWSubi79rklc8jKvwntH/GgwWo6fn6Wm73Y7JPwrz7fh3M13ffw+HjQ79EB2DU3kl3nPyDJU388fZ68WdjdlDCQ0PD0sGDwQGTIDwWKzLN9Iwd0K6TijJpNYt9b7MoPybtHx7vTrCr6HW/xp5bgvc/k9ePfJ8jTxfQZ+ppLxQrQ+Veib01Ei+Njiz+pw8X1ncnqlUxShTkA5lpBh5/wOAeCLFxGOY1QAAAABJRU5ErkJggg=="/>
        <Box mt="1px" fontSize="15px">Help & Support</Box>
        </Flex>
        </Box>
         </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>


    <Flex minWidth='max-content' alignItems='center' gap='2' bg="black" color="white" h="70px" p="0px 8px" fontFamily="Arial, Helvetica, sans-serif" fontWeight="bold">
    
    <Box p='2'>
       <IconButton ref={btnRef} onClick={onOpen} borderRadius="9px" variant="ghost" fontSize="33px" bg="black" color="white" _hover={{bg:"white",color:"black",transition:"0.5s"}}>
        <HamburgerIcon/>
       </IconButton>
    </Box>
    <Box ml="5px">
        <Link to="/"><Image src="https://image.pitchbook.com/qfBpRJZPpK2PcF0uxRvGWSFdtaP1646411626864_200x200" alt="logo" h="150px"/></Link>
    </Box>
    <Spacer />
    <ButtonGroup gap='30'>
       <Box borderRadius="20px" p ="5px 10px" color="black" bg="white" fontSize="13px">
        <Flex>
        <Image borderRadius="50%" mr="9px" h="25px" m="" src="https://assets.zoomcar.com/assets/z_logo-8bef0838cf40518a24965abcbcc8bc88.png"/>
        <Box mt="5px" fontSize='12px'>Become a Host</Box>
        </Flex>
        </Box>
       <Spacer />
       <Box mt="5px" fontSize="15px">ZMS</Box>
       <Spacer />
       {authstatus?<Profile/>
       :<Link to="/signup/login"><Box mt="5px" fontSize="15px">Login/Signup</Box></Link>}
       <Spacer />
    </ButtonGroup>
  </Flex>
  </Box>
    )
}
export default Navbar
