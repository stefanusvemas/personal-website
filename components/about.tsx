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
        Passionate about technology and problem-solving, with expertise in
        backend development, database management, and geospatial applications.
        Committed to tackling challenges in the ever-evolving field of
        informatics, with experience that goes beyond coding through fieldwork
        in palm oil plantations and processing sites while developing the smart
        weighing system for palm oil FFB gaining valuable insights into real
        operations and how to align them with technological solutions.
      </p>
    </motion.section>
  );
}
