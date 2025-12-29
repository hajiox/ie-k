import type { Metadata } from "next"
import IekeiRamenLP from "../components/iekei-ramen-lp"

export const metadata: Metadata = {
  metadataBase: new URL("https://iek.aizubrandhall-lp.com"),
  title: {
    default: "【公式】パーフェクトラーメンIE-K【S】｜自宅で本格家系ラーメン通販・お取り寄せ",
    template: "%s | 会津ブランド館",
  },
  description:
    "お店で大人気の家系ラーメンを、いつでも自宅で。濃厚豚骨醤油の旨みをとことん再現したパーフェクトラーメンIE-K。化学エキス不使用、本物素材だけで仕込んだ本格派。2食セット1,300円から全国送料無料でお届け。",
  keywords:
    "家系ラーメン,濃厚豚骨醤油,パーフェクトラーメンIE-K,通販,お取り寄せ,送料無料,会津ブランド館,本格ラーメン,豚骨スープ,中太麺,チャーシュー",
  authors: [{ name: "会津ブランド館" }],
  creator: "会津ブランド館",
  publisher: "会津ブランド館",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "パーフェクトラーメンIE-K【S】｜自宅で味わう本格家系ラーメン",
    description:
      "お店で大人気の家系ラーメンを、いつでも自宅で。濃厚豚骨醤油の旨みをとことん再現したパーフェクトラーメンIE-K。化学エキス不使用、本物素材だけで仕込んだ本格派。2食セット1,300円から全国送料無料でお届け。",
    url: "https://iek.aizubrandhall-lp.com",
    siteName: "会津ブランド館",
    images: [
      {
        url: "/images/iekei-ogp.png",
        width: 1200,
        height: 630,
        alt: "濃厚家系豚骨醤油ラーメン パーフェクトラーメンIE-K",
        type: "image/jpeg",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@aizu_brand_kan",
    creator: "@aizu_brand_kan",
    title: "パーフェクトラーメンIE-K【S】｜自宅で味わう本格家系ラーメン",
    description:
      "お店で大人気の家系ラーメンを、いつでも自宅で。濃厚豚骨醤油の旨みをとことん再現したパーフェクトラーメンIE-K。化学エキス不使用、本物素材だけで仕込んだ本格派。2食セット1,300円から全国送料無料でお届け。",
    images: [
      {
        url: "/images/iekei-ogp.png",
        alt: "濃厚家系豚骨醤油ラーメン パーフェクトラーメンIE-K",
        width: 1200,
        height: 630,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://iek.aizubrandhall-lp.com",
  },
  category: "food",
  classification: "ラーメン通販",
  other: {
    "product:price:amount": "1300",
    "product:price:currency": "JPY",
    "product:availability": "in stock",
    "product:condition": "new",
    "product:retailer_item_id": "iekei-ramen-2set",
    "product:brand": "会津ブランド館",
    "product:category": "食品・グルメ > ラーメン",
  },
}

export default function Page() {
  return <IekeiRamenLP />
}
