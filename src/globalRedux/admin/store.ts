'use client';

import { configureStore } from '@reduxjs/toolkit'

import articleReducer from './features/articlesSlice'
import articleListDashBoardReducer from './features/articleListDashBoardSlice';
import miscReducer from './features/miscSlice';


const store = configureStore({
    reducer: {
        articleDetail: articleReducer,
        articleListDashBoard: articleListDashBoardReducer,
        miscItems: miscReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export default store
