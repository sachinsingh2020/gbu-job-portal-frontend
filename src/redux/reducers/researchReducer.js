import { createAction, createReducer } from "@reduxjs/toolkit";

const createNationalResearchRequest = createAction("createNationalResearchRequest");
const createNationalResearchSuccess = createAction("createNationalResearchSuccess");
const createNationalResearchFail = createAction("createNationalResearchFail");
const getNationalResearchRequest = createAction("getNationalResearchRequest");
const getNationalResearchSuccess = createAction("getNationalResearchSuccess");
const getNationalResearchFail = createAction("getNationalResearchFail");
const deleteNationalResearchRequest = createAction("deleteNationalResearchRequest");
const deleteNationalResearchSuccess = createAction("deleteNationalResearchSuccess");
const deleteNationalResearchFail = createAction("deleteNationalResearchFail");

const createInterNationalResearchRequest = createAction("createInterNationalResearchRequest");
const createInterNationalResearchSuccess = createAction("createInterNationalResearchSuccess");
const createInterNationalResearchFail = createAction("createInterNationalResearchFail");
const getInterNationalResearchRequest = createAction("getInterNationalResearchRequest");
const getInterNationalResearchSuccess = createAction("getInterNationalResearchSuccess");
const getInterNationalResearchFail = createAction("getInterNationalResearchFail");
const deleteInterNationalResearchRequest = createAction("deleteInterNationalResearchRequest");
const deleteInterNationalResearchSuccess = createAction("deleteInterNationalResearchSuccess");
const deleteInterNationalResearchFail = createAction("deleteInterNationalResearchFail");

const clearError = createAction("clearError");
const clearMessage = createAction("clearMessage");

export const nationalResearchReducer = createReducer({}, (builder) => {
    builder
        .addCase(createNationalResearchRequest, (state) => {
            state.loading = true;
        })
        .addCase(createNationalResearchSuccess, (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        })
        .addCase(createNationalResearchFail, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(getNationalResearchRequest, (state) => {
            state.loading = true;
        })
        .addCase(getNationalResearchSuccess, (state, action) => {
            state.loading = false;
            state.nationalResearchDetails = action.payload.nationalResearchDetails;
        })
        .addCase(getNationalResearchFail, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(deleteNationalResearchRequest, (state) => {
            state.loading = true;
        })
        .addCase(deleteNationalResearchSuccess, (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        })
        .addCase(deleteNationalResearchFail, (state, action) => {
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

export const interNationalResearchReducer = createReducer({}, (builder) => {
    builder
        .addCase(createInterNationalResearchRequest, (state) => {
            state.loading = true;
        })
        .addCase(createInterNationalResearchSuccess, (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        })
        .addCase(createInterNationalResearchFail, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(getInterNationalResearchRequest, (state) => {
            state.loading = true;
        })
        .addCase(getInterNationalResearchSuccess, (state, action) => {
            state.loading = false;
            state.interNationalResearchDetails = action.payload.interNationalResearchDetails;
        })
        .addCase(getInterNationalResearchFail, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(deleteInterNationalResearchRequest, (state) => {
            state.loading = true;
        })
        .addCase(deleteInterNationalResearchSuccess, (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        })
        .addCase(deleteInterNationalResearchFail, (state, action) => {
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