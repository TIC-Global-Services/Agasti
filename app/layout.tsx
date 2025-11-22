import type { Metadata } from "next";
import "./globals.css";
import { ScrollProvider } from "@/providers/ScrollProvider";
import { GC_Palioka_Demo, PlusJarkarta_Sans } from "@/fonts";

export const metadata: Metadata = {
  title: "Agasti",
  description: "Agasti brings together luxury, nature, and thoughtful design. With premium materials, open layouts, and serene green spaces, every villa is crafted with precision to elevate your everyday living.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GC_Palioka_Demo.variable} ${PlusJarkarta_Sans.variable} antialiased`}
      >
        <ScrollProvider>{children}</ScrollProvider>
      </body>
    </html>
  );
}
