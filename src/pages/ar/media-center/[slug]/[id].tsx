import { FC } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { GetServerSideProps } from 'next/types'
import draftToHtml from 'draftjs-to-html'
import connectMongo from '@/database/conn'
import ArticleModel from '@/model/Article'

import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import ArticleBanner from '@/components/article-banner/ArticleBanner'
import { toShortFormat } from '@/lib/utils'
import styles from '@/styles/Article.module.css'
import topImage from '@/assets/articles/wide-clouds.jpg'
import centerImage from '@/assets/articles/crown-prince.jpg'
import quoteIcon from '@/assets/quote-icon.svg'

import { xssIgnoreTags } from '@/lib/utils'
const xss = require('xss')

type ArticleDetail = {
    articleData: string
}
const Article: FC<ArticleDetail> = ({ articleData }) => {
    const articleObj = JSON.parse(articleData)
    const arContent = xss(draftToHtml(JSON.parse(articleObj.arContent)), xssIgnoreTags)
    //console.log(arContent)
    return (
        <>
            <Head>
                <title>Media Center - Article | Riyadh Air</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
                />
                <meta name="description" content={articleObj.arMetaDesc} />
            </Head>
            <main className="rtl" dir="rtl">
                <Navbar />
                <ArticleBanner
                    date={toShortFormat(articleObj.createdAt, 'ar')}
                    title={<>{articleObj.arTitle}</>}
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
                        <div
                            dangerouslySetInnerHTML={{ __html: arContent }}
                        ></div>
                    </div>
                </section>
                <Footer />
            </main>
        </>
    )
}

export default Article

export const getServerSideProps: GetServerSideProps = async ({
    req,
    params
}) => {
    await connectMongo().catch((error) => console.log(error))
    console.log('params: ', params)
    const articleData = await ArticleModel.findOne({
        _id: params!.id,
        isPublished: true
    })
    return {
        props: {
            articleData: JSON.stringify(articleData)
        }
    }
}
