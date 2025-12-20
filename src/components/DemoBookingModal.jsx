"use client"
import React, { useEffect, useState, useRef } from "react";
import styles from "./DemoBookingModal.module.css";

export default function DemoBookingModal({ open: propOpen, onClose: propOnClose } = {}) {
  const [open, setOpen] = useState(Boolean(propOpen));
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("Frontend");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const mountedRef = useRef(false);

  // Reflect controlled prop if provided
  useEffect(() => {
    if (propOpen !== undefined) setOpen(Boolean(propOpen));
  }, [propOpen]);

  // Attach document-level click listener to open modal when any element with
  // class `demoButtonForm` is clicked. This makes the modal reusable and
  // independent of a specific button component.
  useEffect(() => {
    function onDocClick(e) {
      const btn = e.target.closest && e.target.closest(".demoButtonForm");
      if (btn) setOpen(true);
    }
    document.addEventListener("click", onDocClick, { passive: true });
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  // Prevent body scroll when modal open
  useEffect(() => {
    if (!mountedRef.current) mountedRef.current = true;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleClose = () => {
    setOpen(false);
    propOnClose && propOnClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    if (!name.trim() || !email.trim() || !phone.trim()) {
      alert("Please fill name, phone and email.");
      setSubmitting(false);
      return;
    }

    const payload = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      interest
    };

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbzX2pbdedAJbFzL0EF2DvfY0x40TTEEYjVXiubmj03AxxOSlWejnNQCBhOiqNklLCeo/exec', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (response.ok) {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          handleClose();
          setName("");
          setPhone("");
          setEmail("");
          setInterest("Frontend");
        }, 1000);
      } else {
        setSubmitting(false);
        alert("Failed to book demo. Try again later.");
      }
    } catch (err) {
      setSubmitting(false);
      alert("Failed to book demo. Try again later.");
    }
  };
  };

  if (!open) return null;

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true">
      <div className={styles.panel}>
        <button className={styles.closeBtn} onClick={handleClose} aria-label="Close demo booking">
          ×
        </button>
        <h2 className={styles.title}>Book 7 Days Free Demo</h2>
        <p className={styles.lead}>Try our course for 7 days — no cost. Fill details and we will contact you.</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.field}>
            <span className={styles.label}>Full name</span>
            <input
              className={styles.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
              type="text"
              required
            />
          </label>

          <label className={styles.field}>
            <span className={styles.label}>Phone</span>
            <input
              className={styles.input}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Mobile number"
              type="tel"
              required
            />
          </label>

          <label className={styles.field}>
            <span className={styles.label}>Email</span>
            <input
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              type="email"
              required
            />
          </label>

          <fieldset className={styles.fieldset}>
            <legend className={styles.label}>Interest</legend>
            <div className={styles.options}>
              {[
                "Frontend",
                "Backend",
                "Full Stack",
                "DSA",
              ].map((opt) => (
                <label key={opt} className={styles.option}>
                  <input
                    type="radio"
                    name="interest"
                    value={opt}
                    checked={interest === opt}
                    onChange={() => setInterest(opt)}
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className={styles.actions}>
            <button type="submit" className={styles.submit} disabled={submitting}>
              {submitting ? "Booking..." : "Book your 7 days free demo"}
            </button>
          </div>

          {success && <div className={styles.success}>Booked! We'll contact you shortly.</div>}
        </form>
      </div>
    </div>
  );

