import Head from 'next/head'
import Image from 'next/image'
import { getLanguage } from '@/lib/utils'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import ArticleBanner from '@/components/article-banner/ArticleBanner'
import styles from '@/styles/Article.module.css'
import topImage from '@/assets/articles/wide-clouds.jpg'
import centerImage from '@/assets/articles/crown-prince.jpg'
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
          date={'12 March 2023'}
          title={
            <>
              HRH Crown Prince Announces &quot;Riyadh Air&quot; &ndash; New
              National Carrier to Further Expand Saudi Aviation Ecosystem
              Locally and Globally
            </>
          }
        />
        <section className={styles['article-parallax-image']}>
          <Image
            src={topImage}
            alt="Wide clouds"
            className="h-[45vh] object-cover"
          />
        </section>
        <section className={styles['article-content']}>
          <div className={styles['article-content-center']}>
            <ul className={styles['article-top']}>
              <li>
                Riyadh will be the company&apos;s operational hub, and will
                connect the Saudi capital to over 100 destinations globally
              </li>
              <li>
                The new carrier will acquire modern aircraft equipped with the
                latest technology, and will adopt world class sustainability and
                safety practices
              </li>
              <li>
                Riyadh Air will usher in a new era for the travel and aviation
                industry globally and will provide tourists from around the
                world the opportunity to visit Saudi Arabia&apos;s cultural and
                natural attractions
              </li>
              <li>
                The establishment of the airline is aligned with PIF&apos;s
                mandate to further enable the aviation ecosystem in Saudi Arabia
              </li>
            </ul>
            <Image src={centerImage} alt="article image" />
            {/* <blockquote>
              <Image src={quoteIcon} alt="quote" />
              <h2>
                Sodales ut eu sem integer vitae justo eget magna fermentum. Varius duis at
                consectetur lorem donec massa.
              </h2>
            </blockquote> */}
            <p>
              RIYADH, 12 March 2023 – His Royal Highness Crown Prince Mohammad
              bin Salman bin Abdulaziz, Prime Minister and Chairman of the
              Public Investment Fund (“PIF”), announced today the establishment
              of “Riyadh Air,” a PIF wholly owned company. The new national
              carrier will leverage Saudi Arabia&apos;s strategic geographic
              location between the three continents of Asia, Africa and Europe,
              enabling Riyadh to become a gateway to the world and a global
              destination for transportation, trade, and tourism.
            </p>
            <p>
              Riyadh Air will be chaired by His Excellency Yasir Al-Rumayyan,
              Governor of PIF, while Tony Douglas, who brings more than 40 years
              of experience in the aviation, transportation and logistics
              industries, has been appointed Chief Executive Officer. The
              airline&apos;s senior management will include Saudi and
              international expertise.
            </p>
            <p>
              Operating from Riyadh as its hub, the airline will usher in a new
              era for the travel and aviation industry globally. Riyadh Air will
              be a world-class airline, adopting the global best sustainability
              and safety standards across its advanced fleet of aircraft
              equipped with the latest cutting-edge technology. The airline is
              expected to add USD20 billion to non-oil GDP growth, and create
              more than 200,000 direct and indirect jobs.
            </p>
            <p>
              As a wholly owned PIF subsidiary, the new national airline is set
              to benefit from PIF&apos;s investment expertise and financial
              capabilities while expanding on the company&apos;s operations to
              become a leading national carrier. The new national airline
              represents PIF&apos;s latest investment in the sector, along with
              the recently announced King Salman International Airport
              masterplan.
            </p>
            <p>
              Riyadh Air aims to enhance customers&apos; journey while
              connecting them to over 100 destinations around the world by 2030;
              through offering an exceptional experience with an authentic, warm
              Saudi hospitality at its heart.
            </p>
            <p>
              The airline will provide tourists from around the world the
              opportunity to visit Saudi Arabia&apos;s cultural and natural
              attractions. Riyadh Air will also serve as a catalyst for the
              Saudi National Transport and Logistics Strategy and the National
              Tourism Strategy by increasing air transport options, raising
              cargo capacity and, in turn, growing international passenger
              traffic.
            </p>
            <p>
              The establishment of Riyadh Air is part of PIF&apos;s strategy to
              unlock the capabilities of promising sectors that can help drive
              the diversification of the local economy. It will enable a more
              financially resilient aviation ecosystem in Saudi Arabia,
              supporting the industry&apos;s global competitiveness in line with
              Vision 2030.
            </p>
            <p className="text-center">-ENDS-</p>
          </div>
        </section>
        <Footer />
      </main>
    </>
  )
}

export default Article
