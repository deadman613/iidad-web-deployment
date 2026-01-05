"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import styles from "./Faqs.module.css";

export default function Faqs({ items = [] }) {
  const [open, setOpen] = useState(-1);

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>FAQ</h2>
          <p className={styles.subtitle}>Frequently Asked Questions</p>
        </div>
        {items.map((item, idx) => (
          <div className={`${styles.item} ${open === idx ? styles.active : ""}`} key={idx}>
            <button
              className={styles.question}
              aria-expanded={open === idx}
              onClick={() => setOpen(open === idx ? -1 : idx)}
            >
              <span className={styles.qText}>{item.q}</span>
              <span className={styles.arrow}>
                {item.a ? open === idx ? <FaChevronUp /> : <FaChevronDown /> : <FaChevronDown />}
              </span>
            </button>
            {item.a && open === idx && <div className={styles.answer}>{item.a}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}
