'use client';

import { createSlice } from '@reduxjs/toolkit'
import { ArticleType } from '@/types'


const initialState: ArticleType[] = []

export const articleListEnSlice = createSlice({
    name: 'articleListEn',
    initialState,
    reducers: {
        setArticleListEn: (_state, action) => action.payload,
    }

})

export const { setArticleListEn } = articleListEnSlice.actions

export default articleListEnSlice.reducer;
