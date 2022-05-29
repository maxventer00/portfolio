import Home from "./Containers/Home";
import Skills from "./Containers/Skills";
import About from "./Containers/About";
import Experience from "./Containers/Experience";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/skills" element={<Skills />} />
        <Route exact path="/experience" element={<Experience />} />
      </Routes>
    </BrowserRouter>
  );
}
