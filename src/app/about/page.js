import AboutSection1 from "@/components/AboutSection/AboutSection1";
import AboutSection2 from "@/components/AboutSection/AboutSection2";
import HomeSection7 from "@/components/HomeSection/HomeSection7";
import "@/styles/blog.css";

export const metadata = {
  title: "About IIDAD - History, Vision & Mission",
  description: "Learn about the Indian Institute of Design and Development (IIDAD) - our history, vision, mission, values, and commitment to excellence in design education. Discover what makes IIDAD India's premier design institute.",
  keywords: [
    "about IIDAD",
    "IIDAD history",
    "design institute India",
    "IIDAD vision mission",
    "design education philosophy",
    "IIDAD values",
    "design college about",
    "Indian design institute"
  ],
  openGraph: {
    title: "About IIDAD - History, Vision & Mission | Indian Institute of Design and Development",
    description: "Discover IIDAD's journey, values, and commitment to nurturing design excellence. Learn about our world-class faculty, state-of-the-art facilities, and innovative curriculum that shapes future design leaders.",
    url: "/about",
    type: "website",
    images: [
      {
        url: "/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "About IIDAD - Indian Institute of Design and Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About IIDAD - History, Vision & Mission",
    description: "Discover IIDAD's journey and commitment to excellence in design education. Learn about our world-class faculty and innovative approach.",
    images: ["/twitter-about.jpg"],
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main >
      <AboutSection1 />
      <AboutSection2 />
      <HomeSection7 />
    </main>
  );
}
