import { Box } from '@chakra-ui/react';
import './App.css';
import Navbar from './Components/navbar';
import Home from './Components/Home';
import AllRoute from './Allroute';
import AlertDialogExample from './Components/alert';

function App() {
  return (
    <Box  pb="10px" className="App">
      <Navbar/>
      <AllRoute/>
    </Box>
  );
}

export default App;
