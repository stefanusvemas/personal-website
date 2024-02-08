"use client";

import React, { useEffect } from "react";
import { educationData } from "@/lib/data";
import { useInView } from "react-intersection-observer";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Education() {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Education");
    }
  }, [inView, setActiveSection, timeOfLastClick]);
  return (
    <section id="education" className="mb-28 sm:mb-40 scroll-mt-36" ref={ref}>
      <h2 className="text-3xl mb-4 font-medium capitalize text-center">
        Education
      </h2>

      <VerticalTimeline lineColor="">
        {educationData.map((data, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={inView}
              contentStyle={{
                visibility: "visible",
                background: "#f3f4f6",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid  #9ca3af",
              }}
              date={data.date}
              icon={data.icon}
              iconStyle={{
                visibility: "visible",
                background: "white",
                fontSize: "1.5rem",
              }}>
              <h3 className="font-semibold capitalize">{data.title}</h3>
              <h4>{data.school}</h4>
              <p>{data.location}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
