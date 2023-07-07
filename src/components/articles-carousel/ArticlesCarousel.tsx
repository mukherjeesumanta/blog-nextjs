import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import { useMemo } from 'react'
import { getLanguage } from '@/lib/utils'
import articleImage1 from '@/assets/articles/media_thumbnail.jpg'
import articleImage2 from '@/assets/articles/art2-thumbnail.jpg'
import articleImage3 from '@/assets/articles/5may23thumbnail.jpg'
import styles from '@/components/articles-carousel/ArticlesCarousel.module.css'
import calendarIcon from '@/assets/calendar-icon.svg'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css'

const ArticlesCarousel = () => {
    const viewport = useMemo(
        () => (typeof window !== 'undefined' ? window.innerWidth : 9999),
        []
    )

    const router = useRouter()
    const { isArabic } = getLanguage(router.pathname)
    const prefix = isArabic ? '/ar' : ''
    return (
        <div className={`${styles['container']} w-full`}>
            <Link
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
                                `
                                    "سمو ولي العهد يعلن عن تأسيس صندوق
                                    الاستثمارات العامة لـشركة "طيران الرياض
                                `
                            ) : (
                                `New World Class and Digitally Led Riyadh Air visits
                  Boeing South Carolina factory – home of the 787
                  Dreamliner`
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
                                    <span className="date">5 </span>
                                    <span className="date">مايو</span>
                                    <span className="date">2023</span>
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
                        <Image src={articleImage2} alt="article one" />
                    </div>
                    <div className={styles['article__card-desc']}>
                        <p>
                            {isArabic ? (
                                <>
                                    طيران الرياض يعلن عن أول طلب لأسطول للطائرات
                                    مكون من 72 طائرة بوينج دريملاينر من طراز
                                    787-9 يسعى الناقل الجوي الجديد من صندوق
                                    الاستثمارات العامة إلى تعزيز مكانة المملكة
                                    لتكون مركز عالمي للطيران
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
                                    &quot;طيران الرياض&quot; سمو ولي العهد يعلن
                                    عن تأسيس صندوق الاستثمارات العامة لـشركة{' '}
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
            </Link>
        </div>
    )
}

export default ArticlesCarousel
