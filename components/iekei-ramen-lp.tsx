"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Star } from "lucide-react"
import Link from "next/link"
import { Facebook, Instagram, Youtube } from "lucide-react"

export default function IekeiRamenLP() {
  const [currentReviews, setCurrentReviews] = useState<any[]>([])

  const reviews = [
    {
      source: "楽天",
      comment:
        "乳化で臭みなく本格的。ほぼ毎日冷凍ラーメンや生ラーメンを食べています。濃縮系のラーメンスープも食べてきましたが、家系の美味しいスープでした。170ccで薄めるとのことで本格的な味がしました。ただ鶏油が少ないと思いますので足すとより美味しいと思いました",
      rating: 5,
      name: "お客様",
      avatar:
        "/images/e3-81-8a-e5-ae-a2-e6-a7-98-e3-81-ae-e5-a3-b0-e7-94-b7-e6-80-a7-e3-82-a4-e3-83-a9-e3-82-b9-e3-83-88-ef-bc-88ai-ef-bc-89.jpeg",
    },
    {
      source: "楽天",
      comment:
        "おいしいです！しかも内容物も不自然な添加物は少なく、米粉ラーメンと合わせると罪悪感少なめの家系ラーメンの出来上がりです。リピします",
      rating: 5,
      name: "お客様",
      avatar:
        "/images/e3-81-8a-e5-ae-a2-e6-a7-98-e3-81-ae-e5-a3-b0-e7-94-b7-e6-80-a7-e3-82-a4-e3-83-a9-e3-82-b9-e3-83-88-ef-bc-88ai-ef-bc-89.jpeg",
    },
    {
      source: "楽天",
      comment: "リピートしています。なくなる前に常備しております",
      rating: 5,
      name: "お客様",
      avatar:
        "/images/e3-81-8a-e5-ae-a2-e6-a7-98-e3-81-ae-e5-a3-b0-e7-94-b7-e6-80-a7-e3-82-a4-e3-83-a9-e3-82-b9-e3-83-88-ef-bc-88ai-ef-bc-89.jpeg",
    },
    {
      source: "楽天",
      comment: "常備していたいのでリピートしました。とって美味しくて常温で保存が出来て助かります",
      rating: 5,
      name: "お客様",
      avatar:
        "/images/e3-81-8a-e5-ae-a2-e6-a7-98-e3-81-ae-e5-a3-b0-e7-94-b7-e6-80-a7-e3-82-a4-e3-83-a9-e3-82-b9-e3-83-88-ef-bc-88ai-ef-bc-89.jpeg",
    },
    {
      source: "楽天",
      comment: "想像してた通りの味でとても美味しくいただきました。またリピートさせていただきます",
      rating: 5,
      name: "お客様",
      avatar:
        "/images/e3-81-8a-e5-ae-a2-e6-a7-98-e3-81-ae-e5-a3-b0-e7-94-b7-e6-80-a7-e3-82-a4-e3-83-a9-e3-82-b9-e3-83-88-ef-bc-88ai-ef-bc-89.jpeg",
    },
    {
      source: "楽天",
      comment: "再購入です。ほぼお店の味です。他の家系ラーメンスープより断然おいしいです",
      rating: 5,
      name: "お客様",
      avatar:
        "/images/e3-81-8a-e5-ae-a2-e6-a7-98-e3-81-ae-e5-a3-b0-e7-94-b7-e6-80-a7-e3-82-a4-e3-83-a9-e3-82-b9-e3-83-88-ef-bc-88ai-ef-bc-89.jpeg",
    },
    {
      source: "楽天",
      comment:
        "家系は初めて食べました、スープも麺も美味しく頂きました！ここのラーメンは麺が美味しいのでどの味のラーメンもイケてます",
      rating: 5,
      name: "お客様",
      avatar:
        "/images/e3-81-8a-e5-ae-a2-e6-a7-98-e3-81-ae-e5-a3-b0-e7-94-b7-e6-80-a7-e3-82-a4-e3-83-a9-e3-82-b9-e3-83-88-ef-bc-88ai-ef-bc-89.jpeg",
    },
    {
      source: "楽天",
      comment: "大好きな家系ラーメンを自宅でおいしく食べることが出来てうれしいです",
      rating: 5,
      name: "お客様",
      avatar:
        "/images/e3-81-8a-e5-ae-a2-e6-a7-98-e3-81-ae-e5-a3-b0-e7-94-b7-e6-80-a7-e3-82-a4-e3-83-a9-e3-82-b9-e3-83-88-ef-bc-88ai-ef-bc-89.jpeg",
    },
    {
      source: "楽天",
      comment:
        "まさに工場系のスープです。かなり乳化していて、骨を長時間というよりエキスをミキサーで強制乳化させたようなスープです。値段を考えれば大満足というかよくこのクオリティが作れたなとびっくりします。既定の水分量で作るとかなりしょっぱいので調整が必要です。鶏皮を別で用意してチーユを作れば家系にかなり近づくかと思います",
      rating: 5,
      name: "お客様",
      avatar:
        "/images/e3-81-8a-e5-ae-a2-e6-a7-98-e3-81-ae-e5-a3-b0-e7-94-b7-e6-80-a7-e3-82-a4-e3-83-a9-e3-82-b9-e3-83-88-ef-bc-88ai-ef-bc-89.jpeg",
    },
  ]

  useEffect(() => {
    setCurrentReviews(reviews)
  }, [])

  const products = [
    {
      id: "2set",
      title: "ご自宅で濃厚家系豚骨醤油を味わう",
      subtitle: "パーフェクトラーメンIE-K【S】2食セット",
      description: "麺とスープ×2食",
      note: "先ずお試しにどうぞ",
      price: "1,300円（税・送料込）",
      image: "/images/e6-a5-bd-e5-a4-a9-e4-bb-96top-01.jpeg",
    },
    {
      id: "6set",
      title: "ご自宅で濃厚家系豚骨醤油を味わう",
      subtitle: "パーフェクトラーメンIE-K【S】6食セット",
      description: "麺とスープ×6食",
      note: "リピーターの皆さまへ",
      price: "3,450円（税・送料込）",
      image: "/images/e6-a5-bd-e5-a4-a9-e4-bb-96top-ef-bc-886-e9-a3-9f-ef-bc-89-01.jpeg",
    },
    {
      id: "chashu",
      title: "ちょっとリッチなチャーシュー付き",
      subtitle: "パーフェクトラーメンIE-K【S】1食チャーシュー付き",
      description: "麺とスープとチャーシュー×1食",
      note: "極厚チャーシュー付きで満足度大",
      price: "790円（税込）送料別途",
      extraNote: "2個まで全国一律300円",
      image: "/images/1-e9-a3-9f-e3-83-81-e3-83-a3-e3-83-bc-e3-82-b7-e3-83-a5-e3-83-bc-e4-bb-98-e3-81-8d.jpeg",
    },
    {
      id: "soup-only",
      title: "濃厚家系豚骨醤油スープのみ",
      subtitle: "150ccの大容量スープ5食セット",
      description: "",
      note: "",
      price: "1,750円（税・送料込）",
      image:
        "/images/e6-a5-bd-e5-a4-a9top-e7-94-bb-e5-83-8f-ef-bc-88-e3-82-b9-e3-83-bc-e3-83-97-e3-81-ae-e3-81-bf-ef-bc-89-01.jpeg",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      {/* ヘッダー */}
      <header className="bg-black py-6">
        <div className="container mx-auto px-4 flex justify-center items-center">
          <Image
            src="/images/e3-83-98-e3-83-83-e3-82-bf-e3-83-bc-e7-94-a8-e3-83-96-e3-83-a9-e3-83-b3-e3-83-89-e9-a4-a8-e3-83-ad-e3-82-b4.jpeg"
            alt="AIZU BRAND HALL"
            width={200}
            height={200}
            className="h-20 w-auto"
            priority
          />
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="flex-grow">
        {/* メインビジュアル */}
        <section className="relative">
          <div className="relative h-[50vh] md:h-[60vh]">
            <Image
              src="/images/e3-83-a1-e3-82-a4-e3-83-b3-e3-83-93-e3-82-b8-e3-83-a5-e3-82-a2-e3-83-ab-e3-82-a2-e3-83-bc-e3-83-88-e3-83-9c-e3-83-bc-e3-83-89-201.jpeg"
              alt="パーフェクトラーメンIE-K - 家系ラーメン"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </section>

        {/* メインコピー */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white font-sans leading-[1.4]">
                お店で大人気の家系ラーメンを、いつでも自宅で。
              </h1>
              <div className="text-lg leading-[1.6] text-gray-300 space-y-6 font-sans">
                <p>濃厚豚骨醤油の旨みをとことん再現した「パーフェクトラーメン IE-K」。</p>
                <p>24時間、好きなときに"家系"を楽しめます。ぜひ一度お試しください。</p>
              </div>
            </div>
          </div>
        </section>

        {/* 美味しさの魅力セクション - スープ＆香味油 */}
        <section className="py-16 bg-gray-900">
          <h2 className="text-3xl font-bold text-center mb-12 text-white font-sans">美味しさの魅力</h2>
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                {/* スープ＆香味油カード */}
                <Card className="overflow-hidden shadow-lg bg-gray-800 border-gray-700">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src="/images/e3-82-b9-e3-83-bc-e3-83-97-01.jpeg"
                      alt="スープ＆香味油 - 完全再現の濃厚豚骨"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-white font-sans leading-[1.4]">
                      １. スープ＆香味油
                    </CardTitle>
                    <CardDescription className="text-sm font-bold text-gray-300 font-sans">
                      完全再現の濃厚豚骨
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-gray-300 space-y-2 font-sans leading-[1.6]">
                      <p>骨から炊き出した150gの大容量スープに、国産鶏油をブレンド。</p>
                      <p>化学エキスを極力排し、実店舗と同じ素材・同じ手間で仕込むからこそ出せる、深いコクと旨味。</p>
                    </div>
                  </CardContent>
                </Card>

                {/* 麺カード */}
                <Card className="overflow-hidden shadow-lg bg-gray-800 border-gray-700">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src="/images/e9-ba-ba-01.jpeg"
                      alt="麺 - 老舗特注・大容量160g"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-white font-sans leading-[1.4]">2. 麺</CardTitle>
                    <CardDescription className="text-sm font-bold text-gray-300 font-sans">
                      老舗特注・大容量160g
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-gray-300 space-y-2 font-sans leading-[1.6]">
                      <p>喜多方の老舗「五十嵐製麺」特注の中太ストレート麺。</p>
                      <p>高加水でもちもちとした食感と喉ごしの良さを両立。</p>
                    </div>
                  </CardContent>
                </Card>

                {/* トッピングはお好みでカード */}
                <Card className="overflow-hidden shadow-lg bg-gray-800 border-gray-700">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src="/images/e3-82-a2-e3-83-ac-e3-83-b3-e3-82-b8-01.jpeg"
                      alt="トッピングはお好みで・アレンジ自由度"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-white font-sans leading-[1.4]">
                      3. トッピングはお好みで
                    </CardTitle>
                    <CardDescription className="text-sm font-bold text-gray-300 font-sans">
                      アレンジ自由度
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-gray-300 space-y-2 font-sans leading-[1.6]">
                      <p>ほうれん草、海苔、チャーシューなど定番トッピングはもちろん、ライスとの相性も抜群。</p>
                      <p>
                        アレンジの幅が広く、<strong>"自分だけの家系"</strong> を作れるのも楽しみのひとつ。
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 希少性セクション */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-8 font-sans">職人仕込みだからこそ生まれる一杯</h2>
                <div className="relative aspect-[16/9] w-full max-w-2xl mx-auto mb-8">
                  <Image
                    src="/images/61543b84-5e15-4fab-9a5d-f7bbc8e750f4.png"
                    alt="毎日寸胴で仕込む様子"
                    fill
                    className="object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>

              <div className="max-w-4xl mx-auto text-center space-y-6">
                <div className="text-lg text-gray-300 space-y-4 font-sans leading-[1.6]">
                  <p>パーフェクトラーメンIE-Kは、工場ラインでは作れません。</p>
                  <p>
                    骨を炊き、香味油を合わせ、麺に絡む濃厚スープを仕込む――そのすべてを、ラーメン店と同じ手法で職人が直に行っています。
                  </p>
                  <p>だからこそ、一日に仕込める数は限られます。大量生産には向かない"本物の製法"だからです。</p>
                  <p>ご注文が重なった際には、お届けまでお時間をいただくこともあります。</p>
                  <p>しかし、妥協せず積み重ねてきた手間の先にしか生まれない旨さがあります。</p>
                  <p className="text-xl font-bold text-white">"待ってでも食べたい一杯"――それがIE-Kです。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 商品紹介セクション */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-white font-sans">商品ラインナップ</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {products.map((product) => (
                <Card
                  key={product.id}
                  className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-gray-800 border-gray-700"
                >
                  <div className="relative aspect-square w-full bg-gray-700">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg leading-[1.4] font-bold font-sans text-white">
                      {product.title}
                    </CardTitle>
                    <CardDescription className="text-lg font-bold text-gray-300 font-sans leading-[1.4]">
                      {product.subtitle}
                    </CardDescription>
                    {product.description && (
                      <CardDescription className="text-sm text-gray-400 font-sans leading-[1.6]">
                        {product.description}
                      </CardDescription>
                    )}
                    {product.note && (
                      <CardDescription className="text-sm font-medium text-blue-400 font-sans leading-[1.6]">
                        {product.note}
                      </CardDescription>
                    )}
                  </CardHeader>
                  <CardContent>
                    <p className="text-xl font-bold mb-2 font-mono" style={{ color: "#E60012" }}>
                      {product.price}
                    </p>
                    {product.extraNote && <p className="text-sm text-gray-400 font-sans">{product.extraNote}</p>}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* お客様の声セクション */}
        <section id="reviews" className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-white font-sans">お客様の声。</h2>
            <p className="text-center text-gray-400 mb-12 font-sans leading-[1.6]">
              これらは実際のECサイトに投稿されているものを抜粋させて頂きました。ご購入の際のご参考にどうぞ
            </p>

            <div className="space-y-6 max-w-4xl mx-auto">
              {currentReviews.map((review, i) => (
                <Card key={i} className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-4">
                      <div className="relative w-12 h-12">
                        <Image
                          src={review.avatar || "/placeholder.svg"}
                          alt={`${review.name} のアバター`}
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                      <span className="text-white">
                        <strong>
                          {review.name}（{review.source}）
                        </strong>
                      </span>
                      <div className="flex items-center">
                        {[...Array(review.rating)].map((_, index) => (
                          <Star key={index} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="italic text-gray-300">{review.comment}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 商品に関する注意点セクション */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8 text-white font-sans">商品に関する注意点</h2>
              <div className="space-y-4 text-lg text-gray-300 font-sans leading-[1.6]">
                <p>• 味付けは濃いめです。家系らしく、ご飯と一緒に食べると最後まで美味しく楽しめます。</p>
                <p>
                  • <strong>チャーシュー付き／チャーシューなし</strong>
                  の2種類をご用意しています。ご購入前に内容をご確認ください。
                </p>
                <p>• トッピング（ほうれん草・のり・味玉など）は付属しませんので、お好みでご用意ください。</p>
                <p>
                  •
                  保存方法や賞味期限はパッケージに記載しています。常温保存できる商品ですが、開封後は早めにお召し上がりください。
                </p>
                <p>
                  •
                  本商品は家系ラーメンの雰囲気をご家庭で気軽に楽しんでいただくための再現版です。お店の味と完全に同じではありませんが、ご自宅で家系の風味を楽しみたい方におすすめです。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 信頼指標バー */}
        <section className="bg-red-600 py-8">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <p className="text-lg font-bold text-white font-sans leading-[1.6]">
                楽天レビュー★平均4.56点／Yahooショッピングレビュー★オール5点満点　ご好評頂いております。
              </p>
            </div>
          </div>
        </section>

        {/* 送料無料　即日配送画像 */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative aspect-[3/1] w-full">
                  <Image
                    src="/images/e9-80-81-e6-96-99-e7-84-a1-e6-96-99-01.jpeg"
                    alt="送料無料"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative aspect-[3/1] w-full">
                  <Image
                    src="/images/e5-8d-b3-e6-97-a5-e7-99-ba-e9-80-81-01.jpeg"
                    alt="即日配送"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ご購入はこちらかセクション */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-white font-sans">ご購入はこちらから</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Yahoo!ショッピング */}
              <div className="bg-red-50 border-2 border-red-200 p-6 rounded-lg">
                <Link
                  href="https://store.shopping.yahoo.co.jp/aizubrandhall/b2c8b7cfa5.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="bg-white p-4 mx-auto max-w-[200px] aspect-square flex flex-col items-center justify-center rounded-lg border-2 border-gray-200 hover:shadow-lg transition-shadow mb-4">
                    <Image
                      src="/images/yahoo-e8-b3-bc-e5-85-a5-e3-83-9c-e3-82-bf-e3-83-b3-01.png"
                      alt="Yahoo!ショッピング"
                      width={200}
                      height={200}
                      className="w-full h-auto"
                    />
                  </div>
                  <h4 className="font-bold mb-2 text-center font-sans text-gray-900">Yahoo!ショッピング</h4>
                  <p className="text-sm text-center mb-4 font-sans leading-[1.6] text-gray-800">
                    PayPayポイントが貯まる使えるショッピングモールはこちら
                  </p>
                  <p className="text-sm text-center text-red-700 font-bold font-sans bg-white px-3 py-2 rounded-md">
                    初めて当店をご利用のお客様に300円クーポン進呈中！
                  </p>
                </Link>
              </div>

              {/* 楽天市場 */}
              <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded-lg">
                <Link
                  href="https://item.rakuten.co.jp/aizubrandhall/c/0000000029/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="bg-white p-4 mx-auto max-w-[200px] aspect-square flex flex-col items-center justify-center rounded-lg border-2 border-gray-200 hover:shadow-lg transition-shadow mb-4">
                    <Image
                      src="/images/e6-a5-bd-e5-a4-a9-e8-b3-bc-e5-85-a5-e3-83-9c-e3-82-bf-e3-83-b3-01.png"
                      alt="楽天市場"
                      width={200}
                      height={200}
                      className="w-full h-auto"
                    />
                  </div>
                  <h4 className="font-bold mb-2 text-center font-sans text-gray-900">楽天市場</h4>
                  <p className="text-sm text-center mb-4 font-sans leading-[1.6] text-gray-800">
                    楽天ポイントが使える国内最大級のショッピングモールはこちら
                  </p>
                  <p className="text-sm text-center text-red-700 font-bold font-sans bg-white px-3 py-2 rounded-md">
                    初めて当店をご利用のお客様に300円クーポン進呈中！
                  </p>
                </Link>
              </div>

              {/* Amazon */}
              <div className="bg-green-50 border-2 border-green-200 p-6 rounded-lg">
                <Link
                  href="https://www.amazon.co.jp/stores/page/DFDC7B78-B8C3-4B92-9A15-130780065823"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="bg-white p-4 mx-auto max-w-[200px] aspect-square flex flex-col items-center justify-center rounded-lg border-2 border-gray-200 hover:shadow-lg transition-shadow mb-4">
                    <Image
                      src="/images/amazon-e8-b3-bc-e5-85-a5-e3-83-9c-e3-82-bf-e3-83-b3-01.png"
                      alt="Amazon"
                      width={200}
                      height={200}
                      className="w-full h-auto"
                    />
                  </div>
                  <h4 className="font-bold mb-2 text-center font-sans text-gray-900">Amazon</h4>
                  <p className="text-sm text-center mb-4 font-sans leading-[1.6] text-gray-800">
                    世界最大のショッピングモールでのお買い物はこちら
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 店舗情報セクション */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-2 md:px-4">
          <h2 className="text-xl md:text-2xl font-bold text-center mb-8 px-4 text-white font-sans">
            この商品は「会津ブランド館」が製造・販売・発送を行っています。
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/e4-bc-9a-e6-b4-a5-e3-83-96-e3-83-a9-e3-83-b3-e3-83-89-e9-a4-a8-e5-a4-96-e8-a6-b3.jpeg"
                alt="会津ブランド館 店舗外観"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-2 text-white font-sans">店舗案内</h3>
              <div className="space-y-2 text-gray-300 font-sans leading-[1.6]">
                <p className="font-bold text-white">会津ブランド館</p>
                <p>〒965-0044</p>
                <p>福島県会津若松市七日町6−15</p>
                <p>TEL: 0242-25-4141</p>
                <p>営業時間: 11時〜16時</p>
                <p>定休日: 12月31日・1月1日</p>
                <p className="text-sm text-gray-400">（発送もお休みさせて頂きます）</p>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="mt-8 max-w-5xl mx-auto">
            <div className="aspect-[16/9] w-[70%] mx-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3186.744914857655!2d139.9291543!3d37.4977777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8aaa5961ea738b%3A0x4a6c5d39e7d27eb!2z44CSOTYzLTAwNDQg56aP5bO255yM5Lya5rSl6IyF5p2-5biC5LiD5pel55S677yW4oiS77yR77yV!5e0!3m2!1sja!2sjp!4v1709697431099!5m2!1sja!2sjp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* SNSリンク */}
          <div className="flex justify-center space-x-6 mt-8">
            <Link
              href="https://www.facebook.com/aizubrandkan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400"
            >
              <Facebook size={32} />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="https://x.com/Aizu_Brand_Kan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
              </svg>
              <span className="sr-only">X (formerly Twitter)</span>
            </Link>
            <Link
              href="https://www.instagram.com/aizubrandhall/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-400"
            >
              <Instagram size={32} />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://www.youtube.com/channel/UCpusPn2NlWyrgkIMbacH4-w"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-400"
            >
              <Youtube size={32} />
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="font-sans">© 2025 AIZU BRAND HALL. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
