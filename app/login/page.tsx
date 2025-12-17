"use client";

import { createClient } from "../../lib/supabase/client";

export default function LoginPage() {
  const onGoogleLogin = async () => {
    const supabase = createClient();

    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        // Googleログイン後、ここに戻ってきてセッションを保存する
        redirectTo: `${window.location.origin}/auth/callback?next=/mypage`,
      },
    });
  };

  return (
    <main style={{ padding: 20 }}>
      <h1>ログイン</h1>
      <p>Googleでログインします。</p>

      <button onClick={onGoogleLogin} style={{ padding: "10px 14px" }}>
        Googleでログイン
      </button>
    </main>
  );
}