import Navbar from "../Components/Navbar/Navbar";
import Profile from "../Components/Profile";
import AboutPreview from "../Components/Previews/AboutPreview";
import SkillsPreview from "../Components/Previews/SkillsPreview";
import ExperiencePreview from "../Components/Previews/ExperiencePreview";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <Profile />
      <AboutPreview />
      <SkillsPreview />
      <ExperiencePreview />
    </>
  );
}
