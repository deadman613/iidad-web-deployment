import { slugify } from "./slugify";

// Server-only: uses Prisma
export const generateUniqueSlug = async (input, excludeId) => {
  const base = slugify(input);
  let candidate = base;
  let suffix = 1;

  // Import Prisma client lazily to avoid initializing it when only `slugify` is used.
  const { default: prisma } = await import("@/lib/prisma");

  while (true) {
    const match = await prisma.blog.findFirst({
      where: {
        slug: candidate,
        ...(excludeId ? { NOT: { id: excludeId } } : {}),
      },
      select: { id: true },
    });

    if (!match) {
      return candidate;
    }

    candidate = `${base}-${suffix}`;
    suffix += 1;
  }
};