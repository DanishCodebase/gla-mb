import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "GLA University",
  description: "GLA University",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Google Tag Manager */}
      <GoogleTagManager gtmId="GTM-KQX3Q3RF" />
      {/* End Google Tag Manager */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KQX3Q3RF"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}
