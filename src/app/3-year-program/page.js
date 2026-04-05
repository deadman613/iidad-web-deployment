export const metadata = {
  title: "3-Year Skilling with Schooling Program | IIDAD",
  description:
    "IIDAD's 3-Year Skilling with Schooling course: Full-Stack Development in Year 1, Application Development in Year 2, and Game Development in Year 3. Monthly modules, industry-ready curriculum.",
  alternates: {
    canonical: "https://www.iidad.com/3-year-program",
  },
  openGraph: {
    title: "3-Year Skilling with Schooling | IIDAD",
    description:
      "A comprehensive 3-year program covering Full-Stack, App Development, and Game Development — one module per month.",
    url: "https://www.iidad.com/3-year-program",
  },
};

import ThreeYearHero from "@/components/ThreeYearProgram/ThreeYearHero";
import ThreeYearOverview from "@/components/ThreeYearProgram/ThreeYearOverview";
import ThreeYearCurriculum from "@/components/ThreeYearProgram/ThreeYearCurriculum";
import ThreeYearWhy from "@/components/ThreeYearProgram/ThreeYearWhy";
import ThreeYearCTA from "@/components/ThreeYearProgram/ThreeYearCTA";
import FloatingContactPanel from "@/components/FloatingContactPanel";
import DemoBookingModal from "@/components/DemoBookingModal";

export default function ThreeYearProgramPage() {
  return (
    <main>
      <DemoBookingModal />
      <ThreeYearHero />
      <ThreeYearOverview />
      <ThreeYearCurriculum />
      <ThreeYearWhy />
      <ThreeYearCTA />
      <FloatingContactPanel />
    </main>
  );
}
