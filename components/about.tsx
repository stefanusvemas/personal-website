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
      className="mt-40 mb-28 max-w-[45rem] mx-auto text-center leading-8 sm:mb-40 scroll-mt-36"
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
        voluptatem, rerum optio debitis quia aliquam assumenda numquam modi
        tempore maiores porro ipsa corrupti ad possimus repellat harum ratione
        alias quo. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Quod ex dolorum laborum cum pariatur deleniti fugiat esse, tempora aut
        aliquid facere repellat minus placeat ullam, vel necessitatibus tenetur
        illo. Ipsam.
      </p>
    </motion.section>
  );
}
