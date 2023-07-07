import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import Navbar from '@/components/navbar/Navbar'
import Banner from '@/components/banner/Banner'
import Footer from '@/components/footer/Footer'
import ContactForm from '@/components/contactus/contactus-form/ContactusForm'
import styles from '@/styles/ContactUs.module.css'
import contactImg from '@/assets/contact-bg.png'

const ContactUs = () => {
  return (
    <>
      <Head>
        <title>تواصل معنا | طيران الرياض</title>
        <meta name="description" content="يسعدنا استقبال استفساراتكم " />
        <link rel="preconnect" href="https://www.google.com"></link>
        <link
          rel="preconnect"
          href="https://www.gstatic.com"
          crossOrigin=""
        ></link>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      <main className="rtl" dir="rtl">
        <Navbar />
        <Banner
          title="تواصل معنا"
          pageDesc="إذا كان لديك أي استفسارات ، يرجى التواصل معنا
          من خلال الخيارات أدناه."
        />
        <section className="contact-bg">
          <Image
            className="contact-img max-w-100"
            src={contactImg}
            alt="contact form"
          />
        </section>
        <section className={`${styles['contact-form']} bg-[#F5F8FF]`}>
          <ContactForm />
        </section>
        <Footer />
      </main>
    </>
  )
}

export default ContactUs
