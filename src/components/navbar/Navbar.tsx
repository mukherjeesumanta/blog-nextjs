import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useScrollDirection } from 'react-use-scroll-direction'
import MenuList from '@/components/menu-list/MenuList'
import LanguageSwitcher from '@/components/language-switcher/LanguageSwitcher'
import MobileNav from '@/components/mobile-nav/MobileNav'
import { getLanguage } from '@/lib/utils'
import styles from '@/components/navbar/Navbar.module.css'
import logoAr from '@/assets/riyahd_air_logo_ar.svg'
import logoEn from '@/assets/riyahd_air_logo_en.svg'

const Navbar = ({}) => {
  const router = useRouter()
  const { isArabic } = getLanguage(router.pathname)

  const isHomePage = ['/', '/ar'].includes(router.pathname)
  const isMediaInnerPage = /media-center\/[^/]*\/?$/.test(router.pathname)
  const { isScrollingDown, isScrollingUp, isScrolling } = useScrollDirection()
  const [hideNavbar, setHideNavbar] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    if (isScrollingUp) return setHideNavbar(false)

    if (isScrollingDown && isScrolling) setHideNavbar(true)
  }, [isScrollingUp, isScrollingDown, isScrolling])

  const handleScroll = useCallback(() => setScrollY(window.scrollY), [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const logoImgCls = isHomePage && scrollY <= 100 ? 'invisible' : ''

  return (
    <div
      className={`navbar ${
        styles.navbar
      } animate__animated animate__fadeInDown ${
        isHomePage ? 'animate__delay-2s' : ''
      }`}
    >
      <div
        className={`grid grid-cols-12 ${styles['navbar__animation-wrapper']} ${
          (scrollY > 100 && isHomePage)
            ? styles['lavender-bg']
            : ''
        } ${
          !isHomePage
            ? styles['navbar__animation-wrapper-bg']
            : ''
        } ${
          hideNavbar
            ? 'animate__animated animate__slideOutUp'
            : 'animate__animated animate__slideInDown'
        }`}
      >
        <div className={`${styles['nav-logo']}`}>
          <Image
            src={isArabic ? logoAr : logoEn}
            width={200}
            height={55}
            className={`${styles.logo} ${logoImgCls}`}
            alt="Riyadhair logo"
          />
        </div>

        <nav className={`${styles['nav-menulist']} ${styles['navbar-nav']}`}>
          <MenuList />
        </nav>
        <div className={`${styles['nav-langswitcher']}`}>
          <LanguageSwitcher />
          <MobileNav />
        </div>
      </div>
    </div>
  )
}
//'col-span-2 ltr:text-right rtl:text-left'
export default Navbar