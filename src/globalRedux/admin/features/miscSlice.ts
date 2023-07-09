'use client';

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    showEnErr: false,
    showArErr: false
}

export const miscSlice = createSlice({
    name: 'miscDetails',
    initialState,
    reducers: {
        setMiscDetails: (state, action) => ({
            ...state,
            ...action.payload
        })
    }

})

export const { setMiscDetails } = miscSlice.actions

export default miscSlice.reducer;
