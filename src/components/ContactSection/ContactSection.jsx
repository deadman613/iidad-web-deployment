"use client";

import { useState } from "react";
import styles from "./contactSection1.module.css";

const COURSES = [
  "Web Development",
  "MERN Stack",
  "Full Stack",
  "UI/UX Design",
  "Digital Marketing",
  "Other",
];

export default function ContactSection() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    courses: [],
  });
  const [status, setStatus] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleCheckbox(e) {
    const { value, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      courses: checked
        ? [...prev.courses, value]
        : prev.courses.filter((c) => c !== value),
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/submit-demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${form.firstName} ${form.lastName}`,
          email: form.email,
          phone: form.phone,
          message: form.message,
          courses: form.courses.join(", "),
          source: "Contact Page",
        }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ firstName: "", lastName: "", email: "", phone: "", message: "", courses: [] });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1 className={styles.title}>Contact Us</h1>
          <p className={styles.subtitle}>
            Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll
            respond as soon as possible.
          </p>
        </div>

        <div className={styles.content}>
          {/* Form */}
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.nameRow}>
              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  className={styles.input}
                  type="text"
                  name="firstName"
                  placeholder="John"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  className={styles.input}
                  type="text"
                  name="lastName"
                  placeholder="Doe"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="email">Email</label>
              <input
                id="email"
                className={styles.input}
                type="email"
                name="email"
                placeholder="john@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="phone">Phone</label>
              <div className={styles.phoneInput}>
                <select className={styles.countrySelect} defaultValue="+91" aria-label="Country code">
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                </select>
                <input
                  id="phone"
                  className={styles.phoneField}
                  type="tel"
                  name="phone"
                  placeholder="9876543210"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Interested Courses</label>
              <div className={styles.checkboxGrid}>
                {COURSES.map((course) => (
                  <label key={course} className={styles.checkboxLabel}>
                    <input
                      type="checkbox"
                      className={styles.checkbox}
                      value={course}
                      checked={form.courses.includes(course)}
                      onChange={handleCheckbox}
                    />
                    {course}
                  </label>
                ))}
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="message">Message</label>
              <textarea
                id="message"
                className={styles.textarea}
                name="message"
                placeholder="Tell us how we can help you..."
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className={styles.submitBtn} disabled={status === "loading"}>
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p style={{ color: "#4ade80", margin: 0 }}>
                Message sent! We&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p style={{ color: "#f87171", margin: 0 }}>
                Something went wrong. Please try again or call us directly.
              </p>
            )}
          </form>

          {/* Contact Info */}
          <div className={styles.contactInfo}>
            <div className={styles.infoBlock}>
              <h2 className={styles.infoTitle}>Visit Us</h2>
              <p className={styles.infoText}>
                GK-II, New Delhi, India
              </p>
            </div>

            <div className={styles.infoBlock}>
              <h2 className={styles.infoTitle}>Call Us</h2>
              <p className={styles.infoText}>Mon–Sat, 10am – 6pm</p>
              <div className={styles.links}>
                <a href="tel:+918810606010" className={styles.link}>
                  +91-8810606010
                </a>
              </div>
            </div>

            <div className={styles.infoBlock}>
              <h2 className={styles.infoTitle}>Email Us</h2>
              <p className={styles.infoText}>We reply within 24 hours</p>
              <div className={styles.links}>
                <a href="mailto:info@iidad.in" className={styles.link}>
                  info@iidad.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
