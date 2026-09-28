import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-grotesk",
  display: "swap",
});

const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

const title = "Willy Damara — Information Technology Student";
const description =
  "Personal portfolio of Willy Damara, an Information Technology student focused on web development and data.";

export const metadata: Metadata = {
  metadataBase: new URL("https://willydamara.dev"),
  title,
  description,
  keywords: [
    "Willy Damara",
    "Information Technology",
    "Teknik Informatika",
    "Web Developer",
    "Portfolio",
    "Universitas Bina Insani",
  ],
  authors: [{ name: "Willy Damara" }],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "id_ID",
    siteName: "Willy Damara",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${grotesk.variable} ${mono.variable}`}>
      <body className="bg-paper font-display text-ink antialiased selection:bg-blue-soft selection:text-ink">
        {children}
      </body>
    </html>
  );
}
