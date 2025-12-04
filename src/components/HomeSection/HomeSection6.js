"use client"
import styles from "./homeSection6.module.css";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const items = [
  {
    q: "What programs does IIDAD offer?",
    a: "IIDAD offers comprehensive programs in UI/UX Design, Web Development, Mobile App Development, Graphic Design, Product Design, Animation, and Digital Marketing. We provide certificate courses, diploma programs, and degree courses tailored to different skill levels.",
  },
  {
    q: "What is the duration of the courses?",
    a: "Course durations vary: Certificate courses range from 3-6 months, Diploma programs are 12-18 months, and Degree programs span 2-3 years. We also offer intensive bootcamps and weekend workshops for working professionals.",
  },
  {
    q: "Do you provide placement assistance?",
    a: "Yes! IIDAD has a dedicated placement cell that works closely with leading companies in the design and tech industry. We provide resume building, portfolio reviews, interview preparation, and direct placement opportunities with our partner companies.",
  },
  {
    q: "What are the prerequisites for admission?",
    a: "Most programs require completion of 10+2 education. For advanced courses, prior experience or a bachelor's degree may be preferred. However, we welcome passionate learners from all backgrounds. Each program has specific requirements detailed on our admissions page.",
  },
  {
    q: "Are the courses available online?",
    a: "Yes, IIDAD offers both on-campus and online learning options. Our hybrid model allows you to choose the format that best suits your lifestyle. Online students get access to live sessions, recorded lectures, and all course materials.",
  },
  {
    q: "What tools and software will I learn?",
    a: "You will master industry-standard tools including Figma, Adobe Creative Suite, Sketch, React, Node.js, Python, Flutter, Unity, Blender, and more. We provide software licenses and access to cutting-edge technology throughout your learning journey.",
  },
  {
    q: "How can I apply to IIDAD?",
    a: "Applications can be submitted through our website. The process includes filling out an application form, submitting your academic transcripts, and attending a counseling session. Some programs may require a portfolio review or entrance test.",
  },
];

export default function HomeSection6() {
  const [open, setOpen] = useState(-1);

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        {items.map((item, idx) => (
          <div
            className={`${styles.item} ${
              open === idx ? styles.active : ""
            }`}
            key={idx}
          >
            <button
              className={styles.question}
              aria-expanded={open === idx}
              onClick={() => setOpen(open === idx ? -1 : idx)}
            >
              <span className={styles.qText}>{item.q}</span>
              <span className={styles.arrow}>
                {item.a
                  ? open === idx
                    ? <FaChevronUp />
                    : <FaChevronDown />
                  : <FaChevronDown />}
              </span>
            </button>
            {item.a && open === idx && (
              <div className={styles.answer}>{item.a}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
