import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { SocialIcon } from "react-social-icons";
import styles from '@/components/footer/Footer.module.css'


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
        
        <div className={styles['footer__handles']}>
          
          <SocialIcon
            url="https://www.linkedin.com/in/sumanta-mukherjee-18a88b21/"
            fgColor="gray"
            bgColor="transparent"
            target="_blank"
          />
          <SocialIcon
            url="https://www.facebook.com/its.sumanta"
            fgColor="gray"
            bgColor="transparent"
            target="_blank"
          />
          {/* <Link href="/about-us">
          <Image src={twitterInLogo} alt="Twitter" />
        </Link> */}
        </div>
      </div>
    </>
  )
}

export default Footer
