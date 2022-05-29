import * as React from "react";
import "./App.css";
import AppRoutes from "./routes";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile";
import CodingVideo from "./Images/codingVideo.mp4";

function App() {
  return (
    <ChakraProvider>
      <video className="VideoApp" src={CodingVideo} autoPlay muted loop />
      <div className="App">
        <Navbar />
        <Profile />
        <AppRoutes />
      </div>
    </ChakraProvider>
  );
}

export default App;
