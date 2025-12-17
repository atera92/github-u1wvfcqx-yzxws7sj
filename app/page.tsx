import Link from "next/link";
import { createClient } from "../lib/supabase/server";

export default async function Home() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <main style={{ padding: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 12,
        }}
      >
        <h1 style={{ margin: 0 }}>トップページ</h1>

        {user ? (
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ fontSize: 12, color: "#64748b", fontWeight: 700 }}>
              ログイン中: {user.email ?? user.id}
            </span>
            <Link href="/logout" style={{ fontWeight: 700, color: "#dc2626" }}>
              ログアウト
            </Link>
          </div>
        ) : (
          <Link href="/login" style={{ fontWeight: 700, color: "#2563eb" }}>
            ログイン
          </Link>
        )}
      </div>

      <p style={{ marginTop: 12 }}>行き先を選んでください。</p>

      <ul style={{ display: "grid", gap: "8px", paddingLeft: "18px" }}>
        <li>
          <Link href="/interview">→ 面接ページへ移動 (/interview)</Link>
        </li>
        <li>
          <Link href="/mypage">→ マイページへ移動 (/mypage)</Link>
        </li>
      </ul>
    </main>
  );
}