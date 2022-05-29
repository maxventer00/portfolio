import AboutPreview from "../Components/Previews/AboutPreview";
import SkillsPreview from "../Components/Previews/SkillsPreview";
import ExperiencePreview from "../Components/Previews/ExperiencePreview";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{ x: window.innerWidth, opacity: 0, transition: { duration: 0.2 } }}
    >
      <AboutPreview />
      <SkillsPreview />
      <ExperiencePreview />
    </motion.div>
  );
}
