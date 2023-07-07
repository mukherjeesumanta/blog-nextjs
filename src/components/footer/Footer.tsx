import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { getLanguage } from '@/lib/utils'

import styles from '@/components/footer/Footer.module.css'
import linkedInLogo from '@/assets/linkedin.svg'
//import twitterInLogo from '@/assets/twitter.svg';
import footerLogo from '@/assets/footerLogo.svg'
import CookieBanner from '@/components/cookie-banner/CookieBanner'

const menuContent = {
  en: {
    home: 'Home',
    about: 'About Us',
    media_center: 'Media Center',
    careers: 'Careers',
    contact: 'Contact Us',
    privacy: 'Privacy policy',
    privacy_filename: 'WebsitePrivacyPolicy_EN_09032023.pdf',
    terms_of_use: 'Terms of Use',
    terms_of_use_filename: 'WebsiteTermsOfUse_EN_06032023.pdf',
    copyright_text: ' 2023 Riyadh Air | All Rights Reserved'
  },
  ar: {
    home: 'الصفحة الرئيسية',
    about: 'من نحن',
    media_center: 'المركز الإعلامي',
    careers: 'الوظائف',
    contact: 'تواصل معنا',
    privacy: 'الشروط والأحكام',
    privacy_filename: 'WebsitePrivacyPolicy_AR_09032023.pdf',
    terms_of_use: 'شروط الاستخدام',
    terms_of_use_filename: 'WebsiteTermsOfUse_EN_06032023.pdf',
    copyright_text: 'طيران الرياض | جميع الحقوق محفوظة 2023 '
  }
}

const Footer = () => {
  //TagManager.initialize(tagManagerArgs)
  const router = useRouter()
  const { isArabic } = getLanguage(router.pathname)
  const routePrefix = isArabic ? '/ar' : ''
  const lang = isArabic ? 'ar' : 'en'

  const year = new Date().getFullYear()

  return (
    <>
      <div className={styles['footer']}>
        <div className={styles['footer__links']}>
          <ul>
            <li>
              <Link href={`${routePrefix}/`}>{menuContent[lang].home}</Link>
            </li>
            <li>
              <Link href={`${routePrefix}/about-us`}>
                {menuContent[lang].about}
              </Link>
            </li>
            <li>
              <Link href={`${routePrefix}/media-center`}>
                {menuContent[lang].media_center}
              </Link>
            </li>
            <li>
              <Link href={`${routePrefix}/careers`}>
                {menuContent[lang].careers}
              </Link>
            </li>
            <li>
              <Link href={`${routePrefix}/contact-us`}>
                {menuContent[lang].contact}
              </Link>
            </li>
            <li>
              <Link
                href={`/pdf/policies/${menuContent[lang].privacy_filename}`}
                target="_blank"
              >
                {menuContent[lang].privacy}
              </Link>
            </li>
            <li>
              <Link
                href={`/pdf/policies/${menuContent[lang].terms_of_use_filename}`}
                target="_blank"
              >
                {menuContent[lang].terms_of_use}
              </Link>
            </li>
          </ul>
        </div>
        <div
          className={`${styles['footer__handles']} ${styles['footer__handles-mobile']}`}
        >
          <Link
            href="https://sa.linkedin.com/company/riyadhair?trk=public_post_feed-actor-name"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={linkedInLogo} alt="LinkedIn page" />
          </Link>
          {/* <Link href="/about-us">
          <Image src={twitterInLogo} alt="Twitter" />
        </Link> */}
        </div>
        <div className={styles['footer__logo']}>
          <Image src={footerLogo} alt="LinkedIn" />
          <p>© {menuContent[lang].copyright_text} </p>
        </div>
        <div className={styles['footer__handles']}>
          <Link
            href="https://sa.linkedin.com/company/riyadhair?trk=public_post_feed-actor-name"
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
      <CookieBanner />
    </>
  )
}

export default Footer
