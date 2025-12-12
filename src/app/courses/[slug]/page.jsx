import Link from 'next/link';
import { notFound } from 'next/navigation';
import courses from '@/data/courses.json';
import CourseBanner from '@/components/courses/CourseBanner';
import HomeSection2 from '@/components/HomeSection/HomeSection2';
import HomeSection4 from "@/components/HomeSection/HomeSection4";
import Homesection5 from "@/components/HomeSection/HomeSection5";
import HomeSection6 from "@/components/HomeSection/HomeSection6";
import HomeSection7 from "@/components/HomeSection/HomeSection7";
export async function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) return {};
  return {
    title: `${course.title} — IIDAD Courses`,
    description: course.description || `Learn more about ${course.title}`,
    openGraph: {
      title: course.title,
      description: course.description,
      images: course.img ? [course.img] : undefined,
    },
  };
}

const computePrices = (duration) => {
  const monthly = 10000;
  const months = Number(duration) || 0;
  const base = months * monthly;
  let discount = 0;
  if (months === 12) discount = 10000;
  else if (months === 6 || months === 3 || months === 4) discount = 5000;
  const price = Math.max(0, base - discount);
  return { price, oldPrice: base };
};

const formatPrice = (n) => {
  if (n == null) return '';
  return `₹${String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
};

export default async function CoursePage({ params }) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) return notFound();

  const { price, oldPrice } = computePrices(course.duration);
  const recommendedCourses = courses.filter((c) => c.slug !== slug).slice(0, 4);

  return (
    <main>
      <CourseBanner course={course} recommendedCourses={recommendedCourses} />
      <HomeSection2/>
      <HomeSection4 />
      <Homesection5 />
      <HomeSection6 />
      <HomeSection7 />
    </main>
  );
}
