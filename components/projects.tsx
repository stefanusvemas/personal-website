import React from "react";
import { projectsData } from "@/lib/data";
import Project from "./project";

export default function Projects() {
  return (
    <section id="projects" className="mb-28 sm:mb-40 scroll-mt-28">
      <h2 className="text-3xl mb-4 font-medium capitalize text-center">
        My Projects
      </h2>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
