"use client";

import { useActiveSectionContext } from "@/context/active-section-context";
import { skillsData } from "@/lib/data";
import { animate, motion } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const fadeInAnimationsVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Skills");
    }
  }, [inView, setActiveSection, timeOfLastClick]);
  return (
    <section
      ref={ref}
      id="skills"
      className="mb-28 max-w-[53rem] text-center mx-auto leading-8 sm:mb-40 scroll-mt-36">
      <h2 className="text-3xl mb-4 font-medium capitalize text-center">
        My Skills
      </h2>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            variants={fadeInAnimationsVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            className="bg-white border border-black/[0.1] rounded-xl px-5 py-3">
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
