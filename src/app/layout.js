import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@/styles/blog.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import StructuredData from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://iidad.in'),
  title: {
    default: "IIDAD - Indian Institute of Design and Development | Premier Design Education",
    template: "%s | IIDAD - Indian Institute of Design and Development"
  },
  description: "Indian Institute of Design and Development (IIDAD) offers world-class design education, fostering creativity and innovation. Explore programs in product design, communication design, interior design, and more. Join India's leading design institute.",
  keywords: [
    "IIDAD",
    "Indian Institute of Design and Development",
    "design college India",
    "design education",
    "product design",
    "communication design",
    "interior design",
    "fashion design",
    "UX UI design",
    "design institute",
    "creative education",
    "design courses India",
    "best design college"
  ],
  authors: [{ name: "IIDAD" }],
  creator: "Indian Institute of Design and Development",
  publisher: "IIDAD",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "IIDAD - Indian Institute of Design and Development",
    title: "IIDAD - Indian Institute of Design and Development | Premier Design Education",
    description: "Join IIDAD, India's leading design institute offering comprehensive programs in product design, communication design, interior design, and more. Shape the future through design.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IIDAD - Indian Institute of Design and Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IIDAD - Indian Institute of Design and Development",
    description: "India's premier design institute offering world-class education in product design, communication design, interior design, and more.",
    images: ["/twitter-image.jpg"],
    creator: "@iidad",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <StructuredData type="organization" />
        <StructuredData type="website" />
        <link rel="canonical" href={process.env.NEXT_PUBLIC_BASE_URL || "https://iidad.in"} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
