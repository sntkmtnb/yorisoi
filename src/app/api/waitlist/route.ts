import { NextRequest, NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase";
import { promises as fs } from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "waitlist.json");
const USE_SUPABASE = !!process.env.SUPABASE_SERVICE_ROLE_KEY && !!process.env.NEXT_PUBLIC_SUPABASE_URL;

// Local JSON fallback
async function ensureDataDir() {
  try { await fs.mkdir(path.dirname(DATA_FILE), { recursive: true }); } catch {}
}
async function readWaitlist(): Promise<any[]> {
  try { return JSON.parse(await fs.readFile(DATA_FILE, "utf-8")); } catch { return []; }
}

export async function POST(request: NextRequest) {
  try {
    const { email, age } = await request.json();
    if (!email || !age) {
      return NextResponse.json({ error: "メールアドレスと年代は必須です" }, { status: 400 });
    }

    if (USE_SUPABASE) {
      const supabase = createServiceClient();
      
      // Check duplicate
      const { data: existing } = await supabase
        .from("waitlist")
        .select("id")
        .eq("email", email)
        .single();
      
      if (existing) {
        return NextResponse.json({ message: "すでに登録されています", duplicate: true });
      }

      const { error } = await supabase.from("waitlist").insert({
        email,
        age_group: age,
        ip: request.headers.get("x-forwarded-for") || "unknown",
      });

      if (error) throw error;

      const { count } = await supabase.from("waitlist").select("*", { count: "exact", head: true });
      return NextResponse.json({ message: "登録完了", count });
    }

    // Local JSON fallback
    await ensureDataDir();
    const waitlist = await readWaitlist();
    if (waitlist.some((e: any) => e.email === email)) {
      return NextResponse.json({ message: "すでに登録されています", duplicate: true });
    }
    waitlist.push({ email, age, createdAt: new Date().toISOString(), ip: request.headers.get("x-forwarded-for") || "unknown" });
    await fs.writeFile(DATA_FILE, JSON.stringify(waitlist, null, 2));
    return NextResponse.json({ message: "登録完了", count: waitlist.length });
  } catch (error) {
    console.error("Waitlist error:", error);
    return NextResponse.json({ error: "サーバーエラーが発生しました" }, { status: 500 });
  }
}

export async function GET() {
  if (USE_SUPABASE) {
    const supabase = createServiceClient();
    const { count } = await supabase.from("waitlist").select("*", { count: "exact", head: true });
    return NextResponse.json({ count });
  }
  const waitlist = await readWaitlist();
  return NextResponse.json({ count: waitlist.length });
}
