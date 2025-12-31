export const metadata = {
  alternates: {
    canonical: "https://www.iidad.com/",
  },
};
import HomeSection1 from "@/components/HomeSection/HomeSection1";
import HomeSection2 from "@/components/HomeSection/HomeSection2";
import HomeSection3 from "@/components/HomeSection/HomeSection3";
import HomeSection4 from "@/components/HomeSection/HomeSection4";
import Homesection5 from "@/components/HomeSection/HomeSection5";
import HomeSection6 from "@/components/HomeSection/HomeSection6";
import HomeSection7 from "@/components/HomeSection/HomeSection7";
import PlacementSection from "@/components/HomeSection/PlacementSection";
import CampusSection from "@/components/HomeSection/CampusSection";
import HomeBlogSection from "@/components/HomeSection/HomeBlogSection";
import CourseSection1 from '@/components/courses/CourseSection1';
import AudioMarquee from '@/components/AudioMarquee';
import Testimonials from '@/components/HomeSection/Testimonials';
import DemoBookingModal from "@/components/DemoBookingModal";
import FloatingContactPanel from "@/components/FloatingContactPanel";
export default function Home() {
  return (
    <main>
      <DemoBookingModal />
      <HomeSection1 />
      <AudioMarquee />
      <HomeSection2 />
      <HomeSection3 />
      <Testimonials/>
      <PlacementSection />
      <CampusSection />
      <HomeBlogSection />
      <HomeSection4 />
      <Homesection5 />
      <HomeSection6 />
      <HomeSection7 />
      <FloatingContactPanel />
    </main>
  );
}
