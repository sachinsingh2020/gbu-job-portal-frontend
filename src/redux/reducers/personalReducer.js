import { createAction, createReducer } from '@reduxjs/toolkit';

const createPersonalRequest = createAction('createPersonalRequest');
const createPersonalSuccess = createAction('createPersonalSuccess');
const createPersonalFail = createAction('createPersonalFail');
const getPersonalRequest = createAction('getPersonalRequest');
const getPersonalSuccess = createAction('getPersonalSuccess');
const getPersonalFail = createAction('getPersonalFail');
const clearError = createAction('clearError');
const clearMessage = createAction('clearMessage');


export const personalReducer = createReducer({}, (builder) => {
    builder
        .addCase(createPersonalRequest, (state) => {
            state.loading = true;
        })
        .addCase(createPersonalSuccess, (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        })
        .addCase(createPersonalFail, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(getPersonalRequest, (state) => {
            state.loading = true;
        })
        .addCase(getPersonalSuccess, (state, action) => {
            state.loading = false;
            state.personal = action.payload.personal;
        })
        .addCase(getPersonalFail, (state, action) => {
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