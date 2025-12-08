"use client"
import React, { useMemo, useState } from "react";
import styles from "./courseSection2.module.css";

const TABS = ["Popular", "Diploma", "Advanced", "Certification"];

const allCourses = [
  {
    id: 1,
    tab: "Most popular",
    title: "Certification in JavaScript Development",
    author: "IIDAD Academy",
    rating: 4.6,
    ratingsCount: "1,240",
    duration: 3,
    tags: [],
    img: "/images/course-placeholder.png",
  },
  {
    id: 2,
    tab: "Most popular",
    title: "Certification in CSS Development",
    author: "IIDAD Academy",
    rating: 4.5,
    ratingsCount: "980",
    duration: 4,
    tags: [],
    img: "/images/course-placeholder.png",
  },
  {
    id: 3,
    tab: "Most popular",
    title: "Advanced Frontend Development course",
    author: "IIDAD Academy",
    rating: 4.7,
    ratingsCount: "2,100",
    duration: 6,
    tags: ["Bestseller"],
    img: "/images/course-placeholder.png",
  },
  {
    id: 4,
    tab: "Most popular",
    title: "Advanced Backend Development course",
    author: "IIDAD Academy",
    rating: 4.6,
    ratingsCount: "1,750",
    duration: 6,
    tags: [],
    img: "/images/course-placeholder.png",
  },
  {
    id: 5,
    tab: "Most popular",
    title: "Advanced Mobile App Development course",
    author: "IIDAD Academy",
    rating: 4.6,
    ratingsCount: "1,430",
    duration: 6,
    tags: [],
    img: "/images/course-placeholder.png",
  },
  {
    id: 6,
    tab: "Most popular",
    title: "Advanced QA Testing Certification course",
    author: "IIDAD Academy",
    rating: 4.5,
    ratingsCount: "860",
    duration: 6,
    tags: [],
    img: "/images/course-placeholder.png",
  },
  {
    id: 7,
    tab: "Most popular",
    title: "Advanced React & Redux course",
    author: "IIDAD Academy",
    rating: 4.8,
    ratingsCount: "2,540",
    duration: 6,
    tags: ["Bestseller"],
    img: "/images/course-placeholder.png",
  },
  {
    id: 8,
    tab: "Most popular",
    title: "Diploma in Frontend Development",
    author: "IIDAD Academy",
    rating: 4.7,
    ratingsCount: "3,120",
    duration: 12,
    tags: [],
    img: "/images/course-placeholder.png",
  },
  {
    id: 9,
    tab: "Most popular",
    title: "Diploma in JavaScript Algorithms",
    author: "IIDAD Academy",
    rating: 4.6,
    ratingsCount: "1,900",
    duration: 12,
    tags: [],
    img: "/images/course-placeholder.png",
  },
  {
    id: 10,
    tab: "Most popular",
    title: "Diploma in Fullstack Development",
    author: "IIDAD Academy",
    rating: 4.7,
    ratingsCount: "2,800",
    duration: 12,
    tags: ["Bestseller"],
    img: "/images/course-placeholder.png",
  },
  {
    id: 11,
    tab: "Most popular",
    title: "Certification in Animations in 3.js",
    author: "IIDAD Academy",
    rating: 4.4,
    ratingsCount: "420",
    duration: 3,
    tags: [],
    img: "/images/course-placeholder.png",
  },
  {
    id: 12,
    tab: "Most popular",
    title: "Diploma in Backend Development",
    author: "IIDAD Academy",
    rating: 4.6,
    ratingsCount: "1,750",
    duration: 12,
    tags: [],
    img: "/images/course-placeholder.png",
  },
  {
    id: 13,
    tab: "Most popular",
    title: "Diploma in Fullstack Development with Generative AI",
    author: "IIDAD Academy",
    rating: 4.8,
    ratingsCount: "3,400",
    duration: 12,
    tags: ["Bestseller"],
    img: "/images/course-placeholder.png",
  },
];

