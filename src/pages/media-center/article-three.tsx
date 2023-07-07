import Head from 'next/head'
import Image from 'next/image'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import ArticleBanner from '@/components/article-banner/ArticleBanner'
import styles from '@/styles/Article.module.css'
import centerImage from '@/assets/articles/5may23body-image.jpg'
import bottomImage from '@/assets/articles/5may23body-image2.jpg'
import quoteIcon from '@/assets/quote-icon.svg'

const Article = () => {

  return (
    <>
      <Head>
        <title>Media Center - Article | Riyadh Air</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <meta name="description" content="Riyadh Air; Public Investment Fund" />
      </Head>
      <main className="ltr" dir="ltr">
        <Navbar />
        <ArticleBanner
          date={'5 May 2023'}
          title={
            <>
              New World Class and Digitally Led Riyadh Air visits Boeing South
              Carolina factory &ndash; home of the 787 Dreamliner
            </>
          }
        />

        <section className={styles['article-content']}>
          <div className={styles['article-content-center']}>
            
            <Image src={centerImage} alt="Riyadh Air Boeing visit" />
            {/* <blockquote>
              <Image src={quoteIcon} alt="quote" />
              <h2>
                Sodales ut eu sem integer vitae justo eget magna fermentum. Varius duis at
                consectetur lorem donec massa.
              </h2>
            </blockquote> */}
            <p>
              <strong
                >North Charleston, S.C., United States – 05 May 2023:</strong
              >
              Led by HRH Princess Reema Bandar Al Saud, Ambassador of The
              Kingdom of Saudi Arabia to the United States along with delegates
              from Riyadh Air, the new world-class airline along with Saudia
              were today welcomed to Boeing’s factory in Charleston, South
              Carolina to visit the home of the 787 Dreamliner, where its planes
              are designed, assembled and delivered. The tour of the factory was
              organized after Riyadh Air announced the fleet orders of 72
              aircrafts, with 39 confirmed and the additional of 33 787-9s, in a
              wider deal which is the fifth largest commercial order by value in
              Boeing’s history.
            </p>
            <p>
              As Riyadh Air looks forward to receiving the first delivery of the
              wide-body aircraft ahead of its flight in 2025, the delegation
              included the Ambassador of the Kingdom of Saudi Arabia to the
              United States, HRH Princess Reema Bandar Al Saud; joined by Riyadh
              Air CEO, Tony Douglas, and Saudia CEO Captain Ibrahim Koshy. The
              event was attended by President and CEO of The Boeing Company
              David Calhoun, Henry McMaster Governor of South Carolina and
              Lindsey Graham US Senator for South Carolina, alongside wider
              representatives from the Kingdom’s national carriers. Riyadh Air’s
              attendees were able to speak with over 3,000 of the factory staff
              and to witness first-hand the quality of Boeing’s manufacturing.
            </p>
            <p>
              Riyadh Air and Boeing’s partnership will help deliver a
              world-class airline that will connect Riyadh to over 100
              destinations around the world by 2030 and support Saudi Arabia’s
              wider goal of serving 330 million passengers and attracting 100
              million visitors by 2030.
            </p>
            <p>
              In total, the Kingdom’s national carriers announced the fleet
              orders of up to 121 787 Dreamliners. In terms of economic impact,
              in the U.S., the agreement is to support nearly 100,000 direct and
              indirect jobs and more than 300 suppliers from across 38 states,
              including 145 U.S. small businesses.
            </p>
            <p>
              The partnership with Boeing reflects Riyadh Air’s commitment to
              delivering an exceptional travel experience by harnessing
              cutting-edge technology, and our ambition to operate one of the
              newest and most sustainable airline fleets in the world. As a
              digitally native airline, Riyadh Air’s 787 aircraft will be
              equipped with the most advanced, state-of-the-art technology,
              including next generation digital in-flight entertainment systems
              and connectivity solutions.
            </p>
            <Image className='mt-[4rem]' src={bottomImage} alt="Riyadh Air Boeing visit" />
          </div>
        </section>
        <Footer />
      </main>
    </>
  )
}

export default Article
