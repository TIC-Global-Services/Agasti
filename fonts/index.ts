import localFont from "next/font/local";
import { Plus_Jakarta_Sans } from "next/font/google";


export const GC_Palioka_Demo = localFont({
  src: [
    { path: "./GC-Palioka/GC-Palioka-Demo.ttf", weight: "400", style: "normal" },
  ],
  variable: "--font-gc-palioka",
  display: "swap",
});

export const PlusJarkarta_Sans = Plus_Jakarta_Sans({
  variable: "--font-jarkata-sans",
  subsets: ["latin"],
});