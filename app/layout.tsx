import React from "react";
import { Metadata } from "next";
import "./globals.css";
import { Background } from "@Components/background";
import { Container } from "@Components/container";
import { Header } from "@Components/header";
import { Footer } from "@Components/footer";
import { Montserrat } from "next/font/google";

export const metadata: Metadata = {
  title: "Jorge Olarte | Web Developer",
  description: "Following my heart ❤️ since I was born",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jorgeolarte.com",
    title: "Jorge Olarte | Web Developer",
    description: "Following my heart ❤️ since I was born",
    images: [
      {
        url: "https://jorgeolarte.com/jorge-olarte.jpg",
        width: 800,
        height: 800,
        alt: "Jorge Olarte",
      },
    ],
    siteName: "Jorge Olarte",
  },
  keywords: [
    "jorge olarte",
    "web developer",
    "software developer",
    "software engineer",
    "react",
    "nextjs",
    "javascript",
    "typescript",
    "tailwindcss",
    "css",
    "html",
    "developer",
    "programmer",
    "engineer",
    "react developer",
    "nextjs developer",
    "javascript developer",
    "typescript developer",
    "tailwindcss developer",
  ],
};

// eslint-disable-next-line new-cap
const montserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

/**
 * Root layout
 * @param {React.ReactNode} children The sum of the two numbers.
 * @return {JSX.Element} The sum of the two numbers.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        <div className="text-white">
          <Background />
          <Container>
            <>
              <Header />
              {children}
              <Footer />
            </>
          </Container>
        </div>
      </body>
    </html>
  );
}
