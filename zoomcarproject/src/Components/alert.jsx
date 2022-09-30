import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button,
    useDisclosure,
    useToast
  } from '@chakra-ui/react'
 import React from 'react'

  function AlertDialogExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
    const toast = useToast()

    const handle=()=>{
        onClose()
        toast({
            title: 'Booked Successfully.',
            description: "We've Booked your tour for you.",
            status: 'success',
            duration: 5000,
            isClosable: true,
          })
    }
  
    return (
      <>
        <Button onClick={onOpen} fontFamily="'Arial Bold', sans-serif" mt="5px" h="35px" w="47%"  fontSize="15px"  bg="#F0E68C" _hover={{bg:"#DAA520"}}>Book Now</Button>
  
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent >
              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                Confirm Booking
              </AlertDialogHeader>
  
              <AlertDialogBody>
                Please Confirm Your Booking.
              </AlertDialogBody>
  
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button     bg="#F0E68C" _hover={{bg:"#DAA520"}} onClick={handle} ml={3}>
                  Confirm
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    )
  }
  export default AlertDialogExample