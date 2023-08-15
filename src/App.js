import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Landingpage from "./pages/Landingpage";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Routes>
     
        <Route path="/" element={<Landingpage />} />
        <Route path="/Homepage" element={<Homepage />} />
        
      </Routes>
    </div>
  );
}

export default App;
