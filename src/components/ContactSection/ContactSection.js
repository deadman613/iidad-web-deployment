"use client"
import styles from '@/components/ContactSection/contactSection1.module.css';

export default function ContactSection() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form[0].value.trim();
    const lastName = form[1].value.trim();
    const email = form[2].value.trim();
    const country = form[3].value;
    const phone = form[4].value.trim();
    const message = form[5].value.trim();
    // Collect checked interests
    const interests = Array.from(form.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.nextSibling.textContent.trim());
    const payload = {
      access_key: "5a98cfe6-d32f-4812-9d9d-12c057816c27",
      name: `${firstName} ${lastName}`.trim(),
      email,
      country,
      phone,
      message,
      interests: interests.join(', '),
      subject: "New Contact Form Submission from IIDAD Website",
      from_name: `${firstName} ${lastName}`.trim(),
      redirect: window.location.href + "?success=1"
    };
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (response.ok) {
        alert('Thank you! Your message has been sent.');
        form.reset();
      } else {
        alert('There was an error submitting the form. Please try again.');
      }
    } catch (err) {
      alert('There was an error submitting the form. Please try again.');
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1 className={styles.title}>Get in Touch with IIDAD</h1>
          <p className={styles.subtitle}>
            Have questions about our programs, admissions, or campus facilities? We are here to help.
            Connect with our admissions team and start your journey towards a creative career.
          </p>
        </div>

        <div className={styles.content}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.nameRow}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>First name</label>
                <input type="text" placeholder="First name" className={styles.input} />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Last name</label>
                <input type="text" placeholder="Last name" className={styles.input} />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Email</label>
              <input type="email" placeholder="you@company.com" className={styles.input} />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Phone number</label>
              <div className={styles.phoneInput}>
                <select className={styles.countrySelect}>
                  <option value="US">US</option>
                  <option value="UK">UK</option>
                  <option value="AU">AU</option>
                  <option value="IN">IN</option>
                </select>
                <input type="tel" placeholder="+1 (555) 000-0000" className={styles.phoneField} />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Message</label>
              <textarea placeholder="Leave us a message..." className={styles.textarea} rows={4} />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Interested In</label>
              <div className={styles.checkboxGrid}>
                {['UI/UX Design', 'Web Development', 'Mobile App Development', 'Graphic Design', 'Product Design', 'Other'].map((service) => (
                  <label key={service} className={styles.checkboxLabel}>
                    <input type="checkbox" className={styles.checkbox} />
                    <span>{service}</span>
                  </label>
                ))}
              </div>
            </div>

            <button type="submit" className={styles.submitBtn}>Send message</button>
          </form>

          <div className={styles.contactInfo}>
            <div className={styles.infoBlock}>
              <h3 className={styles.infoTitle}>Connect with us</h3>
              <p className={styles.infoText}>Reach out to our admissions team.</p>
              <div className={styles.links}>
                <a href="#" className={styles.link}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                  Chat with us
                </a>
                <a href="mailto:admissions@iidad.in" className={styles.link}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
                  admissions@iidad.in
                </a>
                <a href="#" className={styles.link}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  Follow us on X
                </a>
              </div>
            </div>

            <div className={styles.infoBlock}>
              <h3 className={styles.infoTitle}>Call us</h3>
              <p className={styles.infoText}>Call our team Mon-Sat from 9am to 6pm.</p>
              <a href="tel:+919205435653" className={styles.link}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                +91 92054 35653
              </a>
            </div>

            <div className={styles.infoBlock}>
              <h3 className={styles.infoTitle}>Visit our campus</h3>
              <p className={styles.infoText}>Schedule a campus tour and meet our team.</p>
              <a href="#" className={styles.link}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                IIDAD Campus, India
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}