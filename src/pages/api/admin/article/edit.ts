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
    res.json({ success: false, error: 'Connection Failed...!' })
  )

  if (req.method === 'POST') {
    if (!req.body)
      return res.status(404).json({ error: "Don't have form data...!" })

    const {
      _id,
      enTitle,
      enSlug,
      enMetaDesc,
      enContent,
      thumbnailUrl,
      bannerUrl,
      isPublished
    } = req.body
    const article = await Article.findOneAndUpdate(
      { _id },
      {
        enTitle,
        enSlug,
        enMetaDesc,
        thumbnailUrl,
        bannerUrl,
        isPublished,
        enContent: JSON.stringify(enContent),
      }
    )
    res.status(201).json({ success: true, article })
  } else {
    res
      .status(500)
      .json({
        success: false,
        message: 'Something went wrong'
      })
  }
}
