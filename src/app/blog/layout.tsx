import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ブログ | よりそい",
  description: "40代からの出会いに役立つ情報をお届けします。マッチングアプリの選び方、パートナー探しのコツなど。",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
