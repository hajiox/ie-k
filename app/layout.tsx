import type React from "react"
import type { Metadata } from "next"
import { Noto_Sans_JP, M_PLUS_1p } from "next/font/google"
import "./globals.css"

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
})

const mPlus1p = M_PLUS_1p({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-m-plus-1p",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"),
  title: {
    default: "パーフェクトラーメンIE-K｜本格家系ラーメンお取り寄せ｜職人仕込み濃厚豚骨醤油スープ｜会津ブランド館",
    template: "%s | 会津ブランド館",
  },
  description:
    "職人が毎日寸胴で仕込む本格家系ラーメン「パーフェクトラーメンIE-K」。工場では作れない濃厚豚骨醤油スープと特注中太麺で、お店の味をご自宅で。楽天★4.56点の高評価。",
  generator: "Next.js",
  applicationName: "会津ブランド館",
  referrer: "origin-when-cross-origin",
  keywords: [
    "家系ラーメン",
    "パーフェクトラーメンIE-K",
    "お取り寄せ",
    "濃厚豚骨醤油",
    "職人仕込み",
    "会津ブランド館",
    "横浜家系",
    "本格ラーメン",
    "通販",
    "即日発送",
    "送料無料",
    "五十嵐製麺",
    "喜多方",
    "福島",
  ],
  authors: [{ name: "会津ブランド館", url: "https://your-domain.com" }],
  creator: "会津ブランド館",
  publisher: "会津ブランド館",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://your-domain.com",
    siteName: "会津ブランド館",
    title: "パーフェクトラーメンIE-K｜本格家系ラーメンお取り寄せ｜職人仕込み濃厚豚骨醤油スープ",
    description:
      "職人が毎日寸胴で仕込む本格家系ラーメン「パーフェクトラーメンIE-K」。工場では作れない濃厚豚骨醤油スープと特注中太麺で、お店の味をご自宅で。楽天★4.56点の高評価。",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OGP_%E3%82%A2%E3%83%BC%E3%83%88%E3%83%9C%E3%83%BC%E3%83%89%201.jpg-Gk40F30VAggjnTixueZOhlpcRmPVxf.jpeg",
        width: 1200,
        height: 630,
        alt: "パーフェクトラーメンIE-K - 本格家系ラーメンお取り寄せ",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Aizu_Brand_Kan",
    creator: "@Aizu_Brand_Kan",
    title: "パーフェクトラーメンIE-K｜本格家系ラーメンお取り寄せ｜職人仕込み濃厚豚骨醤油スープ",
    description:
      "職人が毎日寸胴で仕込む本格家系ラーメン「パーフェクトラーメンIE-K」。工場では作れない濃厚豚骨醤油スープと特注中太麺で、お店の味をご自宅で。楽天★4.56点の高評価。",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OGP_%E3%82%A2%E3%83%BC%E3%83%88%E3%83%9C%E3%83%BC%E3%83%89%201.jpg-Gk40F30VAggjnTixueZOhlpcRmPVxf.jpeg",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${mPlus1p.variable}`}>
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-2EJ6JCB9N2"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-2EJ6JCB9N2');
      `,
          }}
        />
        <link rel="canonical" href="https://your-domain.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <style>{`
html {
  font-family: ${notoSansJP.style.fontFamily};
  --font-sans: ${notoSansJP.style.fontFamily};
  --font-mono: ui-monospace, SFMono-Regular, "SF Mono", Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}
        `}</style>
      </head>
      <body className={notoSansJP.className}>{children}</body>
    </html>
  )
}
