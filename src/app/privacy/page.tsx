import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー | よりそい",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[var(--color-cream)]">
      <header className="bg-white border-b border-[var(--color-cream-dark)] px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <a href="/" className="font-serif text-xl text-[var(--color-warm-dark)]">よりそい</a>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="font-serif text-3xl text-[var(--color-warm-dark)] mb-8">プライバシーポリシー</h1>
        
        <div className="space-y-8 text-[var(--color-text)] leading-relaxed">
          <p>最終更新日: 2026年2月1日</p>

          <section>
            <h2 className="text-xl font-medium text-[var(--color-warm-dark)] mb-3">1. 収集する情報</h2>
            <p>本サービスでは、以下の情報を収集します：</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>メールアドレス、ニックネーム、性別、生年、居住地域</li>
              <li>AIとの会話内容（プロフィール生成、マッチングに使用）</li>
              <li>利用状況（ログイン日時、マッチング反応など）</li>
              <li>本人確認書類（年齢確認目的のみ）</li>
              <li>決済情報（Stripeを通じて処理、当社では保持しません）</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-medium text-[var(--color-warm-dark)] mb-3">2. 情報の利用目的</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>サービスの提供・改善</li>
              <li>AIによるプロフィール生成・マッチング</li>
              <li>カスタマーサポート</li>
              <li>サービスに関するお知らせの送信</li>
              <li>不正利用の防止</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-medium text-[var(--color-warm-dark)] mb-3">3. AIによるデータ処理</h2>
            <p>AIとの会話内容は、プロフィールの自動生成およびマッチング精度の向上のために処理されます。会話内容は暗号化して保存され、他のユーザーに直接共有されることはありません。AIが生成したプロフィール情報のみが、マッチング相手に表示されます。</p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-[var(--color-warm-dark)] mb-3">4. 情報の共有</h2>
            <p>以下の場合を除き、個人情報を第三者に提供することはありません：</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>ユーザーの同意がある場合</li>
              <li>法令に基づく場合</li>
              <li>サービス提供に必要な業務委託先（Stripe, Supabase等）</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-medium text-[var(--color-warm-dark)] mb-3">5. データの保護</h2>
            <p>個人情報は、SSL暗号化通信、アクセス制限、データベース暗号化により保護されます。</p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-[var(--color-warm-dark)] mb-3">6. データの保持・削除</h2>
            <p>アカウント情報は退会後30日以内に削除します。法令で定める保存義務がある場合を除きます。</p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-[var(--color-warm-dark)] mb-3">7. ユーザーの権利</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>個人情報の開示・訂正・削除の請求</li>
              <li>利用停止の請求</li>
              <li>データのエクスポート</li>
            </ul>
            <p className="mt-2">上記の請求は、サービス内のお問い合わせフォームから行えます。</p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-[var(--color-warm-dark)] mb-3">8. お問い合わせ</h2>
            <p>プライバシーに関するお問い合わせは、以下までご連絡ください：</p>
            <p className="mt-2">メール: privacy@yorisoi.love</p>
          </section>
        </div>
      </div>
    </div>
  );
}
