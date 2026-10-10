import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  // thorvg.org/playground에서 링크를 타고 이동하는 형식이라 수정 필요
  metadataBase: new URL('https://thorvg-playground.vercel.app'),
  title: "ThorVG Playground",
  description: "Interactive playground for ThorVG WebCanvas examples",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
