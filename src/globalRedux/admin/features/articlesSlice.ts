'use client';

import { createSlice } from '@reduxjs/toolkit'

import { ArticleType } from '@/types'
import { convertToRaw, EditorState } from 'draft-js';

const initialState: ArticleType = {
    _id: '',
    enTitle: '',
    enSlug: '',
    enMetaDesc: '',
    enContentState: convertToRaw(EditorState.createEmpty().getCurrentContent()),
    enContent: '',
    createdBy: '',
    createdAt: '',
    thumbnailUrl: '',
    bannerUrl: '',
    isPublished: false,
    __v: 0
}

export const articlesSlice = createSlice({
    name: 'articleDetail',
    initialState,
    reducers: {
        setArticleDetails: (state, action) => ({
            ...state,
            ...action.payload
        })
    }

})

export const { setArticleDetails } = articlesSlice.actions

export default articlesSlice.reducer;
