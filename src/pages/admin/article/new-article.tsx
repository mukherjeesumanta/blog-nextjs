'use client';

import React, { FC, useState } from 'react'
import { getSession, GetSessionParams } from 'next-auth/react'
import Head from 'next/head'

import DashboardLayout from '@/components/admin/layout/dashboard-layout'
import ArticleForm from '@/components/admin/article/ArticleForm'
import { SessionProp } from '@/types'

type ArticlePropType = {
  session: SessionProp
}
const NewArticle: FC<ArticlePropType> = ({ session }) => {
  return (
    <DashboardLayout session={session}>
      <Head>
        <title>New Article</title>
      </Head>

      <ArticleForm mode="create" />
    </DashboardLayout>
  )
}

export async function getServerSideProps({ req }: GetSessionParams) {
  const session = await getSession({ req })

  if (!session) {
    return {
      redirect: {
        destination: '/admin/',
        permanent: false
      }
    }
  }
  // authorize user return session
  return {
    props: { session }
  }
}

export default NewArticle
