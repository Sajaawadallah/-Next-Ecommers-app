'use client'
import Footer from '../organisms/Footer'
import GlobalStyle from '../../styles/globals'
import Theme from '../../styles/theme'
import StyledComponentsRegistry from '../../app/lib/registry'


export default function MainLayout({ children }) {
  return (

    <StyledComponentsRegistry>

      <Theme>
        <GlobalStyle />
        {children}
        <Footer />

      </Theme>

    </StyledComponentsRegistry>

  )
}
