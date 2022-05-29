import * as React from "react";
import "./App.css";
import AppRoutes from "./routes";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <AppRoutes />
      </div>
    </ChakraProvider>
  );
}

export default App;
