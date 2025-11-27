import './globals.css'

export const metadata = {
  title: 'React 19 + Next.js 15 Demo - Server Components',
  description: 'Demo of React 19 features with Next.js 15 Server Components',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
