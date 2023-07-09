import { NextApiRequest, NextApiResponse } from 'next'

import connectMongo from '../../../database/conn'
import User from '../../../model/User'
import { hash } from 'bcryptjs'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectMongo().catch((error) =>
    res.json({ error: 'Connection Failed...!' })
  )

  // only post method is accepted
  if (req.method === 'POST') {
    if (!req.body)
      return res.status(404).json({ error: "Don't have form data...!" })
    const { username, email, password } = req.body

    // check duplicate user
    const checkexisting = await User.findOne({ email })
    if (checkexisting)
      return res.status(422).json({ message: 'User Already Exists...!' })

    // hash password
    const user = await User.create({
      username,
      email,
      password: await hash(password, 12)
    })
    console.log(user)
    /* , function(err, data){
            if(err) return res.status(404).json({ err });
            res.status(201).json({ status : true, user: data})
        } */
    res.status(201).json({ status: true, user: user })
  } else {
    res
      .status(500)
      .json({ message: 'HTTP method not valid only POST Accepted' })
  }
}
