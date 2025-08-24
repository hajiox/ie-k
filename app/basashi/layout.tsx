import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://aizubrandhall.jp"),
  title: "【公式】会津馬刺し｜会津ブランド認定の極上馬刺し・送料無料",
  description:
    "創業400年の伝統と品質を誇る会津の馬刺し。会津ブランド認定の安心・安全な国産馬刺しを産地直送でお届け。高タンパク・低カロリーで美容と健康に。にんにく味噌との相性抜群。贈答用にも最適です。",
  openGraph: {
    title: "会津が誇る至高の逸品｜会津ブランド認定 極上馬刺し",
    description:
      "400年の伝統が育んだ極上の味わい。とろける食感と繊細な旨みをご家庭で。会津ブランド認定の安心・安全な国産馬刺しを産地直送でお届けします。",
    images: [{ url: "/ogp/basashi.jpg", width: 1200, height: 630, alt: "会津馬刺し 特選盛り合わせ" }],
    locale: "ja_JP",
    type: "website",
    siteName: "会津ブランド館",
  },
  twitter: {
    card: "summary_large_image",
    title: "会津が誇る至高の逸品｜会津ブランド認定 極上馬刺し",
    description:
      "400年の伝統が育んだ極上の味わい。とろける食感と繊細な旨みをご家庭で。会津ブランド認定の安心・安全な国産馬刺しを産地直送でお届けします。",
    images: ["/ogp/basashi.jpg"],
  },
  alternates: {
    canonical: "https://aizubrandhall.jp/basashi",
  },
  keywords: ["会津馬刺し", "馬刺し", "会津ブランド認定", "桜肉", "馬肉", "グルメ", "贈答品", "お取り寄せ", "にんにく味噌"],
}

export default function BasashiLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

