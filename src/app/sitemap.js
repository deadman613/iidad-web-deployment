import prisma from "@/lib/prisma";
import courses from "@/data/courses.json";

export const revalidate = 3600;

export default async function sitemap() {
  const baseUrlRaw =
    process.env.NEXT_PUBLIC_BASE_URL ||
    process.env.NEXT_PUBLIC_APP_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "") ||
    "https://www.iidad.com";
  const baseUrl = baseUrlRaw.endsWith("/") ? baseUrlRaw.slice(0, -1) : baseUrlRaw;

  let blogs = [];
  try {
    blogs = await prisma.blog.findMany({
      select: { slug: true, updatedAt: true, createdAt: true },
      orderBy: { updatedAt: "desc" },
      take: 1000,
    });
  } catch {
    blogs = [];
  }

  const now = new Date();
  const staticPages = ["", "/about", "/courses", "/contact-us", "/blog", "/thank-you"];

  const staticEntries = staticPages.map((path) => ({
    url: `${baseUrl}${path || ""}`,
    lastModified: now,
  }));

  const courseEntries = Array.isArray(courses)
    ? courses
        .filter((course) => course?.slug)
        .map((course) => ({
          url: `${baseUrl}/courses/${course.slug}`,
          lastModified: now,
        }))
    : [];

  const blogEntries = Array.isArray(blogs)
    ? blogs
        .filter((blog) => blog?.slug)
        .map((blog) => ({
          url: `${baseUrl}/blog/${blog.slug}`,
          lastModified: blog.updatedAt ?? blog.createdAt ?? now,
        }))
    : [];

  return [...staticEntries, ...courseEntries, ...blogEntries];
}
