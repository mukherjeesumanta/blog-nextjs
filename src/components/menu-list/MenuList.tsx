import { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { getLanguage } from '@/lib/utils'

import styles from '@/components/menu-list/MenuList.module.css'

const MenuList = () => {
  const router = useRouter()
  const { isArabic } = getLanguage(router.pathname)
  const routePrefix = isArabic ? '/ar' : ''
  const lang = isArabic ? 'ar' : 'en'

  const menuContent = {
    en: {
      home: 'Home',
      about: 'About Us',
      media_center: 'Media Center',
      careers: 'Careers',
      contact: 'Contact Us'
    },
    ar: {
      home: 'الصفحة الرئيسية',
      about: 'من نحن',
      media_center: 'المركز الإعلامي',
      careers: 'الوظائف',
      contact: 'تواصل معنا'
    }
  }

  const isHomePage = ['/', '/ar'].includes(router.pathname)
  const letterSpacing = isArabic ? '' : 'tracking-[0.24em]'

  return (
    <ul>
      <li>
        <Link
          href={`${routePrefix}/`}
          className={`${
            isHomePage ? styles['nav-active'] : ''
          } ${letterSpacing}`}
        >
          {menuContent[lang].home}
        </Link>
      </li>
      <li>
        <Link
          href={`${routePrefix}/about-us`}
          className={`${
            router.pathname.indexOf('/about-us') >= 0
              ? styles['nav-active']
              : ''
          } ${letterSpacing}`}
        >
          {menuContent[lang].about}
        </Link>
      </li>
      <li>
        <Link
          href={`${routePrefix}/media-center`}
          className={`${
            router.pathname.indexOf('/media-center') >= 0
              ? styles['nav-active']
              : ''
          } ${letterSpacing}`}
        >
          {menuContent[lang].media_center}
        </Link>
      </li>
      <li>
        <Link
          href={`${routePrefix}/careers`}
          className={`${
            router.pathname.indexOf('/careers') >= 0 ? styles['nav-active'] : ''
          } ${letterSpacing}`}
        >
          {menuContent[lang].careers}
        </Link>
      </li>
      <li>
        <Link
          href={`${routePrefix}/contact-us`}
          className={`${
            router.pathname.indexOf('/contact-us') >= 0
              ? styles['nav-active']
              : ''
          } ${letterSpacing}`}
        >
          {menuContent[lang].contact}
        </Link>
      </li>
    </ul>
  )
}

export default MenuList
