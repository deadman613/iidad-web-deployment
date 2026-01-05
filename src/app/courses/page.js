// import "@/styles/blog.css";

import CourseSection1 from "@/components/courses/CourseSection1";
import CourseSection2 from "@/components/courses/CourseSection2";
import DemoBookingModal from "@/components/DemoBookingModal";
import HomeSection2 from "@/components/HomeSection/HomeSection2";
import HomeSection3 from "@/components/HomeSection/HomeSection3";
import HomeSection4 from "@/components/HomeSection/HomeSection4";
import HomeSection6 from "@/components/HomeSection/HomeSection6";
import HomeSection7 from "@/components/HomeSection/HomeSection7";
import Faqs from "@/components/Faqs/Faqs";
export const metadata = {
  title: "Full Stack Developer Course With Hands-On Mastery",
  description: "Become a confident developer with our full stack developer course. Learn front-end, back-end, and tools used by real professionals in today's tech world.",
  keywords: [
    "development course",
    "best development course",
    "best web development courses",
    "mern stack developer",
    "salesforce developer course",
    "master in software engineering",
    "full stack developer course online",
    "python full stack developer course",
    "mern stack course",
    "best mern stack course",
    "front end developer course online",
    "full stack developer course",
    "web development courses"
  ],
  alternates: {
    canonical: "https://www.iidad.com/courses",
  },
};

export default function AboutPage() {
    const items = [
    {
      q: "Which web development course at IIDAD is best for beginners?",
      a: "The Full Stack Web Development Course at IIDAD is best for beginners because it covers frontend and backend development in a structured way. Students learn everything from website design to server-side logic.",
    },
    {
      q: "What is the duration of web development courses at IIDAD?",
      a: "The duration of web development courses at IIDAD ranges from 3 months to 6 months, depending on the course level and learning pace.",
    },
    {
      q: "What are the fees for web development courses at IIDAD?",
      a: "Web development course fees at IIDAD are affordable and student-friendly. The exact fee depends on the course type and duration. For detailed fee structure, students can contact the institute directly.",
    },
    {
      q: "Does IIDAD offer online web development courses with certificate?",
      a: "Yes, IIDAD offers online web development courses with certificates. These courses include live classes, doubt-clearing sessions, and project work.",
    },
    {
      q: "What skills will I learn in the IIDAD full stack development course?",
      a: "Students learn HTML, CSS, JavaScript, frontend frameworks, backend basics, databases, APIs, project deployment, and version control. These skills are essential for full stack developer roles.",
    },
    {
      q: "What is the difference between web development, full stack, and MERN stack?",
      a: "Web development focuses mainly on building websites. Full stack development includes both frontend and backend work. MERN stack development uses MongoDB, Express, React, and Node.js for modern web applications.",
    },
    {
      q: "Is the MERN stack course at IIDAD good for jobs?",
      a: "Yes, the MERN stack course at IIDAD is job-oriented and designed according to current industry requirements. It is suitable for students aiming for modern web developer roles.",
    },
    {
      q: "Does IIDAD provide placement support?",
      a: "Yes, IIDAD provides placement assistance, career guidance, mock interviews, and resume support to help students prepare for jobs.",
    },
    {
      q: "Can I learn web development in 3–6 months?",
      a: "Yes, with proper guidance, structured learning, and daily practice, students can learn web development within 3–6 months.",
    },
    {
      q: "Are live projects included in IIDAD courses?",
      a: "Yes, all IIDAD web development courses include live and real-world projects to help students gain hands-on experience.",
    },
  ];
  return (
    <main >
      {/* Modal listens for clicks on any element with class `demoButtonForm` */}
      <DemoBookingModal />
      <CourseSection1 />
      <CourseSection2 />
              <HomeSection2 />
              <HomeSection3 />
              <HomeSection7 />
              <Faqs items={items} />
    </main>
  );
}
