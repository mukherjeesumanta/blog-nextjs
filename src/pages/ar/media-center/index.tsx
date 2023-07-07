'use client'

import { FC } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useDispatch, Provider } from 'react-redux'
import Navbar from '@/components/navbar/Navbar'
import Banner from '@/components/banner/Banner'
import Footer from '@/components/footer/Footer'
import ArticlesSection from '@/components/articles-section/ArticlesSection'
import connectMongo from '@/database/conn'
import Article from '@/model/Article'
import storePublic from '@/globalRedux/public/store'

import styles from '@/styles/MediaCenter.module.css'
import ArticlesCarousel from '@/components/articles-carousel/ArticlesCarousel'

const MediaCenter: FC<{articles: string}> = ({ articles }) => {
    return (
        <Provider store={storePublic}>
            <Head>
                <title>المركز الإعلامي | طيران الرياض</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
                />
                <meta
                    name="description"
                    content="تعرف على أحدث أخبار طيران الرياض"
                />
            </Head>
            <main className="rtl" dir="rtl">
                <Navbar />
                <Banner
                    title={
                        <>
                            المركز
                            <br /> الإعلامي
                        </>
                    }
                    pageDesc="تعرف على أحدث أخبار طيران الرياض."
                />
                <section className={`${styles['articles']}`}>
                    <h2>مقالات</h2>
                    {/* <ArticlesSection articles={articles} /> */}
                    <ArticlesCarousel />
                </section>
                <Footer />
            </main>
        </Provider>
    )
}

export default MediaCenter

/* export async function getServerSideProps() {
    await connectMongo().catch((error) => console.log(error))

    const articles = await Article.find(
        { isPublished: true },
        {
            _id: 1,
            arTitle: 1,
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
