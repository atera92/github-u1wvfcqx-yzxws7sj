import { NextResponse } from "next/server";
import { createClient } from "../../../lib/supabase/server";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");

  // ログイン後に飛ばしたい場所（今回は /mypage）
  let next = searchParams.get("next") ?? "/mypage";
  if (!next.startsWith("/")) next = "/mypage";

  if (code) {
    const supabase = createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    // ここで「ログイン済みの印（cookie）」が保存される
    if (!error) {
      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  // 失敗したらログイン画面へ
  return NextResponse.redirect(`${origin}/login`);
}