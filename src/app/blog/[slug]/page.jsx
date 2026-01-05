
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getBaseUrl } from "@/lib/base-url";

export const dynamic = "force-dynamic";

// Fetch a single blog by slug from the API
const fetchBlog = async (slug) => {
  const baseUrl = await getBaseUrl();
  const res = await fetch(`${baseUrl}/api/blog/${slug}`, { cache: "no-store" });
  if (!res.ok) return null;
  return res.json();
};

// Fetch related blogs (stub: returns empty for now)
const fetchRelated = async (slug) => {
  // You can implement logic to fetch related posts if needed
  return { data: [] };
};

export async function generateMetadata(props) {
  const params = await props?.params;
  const slug = params?.slug;
  const blog = slug ? await fetchBlog(slug) : null;

  if (!blog) {
    return {
      title: "Post Not Found",
    };
  }

  const baseUrl = await getBaseUrl();
  
  // Use metaTitle if available, otherwise use title
  const metaTitle = blog.metaTitle?.trim() || blog.title;
  
  // Use metaDescription if available, otherwise extract from content
  const metaDescription = blog.metaDescription?.trim() || 
    blog.content.replace(/<[^>]+>/g, " ").trim().slice(0, 160);
  
  // Use ogImage if available, otherwise use coverImg
  const imageUrl = blog.ogImage?.trim() || blog.coverImg?.trim();
  const isExternalImage = Boolean(imageUrl && /^(https?:)?\/\//i.test(imageUrl));
  const ogImage = imageUrl
    ? isExternalImage
      ? imageUrl
      : new URL(imageUrl, baseUrl).toString()
    : undefined;
  
  const canonical = new URL(`/blog/${blog.slug}`, baseUrl).toString();
  
  // Generate image alt text
  const imageAlt = `Cover image for ${blog.title}`;

  const resolvedKeywords = Array.isArray(blog.keywords) && blog.keywords.length ? blog.keywords : blog.tags || [];

  return {
    title: metaTitle,
    description: metaDescription,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      images: ogImage ? [
        {
          url: ogImage,
          alt: imageAlt,
        }
      ] : undefined,
      type: "article",
      url: canonical,
      siteName: "IIDAD - Indian Institute of Design and Development",
      publishedTime: blog.createdAt,
      modifiedTime: blog.updatedAt,
      authors: blog.author ? [blog.author] : ["IIDAD"],
      tags: blog.tags || [],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: ogImage ? [
        {
          url: ogImage,
          alt: imageAlt,
        }
      ] : undefined,
      creator: "@iidad",
    },
    keywords: resolvedKeywords,
    authors: blog.author ? [{ name: blog.author }] : [{ name: "IIDAD" }],
    publisher: "Indian Institute of Design and Development",
    alternates: { canonical },
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  };
}

export default async function BlogDetails(props) {
  const params = await props?.params;
  const slug = params?.slug;
  const blog = slug ? await fetchBlog(slug) : null;

  if (!blog) {
    notFound();
  }

  const related = await fetchRelated(slug);
  const cover = blog.coverImg?.trim();
  const isExternalCover = Boolean(cover && /^(https?:)?\/\//i.test(cover));
  const hasCover = Boolean(cover);
  const imageSrc = hasCover ? cover : "/placeholder.svg";
  const isPlaceholder = !hasCover;
  const baseUrl = await getBaseUrl();
  const schemaJson = blog.schema && typeof blog.schema === "object" ? blog.schema : null;

  return (
    <main id="main-content" className="blog-detail" role="main">
      {schemaJson ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
        />
      ) : null}
      <article aria-labelledby="blog-title">
        <header>
          <p className="eyebrow">{new Date(blog.createdAt).toLocaleDateString()}</p>
          <h1 id="blog-title">{blog.title}</h1>
          {blog.tags?.length ? <p className="tags">{blog.tags.join(" / ")}</p> : null}
        </header>

        <div className={`cover${isPlaceholder ? " cover--placeholder" : ""}`}>
          <Image
            src={imageSrc}
            alt={blog.title}
            fill
            sizes="(max-width: 900px) 100vw, 840px"
            priority
            style={{ objectFit: "cover" }}
            unoptimized={isExternalCover}
          />
          {isPlaceholder ? <span className="cover__hint">Upload a cover image from the admin panel to replace this default artwork.</span> : null}
        </div>

        <div className="content" dangerouslySetInnerHTML={{ __html: blog.content }} />

        {related?.data?.length ? (
          <aside className="related">
            <h3>Related Posts</h3>
            <ul>
              {related.data.map((item) => (
                <li key={item.id}>
                  <Link href={`/blog/${item.slug}`}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </aside>
        ) : null}
      </article>
    </main>
  );
}
