'use client'

import { FC } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Parallax } from 'react-scroll-parallax'
import { useDispatch, Provider } from 'react-redux'
import Navbar from '@/components/navbar/Navbar'
import DestinationsCarousel from '@/components/destinations-carousel/DestinationsCarousel'
import ArticlesSection from '@/components/articles-section/ArticlesSection'
import ArticlesCarousel from '@/components/articles-carousel/ArticlesCarousel'
import Hero from '@/components/hero/Hero'
import Footer from '@/components/footer/Footer'
import connectMongo from '@/database/conn'
import Article from '@/model/Article'
import storePublic from '@/globalRedux/public/store'

import styles from '@/styles/Home.module.css'
import brandImage from '@/assets/our-brand.jpg'

const Home: FC<{ articles: string }> = ({ articles }) => {
    const isArabic = false

    return (
        <Provider store={storePublic}>
            <Head>
                <title>Riyadh Air | The future of travel</title>
                <meta
                    name="description"
                    content="Riyadh Air aims to make air travel as innovative as possible, constantly pushing for more, for better, and for a new standard of excellence."
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
                />
            </Head>
            <main className="ltr" dir="ltr">
                <Navbar />
                <Hero />
                <section
                    id="section-vision"
                    className={`flex ${styles['vision']}`}
                >
                    <h2 className="flex-1 pr-5 wow animate__animated animate__fadeInUp">
                        Driven by an ambitious vision for the future of travel
                    </h2>
                    <p className="flex-1 wow animate__animated animate__fadeIn">
                        We are working with boundless determination to make air
                        travel as innovative as possible, constantly pushing for
                        more, and a new standard of excellence. Riyadh Air will
                        optimize the best digital technologies to deliver
                        exceptional travel experiences to our guests.
                    </p>
                </section>
                <DestinationsCarousel />
                <section className={`${styles['brand']}`}>
                    <div className={styles['brand__desc']}>
                        <h2>Our Brand</h2>
                        <p>
                            Inspired by the <strong>lavender blossoms</strong>{' '}
                            that carpet Saudi Arabia, we&rsquo;ve chosen this
                            color because it symbolizes Saudi generosity and its
                            authentic hospitality.
                        </p>
                        <p>
                            We looked to the airplane window for inspiration;
                            Riyadh Air will serve as Saudi Arabia&rsquo;s window
                            to the world. The movement of birds&rsquo;{' '}
                            <strong>wings in flight</strong> and the elegant
                            curves of <strong>Arabic calligraphy</strong>, an
                            integral pillar of Saudi culture, are also essential
                            parts of the Riyadh Air brand.
                        </p>
                        <p>
                            <strong>
                                Riyadh Air will take flight toward the future of
                                aviation.
                            </strong>
                        </p>
                    </div>

                    <div className={styles['brand__img']}>
                        <Parallax speed={10} className="custom-parallax">
                            <Image src={brandImage} alt="brand image" />
                        </Parallax>
                    </div>
                </section>
                <section className={`${styles['articles']}`}>
                    <h2>Latest News</h2>
                    {/* <ArticlesSection articles={articles} /> */}
                    <ArticlesCarousel />
                </section>
                <Footer />
            </main>
        </Provider>
    )
}

export default Home

/* export async function getServerSideProps() {
    await connectMongo().catch((error) => console.log(error))

    const articles = await Article.find(
        { isPublished: true },
        {
            _id: 1,
            enTitle: 1,
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
