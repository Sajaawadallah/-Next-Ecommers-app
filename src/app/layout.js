
import GetLayout from '@/components/layouts/GetLayout';
import getLayout from '@/components/layouts/getLayout'
import { Inter } from 'next/font/google'
import { usePathname } from 'next/navigation';


const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {

  return (

    <html lang="en">

      <body className={inter.className}>
        <GetLayout>
          {children}
        </GetLayout>


      </body>
    </html>


  )
}
