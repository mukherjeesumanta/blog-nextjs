import NextAuth, { RequestInternal } from 'next-auth'
import { compare } from 'bcryptjs'
import CredentialsProvider from 'next-auth/providers/credentials'
import { CredentialsConfig, CredentialInput } from 'next-auth/providers'
import { AuthOptions } from 'next-auth'

// import GoogleProvider from 'next-auth/providers/google';
// import GithubProvider from 'next-auth/providers/github';
import connectMongo from '../../../database/conn'
import User from '../../../model/User'
import type { Credentials } from '@/types'

type Authorize = {
  credentials: Record<string, string> | undefined
  req: Pick<RequestInternal, 'body' | 'query' | 'headers' | 'method'>
}
/*  */
const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      authorize: async (credentials, _req) => {
        await connectMongo().catch((_error) => {
          error: 'Connection Failed...!'
        })

        // check user existance
        const result = await User.findOne({ email: credentials!.email })
        if (!result) {
          throw new Error('No user Found with Email. Please Sign Up...!')
        }

        // compare()
        const checkPassword = await compare(
          credentials!.password,
          result.password
        )

        // incorrect password
        if (!checkPassword || result.email !== credentials!.email) {
          throw new Error("Username or Password doesn't match")
        }

        return result
      },
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'Email...' },
        password: { label: 'Password', type: 'password' }
      }
    })
  ],
  secret: 'XH6bp/TkLvnUkQiPDEZNyHc0CV+VV5RL/n+HdVHoHN0=',
  session: {
    strategy: 'jwt'
  }
}
export default NextAuth(authOptions)
