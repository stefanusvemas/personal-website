import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaGraduationCap, FaSchool, FaChalkboardTeacher } from "react-icons/fa";
import smartTruckImg from "@/public/smart-truck.webp";
import docuTrackingImg from "@/public/docutracking.webp";
import librariaImg from "@/public/libraria.webp";
import cineIdImg from "@/public/cineid.webp";
import thetaImg from "@/public/theta.webp";
import laundryImg from "@/public/laundry.webp";

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
    title: "Bachelor of Informatics",
    school: "Universitas Atma Jaya Yogyakarta",
    location: "Sleman, Yogyakarta",
    date: "2021 - 2025",
    icon: React.createElement(FaGraduationCap),
  },
  {
    title: "Computer Software Engineering",
    school: "SMK Negeri 3 Metro",
    location: "Metro, Lampung",
    date: "2018 - 2021",
    icon: React.createElement(FaSchool),
  },
];

export const experiencesData = [
  {
    title: "Assistant Lecturer of Database Administration",
    location: "Universitas Atma Jaya Yogyakarta",
    description:
      "Continuing my role as Assistant Lecturer, I deepened my involvement in delivering hands-on database administration course.",
    icon: React.createElement(FaChalkboardTeacher),
    date: "Feb 2025 - Jul 2025",
  },
  {
    title: "Back End Developer Intern",
    location:
      "The Ministry of Agrarian Affairs and Spatial Planning/National Land Agency of the Republic of Indonesia",
    description:
      "I designed and implemented backend services using .NET Core for a secure land application tracking system, integrating PostgreSQL to handle data efficiently. I developed user-friendly and reliable RESTful APIs to support seamless communication across system components. Throughout the project, I worked closely with the team to ensure compliance with relevant regulations and enhanced status monitoring features to support better decision-making and improve service delivery.",
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2024 - Jan 2025",
  },
  {
    title: "Assistant Lecturer of Database Administration",
    location: "Universitas Atma Jaya Yogyakarta",
    description:
      "As an Assistant Lecturer at Universitas Atma Jaya Yogyakarta, I support the Database Administration course by focusing on practical applications and student development. I manage the user privilege module, teaching students about roles, permissions, and data security. Using Microsoft SQL Server Management Studio (SSMS), I guide students through real-world database administration tasks, including setup, maintenance, and troubleshooting.",
    icon: React.createElement(FaChalkboardTeacher),
    date: "Feb 2024 - Jul 2024",
  },
  {
    title: "Assistant Lecturer of Introduction to Artificial Intelligence",
    location: "Universitas Atma Jaya Yogyakarta",
    description:
      "My main responsibility is to support and assist in the delivery of the introductory course on artificial intelligence. I am tasked with aiding the instructor in designing, managing, and developing the curriculum, as well as providing support to students in understanding fundamental concepts of artificial intelligence.",
    icon: React.createElement(FaChalkboardTeacher),
    date: "Jul 2023 - Dec 2023",
  },
  {
    title: "Web Developer Intern",
    location: "Naistudio",
    description:
      "Worked closely with senior developers to build Laravel applications that met client needs, applying MVC design principles to create clear and maintainable code.",
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2019 - Jan 2020",
  },
] as const;

export const projectsData = [
  {
    title: "Smart Weighing System for Palm Oil FFB",
    description:
      "A full-stack .NET Core & Next.js application for palm oil transport management, integrated with smart conveyors (GPS & weight sensors), real-time truck tracking, and GIS.",
    tags: ["Next.js", ".NET Core", "PostGIS"],
    imageUrl: smartTruckImg,
  },
  {
    title: "Land Application Management System",
    description:
      "Backend service for land application management using .NET Core and PostgreSQL, with secure APIs documented via Swagger for easy integration and compliance.",
    tags: ["C#", ".NET Core", "PostgreSQL"],
    imageUrl: docuTrackingImg,
  },
  {
    title: "Libraria",
    description:
      "Libraria is a Laravel-based web application for library management. With intuitive features such as book management, borrowing, returning, and search, it ensures smooth library operations.",
    tags: ["Laravel", "MYSQL", "Bootstrap"],
    imageUrl: librariaImg,
  },
  {
    title: "Cine.id",
    description:
      "Cine.id is hassle-free online movie ticketing. Browse, select, and purchase tickets seamlessly from your smartphone. Utilizing Flutter for a seamless user experience. Powered by Laravel for its robust backend Rest API infrastructure.",
    tags: ["Flutter", "SQLite", "Laravel"],
    imageUrl: cineIdImg,
  },
  {
    title: "Theta",
    description:
      "Theta manages pharmacy distribution, aiding staff with inventory and deliveries. Integrated with Google Maps API for efficient routes and costs. Plus, it syncs with a courier mobile app for smoother deliveries.",
    tags: ["Flutter", "MYSQL", "Laravel"],
    imageUrl: thetaImg,
  },
  {
    title: "Laundry Management System",
    description:
      "Java-based desktop app for laundry management. Simplifies order processing and inventory tracking.",
    tags: ["Java", "MYSQL"],
    imageUrl: laundryImg,
  },
] as const;

export const skillsData = [
  "C#",
  "PHP",
  "JavaScript",
  "TypeScript",
  ".NET",
  "Laravel",
  "Flutter",
  "Java",
  "C",
  "Python",
  "SQL",
  "MongoDB",
  "Neo4j",
] as const;
