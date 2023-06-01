import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import {Montserrat} from "next/font/google"
import Head from 'next/head'
import { useRouter } from 'next/router'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: ['--font-mont']
})

export default function App({ Component, pageProps }) {

  const router = useRouter();
  return (

    <>
    
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" /><meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
    </Head>
  <main className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}>
    <NavBar />
    <AnimatePresence mode="wait">

    <Component key={router.asPath} {...pageProps} />
    </AnimatePresence>
    <Footer />
  </main>
    </>
  )
}