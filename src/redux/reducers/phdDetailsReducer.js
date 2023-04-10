import { createAction, createReducer } from '@reduxjs/toolkit';

const createPhdDetailsRequest = createAction('createPhdDetailsRequest');
const createPhdDetailsSuccess = createAction('createPhdDetailsSuccess');
const createPhdDetailsFail = createAction('createPhdDetailsFail');
const getPhdDetailsRequest = createAction('getPhdDetailsRequest');
const getPhdDetailsSuccess = createAction('getPhdDetailsSuccess');
const getPhdDetailsFail = createAction('getPhdDetailsFail');
const clearError = createAction('clearError');
const clearMessage = createAction('clearMessage');

export const phdDetailsReducer = createReducer({}, (builder) => {
    builder
        .addCase(createPhdDetailsRequest, (state) => {
            state.loading = true;
        })
        .addCase(createPhdDetailsSuccess, (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        })
        .addCase(createPhdDetailsFail, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(getPhdDetailsRequest, (state) => {
            state.loading = true;
        })
        .addCase(getPhdDetailsSuccess, (state, action) => {
            state.loading = false;
            state.phdDetails = action.payload.phdDetails;
        })
        .addCase(getPhdDetailsFail, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(clearError, (state) => {
            state.error = null;
        })
        .addCase(clearMessage, (state) => {
            state.message = null;
        });
});