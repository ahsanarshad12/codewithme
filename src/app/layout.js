import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import LayoutContent from "./LayoutContent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO Metadata
export const metadata = {
  title: "Ahsan Arsahd - Full Stack Developer & Portfolio",
  description: "Welcome to Ahsan Arsahd's professional portfolio. Full Stack Developer specializing in web development, UI/UX design, and modern technologies.",
  keywords: "Ahsan Arsahd, full stack developer, web developer, portfolio, UI/UX design, JavaScript, React, Next.js",
  author: "Ahsan Arsahd",
  openGraph: {
    title: "Ahsan Arsahd - Full Stack Developer",
    description: "Professional portfolio of Ahsan Arsahd. Full Stack Developer showcasing projects and skills.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahsan Arsahd - Full Stack Developer",
    description: "Professional portfolio and projects",
  }
};

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <LayoutContent geistSans={geistSans} geistMono={geistMono}>
        {children}
      </LayoutContent>
    </ThemeProvider>
  );
}
