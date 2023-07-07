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
        <title>Careers | Riyadh Air</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <meta
          name="description"
          content="Our People are our greatest asset. Join us to lead the future of air travel. Explore Careers at Riyadh Air, and share your CV."
        />
      </Head>
      <main className="ltr" dir="ltr">
        <Navbar />
        <Banner title="Careers" pageDesc="Our People Are Our Greatest Asset" />

        <ExploreCareers />
        <Heights />
        <Benefits />
        <Community />
        <section className={styles['warning']}>
          <p className="tracking-[.16rem]">
            This is the only OFFICIAL WAY TO APPLY FOR A CAREER WITH RIYADH AIR
          </p>
        </section>
        <Footer />
      </main>
    </>
  )
}

export default ContactUs
