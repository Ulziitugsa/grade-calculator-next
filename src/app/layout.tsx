import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Script from "next/script";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Global Grade Calculator | Final Grade, GPA & WAM Tool",
  description:
    "Free online grade calculator supporting Australia HD/D/C/P1/P2, US letter grades, UK honours, A-Level, GCSE and IB.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5C3J0D5H9C"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5C3J0D5H9C');
          `}
        </Script>

        {children}

        <footer className="text-center small text-muted py-4">
          <div>
            <a href="/about" className="me-3">About</a>
            <a href="/privacy-policy" className="me-3">Privacy Policy</a>
            <a href="/terms">Terms</a>
          </div>
          <div className="mt-2">
            © {new Date().getFullYear()} Global Grade Calculator
          </div>
        </footer>
      </body>
    </html>
  );
}
