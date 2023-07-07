import Image from 'next/image'
import styles from '@/components/destinations-carousel/DestinationsCarousel.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Mousewheel } from 'swiper'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getLanguage } from '@/lib/utils'

import imageOne from '@/assets/horizontal-1.jpg'
import imageTwo from '@/assets/horizontal-2.jpg'
import imageThree from '@/assets/horizontal-3.jpg'
import 'swiper/css'
import 'swiper/css/free-mode'
import React from 'react'

const DestinationsCarousel = () => {
  const [swiperInstance, setSwiperInstance] = useState<any>(null)
  const { ref, inView } = useInView({
    threshold: 0.9
  })

  /* useEffect(() => {
    if (inView) swiperInstance.slideNext(3000);
  }, [inView, swiperInstance]); */

  const router = useRouter()
  const { isArabic } = getLanguage(router.pathname)
  const lang = isArabic ? 'ar' : 'en'

  type Content = {
    title: string | React.ReactNode
    desc: string
  }
  type ContentType = {
    [key: string]: Content[]
  }

  const carouselContent: ContentType = {
    en: [
      {
        title: 'Flying to 100+ destinations',
        desc: "Riyadh Air will optimize the Kingdom's strategic location, connecting business and leisure travelers to more than 100 destinations worldwide by 2030."
      },
      {
        title: 'Built on Innovation and the latest technology',
        desc: 'We invest to lead innovation and deliver a seamless travel experience.'
      },
      {
        title: 'Creating more than 200,000 job opportunities',
        desc: 'We will support the national GDP growth and generate more than 200,000 employment opportunities directly and indirectly.'
      }
    ],
    ar: [
      {
        title: 'رحلات تصل لـ 100+ وجهة',
        desc: 'سيربط طيران الرياض ضيوفنا المسافرين بأكثر من 100 وجهةٍ حول العالم بحلول عام 2030.'
      },
      {
        title: (
          <>
            مصممة بـــــــ
            <br />
            أحدث التقنيات الرقمية&nbsp;
          </>
        ),
        desc: 'نقود نموذجاً متطوراً لمفهوم الطيران عبر الابتكار المستمر.'
      },
      {
        title: 'استحداث أكثر من   200,000 فرصة عمل',
        desc: 'ستساهم طيران الرياض في نمو الناتج المحلي الإجمالي واستحداث أكثر من 200 ألف فرصة عمل مباشرة وغير مباشرة .'
      }
    ]
  }

  return (
    <section className={`${styles['destinations-carousel']}`} ref={ref}>
      <Swiper
        direction="horizontal"
        slidesPerView={1.15}
        spaceBetween={20}
        mousewheel={true}
        freeMode={true}
        modules={[FreeMode /* , Mousewheel */]}
        className={styles['swiper']}
        /* onSwiper={(swiper) => setSwiperInstance(swiper)} */
      >
        <SwiperSlide>
          <div className={`${styles['swiper-slide-content']}`}>
            <div className={`${styles['swiper-image']}`}>
              <Image src={imageOne} alt="slide one" />
            </div>
            <div
              className={`bg-white p-[3rem] 2xl:p-[4rem] ${styles['swiper-desc']}`}
            >
              <h2>{carouselContent[lang][0].title}</h2>
              <p>{carouselContent[lang][0].desc}</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${styles['swiper-slide-content']}`}>
            <div className={`${styles['swiper-image']}`}>
              <Image src={imageTwo} alt="slide two" />
            </div>
            <div
              className={`bg-white p-[3rem] 2xl:p-[4rem] ${styles['swiper-desc']}`}
            >
              <h2>{carouselContent[lang][1].title}</h2>
              <p>{carouselContent[lang][1].desc}</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${styles['swiper-slide-content']}`}>
            <div className={`${styles['swiper-image']}`}>
              <Image src={imageThree} alt="slide three" />
            </div>
            <div
              className={`bg-white p-[3rem] 2xl:p-[4rem] ${styles['swiper-desc']}`}
            >
              <h2>{carouselContent[lang][2].title}</h2>
              <p>{carouselContent[lang][2].desc}</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default DestinationsCarousel
