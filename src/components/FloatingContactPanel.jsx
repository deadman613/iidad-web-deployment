import styles from "./floatingContactPanel.module.css";

export default function FloatingContactPanel() {
  const phoneNumber = "+919876543210";
  const whatsappNumber = "919876543210"; // without + for wa.me

  return (
    <div className={styles.wrapper} aria-label="Quick contact actions">
      <a
        href={`tel:${phoneNumber}`}
        className={styles.btn}
        aria-label="Call us"
      >
        <img src="/phone-svgrepo-com.svg" alt="Phone" className={styles.icon} />
      </a>
      <a
        href={`https://wa.me/${whatsappNumber}`}
        className={styles.btn}
        aria-label="Chat on WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/whatsapp-svgrepo-com (2).svg" alt="WhatsApp" className={styles.icon} />
      </a>
    </div>
  );
}
