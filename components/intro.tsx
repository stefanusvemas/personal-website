"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import vemasImg from "@/public/vemas.webp";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref, inView } = useInView({
    threshold: 0.9,
  });
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("Home");
    }
  }, [inView, setActiveSection]);
  return (
    <section id="home" ref={ref} className="scroll-mt-[100rem]">
      <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:justify-center md:items-start lg:gap-10">
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}>
          <p>Hi👋, my name is</p>
          <h1 className="text-3xl font-bold md:text-5xl lg:text-6xl">
            Stefanus Vemas <br />
            Aditya Mahardika
          </h1>
          <div className="flex items-center justify-center md:items-end md:justify-end">
            <p className="text-sm w-80 md:text-right md:text-base lg:text-lg">
              Undergraduate Informatics Student at Atma Jaya Yogyakarta
              University
            </p>
          </div>
        </motion.div>
        <motion.div
          className="order-first md:order-last"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 25,
          }}>
          <Image
            src={vemasImg}
            alt="Stefanus Vemas"
            quality="95"
            priority={true}
            className="w-32 h-32 md:w-52 md:h-52 lg:w-72 lg:h-72 rounded-full"
          />
        </motion.div>
      </div>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 py-5 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}>
        <Link
          href="#contact"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
          className="group mr-2 border border-white border-opacity-40 bg-white bg-opacity-40 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] text-black px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition">
          Contact me{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="border border-white border-opacity-40 bg-white bg-opacity-40 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack"
          href="https://www.linkedin.com/in/stefanus-vemas"
          target="_blank">
          <BsLinkedin />
        </a>

        <a
          className="border border-white border-opacity-40 bg-white bg-opacity-40 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack"
          href="https://github.com/stefanusvemas"
          target="_blank">
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
