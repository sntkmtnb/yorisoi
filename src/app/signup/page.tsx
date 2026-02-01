"use client";

import { useState } from "react";

export default function SignupPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    email: "",
    password: "",
    displayName: "",
    gender: "",
    birthYear: "",
    prefecture: "",
  });

  const prefectures = [
    "北海道", "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県",
    "茨城県", "栃木県", "群馬県", "埼玉県", "千葉県", "東京都", "神奈川県",
    "新潟県", "富山県", "石川県", "福井県", "山梨県", "長野県", "岐阜県",
    "静岡県", "愛知県", "三重県", "滋賀県", "京都府", "大阪府", "兵庫県",
    "奈良県", "和歌山県", "鳥取県", "島根県", "岡山県", "広島県", "山口県",
    "徳島県", "香川県", "愛媛県", "高知県", "福岡県", "佐賀県", "長崎県",
    "熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県",
  ];

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 30 }, (_, i) => currentYear - 40 - i);

  const handleSubmit = async () => {
    // TODO: Supabase Auth
    window.location.href = "/chat";
  };

  return (
    <div className="min-h-screen bg-[var(--color-cream)] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <a href="/" className="font-serif text-3xl text-[var(--color-warm-dark)]">
            よりそい
          </a>
          <p className="text-[var(--color-text-light)] mt-2">アカウント作成</p>
        </div>

        {/* Progress */}
        <div className="flex gap-2 mb-8">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`h-1 flex-1 rounded-full transition-colors ${
                s <= step ? "bg-[var(--color-warm)]" : "bg-[var(--color-cream-dark)]"
              }`}
            />
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-sm">
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-xl font-medium text-[var(--color-warm-dark)]">
                まずはメールアドレスから
              </h2>
              <p className="text-[var(--color-text-light)] text-sm">
                あなたの情報は安全に保護されます。
              </p>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="メールアドレス"
                className="w-full px-5 py-4 rounded-xl border border-[var(--color-cream-dark)] bg-[var(--color-cream)] focus:outline-none focus:ring-2 focus:ring-[var(--color-warm-light)]"
              />
              <input
                type="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                placeholder="パスワード（8文字以上）"
                className="w-full px-5 py-4 rounded-xl border border-[var(--color-cream-dark)] bg-[var(--color-cream)] focus:outline-none focus:ring-2 focus:ring-[var(--color-warm-light)]"
              />
              <button
                onClick={() => setStep(2)}
                disabled={!form.email || form.password.length < 8}
                className="w-full bg-[var(--color-warm)] hover:bg-[var(--color-warm-dark)] disabled:opacity-50 text-white py-4 rounded-xl text-lg transition-all"
              >
                次へ
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-xl font-medium text-[var(--color-warm-dark)]">
                あなたのことを少しだけ
              </h2>
              <p className="text-[var(--color-text-light)] text-sm">
                マッチングに使います。あとから変更できます。
              </p>
              <input
                type="text"
                value={form.displayName}
                onChange={(e) => setForm({ ...form, displayName: e.target.value })}
                placeholder="ニックネーム"
                className="w-full px-5 py-4 rounded-xl border border-[var(--color-cream-dark)] bg-[var(--color-cream)] focus:outline-none focus:ring-2 focus:ring-[var(--color-warm-light)]"
              />
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: "male", label: "男性" },
                  { value: "female", label: "女性" },
                  { value: "other", label: "その他" },
                ].map((g) => (
                  <button
                    key={g.value}
                    onClick={() => setForm({ ...form, gender: g.value })}
                    className={`py-3 rounded-xl border transition-all ${
                      form.gender === g.value
                        ? "border-[var(--color-warm)] bg-[var(--color-warm)] text-white"
                        : "border-[var(--color-cream-dark)] bg-[var(--color-cream)] text-[var(--color-text)]"
                    }`}
                  >
                    {g.label}
                  </button>
                ))}
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 py-4 rounded-xl border border-[var(--color-cream-dark)] text-[var(--color-text-light)] hover:bg-[var(--color-cream)]"
                >
                  戻る
                </button>
                <button
                  onClick={() => setStep(3)}
                  disabled={!form.displayName || !form.gender}
                  className="flex-1 bg-[var(--color-warm)] hover:bg-[var(--color-warm-dark)] disabled:opacity-50 text-white py-4 rounded-xl transition-all"
                >
                  次へ
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-xl font-medium text-[var(--color-warm-dark)]">
                あと少しだけ
              </h2>
              <select
                value={form.birthYear}
                onChange={(e) => setForm({ ...form, birthYear: e.target.value })}
                className="w-full px-5 py-4 rounded-xl border border-[var(--color-cream-dark)] bg-[var(--color-cream)] focus:outline-none focus:ring-2 focus:ring-[var(--color-warm-light)]"
              >
                <option value="">生まれ年を選択</option>
                {years.map((y) => (
                  <option key={y} value={y}>
                    {y}年（{currentYear - y}歳）
                  </option>
                ))}
              </select>
              <select
                value={form.prefecture}
                onChange={(e) => setForm({ ...form, prefecture: e.target.value })}
                className="w-full px-5 py-4 rounded-xl border border-[var(--color-cream-dark)] bg-[var(--color-cream)] focus:outline-none focus:ring-2 focus:ring-[var(--color-warm-light)]"
              >
                <option value="">お住まいの都道府県</option>
                {prefectures.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
              <div className="flex gap-4">
                <button
                  onClick={() => setStep(2)}
                  className="flex-1 py-4 rounded-xl border border-[var(--color-cream-dark)] text-[var(--color-text-light)] hover:bg-[var(--color-cream)]"
                >
                  戻る
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={!form.birthYear || !form.prefecture}
                  className="flex-1 bg-[var(--color-warm)] hover:bg-[var(--color-warm-dark)] disabled:opacity-50 text-white py-4 rounded-xl text-lg transition-all"
                >
                  はじめる
                </button>
              </div>
            </div>
          )}
        </div>

        <p className="text-center text-sm text-[var(--color-text-light)] mt-6">
          すでにアカウントをお持ちの方は{" "}
          <a href="/login" className="text-[var(--color-warm)] underline">
            ログイン
          </a>
        </p>
      </div>
    </div>
  );
}
