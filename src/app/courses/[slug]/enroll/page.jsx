"use client";

import Link from "next/link";
import courses from "@/data/courses.json";
import styles from "./enroll.module.css";
import { useState, use } from "react";

const computePrices = (duration) => {
  const monthly = 10000;
  const months = Number(duration) || 0;
  const base = months * monthly;
  let discount = 0;
  if (months === 12) discount = 10000;
  else if (months === 6 || months === 3 || months === 4) discount = 5000;
  const price = Math.max(0, base - discount);
  return { price, oldPrice: base };
};

const formatPrice = (n) => {
  if (n == null) return "";
  return `₹${String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
};

export default function EnrollPage({ params }) {
  const { slug } = use(params);
  const course = courses.find((c) => c.slug === slug);
  if (!course) return <main className={styles.wrapper}><div className={styles.container}><p className={styles.muted}>Course not found.</p></div></main>;

  const [submitted, setSubmitted] = useState(false);

  const { price, oldPrice } = computePrices(course.duration);
  const saved = oldPrice > 0 ? oldPrice - price : 0;
  const pct = oldPrice > 0 ? Math.round((saved / oldPrice) * 100) : 0;
  const thumbnailPath = `/courseThumbnail/${course.slug}.jpg`;

  return (
    <main className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.breadcrumbs}>
          <Link href="/courses">Courses</Link>
          <span>/</span>
          <Link href={`/courses/${course.slug}`}>{course.title}</Link>
          <span>/</span>
          <span>Enroll</span>
        </div>

        <div className={styles.grid}>
          <section className={styles.formCard}>
            <h1>Enroll in {course.title}</h1>
            <p className={styles.subtext}>Fill in your details and our team will reach out with the next steps.</p>
            <form
              className={styles.form}
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <label>
                Full name
                <input type="text" name="name" placeholder="Your name" required />
              </label>
              <label>
                Email
                <input type="email" name="email" placeholder="you@example.com" required />
              </label>
              <label>
                Phone number
                <input type="tel" name="phone" placeholder="+91 98765 43210" required />
              </label>
              <label>
                What do you want to achieve?
                <textarea name="goal" rows={3} placeholder="Describe your goals"></textarea>
              </label>
              <label>
                Additional notes
                <textarea name="notes" rows={3} placeholder="Anything else we should know?" />
              </label>
              <button type="submit" className={styles.submitButton}>Submit enrollment</button>
              <p className={styles.muted}>
                {submitted ? "Thanks! We will reach out soon." : "By submitting, you agree to be contacted about this course."}
              </p>
            </form>
          </section>

          <aside className={styles.priceCard}>
            <div className={styles.cardThumbnail}>
              <img src={thumbnailPath} alt={course.title} className={styles.cardImage} />
            </div>

            <div className={styles.compactInfo}>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>Duration</span>
                <span className={styles.infoValue}>{course.duration} months</span>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>Rating</span>
                <span className={styles.infoValue}>⭐ {course.rating} ({course.ratingsCount})</span>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>Instructor</span>
                <span className={styles.infoValue}>{course.author}</span>
              </div>
            </div>

            <div className={styles.divider}></div>

            <div className={styles.priceHeader}>
              <div className={styles.priceOption}>
                <div className={styles.priceLabel}>Full Payment</div>
                <div className={styles.currentPrice}>{formatPrice(price)}</div>
                <div className={styles.priceRow}>
                  <div className={styles.originalPrice}>{formatPrice(oldPrice)}</div>
                  {pct > 0 && <div className={styles.discount}>{pct}% off</div>}
                </div>
              </div>
              <div className={styles.priceOption}>
                <div className={styles.priceLabel}>Easy Installments</div>
                <div className={styles.installmentPrice}>{formatPrice(Math.ceil(price / 12))}<span className={styles.perMonth}>/month</span></div>
                <div className={styles.installmentNote}>12 monthly payments</div>
              </div>
            </div>

            <div className={styles.includes}>
              <h3 className={styles.includesTitle}>This course includes:</h3>
              <ul className={styles.includesList}>
                <li>
                  <svg className={styles.includeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                  <span>Lifetime access</span>
                </li>
                <li>
                  <svg className={styles.includeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  <span>Certificate of completion</span>
                </li>
                <li>
                  <svg className={styles.includeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                  </svg>
                  <span>Mentor support</span>
                </li>
              </ul>
            </div>

            <Link href={`/courses/${course.slug}`} className={styles.backLink}>← Back to course</Link>
          </aside>
        </div>
      </div>
    </main>
  );
}
