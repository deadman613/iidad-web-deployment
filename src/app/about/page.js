import AboutSection1 from "@/components/AboutSection/AboutSection1";
import AboutSection2 from "@/components/AboutSection/AboutSection2";
import HomeSection7 from "@/components/HomeSection/HomeSection7";
import Faqs from "@/components/Faqs/Faqs";
export const metadata = {
  
  title: "About IIDAD – Web Development Diploma & MERN Training",
  description: "Know the team and mission behind IIDAD. Our Web Development Diploma and MERN Stack Course with Placement are designed for industry-ready growth",
  keywords: [
    "about IIDAD",
    "IIDAD history",
    "design institute India",
    "IIDAD vision mission",
    "design education philosophy",
    "IIDAD values",
    "design college about",
    "Indian design institute",
    "web development diploma",
    "mern stack course with placement",
    "web development courses with certificates",
    "full stack developer course with placement guarantee",
    "software engineer diploma courses",
    "mern stack training",
    "full stack web developer certification",
    "web developer training",
    "full stack developer course with certification"
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
    canonical: "https://www.iidad.com/about",
  },
};

export default function AboutPage() {
  const items = [
    {
      q: "What makes IIDAD different from other institutes?",
      a: "IIDAD focuses on simple explanations, practical training, and real career outcomes rather than just certificates.",
    },
    {
      q: "How does IIDAD design its web development courses?",
      a: "Courses are designed based on current industry trends, job requirements, and skill demand.",
    },
    {
      q: "Who can join IIDAD web development courses?",
      a: "Students after 12th, college students, graduates, and working professionals can join IIDAD courses.",
    },
    {
      q: "Does IIDAD focus more on theory or practice?",
      a: "IIDAD focuses more on practical learning, projects, and real-world experience.",
    },
    {
      q: "Are IIDAD trainers experienced?",
      a: "Yes, IIDAD trainers have real industry experience and teaching expertise.",
    },
    {
      q: "What teaching approach does IIDAD follow?",
      a: "IIDAD follows a beginner-friendly, step-by-step teaching approach.",
    },
  ];
      
  return (
    <main>
      <AboutSection1 />
      <AboutSection2 />
      <HomeSection7 />
      <Faqs items={items} />
    </main>
  );
}
