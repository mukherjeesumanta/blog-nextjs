import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import { useMemo } from 'react'
import directors1 from '@/assets/board-of-directors/directors-1.png'
import directors2 from '@/assets/board-of-directors/directors-2.png'
import directors3 from '@/assets/board-of-directors/directors-3.png'
import directors4 from '@/assets/board-of-directors/directors-4.png'
import directors5 from '@/assets/board-of-directors/directors-5.png'
import directors6 from '@/assets/board-of-directors/directors-6.png'
import directors7 from '@/assets/board-of-directors/directors-7.png'
import styles from '@/components/directors-carousel/DirectorsCarousel.module.css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css'

const ArticlesCarousel = () => {
  const viewport = useMemo(
    () => (typeof window !== 'undefined' ? window.innerWidth : 9999),
    []
  )

  return (
    <Swiper
      slidesPerView={viewport < 1080 ? (viewport < 991 ? 2 : 3) : 6}
      spaceBetween={30}
      navigation={true}
      modules={[Pagination, Navigation]}
    >
      <SwiperSlide>
        <div className={styles['directors__card']}>
          <div className={styles['directors__card-image']}>
            <Image src={directors1} alt="directors 1" />
          </div>
          <div className={styles['directors__card-desc']}>
            <p>[Insert airline name]&apos;s executive</p>
            <p>Title comes here</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles['directors__card']}>
          <div className={styles['directors__card-image']}>
            <Image src={directors2} alt="directors 2" />
          </div>
          <div className={styles['directors__card-desc']}>
            <p>[Insert airline name]&apos;s executive</p>
            <p>Title comes here</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles['directors__card']}>
          <div className={styles['directors__card-image']}>
            <Image src={directors3} alt="directors 3" />
          </div>
          <div className={styles['directors__card-desc']}>
            <p>[Insert airline name]&apos;s executive</p>
            <p>Title comes here</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles['directors__card']}>
          <div className={styles['directors__card-image']}>
            <Image src={directors4} alt="directors 4" />
          </div>
          <div className={styles['directors__card-desc']}>
            <p>[Insert airline name]&apos;s executive</p>
            <p>Title comes here</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles['directors__card']}>
          <div className={styles['directors__card-image']}>
            <Image src={directors5} alt="directors 5" />
          </div>
          <div className={styles['directors__card-desc']}>
            <p>[Insert airline name]&apos;s executive</p>
            <p>Title comes here</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles['directors__card']}>
          <div className={styles['directors__card-image']}>
            <Image src={directors6} alt="directors 6" />
          </div>
          <div className={styles['directors__card-desc']}>
            <p>[Insert airline name]&apos;s executive</p>
            <p>Title comes here</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles['directors__card']}>
          <div className={styles['directors__card-image']}>
            <Image src={directors7} alt="directors 7" />
          </div>
          <div className={styles['directors__card-desc']}>
            <p>[Insert airline name]&apos;s executive</p>
            <p>Title comes here</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default ArticlesCarousel
