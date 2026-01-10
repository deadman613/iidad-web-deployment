export const metadata = {
  title: "Privacy Policy | IIDAD",
  description:
    "Read IIDAD's Privacy Policy to understand what information we collect, how we use it, and the choices available to you.",
  alternates: {
    canonical: "https://www.iidad.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | IIDAD",
    description:
      "Learn how IIDAD collects, uses, and protects your personal information when you use our website.",
    url: "/privacy-policy",
    type: "article",
  },
};

const COMPANY = {
  name: "IIDAD (Indian Institute of Design and Development)",
  addressLines: [
    "Spacetime Management Pvt Ltd Design House",
    "Behind Savitri Cinema Complex",
    "Greater Kailash II, Chittaranjan Park",
    "New Delhi, Delhi 110048, India",
  ],
  email: "admissions@iidad.in",
  phonePrimary: "+91 92054 35653",
};

export default function PrivacyPolicyPage() {
  return (
    <main
      style={{
        maxWidth: 980,
        margin: "0 auto",
        padding: "2.5rem 1rem 3rem",
        lineHeight: 1.7,
      }}
    >
      <h1 style={{ fontSize: "2.2rem", marginBottom: "0.75rem" }}>
        Privacy Policy
      </h1>
      <p style={{ opacity: 0.8, marginBottom: "2rem" }}>
        Last updated: January 10, 2026
      </p>

      <p>
        This Privacy Policy explains how {COMPANY.name} ("we", "us", "our")
        collects, uses, shares, and protects information when you visit or use
        our website.
      </p>

      <h2 style={{ marginTop: "2rem" }}>Information We Collect</h2>
      <ul>
        <li>
          <strong>Information you provide:</strong> when you submit forms (for
          example, contact/admissions inquiries or demo requests), we may collect
          details such as your name, phone number, email address, course
          interests, and any message you send.
        </li>
        <li>
          <strong>Account/admin information:</strong> if you access admin areas,
          we process login/session data to authenticate and secure access.
        </li>
        <li>
          <strong>Usage and device data:</strong> we may collect information like
          pages visited, approximate location (city/region), browser type, device
          identifiers, and referral URLs.
        </li>
        <li>
          <strong>Cookies and similar technologies:</strong> we use cookies/local
          storage for site functionality and to understand usage.
        </li>
      </ul>

      <h2 style={{ marginTop: "2rem" }}>How We Use Information</h2>
      <ul>
        <li>Respond to inquiries and provide admissions/course guidance.</li>
        <li>Process and manage registrations or requests.</li>
        <li>Maintain website security, prevent fraud/abuse, and troubleshoot.</li>
        <li>Improve content, user experience, and performance.</li>
        <li>
          Measure marketing effectiveness (for example, via analytics/tag
          management tools).
        </li>
      </ul>

      <h2 style={{ marginTop: "2rem" }}>Sharing and Disclosure</h2>
      <p>
        We do not sell your personal information. We may share information only
        in limited situations, such as:
      </p>
      <ul>
        <li>
          <strong>Service providers:</strong> hosting, analytics, communication,
          and infrastructure vendors who process data on our behalf.
        </li>
        <li>
          <strong>Legal and safety:</strong> if required by law or to protect our
          rights, users, and the public.
        </li>
        <li>
          <strong>Business operations:</strong> in case of restructuring, merger,
          or asset transfer (with appropriate safeguards).
        </li>
      </ul>

      <h2 style={{ marginTop: "2rem" }}>Third-Party Services</h2>
      <p>
        Our website may include links to third-party websites and may use
        third-party tools (such as analytics). Their privacy practices are
        governed by their own policies.
      </p>

      <h2 style={{ marginTop: "2rem" }}>Data Security</h2>
      <p>
        We use reasonable administrative, technical, and physical safeguards to
        protect information. However, no method of transmission over the
        internet is completely secure.
      </p>

      <h2 style={{ marginTop: "2rem" }}>Data Retention</h2>
      <p>
        We retain personal information only as long as needed for the purposes
        described in this policy, unless a longer retention period is required
        or permitted by law.
      </p>

      <h2 style={{ marginTop: "2rem" }}>Your Choices</h2>
      <ul>
        <li>
          You may request access, correction, or deletion of your information by
          contacting us.
        </li>
        <li>
          You can control cookies through your browser settings. Some features
          may not work properly if cookies are disabled.
        </li>
      </ul>

      <h2 style={{ marginTop: "2rem" }}>Children’s Privacy</h2>
      <p>
        Our website is not intended for children under 13. If you believe a
        child has provided personal information to us, please contact us.
      </p>

      <h2 style={{ marginTop: "2rem" }}>Contact Us</h2>
      <p>If you have questions about this Privacy Policy, contact:</p>
      <address style={{ fontStyle: "normal", opacity: 0.9 }}>
        <div>{COMPANY.name}</div>
        {COMPANY.addressLines.map((line) => (
          <div key={line}>{line}</div>
        ))}
        <div>
          Email: <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
        </div>
        <div>
          Phone: <a href={`tel:${COMPANY.phonePrimary.replace(/\s/g, "")}`}>{COMPANY.phonePrimary}</a>
        </div>
      </address>

      <p style={{ marginTop: "2rem", opacity: 0.75, fontSize: ".95rem" }}>
        This page is provided for general information and does not constitute
        legal advice.
      </p>
    </main>
  );
}
