"use client";

const articles = [
  {
    slug: "over-40-dating-guide",
    title: "40代から始める出会い：失敗しない5つのステップ",
    excerpt: "40代の出会いは「若い頃と同じ方法」では上手くいきません。大人だからこその出会い方があります。",
    date: "2026年2月1日",
    category: "出会いのヒント",
    readTime: "5分",
  },
  {
    slug: "why-matching-apps-fail-for-40s",
    title: "40代がマッチングアプリで失敗する本当の理由",
    excerpt: "スワイプ、写真勝負、大量マッチング。今のマッチングアプリは20代のために設計されています。",
    date: "2026年2月1日",
    category: "考え方",
    readTime: "4分",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[var(--color-cream)]">
      <header className="bg-white border-b border-[var(--color-cream-dark)] px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <a href="/" className="font-serif text-xl text-[var(--color-warm-dark)]">
            よりそい
          </a>
          <a href="/" className="text-[var(--color-text-light)] hover:text-[var(--color-warm)] py-2 text-base">
            ← トップへ
          </a>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 py-10 md:py-12">
        <h1 className="font-serif text-2xl md:text-3xl text-[var(--color-warm-dark)] mb-2">ブログ</h1>
        <p className="text-[var(--color-text-light)] mb-10 md:mb-12 text-base">
          40代からの出会いに役立つ情報をお届けします
        </p>

        <div className="space-y-6 md:space-y-8">
          {articles.map((article) => (
            <a
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="block bg-white rounded-2xl p-5 md:p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs md:text-sm text-[var(--color-warm)] font-medium bg-[var(--color-cream)] px-2.5 py-0.5 rounded-full">
                  {article.category}
                </span>
                <span className="text-xs md:text-sm text-[var(--color-text-light)]">
                  📖 {article.readTime}で読めます
                </span>
              </div>
              <h2 className="text-lg md:text-xl font-medium text-[var(--color-warm-dark)] mb-2">
                {article.title}
              </h2>
              <p className="text-[var(--color-text-light)] leading-relaxed text-base">
                {article.excerpt}
              </p>
              <p className="text-xs md:text-sm text-[var(--color-text-light)] mt-3">
                {article.date}
              </p>
            </a>
          ))}
        </div>

        {/* CTA at bottom */}
        <div className="mt-12 md:mt-16 text-center bg-white rounded-2xl p-6 md:p-8">
          <p className="text-[var(--color-text)] text-lg mb-4">
            読むだけじゃ出会えない。<br />
            <span className="text-[var(--color-warm)] font-medium">一歩、踏み出してみませんか？</span>
          </p>
          <a
            href="/#waitlist"
            className="inline-block bg-[var(--color-warm)] hover:bg-[var(--color-warm-dark)] text-white px-8 py-4 rounded-xl transition-all text-base md:text-lg"
          >
            よりそいに事前登録する（無料）
          </a>
        </div>
      </div>
    </div>
  );
}
