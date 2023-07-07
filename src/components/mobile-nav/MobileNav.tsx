import { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import { useRouter } from 'next/router'
import Image from 'next/image'
import MenuList from '@/components/menu-list/MenuList'

import menuIcon from '@/assets/menu.svg'
import styles from '@/components/mobile-nav/MobileNav.module.css'
import logoEn from '@/assets/img/logo-header.jpg'
import closeIcon from '@/assets/close-icon.svg'

const MobileNavScreen = ({ onClose }: { onClose: () => void }) => {
  const year = new Date().getFullYear()

  const logo = logoEn

  

  return (
    <div className={`${styles['mobile-nav__screen']}`}>
      <div className={styles['mobile-nav__screen-logo']}>
        <Image src={logo} width={200} height={55} alt="logo" />
        <button type="button" onClick={onClose}>
          <Image src={closeIcon} alt="menu close icon" width={30} height={30} />
        </button>
      </div>
      <div className={styles['mobile-nav__screen-navItems']}>
        <nav className={styles['navbar-nav']}>
          <MenuList />
        </nav>
      </div>
      <div className={styles['mobile-nav__screen-footer']}>
        <p></p>
      </div>
    </div>
  )
}

const MobileNav = () => {
  const ref = useRef<Element | null>(null)
  const [showNavScreen, setShowNavScreen] = useState(false)

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>('#portal')
  }, [])

  const handleMenuClick = () => setShowNavScreen(true)

  const handleClose = () => setShowNavScreen(false)

  return (
    <div className={styles['mobile-nav']}>
      <button type="button" onClick={handleMenuClick}>
        <Image src={menuIcon} alt="menu icon" width={50} height={50} />
      </button>
      {showNavScreen &&
        ref.current &&
        ReactDOM.createPortal(
          <MobileNavScreen onClose={handleClose} />,
          ref.current
        )}
    </div>
  )
}

export default MobileNav
