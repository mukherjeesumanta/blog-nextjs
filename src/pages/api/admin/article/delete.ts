import { NextApiRequest, NextApiResponse } from 'next'

import connectMongo from '@/database/conn'
import Article from '@/model/Article'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectMongo().catch((error) =>
    res.json({ error: 'Connection Failed...!' })
  )

  if (req.method === 'DELETE') {
    if (!req.body)
      return res
        .status(404)
        .json({ success: false, error: "Don't have form data...!" })
    const { _id } = req.body

    const article = await Article.deleteOne({ _id })
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
