import "./globals.css"
import type { Metadata } from "next"
import { RESTAURANT_NAME } from "@/src/lib/data"

export const metadata: Metadata = {
  title: `Scrambled - ${RESTAURANT_NAME}`,
  description: "Restaurant CRM",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line */}
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Space+Grotesk:wght@300..700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>{children}</body>
    </html>
  )
}
