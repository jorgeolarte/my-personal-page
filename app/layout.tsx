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
