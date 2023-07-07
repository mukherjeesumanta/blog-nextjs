'use client'

import { FC, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { RootStatePublic } from '@/globalRedux/public/store'
import { Pagination, Navigation } from 'swiper'
import { getLanguage, toShortFormat } from '@/lib/utils'
import { ArticleThumbnailListType, ArticleThumbnailType } from '@/types'
import articleImage1 from '@/assets/articles/media_thumbnail.jpg'
import articleImage2 from '@/assets/articles/art2-thumbnail.jpg'
import articleImage3 from '@/assets/articles/5may23thumbnail.jpg'
import styles from '@/components/articles-section/ArticlesSection.module.css'
import calendarIcon from '@/assets/calendar-icon.svg'



const ArticlesSection: FC<{articles: string}> = ({ articles }) => {

    const router = useRouter()
    const { isArabic } = getLanguage(router.pathname)
    const prefix = isArabic ? '/ar' : ''

    const articleList: ArticleThumbnailType[] = JSON.parse(articles)

    const articleListJsx = articleList.map((article: ArticleThumbnailType) => {
        return (
            <Link
                className={`${styles['article__card']}`}
                href={`${prefix}/media-center/${article.enSlug}/${article._id}`}
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
                            {isArabic ? (
                                <>{article.arTitle}</>
                            ) : (
                                <>{article.enTitle}</>
                            )}
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
                                isArabic ? 'ar' : 'en'
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

            {/* <Link
        className={`${styles['article__card']}`}
        href={`${prefix}/media-center/article-three`}
      >
        <div
          className={`${styles['article__card_container']} wow animate__animated animate__fadeIn`}
        >
          <div className={styles['article__card-image']}>
            <Image src={articleImage3} alt="article three" />
          </div>
          <div className={styles['article__card-desc']}>
            <p>
              {isArabic ? (
                <>
                  وفد من طيران الرياض يزور مصنع بوينج بولاية كارولاينا الجنوبية
                  الامريكية - موطن طائرة 787 دريملاينر
                </>
              ) : (
                <>
                  New World Class and Digitally Led Riyadh Air visits Boeing
                  South Carolina factory &ndash; home of the 787 Dreamliner
                </>
              )}
            </p>
          </div>
          <div className={styles['article__card-footer']}>
            <Image
              className="ltr:mr-[1rem] rtl:ml-[1rem]"
              src={calendarIcon}
              alt="calendar icon"
            />
            <p>
              {isArabic ? (
                <>
                  <span>5 </span>
                  <span>مايو</span>
                  <span>2023</span>
                </>
              ) : (
                '5 May 2023'
              )}
            </p>
          </div>
        </div>
      </Link>
      <Link
        className={`${styles['article__card']}`}
        href={`${prefix}/media-center/article-two`}
      >
        <div
          className={`${styles['article__card_container']} wow animate__animated animate__fadeIn`}
        >
          <div className={styles['article__card-image']}>
            <Image src={articleImage2} alt="article two" />
          </div>
          <div className={styles['article__card-desc']}>
            <p>
              {isArabic ? (
                <>
                  طيران الرياض يعلن عن أول طلب لأسطول للطائرات مكون من 72 طائرة
                  بوينج دريملاينر من طراز 787-9 يسعى الناقل الجوي الجديد من
                  صندوق الاستثمارات العامة إلى تعزيز مكانة المملكة لتكون مركز
                  عالمي للطيران
                </>
              ) : (
                'Riyadh Air Announces First Fleet Order of 72 Boeing 787-9 Dreamliners'
              )}
            </p>
          </div>
          <div className={styles['article__card-footer']}>
            <Image
              className="ltr:mr-[1rem] rtl:ml-[1rem]"
              src={calendarIcon}
              alt="calendar icon"
            />
            <p>
              {isArabic ? (
                <>
                  <span className="date">14 </span>
                  <span className="date">مارس</span>
                  <span className="date">2023</span>
                </>
              ) : (
                '14 March 2023'
              )}
            </p>
          </div>
        </div>
      </Link>
      <Link
        className={`${styles['article__card']}`}
        href={`${prefix}/media-center/article-one`}
      >
        <div
          className={`${styles['article__card_container']} wow animate__animated animate__fadeIn`}
        >
          <div className={styles['article__card-image']}>
            <Image src={articleImage1} alt="article one" />
          </div>
          <div className={styles['article__card-desc']}>
            <p className="">
              {isArabic ? (
                <>
                  &quot;طيران الرياض&quot; سمو ولي العهد يعلن عن تأسيس صندوق
                  الاستثمارات العامة لـشركة{' '}
                </>
              ) : (
                'His Royal Highness the Crown Prince announces Riyadh Air, a new national airline established by PIF'
              )}
            </p>
          </div>
          <div className={styles['article__card-footer']}>
            <Image
              className="ltr:mr-[1rem] rtl:ml-[1rem]"
              src={calendarIcon}
              alt="calendar icon"
            />
            <p>
              {isArabic ? (
                <>
                  <span className="date">12 </span>
                  <span className="date">مارس</span>
                  <span className="date">2023</span>
                </>
              ) : (
                '12 March 2023'
              )}
            </p>
          </div>
        </div>
      </Link> */}
        </div>
    )
}

export default ArticlesSection


