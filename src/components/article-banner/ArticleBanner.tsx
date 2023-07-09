import { ReactNode } from 'react'
import styles from '@/components/article-banner/ArticleBanner.module.css'

interface ArticleBannerProps {
  title: string | ReactNode
  date: string | ReactNode
}

const ArticleBanner = ({ title, date }: ArticleBannerProps) => {
  return (
    <section className={styles['article-banner']}>
      <p className="mb-4">{date}</p>
      <h2>{title}</h2>
    </section>
  )
}

export default ArticleBanner
