import { createAction, createReducer } from '@reduxjs/toolkit';

const createTeachingExperienceRequest = createAction('createTeachingExperienceRequest');
const createTeachingExperienceSuccess = createAction('createTeachingExperienceSuccess');
const createTeachingExperienceFail = createAction('createTeachingExperienceFail');
const getTeachingExperienceRequest = createAction('getTeachingExperienceRequest');
const getTeachingExperienceSuccess = createAction('getTeachingExperienceSuccess');
const getTeachingExperienceFail = createAction('getTeachingExperienceFail');
const deleteTeachingExperienceRequest = createAction('deleteTeachingExperienceRequest');
const deleteTeachingExperienceSuccess = createAction('deleteTeachingExperienceSuccess');
const deleteTeachingExperienceFail = createAction('deleteTeachingExperienceFail');
const clearError = createAction('clearError');
const clearMessage = createAction('clearMessage');

export const teachingReducer = createReducer({}, (builder) => {
    builder
        .addCase(createTeachingExperienceRequest, (state) => {
            state.loading = true;
        })
        .addCase(createTeachingExperienceSuccess, (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        })
        .addCase(createTeachingExperienceFail, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(getTeachingExperienceRequest, (state) => {
            state.loading = true;
        })
        .addCase(getTeachingExperienceSuccess, (state, action) => {
            state.loading = false;
            state.teachingExperience = action.payload.teachingExperience;
        })
        .addCase(getTeachingExperienceFail, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(deleteTeachingExperienceRequest, (state) => {
            state.loading = true;
        })
        .addCase(deleteTeachingExperienceSuccess, (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        })
        .addCase(deleteTeachingExperienceFail, (state, action) => {
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