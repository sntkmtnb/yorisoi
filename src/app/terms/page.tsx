import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "利用規約 | よりそい",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[var(--color-cream)]">
      <header className="bg-white border-b border-[var(--color-cream-dark)] px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <a href="/" className="font-serif text-xl text-[var(--color-warm-dark)]">よりそい</a>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="font-serif text-3xl text-[var(--color-warm-dark)] mb-8">利用規約</h1>
        
        <div className="space-y-8 text-[var(--color-text)] leading-relaxed">
          <p>最終更新日: 2026年2月1日</p>

          <section>
            <h2 className="text-xl font-medium text-[var(--color-warm-dark)] mb-3">第1条（適用）</h2>
            <p>本規約は、よりそい（以下「本サービス」）の利用に関する条件を定めるものです。ユーザーは本規約に同意の上、本サービスを利用するものとします。</p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-[var(--color-warm-dark)] mb-3">第2条（利用資格）</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>18歳以上であること（高校生を除く）</li>
              <li>独身であること（既婚者の利用は禁止）</li>
              <li>日本国内に居住していること</li>
              <li>本人確認書類の提出に同意すること</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-medium text-[var(--color-warm-dark)] mb-3">第3条（禁止事項）</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>虚偽の情報を登録する行為</li>
              <li>他のユーザーへの嫌がらせ、脅迫行為</li>
              <li>営業、勧誘、宣伝目的での利用</li>
              <li>わいせつな内容の送信</li>
              <li>他人になりすます行為</li>
              <li>サービスの運営を妨害する行為</li>
              <li>その他、運営が不適切と判断する行為</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-medium text-[var(--color-warm-dark)] mb-3">第4条（料金・決済）</h2>
            <p>有料プランの料金は、サービス内に掲示する金額とします。決済はクレジットカードにて行います。契約期間の途中での解約による返金は行いません。</p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-[var(--color-warm-dark)] mb-3">第5条（AIサービス）</h2>
            <p>本サービスはAI（人工知能）を活用しています。AIによるプロフィール生成、マッチング提案、会話サポートは参考情報であり、その正確性を保証するものではありません。</p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-[var(--color-warm-dark)] mb-3">第6条（退会）</h2>
            <p>ユーザーはいつでも退会することができます。退会時、ユーザーのデータは30日以内に削除されます。</p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-[var(--color-warm-dark)] mb-3">第7条（免責事項）</h2>
            <p>本サービスを通じて行われたユーザー間のやり取りについて、運営は一切の責任を負いません。出会いの成立を保証するものではありません。</p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-[var(--color-warm-dark)] mb-3">第8条（規約の変更）</h2>
            <p>運営は、本規約をいつでも変更できるものとします。変更後の規約は、本サービス上に掲載した時点から効力を生じるものとします。</p>
          </section>
        </div>
      </div>
    </div>
  );
}
