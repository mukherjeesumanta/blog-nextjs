import Head from 'next/head'
import Image from 'next/image'
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
        <title>Contact Us | Riyadh Air</title>
        <meta
          name="description"
          content="We'd love to hear from you. For all enquiries leave us a message by filling out our form."
        />
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
      <main className="ltr" dir="ltr">
        <Navbar />
        <Banner title="Contact us" pageDesc="We'd love to hear from you." />
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
