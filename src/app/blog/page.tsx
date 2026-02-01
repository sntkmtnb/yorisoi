"use client";

const articles = [
  {
    slug: "over-40-dating-guide",
    title: "40代から始める出会い：失敗しない5つのステップ",
    excerpt: "40代の出会いは「若い頃と同じ方法」では上手くいきません。大人だからこその出会い方があります。",
    date: "2026年2月1日",
    category: "出会いのヒント",
  },
  {
    slug: "why-matching-apps-fail-for-40s",
    title: "40代がマッチングアプリで失敗する本当の理由",
    excerpt: "スワイプ、写真勝負、大量マッチング。今のマッチングアプリは20代のために設計されています。",
    date: "2026年2月1日",
    category: "考え方",
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
          <span className="text-[var(--color-text-light)]">ブログ</span>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="font-serif text-3xl text-[var(--color-warm-dark)] mb-2">ブログ</h1>
        <p className="text-[var(--color-text-light)] mb-12">
          40代からの出会いに役立つ情報をお届けします
        </p>

        <div className="space-y-8">
          {articles.map((article) => (
            <a
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="block bg-white rounded-2xl p-6 hover:shadow-md transition-shadow"
            >
              <span className="text-xs text-[var(--color-warm)] font-medium">
                {article.category}
              </span>
              <h2 className="text-xl font-medium text-[var(--color-warm-dark)] mt-1 mb-2">
                {article.title}
              </h2>
              <p className="text-[var(--color-text-light)] leading-relaxed">
                {article.excerpt}
              </p>
              <p className="text-xs text-[var(--color-text-light)] mt-4">
                {article.date}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
