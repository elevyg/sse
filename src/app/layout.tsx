import "@sse/styles/globals.css";

import { Roboto_Mono } from "next/font/google";
import { cookies } from "next/headers";

import { TRPCReactProvider } from "@sse/trpc/react";

const inter = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Sociedad secreta por la escalada",
  description: "Organización secreta por la escalada",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <TRPCReactProvider cookies={cookies().toString()}>
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
