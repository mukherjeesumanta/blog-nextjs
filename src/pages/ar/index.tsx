'use client'

import { FC } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useDispatch, Provider } from 'react-redux'
import Navbar from '@/components/navbar/Navbar'
import DestinationsCarousel from '@/components/destinations-carousel/DestinationsCarousel'
import ArticlesSection from '@/components/articles-section/ArticlesSection'
import Hero from '@/components/hero/Hero'
import Footer from '@/components/footer/Footer'
import connectMongo from '@/database/conn'
import Article from '@/model/Article'
import storePublic from '@/globalRedux/public/store'

import styles from '@/styles/Home.module.css'
import brandImage from '@/assets/our-brand.jpg'
import ArticlesCarousel from '@/components/articles-carousel/ArticlesCarousel'

const HomeAr: FC<{articles: string}> = ({ articles }) => {
  const isArabic = true
  return (
    <Provider store={storePublic}>
      <Head>
        <title>PIF Airlines</title>
        <meta
          name="description"
          content="PIF Airlines; Public Investment Fund"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      <main className="rtl" dir="rtl">
        <Navbar />
        <Hero />
        <section id="section-vision" className={`flex ${styles['vision']}`}>
          <h2 className="flex-1 pr-5 wow animate__animated animate__fadeInUp">
            رؤية طموحة لمستقبل الطيران
          </h2>
          <p className="flex-1 wow animate__animated animate__fadeIn">
            بهدف الريادة في قطاع الطيران وتعزيز مبدأ الابتكار، نعمل في طيران
            الرياض على تقديم تجربة استثنائية لضيوفنا المسافرين من خلال تبني أحدث
            التقنيات الرقمية.
          </p>
        </section>
        <DestinationsCarousel />
        <section className={`${styles['brand']}`}>
          <div className={styles['brand__desc']}>
            <h2>هويتنا​</h2>
            <p>
              هوية طيران الرياض مستوحاة من ألوان أزهار الخزامى التي تزين أرض
              المملكة. حيث يرمز هذا اللون إلى ترحيب وكرم أرض المملكة بزوارها.
            </p>
            <p>
              استلهمنا شعارنا من نافذة الطائرة، لتصبح طيران الرياض نافذة المملكة
              للعالم والعالم للمملكة. ومن الخط العربي والذي يعد من أهم ركائز
              الحضارة العربية الذي يتجلى في ثقافتنا الأصيلة، إضافة إلى حركة
              أجنحة الصقر، رفيق الأمجاد في مسيرة الدولة السعودية.
            </p>
            <p>بأجنحة الابتكار والتألق نحلق نحو المستقبل.</p>
          </div>
          <div className={styles['brand__img']}>
            <Image src={brandImage} alt="brand image" />
          </div>
        </section>
        <section className={`${styles['articles']}`}>
          <h2>أحدث الأخبار</h2>
          {/* <ArticlesSection articles={articles} /> */}
          <ArticlesCarousel />
        </section>
        <Footer />
      </main>
    </Provider>
  )
}

export default HomeAr

/* export async function getServerSideProps() {
  await connectMongo().catch((error) => console.log(error))

  const articles = await Article.find(
      { isPublished: true },
      {
          _id: 1,
          arTitle: 1,
          enSlug: 1,
          createdAt: 1,
          createdBy: 1,
          isPublished: 1
      }
  )

  return {
      props: {
          articles: JSON.stringify(articles)
      }
  }
} */




