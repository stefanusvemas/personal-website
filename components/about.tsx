"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("About");
    }
  }, [inView, setActiveSection, timeOfLastClick]);

  return (
    <motion.section
      ref={ref}
      className="mt-40 mb-28 max-w-[45rem] px-3 mx-auto text-center leading-8 sm:mb-40 scroll-mt-36 sm:px-0"
      initial={{
        opacity: 0,
        scale: 0.95,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.5,
        delay: 0.2,
      }}
      viewport={{
        once: true,
      }}
      id="about">
      <h2 className="text-3xl mb-2 font-medium capitalize">About Me</h2>
      <p className="">
        I'm deeply passionate about technology. Whether it's coding a new
        software application, designing user interfaces, I thrive on the
        challenges and opportunities presented by the ever-evolving field of
        informatics. Outside of academics, I enjoy immersing myself in various
        extracurricular activities, from participating in coding competitions to
        collaborating on innovative projects with my peers. I believe in the
        power of teamwork and continuous learning, constantly seeking ways to
        expand my skill set and broaden my perspectives.
      </p>
    </motion.section>
  );
}
