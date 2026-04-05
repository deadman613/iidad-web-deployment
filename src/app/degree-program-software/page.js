export const metadata = {
  title: "Degree Program in Software Development (3 Years) | IIDAD",
  description:
    "IIDAD's 3-Year Degree Program in Software Development — B.Sc. from DU SOL or Amity University combined with live industry training. 100% placement, real projects, and unforgettable college life.",
  alternates: {
    canonical: "https://www.iidad.com/degree-program-software",
  },
  openGraph: {
    title: "Degree Program in Software Development | IIDAD",
    description:
      "A full 3-year B.Sc. in Software Development — university degree + IIDAD industry training, real projects, and 100% placement support.",
    url: "https://www.iidad.com/degree-program-software",
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

export default function DegreeProgramSoftwarePage() {
  return (
    <main>
      <DemoBookingModal />
      <SoftwareDegreeHero program="degree" />
      <SoftwareDegreeWhy program="degree" />
      <CampusSection />
      <SoftwareDegreeOfferings program="degree" />
      <SoftwareDegreeFun program="degree" />
      <SoftwareDegreeTestimonials program="degree" />
      <SoftwareDegreeCTA program="degree" />
      <FloatingContactPanel />
    </main>
  );
}
