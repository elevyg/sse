import Link from "next/link";

import { api } from "@sse/trpc/server";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white">
      <div>
        <h1>Sociedad secreta por la escalada</h1>
      </div>
    </main>
  );
}
