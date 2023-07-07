import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { getLanguage } from '@/lib/utils'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import ArticleBanner from '@/components/article-banner/ArticleBanner'
import styles from '@/styles/Article.module.css'
import topImage from '@/assets/articles/News-banner.jpg'
import centerImage from '@/assets/articles/Riyadh_Air-Boeing.jpg'
import quoteIcon from '@/assets/quote-icon.svg'

const Article = () => {
  const router = useRouter()
  const { isArabic } = getLanguage(router.pathname)

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
          date={'14 March 2023'}
          title={
            <>
              RIYADH AIR ANNOUNCES FIRST FLEET ORDER OF 72 BOEING 787-9
              DREAMLINERS &ndash; NEW PIF-OWNED AIRLINE AIMS TO TRANSFORM SAUDI
              ARABIA INTO GLOBAL AVIATION HUB
            </>
          }
        />
        <section className={styles['article-parallax-image']}>
          <Image className='max-[640px]:h-[22vh] object-cover object-[56%_center]' src={topImage} alt="Riyadh air and Boeing logo" />
        </section>
        <section className={styles['article-content']}>
          <div className={styles['article-content-center']}>
            <ul className={styles['article-top']}>
              <li>
                Multi-billion dollar deal between Riyadh Air and The Boeing
                Company includes 39 confirmed 787-9 Dreamliners and options for
                further 33 additional airplanes
              </li>
              <li>
                Agreement will be part of fifth largest commercial order by
                value in Boeing&apos;s history
              </li>
              <li>
                In the U.S., deal expected to support nearly 100,000 direct and
                indirect jobs and more than 300 suppliers from across 38 states,
                including 145 U.S. small businesses
              </li>
              <li>
                In Saudi Arabia, new airline is expected to add USD20 billion to
                non-oil GDP growth and create more than 200,000 direct and
                indirect jobs
              </li>
            </ul>
            <Image src={centerImage} alt="Riyadh Air Boeing" />
            {/* <blockquote>
              <Image src={quoteIcon} alt="quote" />
              <h2>
                Sodales ut eu sem integer vitae justo eget magna fermentum. Varius duis at
                consectetur lorem donec massa.
              </h2>
            </blockquote> */}
            <p>
              <strong>Riyadh, (14 March 2023):</strong> Riyadh Air, the new
              world-class airline launched by the Public Investment Fund
              (“PIF”), today announced an order of up to 72 Boeing 787-9
              Dreamliner airplanes in a multi-billion dollar deal. This
              unprecedented order for a new carrier – 39 confirmed aircraft with
              an option to acquire 33 additional wide-body 787-9 Dreamliner
              airplanes – is a strong signal of intent for Saudi Arabia to
              become a global aviation hub.
            </p>
            <p>
              This agreement is part of Saudi Arabia&apos;s wider strategic plan
              to transform the country into a global aviation hub. In total,
              national carriers today announced their intent to purchase up to
              121 787 Dreamliners in what will be the fifth largest commercial
              order by value in Boeing&apos;s history. This will support the
              country&apos;s goal of serving 330 million passengers and
              attracting 100 million visits by 2030.
            </p>
            <p>
              In terms of economic impact, in the U.S., the deal is expected to
              support nearly 100,000 direct and indirect jobs and more than 300
              suppliers from across 38 states, including 145 U.S. small
              businesses, while in Saudi Arabia, the new airline is expected to
              add USD20 billion to non-oil GDP growth and create more than
              200,000 direct and indirect jobs.
            </p>
            <p>
              The order also underlines the importance of Riyadh Air
              environmental goals as it aims to operate one of the newest and
              most sustainable airline fleets in the world, while intending to
              meet the most stringent noise regulations.
            </p>
            <p>
              Operating from the capital of Riyadh, a thriving international
              metropolis rich in history and culture with a futuristic vision
              embodied by Vision 2030, Riyadh Air will help enable the
              transformation of the capital into one of the world&apos;s top
              cities economies. The city has a rich history and is home to some
              of the most ambitious new projects in the world, including King
              Salman International Airport, Qiddiya, Sports Boulevard, King
              Salman Park, Diriyah Gate, and the New Murabba Development. Saudi
              Arabia has a unique strategic geographical location that connects
              the three continents of Asia, Africa and Europe.
            </p>
            <p>
              The new world-class airline aims to connect millions of leisure
              and business travelers to more than 100 destinations around the
              world by 2030 following this partnership with The Boeing Company.
              Riyadh Air will be at the cutting edge of technology enabling
              digital innovation at every guest touchpoint while offering an
              exceptional guest experience with authentic, warm Saudi
              hospitality at its heart.
            </p>
            <p>
              <strong>
                His Excellency Yasir Al-Rumayyan Governor of the PIF and
                Chairman of Riyadh Air said:
              </strong>{' '}
              “This is a momentous day for PIF and Riyadh Air, and highlights
              our determination to significantly extend Saudi Arabia&apos;s
              connectivity with the world. Our stated commitment is to create a
              world-class airline and this partnership with Boeing in building
              the fleet is the next step in achieving the aspirations of Saudi
              Arabia as a global transportation hub. We look forward to
              fostering strong strategic relationships within the wider aviation
              ecosystem as we continue to shape the new airline to become one of
              the leading carriers around the world.”
            </p>
            <p>
              <strong>
                Stan Deal, President and CEO of Boeing Commercial Airplanes,
                said:
              </strong>{' '}
              “This is a significant order that will support Riyadh Air&apos;s
              commitment to deliver a world-class travel experience, while
              supporting American aerospace manufacturing jobs at Boeing and
              across our supply chain. We are incredibly proud of our nearly
              eight decades of partnership to drive innovation and sustainable
              growth in Saudi Arabia&apos;s aviation sector. Our agreement
              builds on that longstanding partnership and will further expand
              access to safe and sustainable commercial air travel for decades
              more.”
            </p>
            <p>
              <strong>Tony Douglas, CEO of Riyadh Air, said:</strong> “The new
              airline reflects the ambitious vision of Saudi Arabia to be at the
              core of shaping the future of global air travel and be a true
              disrupter in terms of guest experience. Riyadh Air&apos;s
              commitment to its guests will see the integration of digital
              innovation and authentic Saudi hospitality to deliver a seamless
              travel experience. By positioning the airline as both a global
              connector and a vehicle to drive tourist and business travel to
              Saudi Arabia, our new 787-9 airplanes will serve as a foundation
              for our worldwide operations, as we build the wider network and
              connect our guests to Saudi Arabia and many destinations around
              the world.”
            </p>
            <p>
              As an airline that will be a global leader, Riyadh Air will equip
              its airplanes with the most advanced, state-of-the-art features
              with innovative, best-in-class cabin interiors and experiences,
              including next generation digital in-flight entertainment systems
              and connectivity solutions. The first deliveries of the widebody
              aircraft are scheduled for early 2025.
            </p>
            <p>
              Riyadh Air will be a digitally led full-service airline with a
              commitment to sustainability reflecting Saudi Arabia&apos;s
              transformative projects under Vision 2030. It will operate in line
              with the country&apos;s strides toward net zero emissions. The
              787-9 Dreamliner model is manufactured with environmental impact
              considerations in mind, including CO2 emissions, fuel efficiency
              and noise regulations.
            </p>
            <p>
              The new airline was officially launched earlier this week and will
              serve as a lever to help fulfill Saudi Arabia&apos;s Vision 2030
              objectives.
            </p>
            <p>
              The establishment of Riyadh Air is in line with PIF&apos;s mandate
              to unlock the capabilities of key sectors locally to drive the
              diversification of Saudi Arabia&apos;s economy. The airline will
              also support the Saudi Aviation Strategy&apos;s broader vision,
              and enable the National Tourism Strategy, unlocking Saudi
              Arabia&apos;s cultural and natural attractions to international
              tourists and creating new jobs.
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
