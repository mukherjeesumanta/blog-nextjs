import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import styles from '@/components/footer/Footer.module.css'
import linkedInLogo from '@/assets/linkedin.svg'

const menuContent = {
  en: {
    home: 'Home',
    media_center: 'Blogs'
  }
}

const Footer = () => {
  //TagManager.initialize(tagManagerArgs)
  const router = useRouter()

  const year = new Date().getFullYear()

  return (
    <>
      <div className={styles['footer']}>
        <div className={styles['footer__links']}>
          <ul>
            <li>
              <Link href={`/`}>{menuContent['en'].home}</Link>
            </li>
            <li>
              <Link href={`/media-center`}>
                {menuContent['en'].media_center}
              </Link>
            </li>
          </ul>
        </div>
        <div
          className={`${styles['footer__handles']} ${styles['footer__handles-mobile']}`}
        >
          <Link
            href="https://www.linkedin.com/in/sumanta-mukherjee-18a88b21/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={linkedInLogo} alt="LinkedIn page" />
          </Link>
          {/* <Link href="/about-us">
          <Image src={twitterInLogo} alt="Twitter" />
        </Link> */}
        </div>
        <div className={styles['footer__handles']}>
          <Link
            href="https://www.linkedin.com/in/sumanta-mukherjee-18a88b21/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={linkedInLogo} alt="LinkedIn page" />
          </Link>
          {/* <Link href="/about-us">
          <Image src={twitterInLogo} alt="Twitter" />
        </Link> */}
        </div>
      </div>
    </>
  )
}

export default Footer
