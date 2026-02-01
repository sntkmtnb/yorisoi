"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
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
          <p className="text-[var(--color-text-light)] mt-2">おかえりなさい</p>
        </div>

        <form onSubmit={handleLogin} className="bg-white rounded-3xl p-8 shadow-sm space-y-6">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="メールアドレス"
            required
            className="w-full px-5 py-4 rounded-xl border border-[var(--color-cream-dark)] bg-[var(--color-cream)] focus:outline-none focus:ring-2 focus:ring-[var(--color-warm-light)]"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="パスワード"
            required
            className="w-full px-5 py-4 rounded-xl border border-[var(--color-cream-dark)] bg-[var(--color-cream)] focus:outline-none focus:ring-2 focus:ring-[var(--color-warm-light)]"
          />
          <button
            type="submit"
            className="w-full bg-[var(--color-warm)] hover:bg-[var(--color-warm-dark)] text-white py-4 rounded-xl text-lg transition-all"
          >
            ログイン
          </button>
        </form>

        <p className="text-center text-sm text-[var(--color-text-light)] mt-6">
          アカウントをお持ちでない方は{" "}
          <a href="/signup" className="text-[var(--color-warm)] underline">
            新規登録
          </a>
        </p>
      </div>
    </div>
  );
}
