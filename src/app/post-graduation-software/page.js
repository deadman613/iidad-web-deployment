export const metadata = {
  title: "Post Graduation Program in Software Development (2 Years) | IIDAD",
  description:
    "IIDAD's 2-Year Post Graduation Program in Software Development — M.Sc. from DU SOL or Amity University with advanced software engineering, AI integration, and premier placement up to ₹30 LPA.",
  alternates: {
    canonical: "https://www.iidad.com/post-graduation-software",
  },
  openGraph: {
    title: "Post Graduation in Software Development | IIDAD",
    description:
      "A rigorous 2-year M.Sc. in Software Development — advanced system design, AI/ML integration, university degree, and premier placement pipeline.",
    url: "https://www.iidad.com/post-graduation-software",
  },
};

import SoftwareDegreeHero from "@/components/SoftwareDegreeProgram/SoftwareDegreeHero";
import SoftwareDegreeWhy from "@/components/SoftwareDegreeProgram/SoftwareDegreeWhy";
import CampusSection from "@/components/HomeSection/CampusSection";
import SoftwareDegreeOfferings from "@/components/SoftwareDegreeProgram/SoftwareDegreeOfferings";
import SoftwareDegreeFun from "@/components/SoftwareDegreeProgram/SoftwareDegreeFun";
import SoftwareDegreeTestimonials from "@/components/SoftwareDegreeProgram/SoftwareDegreeTestimonials";
import SoftwareDegreeCTA from "@/components/SoftwareDegreeProgram/SoftwareDegreeCTA";
import FloatingContactPanel from "@/components/FloatingContactPanel";
import DemoBookingModal from "@/components/DemoBookingModal";

export default function PostGraduationSoftwarePage() {
  return (
    <main>
      <DemoBookingModal />
      <SoftwareDegreeHero program="pg" />
      <SoftwareDegreeWhy program="pg" />
      <CampusSection />
      <SoftwareDegreeOfferings program="pg" />
      <SoftwareDegreeFun program="pg" />
      <SoftwareDegreeTestimonials program="pg" />
      <SoftwareDegreeCTA program="pg" />
      <FloatingContactPanel />
    </main>
  );
}