const CourseSection2 = () => {
  const [activeTab, setActiveTab] = useState("Most popular");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");
  const [durationFilter, setDurationFilter] = useState([]); // array of numbers: 3,4,6,12
  const [categoryFilter, setCategoryFilter] = useState([]); // strings: Diploma, Advanced, Certification
  const [newestFirst, setNewestFirst] = useState(false);

  // helper: compute price and oldPrice (numbers)
  const computePrices = (c) => {
    const monthly = 10000;
    const months = Number(c.duration) || 0;
    const base = months * monthly;
    // Discounts: 12-month courses -> 10000 discount; 6 and 3-4 month courses -> 5000 discount
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

  const filteredCourses = useMemo(() => {
    const lower = query.trim().toLowerCase();

    const matchesQuery = (c) =>
      !lower ||
      c.title.toLowerCase().includes(lower) ||
      c.author.toLowerCase().includes(lower);

    const matchesCategoryFilter = (c) => {
      if (!categoryFilter || categoryFilter.length === 0) return true;
      const title = c.title.toLowerCase();
      const cats = categoryFilter.map((s) => s.toLowerCase());
      return (
        (cats.includes("diploma") && title.startsWith("diploma")) ||
        (cats.includes("advanced") && title.includes("advanced")) ||
        (cats.includes("certification") && title.includes("certification"))
      );
    };

    const matchesDurationFilter = (c) => {
      if (!durationFilter || durationFilter.length === 0) return true;
      return durationFilter.includes(Number(c.duration));
    };

    const matchesPriceFilter = (c) => {
      if (!priceFilter || priceFilter === "all") return true;
      const { price } = computePrices(c);
      if (priceFilter === "<=30000") return price <= 30000;
      if (priceFilter === "<=60000") return price <= 60000;
      if (priceFilter === "<=120000") return price <= 120000;
      return true;
    };

    // start with allCourses and apply sidebar filters + search
    let list = allCourses.filter(
      (c) => matchesQuery(c) && matchesCategoryFilter(c) && matchesDurationFilter(c) && matchesPriceFilter(c)
    );

    // If active tab is one of the category tabs, further narrow by tab semantics
    if (activeTab === "Diploma") {
      list = list.filter((c) => c.title.toLowerCase().startsWith("diploma"));
    } else if (activeTab === "Advanced") {
      list = list.filter((c) => c.title.toLowerCase().includes("advanced"));
    } else if (activeTab === "Certification") {
      list = list.filter((c) => c.title.toLowerCase().includes("certification"));
    }

    // Sorting: newest toggle sorts by id desc; otherwise keep default (ratings when Most popular)
    if (newestFirst) {
      list = list.slice().sort((a, b) => b.id - a.id);
    }

    if (activeTab === "Most popular") {
      // sort by ratingsCount numeric desc and limit to 4
      const sortedByRatings = list
        .slice()
        .sort((a, b) => {
          const na = Number(String(a.ratingsCount).replace(/,/g, "")) || 0;
          const nb = Number(String(b.ratingsCount).replace(/,/g, "")) || 0;
          return nb - na;
        });
      return sortedByRatings.slice(0, 4);
    }

    return list;
  }, [activeTab, query, priceFilter, durationFilter, categoryFilter, newestFirst]);

  const handleClearSearch = () => {
    setQuery("");
  };
  return (
    <section className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <aside id="course-filters" className={`${styles.sidebar} ${sidebarOpen ? styles.open : ""}`}>
            <div className={styles.filterGroup}>
              <h4>Search</h4>
              <input
                type="text"
                placeholder="Search courses"
                className={styles.filterSearch}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>

            <div className={styles.filterGroup}>
              <h4>Category</h4>
              {[
                { key: "Diploma", label: "Diploma" },
                { key: "Advanced", label: "Advanced" },
                { key: "Certification", label: "Certification" },
              ].map((c) => (
                <label key={c.key} className={styles.switch}>
                  <input
                    type="checkbox"
                    checked={categoryFilter.includes(c.key)}
                    onChange={(e) => {
                      setCategoryFilter((prev) =>
                        e.target.checked ? [...prev, c.key] : prev.filter((x) => x !== c.key)
                      );
                    }}
                    aria-label={c.label}
                  />
                  <span className={styles.slider} />
                  <span className={styles.switchLabel}>{c.label}</span>
                </label>
              ))}
            </div>

            <div className={styles.filterGroup}>
              <h4>Duration</h4>
              {[
                { key: 3, label: "3 months" },
                { key: 4, label: "3-4 months" },
                { key: 6, label: "6 months" },
                { key: 12, label: "12 months" },
              ].map((d) => (
                <label key={d.key} className={styles.switch}>
                  <input
                    type="checkbox"
                    checked={durationFilter.includes(d.key)}
                    onChange={(e) => {
                      setDurationFilter((prev) =>
                        e.target.checked ? [...prev, d.key] : prev.filter((x) => x !== d.key)
                      );
                    }}
                    aria-label={d.label}
                  />
                  <span className={styles.slider} />
                  <span className={styles.switchLabel}>{d.label}</span>
                </label>
              ))}
            </div>

            <div className={styles.filterGroup}>
              <h4>Price</h4>
              <select
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
                className={styles.filterSelect}
              >
                <option value="all">All prices</option>
                <option value="<=30000">Up to ₹30,000</option>
                <option value="<=60000">Up to ₹60,000</option>
                <option value="<=120000">Up to ₹120,000</option>
              </select>
            </div>

            <div className={styles.filterGroup}>
              <label className={styles.switch}>
                <input
                  type="checkbox"
                  checked={newestFirst}
                  onChange={(e) => setNewestFirst(e.target.checked)}
                  aria-label="Newest first"
                />
                <span className={styles.slider} />
                <span className={styles.switchLabel}>Newest first</span>
              </label>
            </div>

            <div className={styles.filterGroup}>
              <button
                className={styles.clearFiltersBtn}
                onClick={() => {
                  setPriceFilter("all");
                  setDurationFilter([]);
                  setCategoryFilter([]);
                  setNewestFirst(false);
                }}
              >
                Clear filters
              </button>
            </div>
          </aside>

          <div className={styles.mainContent}>
            <header className={styles.header}>
              <div className={styles.titleRow}>
                <div>
                  <h2 className={styles.heading}>IT &amp; Software Courses</h2>
                  <p className={styles.subheading}>Explore our curated IT and software programs — from short certifications to full diplomas.</p>
                </div>
                <button
                  className={styles.filterToggle}
                  onClick={() => setSidebarOpen((s) => !s)}
                  aria-expanded={sidebarOpen}
                  aria-controls="course-filters"
                >
                  Filters
                </button>
              </div>

              <div className={styles.searchContainer}>
                <div className={styles.searchWrapper}>
                  <svg
                    className={styles.searchIcon}
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search for a course"
                    className={styles.searchInput}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                  {query && (
                    <button
                      className={styles.clearButton}
                      onClick={handleClearSearch}
                      aria-label="Clear search"
                    >
                      ×
                    </button>
                  )}
                </div>
              </div>
            </header>

            <div className={styles.tabRow}>
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={
                    activeTab === tab
                      ? `${styles.tabButton} ${styles.tabButtonActive}`
                      : styles.tabButton
                  }
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className={styles.cardsRow}>
              {filteredCourses.map((course) => (
                <article key={course.id} className={styles.card}>
                  <div className={styles.cardImageWrapper}>
                    <img src={course.img} alt={course.title} className={styles.cardImage} />
                    {course.tags.includes("Bestseller") && (
                      <span className={styles.badge}>Bestseller</span>
                    )}
                  </div>

                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>{course.title}</h3>
                    <p className={styles.cardAuthor} style={{ marginTop: "auto" }}>{course.author}</p>

                    <div className={styles.ratingRow}>
                      <span className={styles.ratingValue}>{course.rating}</span>
                      <span className={styles.ratingCount}>({course.ratingsCount})</span>
                      <span className={styles.durationBadge}>{course.duration} months</span>
                    </div>

                    <div className={styles.priceRow}>
                      {(() => {
                        const p = computePrices(course);
                        return (
                          <>
                            <span className={styles.price}>{formatPrice(p.price)}</span>
                            <span className={styles.oldPrice}>{formatPrice(p.oldPrice)}</span>
                            <span className={styles.installment}>or {formatPrice(Math.ceil(p.price / 12))}/month</span>
                          </>
                        );
                      })()}
                    </div>
                  </div>
                </article>
              ))}

              {filteredCourses.length === 0 && (
                <div className={styles.noResult}>
                  <p>No courses found for "{query}"</p>
                  <button onClick={handleClearSearch} className={styles.clearResultBtn}>Clear search</button>
                </div>
              )}
            </div>

            <div className={styles.whyRow}>
              <div className={styles.whyItem}>
                <span className={styles.whyIcon}>▶</span>
                <p>Learn in‑demand skills with over 250,000 video courses.</p>
              </div>
              <div className={styles.whyItem}>
                <span className={styles.whyIcon}>★</span>
                <p>Choose courses taught by real‑world experts.</p>
              </div>
              <div className={styles.whyItem}>
                <span className={styles.whyIcon}>∞</span>
                <p>Learn at your own pace with lifetime access.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseSection2;