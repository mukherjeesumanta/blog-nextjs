'use client';

import { createSlice } from '@reduxjs/toolkit'
import { ArticleType } from '@/types'


const initialState: ArticleType[] = []

export const articleListArSlice = createSlice({
    name: 'articleListAr',
    initialState,
    reducers: {
        setArticleListAr: (_state, action) => action.payload,
    }

})

export const { setArticleListAr } = articleListArSlice.actions

export default articleListArSlice.reducer;
