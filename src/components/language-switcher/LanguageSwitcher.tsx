import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
/* import Image from 'next/image'
import downArrowIcon from '@/assets/down-arrow.svg' */
import useOutsideClick from '@/hooks/useOutsideClick'
import { getLanguage } from '@/lib/utils'
import styles from '@/components/language-switcher/LanguageSwitcher.module.css'

const LanguageSwitcher = () => {
    const router = useRouter()

    const [showDropdown, setShowDropdown] = useState(false)
    const handleClose = () => setShowDropdown(false)
    const ref = useOutsideClick(handleClose)

    const handleClick = () => setShowDropdown((prev) => !prev)

    useOutsideClick(handleClick)

    //console.log('pathname: ', router, ' == ', router.pathname)
    const { isArabic, redirectTo } = getLanguage(router.asPath)

    return (
        <div className={styles['language-switcher']}>
            <button type="button" onClick={handleClick} ref={ref}>
                {isArabic ? 'AR ' : 'EN'}
            </button>

            {showDropdown && (
                <Link className="ltr:right-0 rtl:left-0" href={redirectTo}>
                    {isArabic ? 'EN' : 'AR'}{' '}
                </Link>
            )}
        </div>
    )
}

export default LanguageSwitcher
