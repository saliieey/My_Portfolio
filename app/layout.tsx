import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#090a0f",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Mohamed Salih CK — Full-Stack Software Developer Portfolio",
  description:
    "Full-stack software developer specializing in building scalable web applications with React, Next.js, Node.js, Express, MongoDB, and PostgreSQL.",
  keywords: [
    "Mohamed Salih CK",
    "Full-Stack Developer",
    "Software Engineer Portfolio",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "MERN Stack Developer",
    "Kerala Web Developer",
  ],
  authors: [{ name: "Mohamed Salih CK" }],
  creator: "Mohamed Salih CK",
  openGraph: {
    title: "Mohamed Salih CK — Full-Stack Software Developer",
    description:
      "Full-stack software developer portfolio featuring enterprise MERN SaaS apps, React streaming platforms, and responsive Next.js web systems.",
    url: "https://mohamedsalih.dev",
    siteName: "Mohamed Salih CK Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Salih CK — Full-Stack Software Developer",
    description:
      "Full-stack software developer portfolio featuring React, Next.js, Node.js, and database engineering.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mohamed Salih CK",
    jobTitle: "Full-Stack Software Developer",
    url: "https://mohamedsalih.dev",
    sameAs: [
      "https://github.com/saliieey",
      "https://linkedin.com/in/mohamed-salih-ck",
    ],
    knowsAbout: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "Tailwind CSS",
      "RESTful APIs",
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-[#090a0f] text-white">{children}</body>
    </html>
  );
}
