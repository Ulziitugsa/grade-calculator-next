import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
