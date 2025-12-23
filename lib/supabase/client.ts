import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    // ここを ANON_KEY から PUBLISHABLE_KEY に変更して、Vercel設定と合わせます
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
  );
}