import { FC } from 'react'
import Head from 'next/head'
import { getSession, GetSessionParams } from 'next-auth/react'
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

import { xssIgnoreTags } from '@/lib/utils' 

const xss = require('xss')

type ArticleDetail = {
    articleData: string
}
const Article: FC<ArticleDetail> = ({ articleData }) => {
    const articleObj = JSON.parse(articleData)
    const enContent = xss(draftToHtml(JSON.parse(articleObj.enContent)), xssIgnoreTags)
    return (
        <>
            <Head>
                <title>Blogs by Sumanta Mukherjee</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
                />
                <meta name="description" content={articleObj.enMetaDesc} />
            </Head>
            <main className="ltr" dir="ltr">
                <Navbar />
                <ArticleBanner
                    date={toShortFormat(articleObj.createdAt, 'en')}
                    title={<>{articleObj.enTitle}</>}
                />
                <section className={styles['article-parallax-image']}>
                    <img
                        src={articleObj.bannerUrl}
                        alt="Wide clouds"
                        className="h-[45vh] object-cover w-full"
                    />
                </section>
                <section className={styles['article-content']}>
                    <div className={styles['article-content-center']}>
                        <div dangerouslySetInnerHTML={{__html: enContent}} ></div>
                        {/* {htmlToReactParser.parse(enContent)} */}
                        {/* {enContent} */}
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
    const session = await getSession({ req })

    if (!session) {
        return {
            redirect: {
                destination: '/admin/',
                permanent: false
            }
        }
    }

    await connectMongo().catch((error) => console.log(error))
    //console.log('params: ', params)
    const articleData = await ArticleModel.findOne({
        _id: params!.id
    })
    if(!articleData) {
        return {
          notFound: true
        }
      }
    return {
        props: {
            articleData: JSON.stringify(articleData)
        }
    }
}
