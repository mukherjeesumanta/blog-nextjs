import { useRef, useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { getLanguage } from '@/lib/utils'
import styles from '@/components/hero/Hero.module.css'
import logoAr from '@/assets/riyahd_air_logo_ar.svg'
import logoEn from '@/assets/riyahd_air_logo_en.svg'
import arrowHero from '@/assets/arrow-hero.svg'

const Hero = () => {
  const router = useRouter()
  const { isArabic } = getLanguage(router.pathname)

  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (ref.current) ref.current.play()
  }, [])

  return (
    <section className={styles.hero}>
      <video
        ref={ref}
        playsInline
        muted
        loop
        className={`${styles['hero-video']} animate__animated animate__fadeIn animate__delay-1s`}
      >
        <source src="/videos/riyadh_air_hero_loop_multi.mp4" type="video/mp4" />
      </video>

      <Image
        src={isArabic ? logoAr : logoEn}
        className={`${styles['hero-logo']} animate__animated animate__fadeInUpTitle`}
        alt="Riyadhair logo"
      />

      <a
        href="#section-vision"
        className={`${styles['hero-arrow']} animate__animated animate__fadeInUp animate__delay-2s`}
      >
        <Image
          src={arrowHero}
          alt="go down"
          className="animate__animated animate__pulse animate__infinite h-[24px]"
        />
      </a>
    </section>
  )
}

export default Hero
