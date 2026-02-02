"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [age, setAge] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, age }),
      });
      const data = await res.json();
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(data.error || "エラーが発生しました");
      }
    } catch {
      setError("通信エラーが発生しました");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-cream)]/80 backdrop-blur-md border-b border-[var(--color-cream-dark)]/50">
        <div className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between">
          <span className="font-serif text-xl text-[var(--color-warm-dark)]">よりそい</span>
          <div className="flex items-center gap-4 md:gap-6 text-sm md:text-base">
            <a href="/blog" className="text-[var(--color-text-light)] hover:text-[var(--color-warm)] transition-colors py-2">ブログ</a>
            <a href="/login" className="text-[var(--color-text-light)] hover:text-[var(--color-warm)] transition-colors py-2">ログイン</a>
            <a href="/signup" className="bg-[var(--color-warm)] hover:bg-[var(--color-warm-dark)] text-white px-5 py-2.5 rounded-full text-sm md:text-base transition-all">
              無料ではじめる
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-cream)] via-[var(--color-cream-dark)] to-[var(--color-cream)]" />
        
        {/* Decorative circles */}
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-[var(--color-accent-soft)] opacity-20 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-[var(--color-warm-light)] opacity-15 blur-3xl" />

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <p className="text-[var(--color-warm)] text-sm md:text-base tracking-[0.3em] mb-6 animate-fade-in-up">
            40代からの、新しいパートナー探し
          </p>
          
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-[var(--color-warm-dark)] mb-8 animate-fade-in-up-delay-1">
            よりそい
          </h1>
          
          <p className="text-lg md:text-2xl text-[var(--color-text-light)] leading-relaxed mb-4 animate-fade-in-up-delay-2">
            AIがあなたの代わりに、出会いを届ける。
          </p>
          <p className="text-lg md:text-2xl text-[var(--color-text-light)] leading-relaxed mb-12 animate-fade-in-up-delay-2">
            あなたは、感じるだけでいい。
          </p>

          <div className="animate-fade-in-up-delay-3">
            <a href="#waitlist" className="inline-block bg-[var(--color-warm)] hover:bg-[var(--color-warm-dark)] text-white px-10 py-5 rounded-full text-lg md:text-xl transition-all duration-300 hover:shadow-lg hover:scale-105">
              事前登録する（無料）
            </a>
            <p className="text-sm text-[var(--color-text-light)] mt-4">
              ✉️ メールアドレスだけで30秒で完了
            </p>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-pulse-soft">
            <svg className="w-6 h-6 text-[var(--color-warm-light)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 px-6 bg-white border-b border-[var(--color-cream-dark)]/50">
        <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-6 md:gap-10 text-sm md:text-base text-[var(--color-text-light)]">
          <div className="flex items-center gap-2">
            <span className="text-[var(--color-safe)]">🔒</span>
            <span>完全匿名で利用可能</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[var(--color-safe)]">✅</span>
            <span>本人確認で安心</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[var(--color-safe)]">🛡️</span>
            <span>写真なしでもOK</span>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-center text-[var(--color-warm-dark)] mb-16">
            こんな気持ち、ありませんか？
          </h2>
          
          <div className="space-y-6">
            {[
              "家に帰っても「おかえり」と言ってくれる人がいない",
              "今日あったことを話したいのに、話す相手がいない",
              "マッチングアプリは若い人ばかりで、自分の居場所がない",
              "プロフィールを書くのも、写真を選ぶのも、もう疲れた",
              "スワイプするたびに、少しずつ自信がなくなっていく",
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-4 p-5 md:p-6 rounded-2xl bg-[var(--color-cream)] hover:bg-[var(--color-cream-dark)] transition-colors duration-300">
                <span className="text-[var(--color-accent)] text-xl md:text-2xl mt-0.5 shrink-0">✦</span>
                <p className="text-base md:text-lg text-[var(--color-text)] leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-[var(--color-text-light)] text-lg md:text-xl mt-16 leading-relaxed">
            それは、あなたのせいじゃない。<br />
            <span className="text-[var(--color-warm)] font-medium">今のアプリが、あなたに合っていないだけ。</span>
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-center text-[var(--color-warm-dark)] mb-6">
            よりそいは、全く違うアプローチ
          </h2>
          <p className="text-center text-[var(--color-text-light)] text-lg mb-16">
            あなたがやることは、AIと話すだけ。
          </p>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                icon: "💬",
                title: "話すだけでプロフィール完成",
                desc: "AIと日常会話をするだけ。あなたの魅力は、AIが見つけて言葉にします。書く作業はゼロ。",
              },
              {
                icon: "✨",
                title: "毎日一人だけ、特別な紹介",
                desc: "100人のリストは見せません。「この人、合うと思う」——AIが選んだたった一人を、毎日届けます。",
              },
              {
                icon: "✉️",
                title: "最初の一歩も、AIがそばに",
                desc: "話しかける勇気がいらない。AIが自然なきっかけを作ります。あとは、二人の時間。",
              },
              {
                icon: "🌙",
                title: "いつでも、あなたの味方",
                desc: "デートの相談も、不安な夜も。AIがいつでも話を聞きます。あなたは、一人じゃない。",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-7 md:p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <span className="text-4xl block mb-4">{item.icon}</span>
                <h3 className="text-lg md:text-xl font-medium text-[var(--color-warm-dark)] mb-3">{item.title}</h3>
                <p className="text-[var(--color-text-light)] leading-relaxed text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Privacy Section - NEW */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-warm-dark)] mb-12">
            安心して使える理由
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🔒",
                title: "プライバシー最優先",
                desc: "実名・顔写真は不要。あなたの情報は暗号化され、第三者には一切公開しません。",
              },
              {
                icon: "🛡️",
                title: "安全な本人確認",
                desc: "全ユーザーの本人確認を実施。なりすましや業者を排除し、安全な環境を守ります。",
              },
              {
                icon: "🤝",
                title: "24時間サポート",
                desc: "困ったことがあればいつでもAIに相談可能。不快な体験は運営が迅速に対応します。",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[var(--color-cream)]">
                <span className="text-3xl block mb-3">{item.icon}</span>
                <h3 className="text-lg font-medium text-[var(--color-warm-dark)] mb-2">{item.title}</h3>
                <p className="text-[var(--color-text-light)] leading-relaxed text-sm md:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emotional Section */}
      <section className="py-24 px-6 bg-[var(--color-warm-dark)] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-8 text-[var(--color-accent-soft)]">
            登録した瞬間から、<br />もう一人じゃない。
          </h2>
          <p className="text-lg md:text-xl leading-relaxed opacity-80 mb-6">
            マッチングを待つ必要はありません。
          </p>
          <p className="text-lg md:text-xl leading-relaxed opacity-80 mb-6">
            よりそいに登録した瞬間から、AIがあなたの話を聞き、<br className="hidden md:block" />
            あなたを理解し、あなたに合った人を探し始めます。
          </p>
          <p className="text-xl md:text-2xl leading-relaxed text-[var(--color-accent-soft)] font-medium">
            あなたの人生に、もう一度光を。
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-center text-[var(--color-warm-dark)] mb-16">
            はじめかた
          </h2>

          <div className="space-y-10 md:space-y-12">
            {[
              {
                step: "01",
                title: "無料で登録",
                desc: "メールアドレスだけで始められます。写真も経歴も、最初はいりません。",
              },
              {
                step: "02",
                title: "AIとおしゃべり",
                desc: "「最近どう？」から始まる気軽な会話。あなたの人柄を、AIが自然に引き出します。",
              },
              {
                step: "03",
                title: "毎日一人、出会いが届く",
                desc: "AIが「この人、いいと思う」と選んだ一人のストーリーが届きます。気になったら、話しかけてみて。",
              },
              {
                step: "04",
                title: "二人の時間へ",
                desc: "お互いに興味を持ったら、メッセージのやり取りが始まります。AIがそっとサポートし続けます。",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-5 md:gap-6 items-start">
                <span className="font-serif text-3xl md:text-4xl text-[var(--color-accent-soft)] font-bold shrink-0">
                  {item.step}
                </span>
                <div>
                  <h3 className="text-lg md:text-xl font-medium text-[var(--color-warm-dark)] mb-2">{item.title}</h3>
                  <p className="text-[var(--color-text-light)] leading-relaxed text-base">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-24 px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-warm-dark)] mb-6">
            事前登録
          </h2>
          <p className="text-[var(--color-text-light)] text-base md:text-lg mb-10">
            まもなくオープン。事前登録いただいた方は、<br />
            <span className="text-[var(--color-warm)] font-medium">初月無料</span>でご利用いただけます。
          </p>

          {submitted ? (
            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <p className="text-2xl mb-2">🌸</p>
              <p className="text-xl text-[var(--color-warm-dark)] font-medium mb-2">
                ありがとうございます
              </p>
              <p className="text-[var(--color-text-light)]">
                オープン時にお知らせします。<br />
                あなたとの出会いを、楽しみにしています。
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-3xl shadow-sm space-y-5">
              <div>
                <label htmlFor="waitlist-email" className="block text-left text-sm text-[var(--color-text-light)] mb-2">
                  メールアドレス
                </label>
                <input
                  id="waitlist-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@email.com"
                  required
                  className="w-full px-5 py-4 rounded-xl border border-[var(--color-cream-dark)] bg-[var(--color-cream)] text-[var(--color-text)] placeholder:text-[var(--color-text-light)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-warm-light)] transition-all text-base"
                />
              </div>
              <div>
                <label htmlFor="waitlist-age" className="block text-left text-sm text-[var(--color-text-light)] mb-2">
                  年代
                </label>
                <select
                  id="waitlist-age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  required
                  className="w-full px-5 py-4 rounded-xl border border-[var(--color-cream-dark)] bg-[var(--color-cream)] text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-warm-light)] transition-all text-base"
                >
                  <option value="">年代を選択してください</option>
                  <option value="40s">40代</option>
                  <option value="50s">50代</option>
                  <option value="60s">60代以上</option>
                </select>
              </div>
              {error && (
                <p className="text-red-500 text-sm">{error}</p>
              )}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[var(--color-warm)] hover:bg-[var(--color-warm-dark)] disabled:opacity-50 text-white px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300 hover:shadow-lg"
              >
                {loading ? "送信中..." : "事前登録する（無料）"}
              </button>
              <p className="text-sm text-[var(--color-text-light)]">
                🔒 スパムは送りません。情報は暗号化して保護されます。
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-[var(--color-warm-dark)] text-white/60">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-serif text-2xl text-white/80 mb-4">よりそい</p>
          <p className="text-sm md:text-base">
            40代からの、新しいパートナー探し
          </p>
          <div className="flex gap-6 justify-center mt-6 text-sm md:text-base">
            <a href="/terms" className="hover:text-white/80 transition-colors py-2">利用規約</a>
            <a href="/privacy" className="hover:text-white/80 transition-colors py-2">プライバシーポリシー</a>
            <a href="/blog" className="hover:text-white/80 transition-colors py-2">ブログ</a>
          </div>
          <p className="text-xs md:text-sm mt-6">
            © 2026 よりそい All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
