export const metadata = {
  title: "Terms and Conditions | IIDAD",
  description:
    "Read the Terms and Conditions for using the IIDAD website and related services, including course enrollment policies.",
  alternates: {
    canonical: "https://www.iidad.com/terms-and-conditions",
  },
  openGraph: {
    title: "Terms and Conditions | IIDAD",
    description:
      "Terms for website use and course-related policies for IIDAD (Indian Institute of Design and Development).",
    url: "/terms-and-conditions",
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

export default function TermsAndConditionsPage() {
  return (
    <main
      style={{
        maxWidth: 980,
        margin: "100px auto 0 auto",
        padding: "2.5rem 1rem 3rem",
        lineHeight: 1.7,
      }}
    >
      <h1 style={{ fontSize: "2.2rem", marginBottom: "0.75rem" }}>
        Terms and Conditions
      </h1>
      <p style={{ opacity: 0.8, marginBottom: "2rem" }}>
        Last updated: January 10, 2026
      </p>

      <p>
        These Terms and Conditions govern your use of this website and related
        services provided by {COMPANY.name} (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;). By accessing
        or using our website, you agree to these terms. If you do not agree,
        please stop using the website.
      </p>

      <h2 style={{ marginTop: "2rem" }}>1. Website Content and Usage</h2>
      <p>
        Content on this website (text, images, videos, and other materials) is
        provided for general information. Unless stated otherwise, content is
        owned by us or used with permission and is protected by applicable
        intellectual property laws. You may not copy, reproduce, distribute,
        modify, or commercially exploit content without written permission.
      </p>

      <h2 style={{ marginTop: "2rem" }}>2. User Conduct</h2>
      <ul>
        <li>Do not misuse the website or attempt unauthorized access.</li>
        <li>Do not submit false, misleading, or unlawful information.</li>
        <li>
          Do not upload or transmit viruses, malware, or any harmful content.
        </li>
      </ul>

      <h2 style={{ marginTop: "2rem" }}>3. Privacy</h2>
      <p>
        Your use of the website is also subject to our Privacy Policy. By using
        this website, you consent to the collection and use of information as
        described there.
      </p>

      <h2 style={{ marginTop: "2rem" }}>4. Third-Party Links</h2>
      <p>
        The website may contain links to third-party sites or services. We do
        not control and are not responsible for their content, policies, or
        practices.
      </p>

      <h2 style={{ marginTop: "2rem" }}>5. Changes, Availability, Termination</h2>
      <p>
        We may update, suspend, or discontinue any part of the website at any
        time without notice. We may restrict or terminate access if we believe
        there is misuse or policy violation.
      </p>

      <h2 style={{ marginTop: "2rem" }}>6. Limitation of Liability</h2>
      <p>
        To the extent permitted by law, {COMPANY.name} and its team are not
        liable for indirect, incidental, special, consequential, or punitive
        damages arising from your use of (or inability to use) the website.
      </p>

      <h2 style={{ marginTop: "2rem" }}>7. Governing Law</h2>
      <p>
        These terms are governed by the laws of India. Any disputes will be
        subject to the jurisdiction of courts in Delhi, India.
      </p>

      <hr style={{ margin: "2.5rem 0", opacity: 0.25 }} />

      <h2>Course Enrollment, Payments, and Classroom Policies</h2>
      <p>
        The following additional terms apply when you enroll in or attend any
        course/training offered by {COMPANY.name}.
      </p>

      <h3 style={{ marginTop: "1.25rem" }}>A. Payments</h3>
      <ul>
        <li>
          Fees may be payable via online transfer (UPI/bank transfer), cash, or
          card, subject to availability.
        </li>
        <li>
          Registration is confirmed only after we receive the applicable course
          fee (or the first installment where applicable).
        </li>
        <li>
          Any remittance or bank charges (if any) are borne by the participant.
        </li>
      </ul>

      <h3 style={{ marginTop: "1.25rem" }}>B. Cancellations, Refunds, Transfers</h3>
      <ul>
        <li>
          Requests for cancellations/transfers must be submitted in writing.
        </li>
        <li>
          Unless explicitly stated in writing by us, fees paid are
          non-refundable and non-transferable.
        </li>
        <li>
          If a participant misses the course/batch, fees are not refundable.
        </li>
        <li>
          Once a payment is successfully processed, it cannot be reversed,
          stopped, or cancelled through any method.
        </li>
      </ul>

      <h3 style={{ marginTop: "1.25rem" }}>C. Installments</h3>
      <p>
        If a payment plan is offered, the remaining installment(s) must be paid
        within the communicated timeframe (typically within 20 days of the
        course start date). Failure to pay may result in cancellation or
        postponement of registration.
      </p>

      <h3 style={{ marginTop: "1.25rem" }}>D. Schedule and Content Changes</h3>
      <ul>
        <li>
          We may alter batch timings, dates, duration, faculty, or delivery
          format as needed.
        </li>
        <li>
          We may update the syllabus/course content to stay aligned with
          industry requirements.
        </li>
      </ul>

      <h3 style={{ marginTop: "1.25rem" }}>E. Certifications and Placement Assistance</h3>
      <ul>
        <li>
          Certifications (where offered) may depend on course completion,
          attendance, assessments, and/or exam clearance.
        </li>
        <li>
          Placement assistance (if offered) is a supportive service and not a
          guarantee of job placement. Opportunities depend on partner
          requirements and candidate eligibility.
        </li>
      </ul>

      <h3 style={{ marginTop: "1.25rem" }}>F. Participant Information</h3>
      <p>
        You agree to provide accurate personal information. If information is
        found to be materially false, we may cancel admission/registration.
      </p>

      <h3 style={{ marginTop: "1.25rem" }}>G. Minimum Batch Size</h3>
      <p>
        A batch may be merged with another batch or postponed if there are
        insufficient participants.
      </p>

      <h3 style={{ marginTop: "1.25rem" }}>H. Classroom Rules</h3>
      <ul>
        <li>
          If internet access is provided on premises, it must be used only for
          training purposes. Misuse is solely the participant’s responsibility.
        </li>
        <li>
          Photography and video/audio recording in the classroom may be
          restricted. If prohibited and violated, admission may be cancelled.
        </li>
        <li>
          Live class recordings are not assured and may not be provided.
        </li>
        <li>
          Disruptive conduct or actions that harm the institute’s reputation may
          lead to cancellation of admission.
        </li>
        <li>
          Participants are generally expected to carry their own laptop unless
          otherwise stated.
        </li>
      </ul>

      <h2 style={{ marginTop: "2rem" }}>Contact Information</h2>
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
          {COMPANY.phoneSecondary ? (
            <>
              {" "}
              /{" "}
              <a href={`tel:${COMPANY.phoneSecondary.replace(/\s/g, "")}`}>{COMPANY.phoneSecondary}</a>
            </>
          ) : null}
        </div>
      </address>

      <p style={{ marginTop: "2rem", opacity: 0.75, fontSize: ".95rem" }}>
        This page is provided for general information and does not constitute
        legal advice.
      </p>
    </main>
  );
}
