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

  if (req.method === 'PUT') {
    if (!req.body)
      return res.status(404).json({ error: "Don't have form data...!" })
    const { _id, enContent, arContent } = req.body

    console.log(req.body)
    const article = await Article.findOneAndUpdate(
      { _id },
      {
        ...req.body,
        enContent: JSON.stringify(enContent),
        arContent: JSON.stringify(arContent),
        lastUpdatedBy: session?.user?.email,
        lastUpdatedAt: new Date().toISOString(),
      }
    )
    res.status(201).json({ success: true, article })
  } else {
    res
      .status(500)
      .json({
        success: false,
        message: 'HTTP method not valid only POST Accepted'
      })
  }
}
