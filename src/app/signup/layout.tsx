import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "アカウント作成 | よりそい",
  description: "よりそいのアカウントを作成して、AIとの会話から始めましょう。写真なし・メールアドレスだけで始められます。",
};

export default function SignupLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
