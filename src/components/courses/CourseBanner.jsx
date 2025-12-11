"use client"
import React from 'react'
import Link from 'next/link'
import styles from './courseBanner.module.css'

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
  if (n == null) return '';
  return `₹${String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
};

export default function CourseBanner({ course }) {
  const { price, oldPrice } = computePrices(course.duration);
  const saved = oldPrice > 0 ? oldPrice - price : 0;
  const pct = oldPrice > 0 ? Math.round((saved / oldPrice) * 100) : 0;

  // Use course thumbnail from /courseThumbnail/{slug}.jpg (or .png)
  const thumbnailPath = `/courseThumbnail/${course.slug}.jpg`;

  return (
    <section className={styles.bannerWrapper}>
      <div className={styles.container}>
        <Link href="/courses" className={styles.backLink}>← Back to all courses</Link>

        <div className={styles.grid}>
          <div className={styles.mainContent}>
            <div className={styles.heroCard}>
              <div className={styles.imageWrapper}>
                <img src={thumbnailPath} alt={course.title} className={styles.courseImage} />
                {course.tags && course.tags.includes('Bestseller') && (
                  <span className={styles.bestsellerBadge}>Bestseller</span>
                )}
              </div>

              <div className={styles.courseInfo}>
                <h1 className={styles.courseTitle}>{course.title}</h1>
                <p className={styles.courseDescription}>{course.description}</p>

                <div className={styles.metaInfo}>
                  <div className={styles.metaItem}>
                    <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 6v6l4 2"/>
                    </svg>
                    <span>{course.duration} months</span>
                  </div>
                  <div className={styles.metaItem}>
                    <svg className={styles.icon} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                    <span>{course.rating} ({course.ratingsCount})</span>
                  </div>
                  <div className={styles.metaItem}>
                    <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                    <span>{course.author}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.contentCard}>
              <h2 className={styles.sectionHeading}>What you'll learn</h2>
              <div className={styles.learnGrid}>
                <div className={styles.learnItem}>
                  <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Hands-on projects and real-world examples</span>
                </div>
                <div className={styles.learnItem}>
                  <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Industry best practices and modern architecture</span>
                </div>
                <div className={styles.learnItem}>
                  <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Portfolio-ready assignments and mentorship</span>
                </div>
                <div className={styles.learnItem}>
                  <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Certificate of completion upon finishing</span>
                </div>
              </div>
            </div>
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.priceCard}>
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

              <div className={styles.actions}>
                <button className={styles.primaryButton}>Add to cart</button>
                <button className={styles.secondaryButton}>Buy now</button>
              </div>

              <div className={styles.divider}></div>

              <div className={styles.includes}>
                <h3 className={styles.includesTitle}>This course includes:</h3>
                <ul className={styles.includesList}>
                  <li>
                    <svg className={styles.includeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                    </svg>
                    <span>Lifetime access</span>
                  </li>
                  <li>
                    <svg className={styles.includeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                    </svg>
                    <span>Certificate of completion</span>
                  </li>
                  <li>
                    <svg className={styles.includeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                    <span>Community support</span>
                  </li>
                  <li>
                    <svg className={styles.includeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                    </svg>
                    <span>Progress tracking</span>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
