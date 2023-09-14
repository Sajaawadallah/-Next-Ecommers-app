'use client'
import GlobalStyle from '../../styles/globals'
import Theme from '../../styles/theme'
import StyledComponentsRegistry from '../../app/lib/registry'
import { SupFooter, SupFooterLinks, SupFooterWays, SupLayoutBackground } from '@/styles/suplayout'
import Link from 'next/link'
import { SUPFOOTERLINKS, PAYMENNTWAYS } from '@/constant/SupLayout'





export default function SupLayout({ children }) {



  return (
    <StyledComponentsRegistry>
      <Theme>
        <GlobalStyle />
        <SupLayoutBackground>
          {children}
          <SupFooter>
            <SupFooterWays>
              {PAYMENNTWAYS.map((way) => (<div key={way.id}>{way.svgurl}</div>))}
            </SupFooterWays>
            <SupFooterLinks>
              {SUPFOOTERLINKS.map((link) => (<Link key={link.id} href={link.url}>{link.title}</Link>))}
            </SupFooterLinks>


          </SupFooter>
        </SupLayoutBackground>
      </Theme>

    </StyledComponentsRegistry>

  )
}
