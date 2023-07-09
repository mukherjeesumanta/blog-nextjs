'use client';

import { configureStore } from '@reduxjs/toolkit'

import articleListEnReducer from './reducers/articleListEnSlice';
import articleListArRecucer from './reducers/articleListArSlice.ts';

const storePublic = configureStore({
    reducer: {
        articleListEn: articleListEnReducer,
        articleListAr: articleListArRecucer
    }
})

export type RootStatePublic = ReturnType<typeof storePublic.getState>
export type AppDispatch = typeof storePublic.dispatch


export default storePublic
