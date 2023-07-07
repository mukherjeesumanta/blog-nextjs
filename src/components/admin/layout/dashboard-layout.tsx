'use client';

import React, { ReactNode, useState } from 'react'
import Head from 'next/head'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import styles from '@/styles/Dashboard.module.css'

import { Provider } from 'react-redux'
import store from '@/globalRedux/admin/store'

type User = {
    email: string
}
type LayoutProps = {
    session: {
        user: User
    }
    children: ReactNode
}
const DashboardLayout: React.FunctionComponent<LayoutProps> = ({
    session,
    children
}) => {
    const user = session.user.email
    function handleSignOut() {
        signOut()
    }

    let [visibility, setVisibility] = useState(false)
    const toggleDropdown = () => setVisibility((visibility) => !visibility)

    return (
        <>
            <Head>
                {/* <style>@import url('https://use.typekit.net/wog8heu.css');</style>
        <style>@import url('https://fonts.googleapis.com/css?family=Poppins');</style>
        <style>@import url('https://fonts.googleapis.com/css?family=Noto+Kufi+Arabic');</style> */}
            </Head>
            <div className={'w-full bg-slate-50 ' + styles['bg-none']}>
                <div className="w-full  bg-[#230751]">
                    <div
                        className={`flex title text-center ${styles.logoImg} items-stretch py-2`}
                    >
                        <div className="flex-1 w-25"></div>
                        <div className="flex-1 w-50"></div>
                        <div className="flex-1 w-25 text-right pr-5">
                            <div className="flex items-center  justify-end text-right divy-3 pr-3 py-2">
                                <span className="pr-3 text-white">
                                    <strong>{user}</strong>
                                </span>
                                <span className="profile p-4 bg-gray-50 rounded-[50%]"></span>
                                <span
                                    className="arrow pr-3 text-white rotate-180 scale-x-150 scale-y-75 cursor-pointer"
                                    onClick={toggleDropdown}
                                >
                                    ^
                                </span>
                            </div>
                            <ul
                                className={`${
                                    visibility ? 'inline-block' : 'hidden'
                                } absolute p-1 ${styles['dropdown']}`}
                            >
                                <li className=" border border-gray-400 rounded-md">
                                    <Link
                                        href=""
                                        onClick={handleSignOut}
                                        className="text-[#230751] px-9 py-1 bg-transparent"
                                    >
                                        Sign Out
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bg-[#F5F8FF] flex flex-col justify-start">
                    <div className="w-full">
                        <Provider store={store}>{children}</Provider>
                    </div>
                </div>
            </div>
            <div className="w-full h-20 bg-[#230751]"></div>
        </>
    )
}

export default DashboardLayout
