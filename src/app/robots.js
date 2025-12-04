import { getBaseUrl } from "@/lib/base-url";

export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://iidad.in";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
