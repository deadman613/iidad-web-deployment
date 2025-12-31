import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Thank you | IIDAD",
  alternates: {
    canonical: "https://www.iidad.com/thank-you",
  },
};

export default function ThankYouPage() {
  return (
    <main className={styles.wrapper}>
      <div className={styles.card}>
        <h1 className={styles.title}>Thank you!</h1>
        <p className={styles.subtitle}>
          We have received your submission. Our team will reach out shortly with next steps.
        </p>
        <div className={styles.actions}>
          <Link href="/courses" className={styles.primaryButton}>Browse more courses</Link>
          <Link href="/" className={styles.secondaryButton}>Back to home</Link>
        </div>
      </div>
    </main>
  );
}
