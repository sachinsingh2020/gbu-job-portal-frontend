import { createAction, createReducer } from '@reduxjs/toolkit';

const nextActiveIndex = createAction('nextActiveIndex');

export const indexReducer = createReducer({
    activeIndex: 0
}, (builder) => {
    builder
        .addCase(nextActiveIndex, (state, action) => {
            state.activeIndex = state.activeIndex + 1;
        })
});