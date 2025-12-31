import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@/styles/blog.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import StructuredData from "@/components/StructuredData";
import HomeLoaderGate from '@/components/HomeLoaderGate'

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
    default: "Best Institute for Web Development | Create Sites with Confidence"
  },
  canonical:"https://www.iidad.com/",
  description: "If you want a career in tech, learn from the best institute for web development. Our website development course turns beginners into confident creators.",
  keywords: [
    "IIDAD",
    "Indian Institute of Design and Development",
    "website development course",
  "web development institute near me",
  "complete web development course",
  "mern stack course with placement",
  "best institute for web development",
  "advanced web development course",
  "web development courses",
  "mern course",
  "software development courses",
  "full stack development course",
  "best web development courses",
  "online web development courses",
  "front end development course",
  "web development classes",
  "mern stack course",
  "web development courses near me",
  "web design and development course",
  "web development full course",
  "stack development course",
  "full stack development course near me"
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
    title: "Best Institute for Web Development | Create Sites with Confidence",
    description: "If you want a career in tech, learn from the best institute for web development. Our website development course turns beginners into confident creators.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "IIDAD - Indian Institute of Design and Development",
      },
    ],
  },
  twitter: {
    card: "/thumbnail.png",
    title: "Best Institute for Web Development | Create Sites with Confidence",
    description: "If you want a career in tech, learn from the best institute for web development. Our swebsite development course turns beginners into confident creators.",
    images: ["/og-image.png"],
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
    google: "Zero10-en+o1",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics gtag.js */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-EG0KPE5YEP"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EG0KPE5YEP');
          `,
        }} />
        <StructuredData type="organization" />
        <StructuredData type="website" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LayoutWrapper>
          <HomeLoaderGate>
            {children}
          </HomeLoaderGate>
        </LayoutWrapper>
      </body>
    </html>
  );
}
