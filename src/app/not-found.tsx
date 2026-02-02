export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--color-cream)] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="text-6xl mb-6">🍃</p>
        <h1 className="font-serif text-2xl md:text-3xl text-[var(--color-warm-dark)] mb-4">
          ページが見つかりません
        </h1>
        <p className="text-[var(--color-text-light)] leading-relaxed mb-8 text-base md:text-lg">
          お探しのページは存在しないか、移動した可能性があります。
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="/"
            className="inline-block bg-[var(--color-warm)] hover:bg-[var(--color-warm-dark)] text-white px-8 py-3.5 rounded-xl transition-all text-base"
          >
            トップページへ
          </a>
          <a
            href="/blog"
            className="inline-block border-2 border-[var(--color-cream-dark)] text-[var(--color-text-light)] hover:bg-white px-8 py-3.5 rounded-xl transition-all text-base"
          >
            ブログを読む
          </a>
        </div>
      </div>
    </div>
  );
}
