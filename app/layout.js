import { Inter } from "next/font/google";
import "./globals.css";
import MobxProvider from "./Mobx";
import NextProvider from "./NextProvider";
const inter = Inter({ subsets: ["latin"] });
import { Analytics } from '@vercel/analytics/react';

export const viewport = {
  themeColor: '#E4383B',
}

export const metadata = {
  title: "RL Pokedex",
  description: "Real Life Pokedex",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
      <NextProvider>
        <MobxProvider>
          <>
            {children}
          </>
        </MobxProvider>
      </NextProvider>
      <Analytics />
      </body>
    </html>
  );
}
