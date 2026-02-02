import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "よりそい | 40代からの、新しい出会いのかたち",
  description: "AIがあなたの代わりに出会いを届ける。あなたは、感じるだけでいい。40代からの出会い系サービス。",
  openGraph: {
    title: "よりそい | 40代からの、新しい出会いのかたち",
    description: "AIがあなたの代わりに出会いを届ける。あなたは、感じるだけでいい。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#8B6F47" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="よりそい" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&family=Noto+Serif+JP:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
