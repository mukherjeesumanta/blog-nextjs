'use client'

import { FC, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { RootStatePublic } from '@/globalRedux/public/store'

import { toShortFormat } from '@/lib/utils'
import { ArticleThumbnailListType, ArticleThumbnailType } from '@/types'
import articleImage3 from '@/assets/articles/5may23thumbnail.jpg'
import styles from '@/components/articles-section/ArticlesSection.module.css'
import calendarIcon from '@/assets/calendar-icon.svg'



const ArticlesSection: FC<{articles: string}> = ({ articles }) => {

    const router = useRouter()

    const articleList: ArticleThumbnailType[] = JSON.parse(articles)

    const articleListJsx = articleList.map((article: ArticleThumbnailType) => {
        return (
            <Link
                className={`${styles['article__card']}`}
                href={`/media-center/${article.enSlug}/${article._id}`}
                key={article._id}
            >
                <div
                    className={`${styles['article__card_container']} wow animate__animated animate__fadeIn`}
                >
                    <div className={styles['article__card-image']}>
                        <Image src={articleImage3} alt="article three" />
                    </div>
                    <div className={styles['article__card-desc']}>
                        <p>
                            {article.enTitle}
                        </p>
                    </div>
                    <div className={styles['article__card-footer']}>
                        <Image
                            className="ltr:mr-[1rem] rtl:ml-[1rem]"
                            src={calendarIcon}
                            alt="calendar icon"
                        />
                        <p>
                            {toShortFormat(
                                article.createdAt,
                                'en'
                            )}
                        </p>
                    </div>
                </div>
            </Link>
        )
    })

    return (
        <div className={`${styles['container']} w-full`}>
            {articleListJsx}
        </div>
    )
}

export default ArticlesSection


