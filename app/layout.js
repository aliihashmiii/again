import './globals.css'

export const metadata = {
  title: 'again - Premium Footwear Marketplace',
  description: 'All brands under one roof',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
