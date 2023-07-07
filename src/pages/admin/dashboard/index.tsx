'use client'

import React, { FC, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { getSession, GetSessionParams } from 'next-auth/react'
import Article from '@/model/Article'
import connectMongo from '@/database/conn'
import DashboardLayout from '@/components/admin/layout/dashboard-layout'
import ArticleList from '@/components/admin/article/ArticleList'
import { SessionProp } from '@/types'
import styles from '../../../styles/Dashboard.module.css'

type PropType = {
    session: SessionProp
    articles: string
}

const Dashboard: FC<PropType> = ({ session, articles }) => {
    //console.log(session)
    return (
        <DashboardLayout session={session}>
            <Head>
                <title>Dashboard</title>
            </Head>

            <section className="dashboard flex flex-col gap-10 mt-10 w-5/6  mx-auto">
                <div className="grid gap-4 grid-cols-12">
                    <div className="col-span-3">
                        <h3 className="text-left text-3xl">Articles</h3>
                    </div>
                    <div className="col-span-6"></div>
                    <div className="col-span-3 text-right">
                        <Link
                            href="/admin/article/new-article"
                            className={`${styles['new-article-btn']} px-5 py-2 uppercase font-bold text-sm text-white tracking-[0.16rem]`}
                        >
                            New Article
                        </Link>
                    </div>
                </div>

                <div className="mb-[150px]">
                    <ArticleList
                        title="Article list"
                        articleListProp={JSON.parse(articles)}
                    />
                </div>
            </section>
        </DashboardLayout>
    )
}

export default Dashboard

export async function getServerSideProps({ req }: GetSessionParams) {
    const session = await getSession({ req })

    if (!session) {
        return {
            redirect: {
                destination: '/admin/login',
                permanent: false
            }
        }
    }
    await connectMongo().catch((error) => console.log(error))

    const articles = await Article.find(
        {},
        {
            _id: 1,
            enTitle: 1,
            arTitle: 1,
            enMetaDesc: 1,
            arMetaDesc: 1,
            createdAt: 1,
            createdBy: 1,
            isPublished: 1
        }
    )
    // authorize user return session
    return {
        props: {
            session,
            articles: JSON.stringify(articles)
        }
    }
}
