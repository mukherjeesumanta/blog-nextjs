import Head from 'next/head'
import Image from 'next/image'
import { Parallax } from 'react-scroll-parallax'
import Navbar from '@/components/navbar/Navbar'
import Banner from '@/components/banner/Banner'
import AboutUsComponent from '@/components/aboutus/AboutUs'
import Footer from '@/components/footer/Footer'

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>من نحن | طيران الرياض</title>
        <meta
          name="description"
          content="الناقل الجوي الوطني الجديد الذي يدشن حقبة جديدة لمستقبل الطيران"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      <main className="rtl" dir="rtl">
        <Navbar />
        <Banner
          title="من نحن"
          pageDesc="الناقل الجوي الوطني الجديد الذي يدشن حقبة جديدة لمستقبل الطيران."
        />
        <AboutUsComponent />

        {/* <section className={styles['directors']}>
          <h2>Our board of directors</h2>
          <p>
            [XXX]&apos;s Board of Directors are responsible for overseeing the long-term strategy.
          </p>
        </section>
        <section className={styles['directors-carousel']}>
          <h2>Board of Directors</h2>
          <DirectorsCarousel />
        </section> */}
        <Footer />
      </main>
    </>
  )
}

export default AboutUs
