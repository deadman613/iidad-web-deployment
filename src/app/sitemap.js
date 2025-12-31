import prisma from "@/lib/prisma";
import courses from "@/data/courses.json";
import { NextResponse } from "next/server";

export const revalidate = 3600;

export async function GET() {
  const baseUrl = "https://www.iidad.com";

  // Fetch blog posts for dynamic sitemap
  let blogs = [];
  try {
    blogs = await prisma.blog.findMany({
      select: { slug: true, updatedAt: true, createdAt: true },
      orderBy: { updatedAt: "desc" },
      take: 1000,
    });
  } catch (error) {
    blogs = [];
  }

  // Dynamic courses
  const courseUrls = Array.isArray(courses)
    ? courses.map(course => `/courses/${course.slug}`)
    : [];

  // Static pages
  const staticPages = [
    "",
    "about",
    "courses",
    "contact-us",
    "blog",
    "thank-you"
  ];

  const urls = [
    ...staticPages.map(path => `${baseUrl}/${path}`.replace(/\/$/, "")),
    ...courseUrls.map(path => `${baseUrl}${path}`),
    ...blogs.map(blog => `${baseUrl}/blog/${blog.slug}`)
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map(url => `  <url><loc>${url}</loc></url>`).join("\n") +
    `\n</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
}
