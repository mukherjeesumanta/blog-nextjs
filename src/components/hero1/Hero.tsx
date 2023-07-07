import { useRef, useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import {useTypewriter} from 'react-simple-typewriter'
import styles from '@/components/hero/Hero.module.css'
import heroImg from '@/assets/img/web-dev.jpg'


const Hero = () => {
  const router = useRouter()

  const [text, count] = useTypewriter({
    words: [
      'Hi, the name\'s Sumanta Mukherjee',
      'The guy who loves Coffee!',
      '<ButLovesToCodeMore />'
    ],
    loop: true,
    delaySpeed: 2000
  });

  /* const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (ref.current) ref.current.play()
  }, []) */

  return (
    <section className={styles.hero}>
      {/* <video
        ref={ref}
        playsInline
        muted
        loop
        className={`${styles['hero-video']} animate__animated animate__fadeIn animate__delay-1s`}
      >
        <source src="/videos/riyadh_air_hero_loop_multi.mp4" type="video/mp4" />
      </video> */}
      <Image src={heroImg} alt="Web development" />

      
      <div className="absolute"><span className='text-[3rem] text-[#fff]'>{ text }</span></div>
    </section>
  )
}

export default Hero

