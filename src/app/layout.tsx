import './globals.css'
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree,
} from 'next/font/google'
import { ReactNode } from 'react'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Hero } from '@/components/Hero'
import { Profile } from '@/components/Profile'
import { SignIn } from '@/components/SignIn'
import { Copyright } from '@/components/Copyright'
import { cookies } from 'next/headers'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree',
})

export const metadata = {
  title: 'Nlw SpaceTime',
  description:
    'Uma cápsula do tempo contruída com Next.js, TailwindCSS e React.js',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const isAuthenticated = cookies().has('token')

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`font-sans text-gray-100  dark:bg-gray-900 ${roboto.variable} ${baiJamjuree.variable}`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <main className="grid min-h-screen grid-cols-2">
            {/* Left */}
            <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
              {/* Blur */}
              <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />
              {/* Stripes */}
              <div className="absolute bottom-0 right-1 top-0 w-2 bg-stripes " />
              {isAuthenticated ? <Profile /> : <SignIn />}
              {/* Hero  */}
              <Hero />
              {/* Copyright */}
              <Copyright />
            </div>
            {/* Right */}
            <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
              {children}
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
