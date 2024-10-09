import '../styles/globals.css'
import { Poppins } from 'next/font/google'
import Header from '../components/Header'
import Footer from '../components/Footer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

export const metadata = {
  title: 'Inscrypt - Design, Develop, Build',
  description: 'We deliver seamless websites built around your brand.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body className="min-h-screen flex flex-col font-poppins">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}