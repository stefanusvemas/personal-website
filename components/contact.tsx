"use client";

import { useActiveSectionContext } from "@/context/active-section-context";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Contact");
    }
  }, [inView, setActiveSection, timeOfLastClick]);

  return (
    <motion.section
      ref={ref}
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="mb-28 max-w-[45rem] mx-auto px-3 w-[min(100%,38rem)] text-center sm:px-0 sm:mb-40 scroll-mt-36">
      <h2 className="text-3xl font-medium capitalize">Contact Me</h2>
      <p className="text-gray-700">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:stefanusvemas@gmail.com">
          stefanusvemas@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Message sent successfully!");
        }}>
        <input
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
          className="h-14 px-4 rounded-lg borderBlack transition-all"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
