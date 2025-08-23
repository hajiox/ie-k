import type { Metadata } from "next";

const SITE = "https://v0-no-content-kappa-five.vercel.app"; // 右側AboutのURL

export const metadata: Metadata = {
  title: "IE-K | ランディングページ",
  description: "IE-K の公式ランディングページ。",
  openGraph: {
    title: "IE-K",
    description: "IE-K の公式ランディングページ。",
    images: [`${SITE}/og/ie-k.jpg`], // 後で画像を置く
    type: "website",
    siteName: "IE-K",
  },
  twitter: {
    card: "summary_large_image",
    title: "IE-K",
    description: "IE-K の公式ランディングページ。",
    images: [`${SITE}/og/ie-k.jpg`],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
