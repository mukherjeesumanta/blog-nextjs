'use client'

import { FC, ReactNode, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import EnglishForm from './EnglishForm'
import ArabicForm from './ArabicForm'
import { convertFromRaw, convertToRaw, EditorState } from 'draft-js'
import { FileType } from '../../../types'
import { useDispatch, useSelector } from 'react-redux'
import { setArticleDetails } from '@/globalRedux/admin/features/articlesSlice'
import { setMiscDetails } from '@/globalRedux/admin/features/miscSlice'

import styles from '@/components/admin/article/ArticleForm.module.css'
import uploadIcon from '@/assets/upload.svg'
import { RootState } from '@/globalRedux/admin/store'

interface ArticleFormProps {
    mode: string
    article?: string
}

const TAB_EN = 'en'
const TAB_AR = 'ar'

const fileTypes = [
    'image/apng',
    'image/bmp',
    'image/gif',
    'image/jpeg',
    'image/pjpeg',
    'image/png',
    'image/svg+xml'
]
const validFileType = (file: File) => {
    return fileTypes.includes(file.type)
}
const returnFileSize = (number: number) => {
    if (number < 1024) {
        return `${number} bytes`
    } else if (number >= 1024 && number < 1048576) {
        return `${(number / 1024).toFixed(1)} KB`
    } else if (number >= 1048576) {
        return `${(number / 1048576).toFixed(1)} MB`
    }
}

const ArticleForm: FC<ArticleFormProps> = (props) => {
    const router = useRouter(),
        dispatch = useDispatch()

    let articleObj: {
        enContent: string
        arContent: string
    } = JSON.parse(props.article || '{}')

    //console.log('enContentState', JSON.stringify(enContentState))
    const emptyEnContent = convertToRaw(
        EditorState.createEmpty().getCurrentContent()
    )
    const emptyArContent = convertToRaw(
        EditorState.createEmpty().getCurrentContent()
    )

    useEffect(() => {
        if (props.mode === 'edit' && !!props.article) {
            //articleObj = JSON.parse(props.article)

            dispatch(
                setArticleDetails({
                    ...JSON.parse(props.article || '{}'),
                    enContentState: articleObj.enContent
                        ? JSON.parse(articleObj.enContent)
                        : convertToRaw(
                              EditorState.createEmpty().getCurrentContent()
                          ),
                    arContentState: articleObj.arContent
                        ? JSON.parse(articleObj.arContent)
                        : convertToRaw(
                              EditorState.createEmpty().getCurrentContent()
                          )
                })
            )
        } else if (props.mode === 'create') {
            dispatch(
                setArticleDetails({
                    _id: null,
                    createdBy: '',
                    createdAt: null,
                    lastUpdatedBy: '',
                    lastUpdatedAt: null,
                    isPublished: false,
                    enTitle: '',
                    enSlug: '',
                    enMetaDesc: '',
                    enContent: JSON.stringify(emptyEnContent),
                    enContentState: emptyEnContent,
                    arTitle: '',
                    arSlug: '',
                    arMetaDesc: '',
                    arContent: JSON.stringify(emptyArContent),
                    arContentState: emptyArContent
                })
            )
        }
    }, [props.mode])

    const {
        _id,
        __v,
        createdBy,
        createdAt,
        lastUpdatedBy,
        lastUpdatedAt,
        isPublished,
        enTitle,
        enSlug,
        enMetaDesc,
        enContentState,
        arTitle,
        arSlug,
        arMetaDesc,
        arContentState
    } = useSelector((state: RootState) => state.articleDetail)

    const [selectedTab, setSelectedTab] = useState(TAB_EN)

    const enBannerRef = useRef<HTMLInputElement>(null)
    const enThumbnailRef = useRef<HTMLInputElement>(null)

    let [thumbnailImg, setThumbnailImg] = useState<FileType>({})
    let [bannerImg, setBannerImg] = useState<FileType>({})

    const gettabHandler = (tabName: string) => {
        return () => {
            if (tabName === TAB_EN) setSelectedTab(TAB_EN)
            else if (tabName === TAB_AR) setSelectedTab(TAB_AR)
        }
    }

    const saveAndPreview = async (lang: 'en' | 'ar') => {
        const newData = {
            _id,
            __v,
            createdBy,
            createdAt,
            lastUpdatedBy,
            lastUpdatedAt,
            isPublished,
            enTitle,
            enSlug,
            enMetaDesc,
            enContent: enContentState,
            arTitle,
            arSlug,
            arMetaDesc,
            arContent: arContentState
        }
        //console.log(newData)
        const action = props.mode === 'edit' ? 'edit' : 'create'
        const method = props.mode === 'edit' ? 'PUT' : 'POST'

        const res = await fetch(`/api/admin/article/${action}`, {
            method,
            body: JSON.stringify(newData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })

        //console.log(res);

        if (res.ok) {
            /* dispatch(
                setArticleDetails({
                    _id: '',
                    enTitle: '',
                    enSlug: '',
                    enMetaDesc: '',
                    enContentState: emptyEnContent,
                    enContent: JSON.stringify(emptyEnContent),
                    arTitle: '',
                    arSlug: '',
                    arMetaDesc: '',
                    arContentState: emptyArContent,
                    arContent: JSON.stringify(emptyArContent),
                    createdBy: '',
                    createdAt: '',
                    lastUpdatedBy: '',
                    lastUpdatedAt: '',
                    isPublished: false,
                    __v: 0
                })
            ) */
            //router.push('/admin/dashboard')
            const previewUrl = `/admin/preview/${lang}/${enSlug}/${_id}`
            window.open(previewUrl, '_blank')
        }
    }

    const bannerChangeHandler = () => {
        const curFiles =
            (enBannerRef.current && enBannerRef.current.files) || []
        let fileDesc: ReactNode = <></>
        if (curFiles.length >= 0) {
            //console.log(curFiles)
            const file = curFiles[0]

            if (validFileType(file)) {
                setBannerImg({
                    fileName: file.name,
                    fileType: true,
                    fileSize: file.size,
                    file
                })
            } else {
                setBannerImg({
                    fileName: file.name,
                    fileType: false,
                    fileSize: 0
                })
            }
        }
    }
    const thumbnailChangeHandler = () => {
        const curFiles =
            (enThumbnailRef.current && enThumbnailRef.current.files) || []
        let fileDesc: ReactNode = <></>
        if (curFiles.length >= 0) {
            // console.log(curFiles)
            const file = curFiles[0]

            if (validFileType(file)) {
                setThumbnailImg({
                    fileName: file.name,
                    fileType: true,
                    fileSize: file.size,
                    file
                })
            } else {
                setThumbnailImg({
                    fileName: file.name,
                    fileType: false,
                    fileSize: 0
                })
            }
        }
    }

    const isValidContent = (lang: 'en' | 'ar') => {
        if (lang === TAB_EN) {
            if (
                enTitle &&
                EditorState.createWithContent(convertFromRaw(enContentState))
                    .getCurrentContent()
                    .hasText() &&
                thumbnailImg.fileName &&
                thumbnailImg.fileType &&
                bannerImg.fileName &&
                bannerImg.fileType
            ) {
                return true
            } else {
                return false
            }
        } else {
            if (
                arTitle &&
                EditorState.createWithContent(convertFromRaw(arContentState))
                    .getCurrentContent()
                    .hasText() &&
                thumbnailImg.fileName &&
                thumbnailImg.fileType &&
                bannerImg.fileName &&
                bannerImg.fileType
            ) {
                return true
            } else {
                return false
            }
        }
    }

    const onEngPreviewClick = () => {
        if (isValidContent(TAB_EN)) {
            dispatch(setMiscDetails({ showEnErr: false }))
            saveAndPreview(TAB_EN)
        } else {
            // show error -> pass error prop
            dispatch(setMiscDetails({ showEnErr: true }))
        }
    }

    const onArPreviewClick = () => {
        if (isValidContent(TAB_AR)) {
            dispatch(setMiscDetails({ showAnErr: false }))
            saveAndPreview(TAB_AR)
        } else {
            // show error -> pass error prop
            dispatch(setMiscDetails({ showArErr: true }))
        }
    }

    return (
        <section className="w-5/6 mx-auto">
            <div className="grid gap-4 grid-cols-12 py-5">
                <div className="col-span-3">
                    <p className="text-gray-800 text-lg font-bold py-4">
                        <Link
                            href="/admin/dashboard"
                            className={`${styles.navmenu} px-3 py-2 uppercase cursor-pointer`}
                        >
                            {'< '} BACK
                        </Link>
                    </p>
                </div>
                <div className="navmenu text-center col-span-6">
                    <p className="text-gray-800 text-lg font-bold py-4">
                        <span
                            className={`${
                                styles.navmenu
                            } px-5 py-2 uppercase cursor-pointer ${
                                selectedTab === TAB_EN ? styles.active : ''
                            }`}
                            onClick={gettabHandler(TAB_EN)}
                        >
                            ENGLISH
                        </span>
                        <span
                            className={`${
                                styles.navmenu
                            } px-5 py-2 uppercase cursor-pointer ${
                                selectedTab === TAB_AR ? styles.active : ''
                            }`}
                            onClick={gettabHandler(TAB_AR)}
                        >
                            ARABIC
                        </span>
                    </p>
                </div>
                <div className="col-span-3 text-right"></div>
            </div>
            <div className="grid gap-4 grid-cols-12">
                <div className="col-span-3">
                    <p className={styles.title}>New Article</p>
                </div>
                <div className="title text-center col-span-6"></div>
                <div className="col-span-3 text-right"></div>
            </div>

            {/* form */}
            <form>
                <div className="grid gap-3 grid-cols-12">
                    <input type="hidden" id="_id" />
                    <div className="col-span-12 sm:col-span-12 md:col-span-2">
                        <label htmlFor="enThumbNailImg">
                            Thumbnail{' '}
                            <span className={styles['mandatory']}>*</span>
                        </label>
                    </div>
                    <div className="col-span-12 sm:col-span-12 md:col-span-10 ">
                        <label
                            htmlFor="enThumbNailImg"
                            className="flex w-fit px-4 py-3 border rounded border-solid bg-white"
                        >
                            <Image src={uploadIcon} alt="" className="mr-2" />
                            Upload image
                        </label>
                        <input
                            ref={enThumbnailRef}
                            id="enThumbNailImg"
                            name="enThumbNailImg"
                            type="file"
                            placeholder="Slug"
                            className="w-full h-10 px-3 py-1 rounded hidden"
                            onChange={thumbnailChangeHandler}
                            /* {...formik.getFieldProps('metaDescription')} */
                        />
                        {thumbnailImg.fileType && (
                            <ul className="py-3 w-fit inline-block">
                                <li>
                                    File name: {thumbnailImg?.fileName}, File
                                    size:{' '}
                                    {returnFileSize(thumbnailImg.fileSize || 0)}
                                    .
                                </li>
                            </ul>
                        )}
                        {thumbnailImg.fileType === false && (
                            <ul className="py-3 w-fit inline-block">
                                <li>
                                    File name: {thumbnailImg.fileName}: Invalid
                                    file type. Update your file.
                                </li>
                            </ul>
                        )}
                    </div>

                    <div className="col-span-12 sm:col-span-12 md:col-span-2">
                        <label htmlFor="enBannerImage">
                            Banner{' '}
                            <span className={styles['mandatory']}>*</span>
                        </label>
                    </div>
                    <div className="col-span-12 sm:col-span-12 md:col-span-10 ">
                        <label
                            htmlFor="enBannerImage"
                            className="flex w-fit px-4 py-3 border rounded border-solid bg-white"
                        >
                            <Image src={uploadIcon} alt="" className="mr-2" />
                            Upload image
                        </label>
                        <input
                            ref={enBannerRef}
                            id="enBannerImage"
                            name="enBannerImage"
                            type="file"
                            placeholder="Slug"
                            className="w-full h-10 px-3 py-1 rounded hidden"
                            onChange={bannerChangeHandler}
                            /* {...formik.getFieldProps('metaDescription')} */
                        />
                        {bannerImg.fileType && (
                            <ul className="py-3 w-fit inline-block">
                                <li>
                                    File name: {bannerImg?.fileName}, File size:{' '}
                                    {returnFileSize(bannerImg.fileSize || 0)}.
                                </li>
                            </ul>
                        )}
                        {bannerImg.fileType === false && (
                            <ul className="py-3 w-fit inline-block">
                                <li>
                                    File name: {bannerImg.fileName}: Invalid
                                    file type. Update your file.
                                </li>
                            </ul>
                        )}
                    </div>

                    <div className="col-span-12">
                        <hr className={styles['divider']} />
                    </div>
                </div>

                <EnglishForm
                    visible={selectedTab === TAB_EN}
                    onEngPreviewClick={onEngPreviewClick}
                />
                <ArabicForm
                    visible={selectedTab === TAB_AR}
                    onArPreviewClick={onArPreviewClick}
                />
            </form>
        </section>
    )
}

export default ArticleForm