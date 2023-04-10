import { createAction, createReducer } from '@reduxjs/toolkit';

const createGeneralRequest = createAction('createGeneralRequest');
const createGeneralSuccess = createAction('createGeneralSuccess');
const createGeneralFail = createAction('createGeneralFail');
const getGeneralRequest = createAction('getGeneralRequest');
const getGeneralSuccess = createAction('getGeneralSuccess');
const getGeneralFail = createAction('getGeneralFail');
const clearError = createAction('clearError');
const clearMessage = createAction('clearMessage');

export const generalReducer = createReducer({}, (builder) => {
    builder
        .addCase(createGeneralRequest, (state) => {
            state.loading = true;
        })
        .addCase(createGeneralSuccess, (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        })
        .addCase(createGeneralFail, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(getGeneralRequest, (state) => {
            state.loading = true;
        })
        .addCase(getGeneralSuccess, (state, action) => {
            state.loading = false;
            state.generalDetails = action.payload.generalDetails;
        })
        .addCase(getGeneralFail, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(clearError, (state) => {
            state.error = null;
        })
        .addCase(clearMessage, (state) => {
            state.message = null;
        })
});

