import type { Metadata } from 'next'
import '../styles/global.css'


export const metadata: Metadata = {
  title: 'Tetris',
  description: 'This',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="body">{children}</body>
    </html>
  )
}
