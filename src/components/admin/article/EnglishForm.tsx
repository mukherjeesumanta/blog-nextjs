'use client'

import { FC, FormEvent, useRef, useState } from 'react'
import MyEditor from '@/components/admin/my-editor/MyEditor'
import { useDispatch, useSelector } from 'react-redux'
import { setArticleDetails } from '@/globalRedux/admin/features/articlesSlice'
import { RootState } from '@/globalRedux/admin/store'

import styles from '@/components/admin/article/ArticleForm.module.css'


interface ArticleFormProps {
    visible: boolean
    onEngPreviewClick: () => void
}


const EnglishForm: FC<ArticleFormProps> = (props) => {
    const dispatch = useDispatch()

    const { enTitle, enSlug, enMetaDesc, enContent } = useSelector(
        (state: RootState) => state.articleDetail
    )
    const { showEnErr } = useSelector(
        (state: RootState) => state.miscItems
    )

    const titleChangeHandler = (e: FormEvent<HTMLInputElement>) => {
        dispatch(
            setArticleDetails({
                enTitle: e.currentTarget.value
            })
        )
    }
    const slugChangeHandler = (e: FormEvent<HTMLInputElement>) => {
        dispatch(
            setArticleDetails({
                enSlug: e.currentTarget.value
            })
        )
    }
    const metaChangeHandler = (e: FormEvent<HTMLInputElement>) => {
        dispatch(
            setArticleDetails({
                enMetaDesc: e.currentTarget.value
            })
        )
    }

    const enPreviewHandler = () => {
        props.onEngPreviewClick()
    }

    return (
        <div className={`mt-5 ${props.visible ? '' : 'hidden'}`}>
            <div className="grid gap-3 grid-cols-12">
                <input type="hidden" id="_id" />
                <div className="col-span-12 sm:col-span-12 md:col-span-2">
                    <label htmlFor="enArticleTitle">
                        Title <span className={styles['mandatory']}>*</span>
                    </label>
                </div>
                <div className="col-span-12 sm:col-span-12 md:col-span-10 border rounded border-solid">
                    <input
                        id="enArticleTitle"
                        name="enArticleTitle"
                        value={enTitle}
                        type="text"
                        placeholder="Title"
                        className="w-full h-10 px-3 py-1 rounded"
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className="col-span-12 sm:col-span-12 md:col-span-2">
                    <label htmlFor="enSlug">
                        Slug{' '}
                        <i
                            className={`${styles['info']} ${styles['hover-text']}`}
                        >
                            i
                            <span
                                className={`${styles['tooltip-text']} ${styles['top']}`}
                            >
                                Slug is hyphen(-) seperated unique endpoint
                                (without special chars), visible in browser
                                address bar
                            </span>
                        </i>
                    </label>
                </div>
                <div className="col-span-12 sm:col-span-12 md:col-span-10 border rounded border-solid">
                    <input
                        id="enSlug"
                        name="enSlug"
                        value={enSlug}
                        type="text"
                        placeholder="Slug"
                        className="w-full h-10 px-3 py-1 rounded"
                        onChange={slugChangeHandler}
                    />
                </div>

                <div className="col-span-12">
                    <hr className={styles['divider']} />
                </div>

                <div className="col-span-12 sm:col-span-12 md:col-span-2">
                    <label htmlFor="enMetaDescription">
                        Meta Description{' '}
                        <i
                            className={`${styles['info']} ${styles['hover-text']}`}
                        >
                            i
                            <span
                                className={`${styles['tooltip-text']} ${styles['top']}`}
                            >
                                Description that show up in search engine result
                            </span>
                        </i>
                    </label>
                </div>
                <div className="col-span-12 sm:col-span-12 md:col-span-10 border rounded border-solid">
                    <input
                        id="enMetaDescription"
                        name="enMetaDescription"
                        value={enMetaDesc}
                        type="text"
                        placeholder="Meta Description"
                        className="w-full h-10 px-3 py-1 rounded"
                        onChange={metaChangeHandler}
                    />
                </div>

                <div className="col-span-12 sm:col-span-12 md:col-span-2">
                    <label htmlFor="">
                        Article Body{' '}
                        <span className={styles['mandatory']}>*</span>
                    </label>
                </div>
                <div className="col-span-12 sm:col-span-12 md:col-span-10 border rounded border-solid">
                    <MyEditor
                        storeParamToUpdate='enContentState'
                        initialContent={enContent}
                    />
                </div>

                <div className="col-span-12 sm:col-span-12 md:col-span-2"></div>
                <div className="col-span-12 sm:col-span-12 md:col-span-10 ">
                    <span className={styles['mandatory']}>*</span> These fields
                    are required
                </div>

                <div className="col-span-12 sm:col-span-12 md:col-span-2"></div>
                <div className="col-span-12 sm:col-span-12 md:col-span-10 ">
                    { showEnErr && <p className='text-red-500'>Please enter the required fields.</p> }
                </div>

                <div className="col-span-12 text-center mb-3">
                    <button
                        type="button"
                        className="px-5 py-3 text-white bg-[#230751] font-bold uppercase tracking-[0.16em]"
                        onClick={enPreviewHandler}
                    >
                        save & preview
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EnglishForm
