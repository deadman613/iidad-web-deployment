import prisma from "@/lib/prisma";
import { getBaseUrl } from "@/lib/base-url";

export const revalidate = 3600;

export default async function sitemap() {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    process.env.NEXT_PUBLIC_APP_URL ||
    (await getBaseUrl()) ||
    "https://iidad.in";

  // Fetch blog posts for dynamic sitemap
  let blogs = [];
  try {
    blogs = await prisma.blog.findMany({
      select: { slug: true, updatedAt: true, createdAt: true },
      orderBy: { updatedAt: "desc" },
      take: 1000,
    });
  } catch (error) {
    console.error("Error fetching blogs for sitemap via prisma:", error);
  }

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];

  // Dynamic blog pages
  const blogPages = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: new Date(blog.updatedAt || blog.createdAt),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages];
}
