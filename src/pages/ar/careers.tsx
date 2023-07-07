import Head from 'next/head'
import Navbar from '@/components/navbar/Navbar'
import Banner from '@/components/banner/Banner'
import Footer from '@/components/footer/Footer'

import ExploreCareers from '@/components/careers/explore-careers/ExploreCareers'
import Heights from '@/components/careers/heights/Heights'
import Benefits from '@/components/careers/benefits/Benefits'
import Community from '@/components/careers/community/Community'

import styles from '@/styles/Careers.module.css'

const ContactUs = () => {
  return (
    <>
      <Head>
        <title>الوظائف | طيران الرياض</title>
        <meta name="description" content="موظفينا هم ثروتنا الحقيقة " />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      <main className="rtl" dir="rtl">
        <Navbar />
        <Banner
          title="الوظائف"
          pageDesc="موظفينا هم ثروتنا الحقيقة. نؤمن من خلال موظفينا في طيران الرياض بقدرتنا على بناء حقبة جديدة في قطاع الطيران."
        />

        <ExploreCareers />
        <Heights />
        <Benefits />
        <Community />
        <section className={styles['warning']}>
          <p>هذه هي الطريقة الرسمية الوحيدة للتقدم لوظيفة في الرياض للطيران</p>
        </section>
        <Footer />
      </main>
    </>
  )
}

export default ContactUs
