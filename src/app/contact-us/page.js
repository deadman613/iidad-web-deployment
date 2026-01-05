import ContactSection from "@/components/ContactSection/ContactSection";
import Faqs from "@/components/Faqs/Faqs";
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
    canonical: "https://www.iidad.com/contact-us",
  },
};

export default function ContactPage() {
  const items = [
    {
      q: "How can I contact IIDAD?",
      a: "You can contact IIDAD through phone, email, or by filling the contact form on the official website.",
    },
    {
      q: "Where is IIDAD located?",
      a: "IIDAD is located in Delhi, making it accessible for students nearby.",
    },
    {
      q: "Can I visit IIDAD for counselling?",
      a: "Yes, students can visit IIDAD for free counselling and course guidance.",
    },
    {
      q: "Does IIDAD provide online counselling?",
      a: "Yes, IIDAD offers online counselling for students who cannot visit the institute physically.",
    },
    {
      q: "How can I enroll in an IIDAD course?",
      a: "You can enroll by contacting IIDAD directly or registering through the official website.",
    },
    {
      q: "Is career guidance available at IIDAD?",
      a: "Yes, career guidance is provided to help students choose the right course and career path.",
    },
  ];

  return (
    <main>
      <ContactSection />
      <Faqs items={items} />
    </main>
  );
}
