import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AIチャット | よりそい",
  description: "よりそいのAIコンシェルジュとお話しましょう。あなたの魅力を引き出す、温かい会話が待っています。",
};

export default function ChatLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
