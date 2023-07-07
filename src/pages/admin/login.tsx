import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Login.module.css'
import { FormEvent, useRef, useState } from 'react'
import { signIn, SignInResponse } from 'next-auth/react'
import login_validate from '../../lib/validate'
import { useRouter } from 'next/router'
import logoImg from '../../assets/logo-login.svg'
import Link from 'next/link'

export default function Login() {
  let [showError, setShowError] = useState(false)
  let [keepSignedIn, setKeepSignedIn] = useState(false)

  const router = useRouter()
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    let email = emailRef.current && emailRef.current.value
    let password = passwordRef.current && passwordRef.current.value

    const err = login_validate({ email, password })

    if (err.hasError) {
      setShowError(true)
      return false
    } else {
      setShowError(false)
    }
    const loginData = {
      redirect: false,
      email,
      password,
      keepSignedIn,
      callbackUrl: '/admin/dashboard'
    };
    //console.log(loginData)
    const status = await signIn('credentials', loginData)

    //console.log(status)

    if (status?.ok) router.push('/admin/dashboard')
  }

  const checkBoxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeepSignedIn(e.target.checked)
  }

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <div className="flex flex-row h-screen bg-transparent justify-center items-center">
        <div className="m-auto rounded-md w-3/5 h-2.5/5 bg-slate-50">
          <div className="flex flex-row items-stretch h-full">
            <div className={`${styles.form_sec} rounded-l-md`}>
              <div className={styles.logoImg}>
                <Image src={logoImg} alt=" " />
              </div>
              <div className={styles.title}>
                <h3>Welcome to the Admin Panel</h3>
              </div>

              <div className="form_div mt-8">
                {showError && (
                  <span className="pb-3 block text-center text-red-500 text-sm">
                    Please enter valid email and password
                  </span>
                )}
                <form className="flex flex-col gap-8" onSubmit={onSubmit}>
                  <div className={`${styles.input_group} `}>
                    <input
                      type="email"
                      //name="email"
                      placeholder="Email Address"
                      className={styles.input_text}
                      ref={emailRef}
                    />
                  </div>

                  <div className={`${styles.input_group} `}>
                    <input
                      type='password'
                      placeholder="Password"
                      className={styles.input_text}
                      ref={passwordRef}
                    />
                  </div>

                  <div className={`${styles.input_group} flex flex-column justify-between`}>
                    <div className="checkbox mr-3">
                      <input
                        type="checkbox"
                        id="keepsignin"
                        onChange={checkBoxHandler}
                      />
                      <label htmlFor='keepsignin' className="w-1/2 pl-3 text-[#1E1E1E]">Keep me signed in</label>
                    </div>
                    <div className="forgot-pwd text-sm">
                      <Link className='text-sm' href={''}>Forgot your password?</Link>
                    </div>
                  </div>

                  {/* login buttons */}
                  <div className="input-button">
                    <button type="submit" className={styles.button}>
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className={`${styles.imgStyle} rounded-r-md`}></div>
          </div>
        </div>
      </div>
    </>
  )
}
