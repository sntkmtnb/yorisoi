import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ログイン | よりそい",
  description: "よりそいにログインして、AIとの会話やマッチングを続けましょう。",
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
