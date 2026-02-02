import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "今日の出会い | よりそい",
  description: "AIが選んだ、あなたに合う人を紹介します。毎日一人だけの特別な出会い。",
};

export default function MatchLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
