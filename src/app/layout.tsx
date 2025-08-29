import type { Metadata } from "next";
import { Poppins, Sora } from "next/font/google";
import "./globals.css";
import ProtectedComponent from "@/components/layout/protected-component";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "Guidance Tamil Nadu",
  description: "Tamil Nadu Guidance website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} ${poppins.variable} antialiased`}
      >
        <ProtectedComponent>
          {children}
        </ProtectedComponent>
      </body>
    </html>
  );
}
