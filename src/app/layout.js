'use client'
import { Inter } from 'next/font/google'
import Footer from './components/organisms/Footer/page'
import GlobalStyle from './styles/globals'
import Theme from './styles/theme'
import StyledComponentsRegistry from './lib/registry'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Theme>
            <GlobalStyle />
            {children}
            <Footer />
          </Theme>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
