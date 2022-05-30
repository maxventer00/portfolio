import Home from "./Containers/Home";
import Skills from "./Containers/Skills";
import About from "./Containers/About";
import Experience from "./Containers/Experience";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

export default function AppRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.key}>
        <Route exact path="/portfolio" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/skills" element={<Skills />} />
        <Route exact path="/experience" element={<Experience />} />
      </Routes>
    </AnimatePresence>
  );
}
