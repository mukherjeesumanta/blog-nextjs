'use client';

import { FC } from 'react'
import { getSession } from 'next-auth/react'
import Head from 'next/head'
import { GetServerSideProps } from 'next/types'

import ArticleForm from '@/components/admin/article/ArticleForm'
import DashboardLayout from '@/components/admin/layout/dashboard-layout'
import connectMongo from '@/database/conn'
import Article from '@/model/Article'
import { SessionProp } from '@/types'

import type { RootState } from '@/globalRedux/admin/store'
import { useSelector, useDispatch } from 'react-redux'
import { setArticleDetails } from '@/globalRedux/admin/features/articlesSlice'

type EditArticle = {
  session: SessionProp
  article: string
}
const EditArticle: FC<EditArticle> = ({ session, article }) => {

  return (
    <DashboardLayout session={session}>
      <Head>
        <title>Edit Article</title>
      </Head>
      <ArticleForm mode="edit" article={article} />
    </DashboardLayout>
  )
}

export default EditArticle

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params
}) => {
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
  //console.log(params!.id)
  const article = await Article.findOne({ _id: params!.id })
  //console.log(article)
  if(!article) {
    return {
      notFound: true
    }
  }
  return {
    props: {
      session,
      article: JSON.stringify(article)
    }
  }
}
