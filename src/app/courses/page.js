// import "@/styles/blog.css";

import CourseSection1 from "@/components/courses/CourseSection1";
import CourseSection2 from "@/components/courses/CourseSection2";
import DemoBookingModal from "@/components/DemoBookingModal";
import HomeSection2 from "@/components/HomeSection/HomeSection2";
import HomeSection3 from "@/components/HomeSection/HomeSection3";
import HomeSection4 from "@/components/HomeSection/HomeSection4";
import Homesection5 from "@/components/HomeSection/HomeSection5";
import HomeSection6 from "@/components/HomeSection/HomeSection6";
import HomeSection7 from "@/components/HomeSection/HomeSection7";
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
  return (
    <main >
      {/* Modal listens for clicks on any element with class `demoButtonForm` */}
      <DemoBookingModal />
      <CourseSection1 />
      <CourseSection2 />
              <HomeSection2 />
              <HomeSection3 />
              <HomeSection7 />
              <HomeSection6 />
                      
    </main>
  );
}
