import Head from 'next/head'
import Navbar from '@/components/navbar/Navbar'
import Banner from '@/components/banner/Banner'
import Footer from '@/components/footer/Footer'
import AboutUsComponent from '@/components/aboutus/AboutUs'

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>About Us | Riyadh Air</title>
        <meta
          name="description"
          content="Riyadh Air is a new global airline headquartered in Riyadh, Saudi Arabia. We are shaping the future of flying, bringing the Kingdom to the world, and the world to the Kingdom."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      <main className="ltr" dir="ltr">
        <Navbar />
        <Banner
          title="About us"
          pageDesc="The new national airline that’s shaping the future of flying."
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
