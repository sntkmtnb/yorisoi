"use client";

import { useState } from "react";
import FadeInSection from "@/components/FadeInSection";

const FAQ_ITEMS = [
  {
    q: "本当に安全ですか？個人情報は大丈夫？",
    a: "はい。全ての個人情報は暗号化して保存され、他のユーザーに公開されることはありません。本名や顔写真なしでも利用できます。また、全ユーザーに本人確認を実施し、なりすましを防止しています。",
  },
  {
    q: "出会い系アプリとはどう違うの？",
    a: "従来のアプリは「写真を見てスワイプ」が基本。よりそいは、AIとの会話からあなたの人柄を理解し、価値観の合う相手を一日一人だけ紹介します。外見ではなく「人としての相性」を重視する、全く新しいアプローチです。",
  },
  {
    q: "写真がなくても使えますか？",
    a: "はい、最初は写真なしで始められます。AIがあなたの会話から「あなたらしさ」を引き出し、プロフィールを作ります。写真はお互いに興味を持った段階で任意で公開できます。",
  },
  {
    q: "AIは具体的に何をしてくれるの？",
    a: "①日常会話からあなたの魅力を発見してプロフィールを作成 ②価値観の合う相手を毎日一人紹介 ③最初のメッセージのきっかけ作り ④デートの相談や不安な時の話し相手——あなたの婚活パートナーとして伴走します。",
  },
  {
    q: "料金はかかりますか？",
    a: "事前登録いただいた方は初月無料です。サービス開始後の料金プランは、オープン前にお知らせします。無理な課金や自動更新はありません。",
  },
  {
    q: "40代じゃなくても使えますか？",
    a: "よりそいは40代以上の方を主な対象としていますが、「じっくりと人と向き合いたい」という方なら年齢を問わず歓迎です。",
  },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[var(--color-cream-dark)] rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-5 md:px-6 py-4 md:py-5 flex items-center justify-between gap-4 hover:bg-[var(--color-cream)] transition-colors"
      >
        <span className="text-base md:text-lg text-[var(--color-warm-dark)] font-medium leading-relaxed">
          {question}
        </span>
        <span className="text-[var(--color-warm)] text-xl shrink-0">
          {open ? "−" : "＋"}
        </span>
      </button>
      {open && (
        <div className="px-5 md:px-6 pb-4 md:pb-5">
          <p className="text-[var(--color-text-light)] leading-relaxed text-base">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

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
        // Scroll to show success message
        document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
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
      {/* Skip to content (a11y) */}
      <a href="#waitlist" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-[var(--color-warm)] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg">
        メインコンテンツへスキップ
      </a>

      {/* Navigation */}
      <nav aria-label="メインナビゲーション" className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-cream)]/80 backdrop-blur-md border-b border-[var(--color-cream-dark)]/50">
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
          <p className="text-lg md:text-2xl text-[var(--color-text)] leading-relaxed mb-12 animate-fade-in-up-delay-2 font-medium">
            あなたは、感じるだけでいい。
          </p>

          <div className="animate-fade-in-up-delay-3 space-y-4">
            <a href="#waitlist" className="inline-block bg-[var(--color-warm)] hover:bg-[var(--color-warm-dark)] text-white px-10 py-5 rounded-full text-lg md:text-xl transition-all duration-300 hover:shadow-lg hover:scale-105">
              事前登録する（無料）
            </a>
            <p className="text-sm text-[var(--color-text-light)]">
              ✉️ メールアドレスだけで30秒で完了
            </p>
            <a href="/chat" className="inline-block text-[var(--color-warm)] hover:text-[var(--color-warm-dark)] text-base underline underline-offset-4 transition-colors">
              まずはAIと話してみる →
            </a>
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
              <FadeInSection key={i} delay={i * 100}>
                <div className="flex items-start gap-4 p-5 md:p-6 rounded-2xl bg-[var(--color-cream)] hover:bg-[var(--color-cream-dark)] transition-colors duration-300">
                  <span className="text-[var(--color-accent)] text-xl md:text-2xl mt-0.5 shrink-0">✦</span>
                  <p className="text-base md:text-lg text-[var(--color-text)] leading-relaxed">{text}</p>
                </div>
              </FadeInSection>
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
          <p className="text-center text-[var(--color-text-light)] text-lg mb-6">
            あなたがやることは、AIと話すだけ。
          </p>

          {/* Simple flow visualization */}
          <div className="flex items-center justify-center gap-2 md:gap-4 mb-16 text-sm md:text-base overflow-x-auto">
            <span className="bg-[var(--color-warm)] text-white px-3 py-1.5 rounded-full whitespace-nowrap">AIと会話</span>
            <span className="text-[var(--color-warm-light)]">→</span>
            <span className="bg-[var(--color-accent-soft)] text-[var(--color-warm-dark)] px-3 py-1.5 rounded-full whitespace-nowrap">プロフィール自動作成</span>
            <span className="text-[var(--color-warm-light)]">→</span>
            <span className="bg-[var(--color-accent-soft)] text-[var(--color-warm-dark)] px-3 py-1.5 rounded-full whitespace-nowrap">毎日1人紹介</span>
            <span className="text-[var(--color-warm-light)]">→</span>
            <span className="bg-[var(--color-warm)] text-white px-3 py-1.5 rounded-full whitespace-nowrap">出会い</span>
          </div>

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
              <FadeInSection key={i} delay={i * 100}>
                <div className="bg-white p-7 md:p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                  <span className="text-4xl block mb-4">{item.icon}</span>
                  <h3 className="text-lg md:text-xl font-medium text-[var(--color-warm-dark)] mb-3">{item.title}</h3>
                  <p className="text-[var(--color-text-light)] leading-relaxed text-base">{item.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-center text-[var(--color-warm-dark)] mb-12">
            従来のアプリとの違い
          </h2>
          <div className="space-y-4">
            {[
              { label: "プロフィール作成", old: "自分で文章を書く・写真を用意", new: "AIと話すだけで自動作成" },
              { label: "相手の探し方", old: "写真を見てスワイプ", new: "AIが毎日一人を厳選紹介" },
              { label: "写真", old: "必須（見た目重視）", new: "不要（人柄重視）" },
              { label: "マッチング後", old: "自分でメッセージを考える", new: "AIがきっかけ作りをサポート" },
              { label: "対象年齢", old: "20〜30代が中心", new: "40代以上に特化" },
              { label: "サポート", old: "なし or 問い合わせフォーム", new: "AIが24時間いつでも味方" },
            ].map((row, i) => (
              <FadeInSection key={i} delay={i * 80}>
                <div className="grid grid-cols-1 md:grid-cols-[140px_1fr_1fr] gap-2 md:gap-4 p-4 md:p-5 rounded-xl bg-[var(--color-cream)]">
                  <p className="font-medium text-[var(--color-warm-dark)] text-sm md:text-base">{row.label}</p>
                  <div className="flex items-start gap-2">
                    <span className="text-[var(--color-text-light)] shrink-0">❌</span>
                    <p className="text-sm md:text-base text-[var(--color-text-light)]">{row.old}</p>
                </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[var(--color-warm)] shrink-0">✅</span>
                    <p className="text-sm md:text-base text-[var(--color-warm-dark)] font-medium">{row.new}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Privacy Section */}
      <section className="py-20 px-6">
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
              <FadeInSection key={i} delay={i * 150}>
                <div className="p-6 rounded-2xl bg-[var(--color-cream)] h-full">
                  <span className="text-3xl block mb-3">{item.icon}</span>
                  <h3 className="text-lg font-medium text-[var(--color-warm-dark)] mb-2">{item.title}</h3>
                  <p className="text-[var(--color-text-light)] leading-relaxed text-sm md:text-base">{item.desc}</p>
                </div>
              </FadeInSection>
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
          <p className="text-xl md:text-2xl leading-relaxed text-[var(--color-accent-soft)] font-medium mb-10">
            あなたの人生に、もう一度光を。
          </p>
          <a
            href="#waitlist"
            className="inline-block bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-full text-base md:text-lg transition-all border border-white/30"
          >
            事前登録する（無料）
          </a>
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
              <FadeInSection key={i} delay={i * 150}>
                <div className="flex gap-5 md:gap-6 items-start">
                  <span className="font-serif text-3xl md:text-4xl text-[var(--color-accent-soft)] font-bold shrink-0">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-lg md:text-xl font-medium text-[var(--color-warm-dark)] mb-2">{item.title}</h3>
                    <p className="text-[var(--color-text-light)] leading-relaxed text-base">{item.desc}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>

          {/* Mid-page CTA */}
          <div className="text-center mt-12">
            <a
              href="#waitlist"
              className="inline-block bg-[var(--color-warm)] hover:bg-[var(--color-warm-dark)] text-white px-8 py-4 rounded-full text-base md:text-lg transition-all hover:shadow-lg"
            >
              事前登録する（無料）→
            </a>
          </div>
        </div>
      </section>

      {/* Voices / Social Proof */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-center text-[var(--color-warm-dark)] mb-4">
            事前登録された方の声
          </h2>
          <p className="text-center text-[var(--color-text-light)] text-sm mb-12">
            ※ 事前登録時のアンケートより（一部編集）
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "K.S.さん",
                age: "47歳・男性",
                text: "マッチングアプリで疲弊していました。「毎日一人だけ」という仕組みが、自分のペースで向き合えそうで嬉しい。",
              },
              {
                name: "M.T.さん",
                age: "44歳・女性",
                text: "出会い系は怖いと思っていたけど、写真なしで始められるのと、AIがサポートしてくれるのが安心感ある。",
              },
              {
                name: "H.N.さん",
                age: "52歳・男性",
                text: "プロフィールを書くのが苦手だったので、話すだけでいいのは本当にありがたい。楽しみにしてます。",
              },
            ].map((voice, i) => (
              <FadeInSection key={i} delay={i * 150}>
                <div className="bg-white p-6 rounded-2xl shadow-sm h-full">
                  <p className="text-[var(--color-text)] leading-relaxed mb-4 text-base">
                    「{voice.text}」
                  </p>
                  <div className="border-t border-[var(--color-cream-dark)] pt-3">
                    <p className="text-sm text-[var(--color-warm-dark)] font-medium">{voice.name}</p>
                    <p className="text-xs text-[var(--color-text-light)]">{voice.age}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-center text-[var(--color-warm-dark)] mb-12">
            よくあるご質問
          </h2>
          <div className="space-y-4">
            {FAQ_ITEMS.map((item, i) => (
              <FaqItem key={i} question={item.q} answer={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Numbers Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { num: "40+", label: "対象年齢" },
              { num: "1人/日", label: "厳選紹介" },
              { num: "0枚", label: "必要な写真" },
              { num: "24h", label: "AIサポート" },
            ].map((item, i) => (
              <FadeInSection key={i} delay={i * 100}>
                <div>
                  <p className="font-serif text-2xl md:text-3xl text-[var(--color-warm)] font-bold">{item.num}</p>
                  <p className="text-sm md:text-base text-[var(--color-text-light)] mt-1">{item.label}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl text-center text-[var(--color-warm-dark)] mb-8">
            読んで知る、40代からの出会い
          </h2>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {[
              {
                href: "/blog/over-40-dating-guide",
                title: "40代から始める出会い：失敗しない5つのステップ",
                time: "5分",
              },
              {
                href: "/blog/why-matching-apps-fail-for-40s",
                title: "40代がマッチングアプリで失敗する本当の理由",
                time: "4分",
              },
            ].map((article) => (
              <a
                key={article.href}
                href={article.href}
                className="block bg-white p-5 rounded-2xl hover:shadow-md transition-shadow"
              >
                <p className="text-sm text-[var(--color-text-light)] mb-1">📖 {article.time}で読めます</p>
                <h3 className="text-base md:text-lg font-medium text-[var(--color-warm-dark)]">
                  {article.title}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-24 px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-warm-dark)] mb-6">
            新しい一歩を、踏み出してみませんか？
          </h2>
          <p className="text-[var(--color-text-light)] text-base md:text-lg mb-10">
            まもなくオープン。事前登録いただいた方は、<br />
            <span className="text-[var(--color-warm)] font-medium">初月無料</span>でご利用いただけます。
          </p>

          {submitted ? (
            <div className="bg-white p-8 rounded-3xl shadow-sm animate-scale-in">
              <p className="text-2xl mb-2">🌸</p>
              <p className="text-xl text-[var(--color-warm-dark)] font-medium mb-2">
                ありがとうございます
              </p>
              <p className="text-[var(--color-text-light)] leading-relaxed mb-4">
                オープン時にメールでお知らせします。<br />
                あなたとの出会いを、楽しみにしています。
              </p>
              <div className="border-t border-[var(--color-cream-dark)] pt-4 mt-4">
                <p className="text-sm text-[var(--color-text-light)] mb-3">
                  待っている間に、ブログを読んでみませんか？
                </p>
                <a
                  href="/blog"
                  className="inline-block text-[var(--color-warm)] hover:text-[var(--color-warm-dark)] text-sm underline underline-offset-4"
                >
                  ブログを読む →
                </a>
              </div>
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
                  autoComplete="email"
                  aria-label="メールアドレス"
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
                <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                  <p className="text-red-700 text-sm md:text-base">{error}</p>
                </div>
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

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-sm border-t border-[var(--color-cream-dark)] px-4 py-3 shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
        <a
          href="#waitlist"
          className="block w-full bg-[var(--color-warm)] hover:bg-[var(--color-warm-dark)] text-white text-center py-3.5 rounded-xl text-base font-medium transition-all"
        >
          事前登録する（無料）
        </a>
      </div>

      {/* Footer */}
      <footer aria-label="フッター" className="py-12 pb-24 md:pb-12 px-6 bg-[var(--color-warm-dark)] text-white/60">
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
          <p className="text-xs md:text-sm mt-4">
            お問い合わせ: <a href="mailto:hello@yorisoi.love" className="hover:text-white/80 underline">hello@yorisoi.love</a>
          </p>
          <p className="text-xs md:text-sm mt-4">
            © 2026 よりそい All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
