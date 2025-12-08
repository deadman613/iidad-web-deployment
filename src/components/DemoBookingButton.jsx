"use client"
import React, { useState } from "react";
import DemoBookingModal from "./DemoBookingModal";
import styles from "./DemoBookingButton.module.css";

export default function DemoBookingButton({ className }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className={`${styles.btn} ${className || ""}`} onClick={() => setOpen(true)}>
        Book 7 days free demo
      </button>
      <DemoBookingModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
