'use client'

import { FC, FormEvent, useRef, useState } from 'react'
import MyEditor from '@/components/admin/my-editor/MyEditor'
import { useDispatch, useSelector } from 'react-redux'
import { setArticleDetails } from '@/globalRedux/admin/features/articlesSlice'
import { RootState } from '@/globalRedux/admin/store'

import styles from '@/components/admin/article/ArticleForm.module.css'


interface ArticleFormProps {
    visible: boolean
    onArPreviewClick: () => void
}


const ArabicForm: FC<ArticleFormProps> = (props) => {
    const dispatch = useDispatch()

    const { arTitle, arSlug, arMetaDesc, arContent } = useSelector(
        (state: RootState) => state.articleDetail
    )

    const { showArErr } = useSelector(
        (state: RootState) => state.miscItems
    )

    const titleChangeHandler = (e: FormEvent<HTMLInputElement>) => {
        dispatch(
            setArticleDetails({
                arTitle: e.currentTarget.value
            })
        )
    }
    const slugChangeHandler = (e: FormEvent<HTMLInputElement>) => {
        dispatch(
            setArticleDetails({
                arSlug: e.currentTarget.value
            })
        )
    }
    const metaChangeHandler = (e: FormEvent<HTMLInputElement>) => {
        dispatch(
            setArticleDetails({
                arMetaDesc: e.currentTarget.value
            })
        )
    }

    const arPreviewHandler = () => {
        props.onArPreviewClick()
    }

    return (
        <div className={`mt-5 ${props.visible ? '' : 'hidden'}`}>
            <div className="grid gap-3 grid-cols-12">
                <input type="hidden" id="_id" />
                <div className="col-span-12 sm:col-span-12 md:col-span-2">
                    <label htmlFor="arArticleTitle">
                        Arabic Title{' '}
                        <span className={styles['mandatory']}>*</span>
                    </label>
                </div>
                <div className="col-span-12 sm:col-span-12 md:col-span-10 border rounded border-solid">
                    <input
                        id="arArticleTitle"
                        name="arArticleTitle"
                        type="text"
                        value={arTitle}
                        placeholder="Title"
                        className="w-full h-10 px-3 py-1 rounded"
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className="col-span-12 sm:col-span-12 md:col-span-2">
                    <label htmlFor="arSlug">
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
                        id="arSlug"
                        name="arSlug"
                        type="text"
                        value={arSlug}
                        placeholder="Slug"
                        className="w-full h-10 px-3 py-1 rounded"
                        onChange={slugChangeHandler}
                    />
                </div>

                <div className="col-span-12">
                    <hr className={styles['divider']} />
                </div>
                <div className="col-span-12 sm:col-span-12 md:col-span-2">
                    <label htmlFor="arMetaDescription">
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
                        id="arMetaDescription"
                        name="arMetaDescription"
                        type="text"
                        value={arMetaDesc}
                        placeholder="Meta Description"
                        className="w-full h-10 px-3 py-1 rounded"
                        onChange={metaChangeHandler}
                    />
                </div>

                <div className="col-span-12 sm:col-span-12 md:col-span-2">
                    <label htmlFor="">
                        Arabic Article Body{' '}
                        <span className={styles['mandatory']}>*</span>
                    </label>
                </div>
                <div className="col-span-12 sm:col-span-12 md:col-span-10 border rounded border-solid">
                    <MyEditor
                        storeParamToUpdate='arContentState'
                        initialContent={arContent}
                    />
                </div>

                <div className="col-span-12 sm:col-span-12 md:col-span-2"></div>
                <div className="col-span-12 sm:col-span-12 md:col-span-10 ">
                    <span className={styles['mandatory']}>*</span> These fields
                    are required
                </div>

                <div className="col-span-12 sm:col-span-12 md:col-span-2"></div>
                <div className="col-span-12 sm:col-span-12 md:col-span-10 ">
                    { showArErr && <p className='text-red-500'>Please enter the required fields.</p> }
                </div>

                <div className="col-span-12 text-center mb-3">
                    <button
                        type="button"
                        className="px-5 py-3 text-white bg-[#230751] font-bold uppercase tracking-[0.16em]"
                        onClick={arPreviewHandler}
                    >
                        save & preview
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ArabicForm
