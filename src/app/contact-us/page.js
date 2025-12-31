import ContactSection from "@/components/ContactSection/ContactSection";
// import "@/styles/blog.css";

export const metadata = {
  title: "Contact IIDAD for Quick Support & Guidance",
  description: "Contact IIDAD for quick help and course guidance. Visit us in GK-II, New delhi or call +91-8810606010.",
  keywords: [
    "contact IIDAD",
    "IIDAD address",
    "IIDAD phone number",
    "IIDAD email",
    "design college contact",
    "IIDAD admissions contact",
    "visit IIDAD campus",
    "IIDAD location",
    "get in touch IIDAD"
  ],
  openGraph: {
    title: "Contact IIDAD - Get in Touch | Indian Institute of Design and Development",
    description: "Contact IIDAD for admissions, inquiries, or campus visits. Our team is ready to help you begin your design education journey at India's premier design institute.",
    url: "/contact-us",
    type: "website",
    images: [
      {
        url: "/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact IIDAD - Indian Institute of Design and Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact IIDAD - Get in Touch",
    description: "Contact IIDAD for admissions, inquiries, or campus visits. Start your design education journey with us.",
    images: ["/twitter-contact.jpg"],
  },
  alternates: {
    canonical: "/contact-us",
  },
  alternates: {
    canonical: "https://www.iidad.com/contact-us",
  },
};

export default function ContactPage() {
  return (
    <main >
      <ContactSection />
    </main>
  );
}
