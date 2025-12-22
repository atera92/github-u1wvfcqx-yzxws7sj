import { Suspense } from "react";
import MypageClient from "./MypageClient";

export default function MyPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MypageClient />
    </Suspense>
  );
}
