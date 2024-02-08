import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaGraduationCap, FaSchool, FaChalkboardTeacher } from "react-icons/fa";
import librariaImg from "@/public/libraria.png";
import cineIdImg from "@/public/cineid.jpg";
import thetaImg from "@/public/theta.png";
import laundryImg from "@/public/laundry.png";

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

export const educationData = [
  {
    title: "Computer Software Engineering",
    school: "SMK Negeri 3 Metro",
    location: "Metro, Lampung",
    date: "2018 - 2021",
    icon: React.createElement(FaSchool),
  },
  {
    title: "Bachelor of Informatics",
    school: "Universitas Atma Jaya Yogyakarta",
    location: "Sleman, Yogyakarta",
    date: "2021 - Present",
    icon: React.createElement(FaGraduationCap),
  },
];

export const experiencesData = [
  {
    title: "Web Developer Intern",
    location: "Naistudio",
    description:
      "I worked as a web developer intern for 3 months. I learned HTML, CSS, JavaScript and PHP.",
    icon: React.createElement(CgWorkAlt),
    date: "2019",
  },
  {
    title: "Assistant Lecturer of Introduction to Artificial Intelligence",
    location: "Universitas Atma Jaya Yogyakarta",
    description:
      "My main responsibility is to support and assist in the delivery of the introductory course on artificial intelligence. I am tasked with aiding the instructor in designing, managing, and developing the curriculum, as well as providing support to students in understanding fundamental concepts of artificial intelligence.",
    icon: React.createElement(FaChalkboardTeacher),
    date: "2023",
  },
  {
    title: "Assistant Lecturer of Database Administration",
    location: "Universitas Atma Jaya Yogyakarta",
    description: "-",
    icon: React.createElement(FaChalkboardTeacher),
    date: "2024",
  },
] as const;

export const projectsData = [
  {
    title: "Libraria",
    description:
      "Libraria is a Laravel-based web application for library management. With intuitive features such as book management, borrowing, returning, and search, it ensures smooth library operations.",
    tags: ["Laravel", "SQL", "Bootstrap"],
    imageUrl: librariaImg,
  },
  {
    title: "Cine.id",
    description:
      "Cine.id is hassle-free online movie ticketing. Browse, select, and purchase tickets seamlessly from your smartphone. Utilizing Flutter for a seamless user experience. Powered by Laravel for its robust backend Rest API infrastructure.",
    tags: ["Flutter", "SQL", "Laravel"],
    imageUrl: cineIdImg,
  },
  {
    title: "Theta",
    description:
      "Theta manages pharmacy distribution, aiding staff with inventory and deliveries. Integrated with Google Maps API for efficient routes and costs. Plus, it syncs with a courier mobile app for smoother deliveries.",
    tags: ["Flutter", "SQL", "Laravel"],
    imageUrl: thetaImg,
  },
  {
    title: "Laundry Management System",
    description:
      "Java-based desktop app for laundry management. Simplifies order processing and inventory tracking.",
    tags: ["Java", "SQL"],
    imageUrl: laundryImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "PHP",
  "JavaScript",
  "TypeScript",
  "Bootstrap",
  "Tailwind",
  "Laravel",
  "Flutter",
  "Java",
  "C",
  "Python",
  "SQL",
  "MongoDB",
  "Neo4j",
] as const;
