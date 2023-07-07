'use client';

import { createSlice } from '@reduxjs/toolkit'
import { ArticleType } from '@/types'


const initialState: ArticleType[] = []

export const articleListDashBoardSlice = createSlice({
    name: 'articleListDashBoard',
    initialState,
    reducers: {
        setArticleListDashboard: (_state, action) => action.payload,
        deleteArticle: (state, action) => {
            const articleId = action.payload.articleId
            return state.filter((article) => {
                article._id !== articleId
            })
        }
    }

})

export const { setArticleListDashboard, deleteArticle } = articleListDashBoardSlice.actions

export default articleListDashBoardSlice.reducer;
