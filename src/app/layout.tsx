import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "よりそい | 40代からの、新しい出会いのかたち",
  description: "AIがあなたの代わりに出会いを届ける。あなたは、感じるだけでいい。40代からのパートナー探しサービス。写真なしでも始められる、安心の出会い。",
  keywords: ["40代 出会い", "マッチング AI", "パートナー探し", "40代 婚活", "よりそい"],
  openGraph: {
    title: "よりそい | 40代からの、新しい出会いのかたち",
    description: "AIがあなたの代わりに出会いを届ける。写真なし・プロフィール作成不要。40代からの安心パートナー探し。",
    type: "website",
    url: "https://yorisoi.love",
    siteName: "よりそい",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "よりそい | 40代からの、新しい出会いのかたち",
    description: "AIがあなたの代わりに出会いを届ける。写真なし・プロフィール作成不要。",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://yorisoi.love"),
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "よりそい",
              "url": "https://yorisoi.love",
              "description": "AIがあなたの代わりに出会いを届ける。40代からのパートナー探しサービス。",
              "applicationCategory": "SocialNetworkingApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "JPY",
                "description": "事前登録無料・初月無料"
              }
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
