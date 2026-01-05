"use client";

import { usePathname } from "next/navigation";
import StructuredData from "@/components/StructuredData";

export default function GlobalStructuredData() {
  const pathname = usePathname() || "";

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
