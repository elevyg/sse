import Link from "next/link";

import { CreatePost } from "@sse/app/_components/create-post";
import { api } from "@sse/trpc/server";

export default async function Home() {
  const hello = await api.post.hello.query({ text: "from tRPC" });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white">
      <div>
        <h1>Sociedad secreta por la escalada</h1>
      </div>
    </main>
  );
}
