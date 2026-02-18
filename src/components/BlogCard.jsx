import Link from "next/link";
import Image from "next/image";

const formatDate = (value) =>
  new Intl.DateTimeFormat("en", { dateStyle: "medium" }).format(new Date(value));

const decodeHtmlEntities = (value) => {
  if (!value) return "";
  const input = String(value);

  const named = {
    nbsp: " ",
    amp: "&",
    lt: "<",
    gt: ">",
    quot: '"',
    apos: "'",
  };

  return input.replace(/&(#\d+|#x[0-9a-fA-F]+|[a-zA-Z]+);/g, (match, entity) => {
    if (!entity) return match;
    if (entity[0] === "#") {
      const isHex = entity[1]?.toLowerCase() === "x";
      const num = Number.parseInt(entity.slice(isHex ? 2 : 1), isHex ? 16 : 10);
      if (!Number.isFinite(num)) return match;
      try {
        return String.fromCodePoint(num);
      } catch {
        return match;
      }
    }

    const key = entity.toLowerCase();
    return Object.prototype.hasOwnProperty.call(named, key) ? named[key] : match;
  });
};

const toExcerpt = (html) => {
  if (!html) return "";
  const withoutTags = String(html).replace(/<[^>]+>/g, " ");
  const decoded = decodeHtmlEntities(withoutTags).replace(/\u00A0/g, " ");
  const text = decoded.replace(/\s+/g, " ").trim();
  if (!text) return "";
  return text.length > 160 ? `${text.slice(0, 160)}...` : text;
};

const BlogCard = ({ blog }) => {
  if (!blog) return null;
  const rawCover = blog.coverImg?.trim();
  const isExternalCover = Boolean(rawCover && /^(https?:)?\/\//i.test(rawCover));
  const hasCover = Boolean(rawCover);
  const cover = hasCover ? rawCover : "/placeholder.svg";

  return (
    <article className="blog-card">
      <Link
        href={`/blog/${blog.slug}`}
        className={`blog-card__image${hasCover ? "" : " blog-card__image--placeholder"}`}
        aria-label={`Read ${blog.title}`}
      >
        <Image
          src={cover}
          alt={blog.title}
          fill
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 320px, 360px"
          priority={false}
          style={{ objectFit: "cover" }}
          unoptimized={isExternalCover}
        />
        {!hasCover ? <span>Upload a custom cover to replace the default graphic.</span> : null}
      </Link>
      <div className="blog-card__body">
        <div className="blog-card__meta">
          <span>{formatDate(blog.createdAt)}</span>
          <span>&bull;</span>
          <span>{blog.tags?.slice(0, 2).join(" • ") || "General"}</span>
        </div>
        <h3>
          <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
        </h3>
        <p>{toExcerpt(blog.content)}</p>
        <Link href={`/blog/${blog.slug}`} className="blog-card__cta">
          Continue reading →
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
