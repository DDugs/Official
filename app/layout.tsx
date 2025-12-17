import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fl4gz0nF1r3",
  description: "It all ignited in June 2025—pure self-motivation, no shortcuts. In just months, Flags on Fire has stormed into the Top 20 teams in India, burning through 50+ CTFs and counting. Our mission is clear: represent India on the global cybersecurity charts, dominate the battlefield, and leave no footprints behind. We’re here to find skilled minds, learn relentlessly, and outplay the best—together. If you thrive under pressure, love breaking limits, and want to set the scoreboard ablaze…🔥 Join us. Burn the flag. Leave only fire. 🔥",
  keywords: ["cybersecurity", "CTF", "ethical hacking", "MIT Manipal", "Fl4gz0nF1r3"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
