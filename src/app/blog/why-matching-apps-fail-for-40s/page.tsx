import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "40代がマッチングアプリで失敗する本当の理由 | よりそいブログ",
  description: "Pairs、Omiai、Tinderを試して挫折した40代へ。あなたが悪いんじゃない。アプリがあなたに合っていなかっただけ。",
  openGraph: {
    title: "40代がマッチングアプリで失敗する本当の理由",
    description: "スワイプ、写真勝負、大量マッチング。今のマッチングアプリは20代のために設計されています。",
    type: "article",
    publishedTime: "2026-02-01T00:00:00+09:00",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "40代がマッチングアプリで失敗する本当の理由",
  "datePublished": "2026-02-01T00:00:00+09:00",
  "author": { "@type": "Organization", "name": "よりそい" },
  "publisher": { "@type": "Organization", "name": "よりそい", "url": "https://yorisoi.love" },
  "description": "スワイプ、写真勝負、大量マッチング。今のマッチングアプリは20代のために設計されています。",
};

export default function Article() {
  return (
    <div className="min-h-screen bg-[var(--color-cream)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="bg-white border-b border-[var(--color-cream-dark)] px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <a href="/" className="font-serif text-xl text-[var(--color-warm-dark)]">
            よりそい
          </a>
          <a href="/blog" className="text-[var(--color-text-light)] hover:text-[var(--color-warm)] py-2 text-base">
            ← ブログ一覧
          </a>
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-6 py-12">
        <span className="text-xs text-[var(--color-warm)] font-medium">考え方</span>
        <h1 className="font-serif text-3xl md:text-4xl text-[var(--color-warm-dark)] mt-2 mb-4">
          40代がマッチングアプリで失敗する本当の理由
        </h1>
        <p className="text-[var(--color-text-light)] mb-8">2026年2月1日 · 📖 4分で読めます</p>

        {/* 目次 */}
        <nav className="bg-white rounded-2xl p-5 md:p-6 mb-10">
          <p className="text-sm font-medium text-[var(--color-warm-dark)] mb-3">📋 この記事の内容</p>
          <ol className="space-y-2 text-sm md:text-base text-[var(--color-text-light)] list-decimal list-inside">
            <li>40代のマッチングアプリ事情</li>
            <li>失敗する3つの本当の理由</li>
            <li>40代に合った出会い方とは</li>
          </ol>
        </nav>

        <div className="max-w-none space-y-6 text-[var(--color-text)] leading-[1.9] text-base md:text-lg">
          <p>
            Pairs。Omiai。Tinder。マリッシュ。
          </p>
          <p>
            40代で出会いを求めて、これらのアプリを試したことがある人は多いでしょう。そして、多くの人が<strong>「自分には合わなかった」</strong>と感じて退会しています。
          </p>
          <p>
            でも、本当にそうでしょうか？本当に「合わなかった」のは、あなた自身ですか？
          </p>
          <p>
            <strong>違います。合わなかったのは、アプリの方です。</strong>
          </p>

          <h2 className="font-serif text-xl md:text-2xl text-[var(--color-warm-dark)] mt-12 mb-4 pl-4 border-l-4 border-[var(--color-warm-light)]">
            理由1：写真勝負の土俵で戦わされている
          </h2>
          <p>
            ほとんどのマッチングアプリは、最初に表示されるのが写真です。ユーザーは0.5秒で「あり」か「なし」を判断します。
          </p>
          <p>
            これは20代には楽しいゲームかもしれません。でも40代にとっては？
          </p>
          <p>
            40代の魅力は写真では伝わりません。<strong>人生経験、価値観、話していて心地よいかどうか</strong>——本当に大切なことは、写真1枚ではわからないのです。
          </p>

          <h2 className="font-serif text-xl md:text-2xl text-[var(--color-warm-dark)] mt-12 mb-4 pl-4 border-l-4 border-[var(--color-warm-light)]">
            理由2：プロフィール作成が苦行
          </h2>
          <p>
            「自己紹介文を書いてください」「趣味を選んでください」「理想の相手の条件を入力してください」
          </p>
          <p>
            仕事で疲れて帰ってきた40代に、こんな作業をさせるのは酷です。しかも、書いたところで読まれるかどうかもわかりません。
          </p>
          <p>
            <strong>自分の魅力を文章にするのは、プロのライターでも難しいこと</strong>です。それを一般のユーザーに求めるのは、設計として間違っています。
          </p>

          <h2 className="font-serif text-xl md:text-2xl text-[var(--color-warm-dark)] mt-12 mb-4 pl-4 border-l-4 border-[var(--color-warm-light)]">
            理由3：「選ばれない」体験の繰り返し
          </h2>
          <p>
            「いいね」を送っても返ってこない。マッチングしても会話が続かない。既読スルー。
          </p>
          <p>
            この体験を繰り返すと、<strong>「自分には魅力がないんだ」</strong>と感じてしまいます。40代は特に、自信を失いやすい年代です。
          </p>
          <p>
            でも実際は、アプリの仕組みの問題です。人気ユーザーに「いいね」が集中し、大多数のユーザーは埋もれてしまう。これはアプリのビジネスモデルの構造的な問題であり、あなたの魅力の問題ではありません。
          </p>

          <h2 className="font-serif text-xl md:text-2xl text-[var(--color-warm-dark)] mt-12 mb-4 pl-4 border-l-4 border-[var(--color-warm-light)]">
            理由4：若者向けのUI/UX
          </h2>
          <p>
            派手なアニメーション、次々と切り替わる画面、複雑な設定項目。
          </p>
          <p>
            これらは20代にとっては当たり前のUXでも、40代以上にとっては<strong>「使いにくい」「わかりにくい」</strong>と感じる原因になります。
          </p>
          <p>
            デジタルネイティブでない世代に、デジタルネイティブ向けのインターフェースを押し付けているのです。
          </p>

          <h2 className="font-serif text-xl md:text-2xl text-[var(--color-warm-dark)] mt-12 mb-4 pl-4 border-l-4 border-[var(--color-warm-light)]">
            理由5：「出会い系」というラベルの心理的障壁
          </h2>
          <p>
            40代にとって「出会い系」という言葉には、まだネガティブなイメージがつきまといます。
          </p>
          <p>
            「恥ずかしい」「必死に見える」「怪しい人が多そう」
          </p>
          <p>
            この心理的障壁が、<strong>そもそもサービスに登録すること自体をためらわせています</strong>。
          </p>

          <h2 className="font-serif text-xl md:text-2xl text-[var(--color-warm-dark)] mt-12 mb-4 pl-4 border-l-4 border-[var(--color-warm-light)]">
            では、40代に本当に必要なものは？
          </h2>
          <p>
            答えはシンプルです。
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>写真ではなく、<strong>人柄で繋がれる</strong>仕組み</li>
            <li>プロフィールを<strong>自分で書かなくていい</strong>仕組み</li>
            <li>「選ばれない」ではなく、<strong>「紹介される」</strong>体験</li>
            <li>40代以上に<strong>最適化されたシンプルなUI</strong></li>
            <li>「出会い系」ではなく、<strong>安心できるコミュニティ</strong></li>
          </ul>

          <p className="mt-6">
            <strong>よりそいは、これらすべてを解決するために生まれました。</strong>
          </p>
          <p>
            AIがあなたの話を聞き、あなたの魅力を見つけ、あなたに合った人を毎日一人だけ紹介します。スワイプも、プロフィール作成も、写真選びも必要ありません。
          </p>

          {/* Share */}
          <div className="flex items-center gap-4 mt-12 pt-8 border-t border-[var(--color-cream-dark)]">
            <p className="text-sm text-[var(--color-text-light)]">この記事をシェア：</p>
            <a
              href="https://twitter.com/intent/tweet?text=40代がマッチングアプリで失敗する本当の理由&url=https://yorisoi.love/blog/why-matching-apps-fail-for-40s"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text-light)] hover:text-[var(--color-warm)] transition-colors text-sm py-2 px-3 border border-[var(--color-cream-dark)] rounded-lg"
            >
              𝕏 でシェア
            </a>
            <a
              href="https://line.me/R/msg/text/?40代がマッチングアプリで失敗する本当の理由%0Ahttps://yorisoi.love/blog/why-matching-apps-fail-for-40s"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text-light)] hover:text-[#06C755] transition-colors text-sm py-2 px-3 border border-[var(--color-cream-dark)] rounded-lg"
            >
              LINEで送る
            </a>
          </div>

          <div className="text-center mt-8 py-8">
            <p className="text-[var(--color-text-light)] mb-4 text-base">
              マッチングアプリで疲れた40代へ。<br />
              よりそいは、全く違うアプローチです。
            </p>
            <a
              href="/#waitlist"
              className="inline-block bg-[var(--color-warm)] hover:bg-[var(--color-warm-dark)] text-white px-8 py-4 rounded-xl transition-all text-base md:text-lg"
            >
              よりそいに事前登録する（無料）
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
