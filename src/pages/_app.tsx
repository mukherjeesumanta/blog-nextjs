import '@/styles/globals.css'
import '@/styles/animate.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'

const WOW = typeof window !== 'undefined' ? require('wow.js') : null

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    new WOW().init()
  }, [])

  return (
    <ParallaxProvider>
      <Component {...pageProps} />
      <div id="portal" />
    </ParallaxProvider>
  )
}
