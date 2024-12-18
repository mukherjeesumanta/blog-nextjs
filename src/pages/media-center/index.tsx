'use client'

import { FC } from 'react'
import Head from 'next/head'
import { useDispatch, Provider } from 'react-redux'
import Navbar from '@/components/navbar/Navbar'
import Banner from '@/components/banner/Banner'
import Footer from '@/components/footer/Footer'
import ArticlesSection from '@/components/articles-section/ArticlesSection'
import connectMongo from '@/database/conn'
import Article from '@/model/Article'
import storePublic from '@/globalRedux/public/store'

import styles from '@/styles/MediaCenter.module.css'


const MediaCenter: FC<{articles: string}> = ({ articles }) => {

    return (
        <Provider store={storePublic}>
            <Head>
                <title>Blogs by Sumanta Mukherjee</title>
                <meta
                    name="description"
                    content="The place to find out more about the airline that’s redefining what flying can be."
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
                />
            </Head>
            <main className="ltr" dir="ltr">
                <Navbar />
                <Banner
                    title={
                        <>
                            Web Development<br />
                            Blog Posts
                        </>
                    }
                    pageDesc="Blogs by Sumanta Mukherjee"
                />
                <section className={`${styles['articles']}`}>
                    <h2>Articles</h2>
                    <ArticlesSection articles={articles} />
                </section>
                <Footer />
            </main>
        </Provider>
    )
}

export default MediaCenter

export async function getServerSideProps() {
    await connectMongo().catch((error) => console.log(error))

    const articles = await Article.find(
        { isPublished: true },
        {
            _id: 1,
            enTitle: 1,
            enSlug: 1,
            createdAt: 1,
            createdBy: 1,
            isPublished: 1,
            thumbnailUrl: 1
        }
    )

    return {
        props: {
            articles: JSON.stringify(articles)
        }
    }
}
