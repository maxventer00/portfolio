import { Box } from "@chakra-ui/react";
import Navbar from "../Components/Navbar/Navbar";
import Profile from "../Components/Profile";
import About from "../Components/About";
import Skills from "../Components/Skills";
import Experience from "../Components/Experience";

export default function Home() {
  return (
    <>
      <Navbar />
      <Profile />
      <About />
      <Skills />
      <Experience />
    </>
  );
}
