import * as React from "react";
import "./App.css";
import AppRoutes from "./routes";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Navbar />
        <Profile />
        <AppRoutes />
      </div>
    </ChakraProvider>
  );
}

export default App;
