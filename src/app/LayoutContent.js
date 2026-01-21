'use client';
import { useTheme } from "./context/ThemeContext";

export default function LayoutContent({ children, geistSans, geistMono }) {
  const { theme } = useTheme();

  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#10b981" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <link rel="canonical" href="https://buildwithahsan-liard.vercel.app/" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Ahsan Arsahd",
            "url": "https://buildwithahsan-liard.vercel.app/",
            "jobTitle": "Full Stack Developer",
            "description": "Professional Full Stack Developer specializing in web development and modern technologies",
            "sameAs": [
              "https://linkedin.com/in/ahsanarsahd",
              "https://github.com/ahsanarsahd",
              "https://twitter.com/ahsanarsahd"
            ]
          })}
        </script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          fontFamily: theme.fontFamily,
          backgroundColor: '#0a0a0a',
        }}
      >
        <style>{`
          :root {
            --primary-color: ${theme.primaryColor};
            --text-color: ${theme.textColor};
            --secondary-text-color: ${theme.secondaryTextColor};
            --button-bg-color: ${theme.buttonBgColor};
            --accent-color: ${theme.accentColor};
          }
          
          body {
            color: ${theme.textColor};
            font-family: ${theme.fontFamily};
          }
          
          h1, h2, h3, h4, h5, h6 {
            color: ${theme.textColor};
          }
          
          p, span, a {
            color: ${theme.textColor};
          }
          
          .text-neutral-400,
          .text-neutral-500,
          .text-neutral-600 {
            color: ${theme.secondaryTextColor} !important;
          }
          
          button {
            background-color: ${theme.buttonBgColor} !important;
          }
          
          .hover\\:text-emerald-400:hover,
          .hover\\:border-emerald-400:hover {
            color: ${theme.primaryColor} !important;
            border-color: ${theme.primaryColor} !important;
          }
          
          .text-emerald-400 {
            color: ${theme.primaryColor} !important;
          }
          
          .border-emerald-400 {
            border-color: ${theme.primaryColor} !important;
          }
        `}</style>
        {children}
      </body>
    </html>
  );
}
