import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

// TODO: Supabase移行後はこちらを使う
// import { createServiceClient } from "@/lib/supabase";

const DATA_FILE = path.join(process.cwd(), "data", "waitlist.json");

async function ensureDataDir() {
  const dir = path.dirname(DATA_FILE);
  try {
    await fs.mkdir(dir, { recursive: true });
  } catch {}
}

async function readWaitlist(): Promise<any[]> {
  try {
    const data = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, age } = body;

    if (!email || !age) {
      return NextResponse.json(
        { error: "メールアドレスと年代は必須です" },
        { status: 400 }
      );
    }

    // Supabase版（キー設定後に切り替え）
    // const supabase = createServiceClient();
    // const { data: existing } = await supabase
    //   .from("waitlist")
    //   .select("id")
    //   .eq("email", email)
    //   .single();
    // if (existing) {
    //   return NextResponse.json({ message: "すでに登録されています", duplicate: true });
    // }
    // const { error } = await supabase
    //   .from("waitlist")
    //   .insert({ email, age_group: age });
    // if (error) throw error;

    // ローカルJSON版（一時的）
    await ensureDataDir();
    const waitlist = await readWaitlist();

    if (waitlist.some((entry: any) => entry.email === email)) {
      return NextResponse.json(
        { message: "すでに登録されています", duplicate: true },
        { status: 200 }
      );
    }

    waitlist.push({
      email,
      age,
      createdAt: new Date().toISOString(),
      ip: request.headers.get("x-forwarded-for") || "unknown",
    });

    await fs.writeFile(DATA_FILE, JSON.stringify(waitlist, null, 2));

    return NextResponse.json({
      message: "登録完了",
      count: waitlist.length,
    });
  } catch (error) {
    console.error("Waitlist error:", error);
    return NextResponse.json(
      { error: "サーバーエラーが発生しました" },
      { status: 500 }
    );
  }
}

export async function GET() {
  const waitlist = await readWaitlist();
  return NextResponse.json({
    count: waitlist.length,
  });
}
