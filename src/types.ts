import { ContentState, EditorState, RawDraftContentState } from "draft-js";

export interface SignInStatus {
    ok: boolean,
    url: string,
    status: number,
    error: string | null
}

export interface Credentials {
    email: string,
    password: string
}

export type SessionProp = {
    user: {
        email: string;
    }
}

export interface ReCaptchaInstance {
    ready: (cb: () => any) => any
    execute: (options: ReCaptchaExecuteOptions) => Promise<string>
    render: (id: string, options: ReCaptchaRenderOptions) => any
    getResponse: () => any
    reset: () => void
}
export interface ReCaptchaExecuteOptions {
    action: string
}
export interface ReCaptchaRenderOptions {
    sitekey: string
    //size: 'invisible',
    callback: () => void
}
export interface FileType {
    fileName?: string
    fileType?: boolean
    fileSize?: number
    file?: File
}
export interface ContentTypeWithFile {
    title: string
    slug: string
    thumbnailImg: FileType | undefined
    metaDesc: string
    bannerImg: FileType | undefined
    articleBody: string
}
export interface EnContentType {
    enTitle: string
    enSlug: string
    enMetaDesc: string
    enContentState: RawDraftContentState
    enContent: string
}
export interface ArContentType {
    arTitle: string
    arSlug: string
    arMetaDesc: string
    arContentState: RawDraftContentState
    arContent: string
}

export type ArticleType = EnContentType & ArContentType & {
    _id: string
    createdBy: string
    createdAt: string
    lastUpdatedBy: string
    lastUpdatedAt: string
    isPublished: boolean
    __v: number
}

export interface FormValues {
    _id?: string
    articleTitle: string
    metaDescription: string
    articleDescription: string
    createdAt?: string
    createdBy?: string
    lastUpdatedAt?: string
    lastUpdatedBy?: string
}

export type ArticleThumbnailType = {
    _id: string
    enTitle: string
    enSlug: string
    arTitle: string
    createdAt: string
}
export type ArticleThumbnailListType = {
    articles: ArticleThumbnailType[]
}





