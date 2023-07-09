import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'

import connectMongo from '@/database/conn'
import Article from '@/model/Article'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req })

  await connectMongo().catch((error) =>
    res.json({ error: 'Connection Failed...!' })
  )

  if (req.method === 'POST') {
    if (!req.body)
      return res
        .status(404)
        .json({ success: false, error: "Don't have form data...!" })
    const {
      enTitle,
      enSlug,
      enMetaDesc,
      enContent,
      thumbnailUrl,
      bannerUrl
    } = req.body
    console.log('request', typeof req.body)
    const article = await Article.create({
      enTitle,
      enSlug,
      enMetaDesc,
      enContent: JSON.stringify(enContent),
      createdBy: session?.user?.email,
      createdAt: new Date().toISOString(),
      thumbnailUrl,
      bannerUrl,
      isPublished: false
    })
    res.status(201).json({ success: true, article })
  } else {
    res
      .status(500)
      .json({
        success: false,
        message: 'Something went wrong.'
      })
  }
}
