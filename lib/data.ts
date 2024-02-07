import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaGraduationCap, FaSchool, FaChalkboardTeacher } from "react-icons/fa";
import librariaImg from "@/public/libraria.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const education = [
  {
    title: "Computer Software Engineering",
    school: "SMK Negeri 3 Metro",
    location: "Metro, Lampung",
    icon: React.createElement(FaSchool),
  },
  {
    title: "Bachelor of Informatics",
    school: "Atma Jaya Yogyakarta University",
    location: "Sleman, Yogyakarta",
    icon: React.createElement(FaGraduationCap),
  },
];

export const experiencesData = [
  {
    title: "Web Developer Intern",
    location: "Metro, Lampung",
    description:
      "I worked as a web developer intern for 3 months. I learned HTML, CSS, JavaScript and PHP.",
    icon: React.createElement(CgWorkAlt),
    date: "2019",
  },
  {
    title: "Assistant Lecturer of Introduction to Artificial Intelligence",
    location: "Sleman, Yogyakarta",
    description:
      "my main responsibility is to support and assist in the delivery of the introductory course on artificial intelligence. I am tasked with aiding the instructor in designing, managing, and developing the curriculum, as well as providing support to students in understanding fundamental concepts of artificial intelligence.",
    icon: React.createElement(FaChalkboardTeacher),
    date: "2023",
  },
  {
    title: "Assistant Lecturer of Database Administration",
    location: "Sleman, Yogyakarta",
    description: "-",
    icon: React.createElement(FaChalkboardTeacher),
    date: "2024",
  },
] as const;

export const projectsData = [
  {
    title: "Libraria",
    description:
      "A web app for managing library. It has features like adding, updating and deleting books, borrowing and returning books, and searching books by title, author, and category.",
    tags: ["Laravel", "SQL", "Bootstrap"],
    imageUrl: librariaImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "PHP",
  "Laravel",
  "SQL",
  "Bootstrap",
  "JavaScript",
  "TypeScript",
  "Tailwind",
] as const;
