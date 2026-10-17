import type { ReactNode } from 'react'
import '../globals.css'

/** `/` has no content of its own; it only sends visitors to their language. */
export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
