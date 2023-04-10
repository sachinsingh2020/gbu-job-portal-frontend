import { createAction, createReducer } from '@reduxjs/toolkit';

const createNationalConferencRequest = createAction('createNationalConferenceRequest');
const createNationalConferenceSuccess = createAction('createNationalConferenceSuccess');
const createNationalConferenceFail = createAction('createNationalConferenceFail');
const getNationalConferenceRequest = createAction('getNationalConferenceRequest');
const getNationalConferenceSuccess = createAction('getNationalConferenceSuccess');
const getNationalConferenceFail = createAction('getNationalConferenceFail');
const deleteNationalConferenceRequest = createAction('deleteNationalConferenceRequest');
const deleteNationalConferenceSuccess = createAction('deleteNationalConferenceSuccess');
const deleteNationalConferenceFail = createAction('deleteNationalConferenceFail');

const createInterNationalConferenceRequest = createAction('createInterNationalConferenceRequest');
const createInterNationalConferenceSuccess = createAction('createInterNationalConferenceSuccess');
const createInterNationalConferenceFail = createAction('createInterNationalConferenceFail');
const getInterNationalConferenceRequest = createAction('getInterNationalConferenceRequest');
const getInterNationalConferenceSuccess = createAction('getInterNationalConferenceSuccess');
const getInterNationalConferenceFail = createAction('getInterNationalConferenceFail');
const deleteInterNationalConferenceRequest = createAction('deleteInterNationalConferenceRequest');
const deleteInterNationalConferenceSuccess = createAction('deleteInterNationalConferenceSuccess');
const deleteInterNationalConferenceFail = createAction('deleteInterNationalConferenceFail');

const clearError = createAction('clearError');
const clearMessage = createAction('clearMessage');

export const nationalConferenceReducer = createReducer({}, (builder) => {
    builder
        .addCase(createNationalConferencRequest, (state) => {
            state.loading = true;
        })
        .addCase(createNationalConferenceSuccess, (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        })
        .addCase(createNationalConferenceFail, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(getNationalConferenceRequest, (state) => {
            state.loading = true;
        })
        .addCase(getNationalConferenceSuccess, (state, action) => {
            state.loading = false;
            state.nationalConferenceDetails = action.payload.nationalConferenceDetails;
        })
        .addCase(getNationalConferenceFail, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(deleteNationalConferenceRequest, (state) => {
            state.loading = true;
        })
        .addCase(deleteNationalConferenceSuccess, (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        })
        .addCase(deleteNationalConferenceFail, (state, action) => {
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

export const interNationalConferenceReducer = createReducer({}, (builder) => {
    builder
        .addCase(createInterNationalConferenceRequest, (state) => {
            state.loading = true;
        })
        .addCase(createInterNationalConferenceSuccess, (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        })
        .addCase(createInterNationalConferenceFail, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(getInterNationalConferenceRequest, (state) => {
            state.loading = true;
        })
        .addCase(getInterNationalConferenceSuccess, (state, action) => {
            state.loading = false;
            state.interNationalConferenceDetails = action.payload.interNationalConferenceDetails;
        })
        .addCase(getInterNationalConferenceFail, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(deleteInterNationalConferenceRequest, (state) => {
            state.loading = true;
        })
        .addCase(deleteInterNationalConferenceSuccess, (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        })
        .addCase(deleteInterNationalConferenceFail, (state, action) => {
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