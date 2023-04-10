import { createAction, createReducer } from '@reduxjs/toolkit';

const createPostAppliedRequest = createAction('createPostAppliedRequest');
const createPostAppliedSuccess = createAction('createPostAppliedSuccess');
const createPostAppliedFail = createAction('createPostAppliedFail');
const getPostAppliedRequest = createAction('getPostAppliedRequest');
const getPostAppliedSuccess = createAction('getPostAppliedSuccess');
const getPostAppliedFail = createAction('getPostAppliedFail');
const clearError = createAction('clearError');
const clearMessage = createAction('clearMessage');

export const postAppliedReducer = createReducer({}, (builder) => {
    builder
        .addCase(createPostAppliedRequest, (state) => {
            state.loading = true;
        })
        .addCase(createPostAppliedSuccess, (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        })
        .addCase(createPostAppliedFail, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(getPostAppliedRequest, (state) => {
            state.loading = true;
        })
        .addCase(getPostAppliedSuccess, (state, action) => {
            state.loading = false;
            state.postApplied = action.payload.appliedFor;
        })
        .addCase(getPostAppliedFail, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(clearError, (state) => {
            state.error = null;
        })
        .addCase(clearMessage, (state) => {
            state.message = null;
        })
})