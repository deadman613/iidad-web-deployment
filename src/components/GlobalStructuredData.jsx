"use client";

import { usePathname } from "next/navigation";
import StructuredData from "@/components/StructuredData";

export default function GlobalStructuredData() {
  const pathname = usePathname() || "";

  // Home page has its own custom JSON-LD
  if (pathname === "/") {
    return null;
  }

  if (pathname.startsWith("/blog")) {
    return null;
  }

  return (
    <>
      <StructuredData type="organization" />
      <StructuredData type="website" />
    </>
  );
}
