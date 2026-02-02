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
    agreeTerms: false,
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

  const stepTitles = ["アカウント情報", "プロフィール", "基本情報"];

  const handleSubmit = async () => {
    // TODO: Supabase Auth
    window.location.href = "/chat";
  };

  return (
    <div className="min-h-screen bg-[var(--color-cream)] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <a href="/" className="font-serif text-3xl text-[var(--color-warm-dark)]">
            よりそい
          </a>
          <p className="text-[var(--color-text-light)] mt-2 text-base">アカウント作成</p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex gap-2 mb-2">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-1.5 flex-1 rounded-full transition-colors ${
                  s <= step ? "bg-[var(--color-warm)]" : "bg-[var(--color-cream-dark)]"
                }`}
              />
            ))}
          </div>
          <p className="text-sm text-[var(--color-text-light)] text-center">
            ステップ {step} / 3：{stepTitles[step - 1]}
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm">
          {step === 1 && (
            <div className="space-y-5">
              <div>
                <h2 className="text-xl font-medium text-[var(--color-warm-dark)]">
                  まずはメールアドレスから
                </h2>
                <p className="text-[var(--color-text-light)] text-sm mt-1">
                  🔒 あなたの情報は暗号化して安全に保護されます
                </p>
              </div>
              <div>
                <label htmlFor="signup-email" className="block text-sm text-[var(--color-text-light)] mb-1.5">
                  メールアドレス
                </label>
                <input
                  id="signup-email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="example@email.com"
                  className="w-full px-5 py-4 rounded-xl border border-[var(--color-cream-dark)] bg-[var(--color-cream)] focus:outline-none focus:ring-2 focus:ring-[var(--color-warm-light)] text-base"
                />
              </div>
              <div>
                <label htmlFor="signup-password" className="block text-sm text-[var(--color-text-light)] mb-1.5">
                  パスワード（8文字以上）
                </label>
                <input
                  id="signup-password"
                  type="password"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  placeholder="8文字以上で入力"
                  className="w-full px-5 py-4 rounded-xl border border-[var(--color-cream-dark)] bg-[var(--color-cream)] focus:outline-none focus:ring-2 focus:ring-[var(--color-warm-light)] text-base"
                />
                {form.password.length > 0 && form.password.length < 8 && (
                  <p className="text-sm text-[var(--color-accent)] mt-1">
                    あと{8 - form.password.length}文字必要です
                  </p>
                )}
                {form.password.length >= 8 && (
                  <p className="text-sm text-[var(--color-safe)] mt-1">
                    ✅ パスワードOK
                  </p>
                )}
              </div>
              <button
                onClick={() => setStep(2)}
                disabled={!form.email || form.password.length < 8}
                className="w-full bg-[var(--color-warm)] hover:bg-[var(--color-warm-dark)] disabled:opacity-40 text-white py-4 rounded-xl text-lg transition-all"
              >
                次へ
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5">
              <div>
                <h2 className="text-xl font-medium text-[var(--color-warm-dark)]">
                  あなたのことを少しだけ
                </h2>
                <p className="text-[var(--color-text-light)] text-sm mt-1">
                  マッチングに使います。あとから変更できますのでお気軽に。
                </p>
              </div>
              <div>
                <label htmlFor="signup-nickname" className="block text-sm text-[var(--color-text-light)] mb-1.5">
                  ニックネーム
                </label>
                <input
                  id="signup-nickname"
                  type="text"
                  value={form.displayName}
                  onChange={(e) => setForm({ ...form, displayName: e.target.value })}
                  placeholder="お好きな名前でOK"
                  className="w-full px-5 py-4 rounded-xl border border-[var(--color-cream-dark)] bg-[var(--color-cream)] focus:outline-none focus:ring-2 focus:ring-[var(--color-warm-light)] text-base"
                />
                <p className="text-xs text-[var(--color-text-light)] mt-1">
                  ※ 本名でなくて構いません。相手に表示される名前です
                </p>
              </div>
              <div>
                <p className="block text-sm text-[var(--color-text-light)] mb-2">性別</p>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: "male", label: "男性" },
                    { value: "female", label: "女性" },
                    { value: "other", label: "その他" },
                  ].map((g) => (
                    <button
                      key={g.value}
                      onClick={() => setForm({ ...form, gender: g.value })}
                      className={`py-3.5 rounded-xl border-2 transition-all text-base ${
                        form.gender === g.value
                          ? "border-[var(--color-warm)] bg-[var(--color-warm)] text-white"
                          : "border-[var(--color-cream-dark)] bg-[var(--color-cream)] text-[var(--color-text)] hover:border-[var(--color-warm-light)]"
                      }`}
                    >
                      {g.label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 py-4 rounded-xl border border-[var(--color-cream-dark)] text-[var(--color-text-light)] hover:bg-[var(--color-cream)] text-base"
                >
                  戻る
                </button>
                <button
                  onClick={() => setStep(3)}
                  disabled={!form.displayName || !form.gender}
                  className="flex-1 bg-[var(--color-warm)] hover:bg-[var(--color-warm-dark)] disabled:opacity-40 text-white py-4 rounded-xl transition-all text-base"
                >
                  次へ
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-5">
              <div>
                <h2 className="text-xl font-medium text-[var(--color-warm-dark)]">
                  あと少しで完了です 🎉
                </h2>
                <p className="text-[var(--color-text-light)] text-sm mt-1">
                  より良いマッチングのためにお聞きします
                </p>
              </div>
              <div>
                <label htmlFor="signup-birthyear" className="block text-sm text-[var(--color-text-light)] mb-1.5">
                  生まれ年
                </label>
                <select
                  id="signup-birthyear"
                  value={form.birthYear}
                  onChange={(e) => setForm({ ...form, birthYear: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl border border-[var(--color-cream-dark)] bg-[var(--color-cream)] focus:outline-none focus:ring-2 focus:ring-[var(--color-warm-light)] text-base"
                >
                  <option value="">選択してください</option>
                  {years.map((y) => (
                    <option key={y} value={y}>
                      {y}年（{currentYear - y}歳）
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="signup-prefecture" className="block text-sm text-[var(--color-text-light)] mb-1.5">
                  お住まいの都道府県
                </label>
                <select
                  id="signup-prefecture"
                  value={form.prefecture}
                  onChange={(e) => setForm({ ...form, prefecture: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl border border-[var(--color-cream-dark)] bg-[var(--color-cream)] focus:outline-none focus:ring-2 focus:ring-[var(--color-warm-light)] text-base"
                >
                  <option value="">選択してください</option>
                  {prefectures.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>

              {/* 利用規約同意 */}
              <label className="flex items-start gap-3 cursor-pointer p-3 rounded-xl hover:bg-[var(--color-cream)] transition-colors">
                <input
                  type="checkbox"
                  checked={form.agreeTerms}
                  onChange={(e) => setForm({ ...form, agreeTerms: e.target.checked })}
                  className="mt-1 w-5 h-5 accent-[var(--color-warm)] shrink-0"
                />
                <span className="text-sm text-[var(--color-text-light)] leading-relaxed">
                  <a href="/terms" target="_blank" className="text-[var(--color-warm)] underline">利用規約</a>
                  と
                  <a href="/privacy" target="_blank" className="text-[var(--color-warm)] underline">プライバシーポリシー</a>
                  に同意します
                </span>
              </label>

              <div className="flex gap-3">
                <button
                  onClick={() => setStep(2)}
                  className="flex-1 py-4 rounded-xl border border-[var(--color-cream-dark)] text-[var(--color-text-light)] hover:bg-[var(--color-cream)] text-base"
                >
                  戻る
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={!form.birthYear || !form.prefecture || !form.agreeTerms}
                  className="flex-1 bg-[var(--color-warm)] hover:bg-[var(--color-warm-dark)] disabled:opacity-40 text-white py-4 rounded-xl text-lg transition-all"
                >
                  はじめる ✨
                </button>
              </div>
            </div>
          )}
        </div>

        <p className="text-center text-sm md:text-base text-[var(--color-text-light)] mt-6">
          すでにアカウントをお持ちの方は{" "}
          <a href="/login" className="text-[var(--color-warm)] underline">
            ログイン
          </a>
        </p>
      </div>
    </div>
  );
}
