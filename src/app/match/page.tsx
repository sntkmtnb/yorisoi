"use client";

import { useState } from "react";

interface MatchProfile {
  id: string;
  displayName: string;
  age: number;
  prefecture: string;
  bio: string;
  aiReason: string;
  interests: string[];
  lifeStory: string;
}

// デモデータ
const DEMO_MATCH: MatchProfile = {
  id: "demo-1",
  displayName: "はるか",
  age: 45,
  prefecture: "東京都",
  bio: "読書と旅行が好きな、穏やかな性格の人です。最近は古都巡りにハマっています。",
  aiReason: "お二人とも「静かな時間」を大切にする方です。読書の趣味が共通していて、旅行先の好みも似ています。きっと、ゆったりとした会話が楽しめると思います。",
  interests: ["読書", "旅行", "カフェ巡り", "写真"],
  lifeStory: "20代は仕事一筋で、30代で少し立ち止まりました。そこから自分の本当にやりたいことを見つめ直して、今は好きなことを大切にする生活をしています。\n\n一人の時間も好きだけど、同じ温度感で過ごせる人がいたらいいなと、最近思うようになりました。",
};

export default function MatchPage() {
  const [match] = useState<MatchProfile>(DEMO_MATCH);
  const [showStory, setShowStory] = useState(false);
  const [responded, setResponded] = useState<"interested" | "passed" | null>(null);

  if (responded === "interested") {
    return (
      <div className="min-h-screen bg-[var(--color-cream)] flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <p className="text-6xl mb-6">✨</p>
          <h2 className="font-serif text-3xl text-[var(--color-warm-dark)] mb-4">
            気持ちを伝えました
          </h2>
          <p className="text-[var(--color-text-light)] leading-relaxed mb-8">
            {match.displayName}さんにも、あなたのことを紹介しています。
            お互いに興味を持ったら、メッセージが始まります。
          </p>
          <p className="text-[var(--color-warm)] font-medium mb-8">
            楽しみにしていてくださいね。
          </p>
          <a
            href="/chat"
            className="inline-block bg-[var(--color-warm)] hover:bg-[var(--color-warm-dark)] text-white px-8 py-4 rounded-xl transition-all"
          >
            AIと話す
          </a>
        </div>
      </div>
    );
  }

  if (responded === "passed") {
    return (
      <div className="min-h-screen bg-[var(--color-cream)] flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <p className="text-4xl mb-6">🌿</p>
          <h2 className="font-serif text-2xl text-[var(--color-warm-dark)] mb-4">
            大丈夫です
          </h2>
          <p className="text-[var(--color-text-light)] leading-relaxed mb-8">
            明日また、新しい出会いを届けます。<br />
            焦らなくて大丈夫。あなたに合う人は必ずいます。
          </p>
          <a
            href="/chat"
            className="inline-block bg-[var(--color-warm)] hover:bg-[var(--color-warm-dark)] text-white px-8 py-4 rounded-xl transition-all"
          >
            AIと話す
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--color-cream)]">
      {/* Header */}
      <header className="bg-white border-b border-[var(--color-cream-dark)] px-6 py-4">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <a href="/" className="font-serif text-xl text-[var(--color-warm-dark)]">
            よりそい
          </a>
          <p className="text-sm text-[var(--color-text-light)]">今日の出会い</p>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-6 py-8">
        {/* AI Introduction */}
        <div className="bg-white rounded-3xl p-6 shadow-sm mb-6">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--color-warm)] to-[var(--color-accent)] flex items-center justify-center text-white text-sm shrink-0">
              🤝
            </div>
            <div>
              <p className="text-sm text-[var(--color-warm)] font-medium mb-1">
                よりそいAIからの紹介
              </p>
              <p className="text-[var(--color-text)] leading-relaxed">
                {match.aiReason}
              </p>
            </div>
          </div>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm mb-6">
          {/* Avatar area */}
          <div className="h-48 bg-gradient-to-br from-[var(--color-warm-light)] to-[var(--color-accent-soft)] flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-white/30 backdrop-blur flex items-center justify-center text-4xl">
              😊
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-baseline gap-3 mb-2">
              <h2 className="font-serif text-2xl text-[var(--color-warm-dark)]">
                {match.displayName}
              </h2>
              <span className="text-[var(--color-text-light)]">
                {match.age}歳 · {match.prefecture}
              </span>
            </div>

            <p className="text-[var(--color-text)] leading-relaxed mb-4">
              {match.bio}
            </p>

            {/* Interests */}
            <div className="flex flex-wrap gap-2 mb-6">
              {match.interests.map((interest) => (
                <span
                  key={interest}
                  className="px-3 py-1 rounded-full bg-[var(--color-cream)] text-[var(--color-warm-dark)] text-sm"
                >
                  {interest}
                </span>
              ))}
            </div>

            {/* Life Story */}
            <button
              onClick={() => setShowStory(!showStory)}
              className="w-full text-left py-3 border-t border-[var(--color-cream-dark)] text-[var(--color-warm)] font-medium flex items-center justify-between"
            >
              <span>{match.displayName}さんのストーリー</span>
              <span className="text-lg">{showStory ? "△" : "▽"}</span>
            </button>

            {showStory && (
              <div className="py-4 text-[var(--color-text)] leading-relaxed whitespace-pre-wrap">
                {match.lifeStory}
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => setResponded("passed")}
            className="flex-1 py-4 rounded-xl border-2 border-[var(--color-cream-dark)] text-[var(--color-text-light)] hover:bg-white transition-all text-lg"
          >
            今日はパス
          </button>
          <button
            onClick={() => setResponded("interested")}
            className="flex-1 py-4 rounded-xl bg-[var(--color-warm)] hover:bg-[var(--color-warm-dark)] text-white transition-all text-lg shadow-lg"
          >
            話してみたい ✨
          </button>
        </div>

        <p className="text-center text-sm text-[var(--color-text-light)] mt-6">
          次の紹介は明日届きます
        </p>
      </div>
    </div>
  );
}
