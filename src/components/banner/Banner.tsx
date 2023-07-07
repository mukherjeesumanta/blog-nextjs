import { ReactNode } from 'react'
import styles from '@/components/banner/Banner.module.css'

interface BannerProps {
  title: string | ReactNode
  pageDesc: string
}

const Banner = ({ title, pageDesc }: BannerProps) => {
  return (
    <section className={styles['banner']}>
      <h1 className="animate__animated animate__fadeInUp">{title}</h1>
      <p className="animate__animated animate__fadeInUp">{pageDesc}</p>
    </section>
  )
}

export default Banner
