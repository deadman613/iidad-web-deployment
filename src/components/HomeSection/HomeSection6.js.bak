"use client"
import styles from "./homeSection6.module.css";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const items = [
  {
    q: "Was the Treize Grammes agency website quick to create?",
    a: "",
  },
  {
    q: "What tools do you use?",
    a: "",
  },
  {
    q: "What types of websites can you create?",
    a: "We specialize in creating turnkey showcase websites and web applications. We don’t build e-commerce sites, but otherwise, we have no creative or technical limitations. Our resources allow us to push the boundaries of the digital experience, making your website your brand’s greatest business asset.",
  },
  {
    q: "Are your websites optimized for search engine optimization (SEO)?",
    a: "Webflow est nativement et structurellement optimisé pour le SEO. Par ailleurs, nous avons à cœur d’adopter des modes de conception visant à développer l’accessibilité et minimiser l’impact carbone. Cette posture génère des sites optimisés et aux performances supérieures aux standards du marché.",
  },
  {
    q: "How much does it cost?",
    a: "",
  },
  {
    q: "How long does it take to create a website at Treize grammes?",
    a: "The answer varies. Our record is 2.5 months for an 11-page site (graphic design + layout + content + wording + Webflow integration), but on average we take 3 to 5 months... which is still quite respectable!",
  },
  {
    q: "How many people will be working on my website?",
    a: "",
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
