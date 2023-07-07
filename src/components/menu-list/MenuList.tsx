import { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'


import styles from '@/components/menu-list/MenuList.module.css'

const MenuList = () => {
  const router = useRouter()
  

  const menuContent = {
    en: {
      home: 'Home',
      media_center: 'Blogs',
    }
  }

  const isHomePage = ['/'].includes(router.pathname)
  const letterSpacing = 'tracking-[0.24em]'

  return (
    <ul>
      <li>
        <Link
          href={`/`}
          className={`${
            isHomePage ? styles['nav-active'] : ''
          } ${letterSpacing}`}
        >
          {menuContent['en'].home}
        </Link>
      </li>
      
      <li>
        <Link
          href={`/media-center`}
          className={`${
            router.pathname.indexOf('/media-center') >= 0
              ? styles['nav-active']
              : ''
          } ${letterSpacing}`}
        >
          {menuContent['en'].media_center}
        </Link>
      </li>
    </ul>
  )
}

export default MenuList
