import { Box } from '@chakra-ui/react';
import './App.css';
import Navbar from './Components/navbar';
import Home from './Components/Home';
import AllRoute from './Allroute';
function App() {
  return (
    <Box style={{backgroundImage:" linear-gradient(to bottom right, #FDFCFB, #E2D1C3)"}} pb="10px" className="App">
      <Navbar/>
      <AllRoute/>
    </Box>
  );
}

export default App;
