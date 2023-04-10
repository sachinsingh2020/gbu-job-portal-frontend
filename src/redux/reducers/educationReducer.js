import { createAction, createReducer } from '@reduxjs/toolkit';

const createEduactionGraduationRequest = createAction('createEduactionGraduationRequest');
const createEduactionGraduationSuccess = createAction('createEduactionGraduationSuccess');
const createEduactionGraduationFail = createAction('createEduactionGraduationFail');
const getEduactionGraduationRequest = createAction('getEduactionGraduationRequest');
const getEduactionGraduationSuccess = createAction('getEduactionGraduationSuccess');
const getEduactionGraduationFail = createAction('getEduactionGraduationFail');

const createEducationPostGraduationRequest = createAction('createEducationPostGraduationRequest');
const createEducationPostGraduationSuccess = createAction('createEducationPostGraduationSuccess');
const createEducationPostGraduationFail = createAction('createEducationPostGraduationFail');
const getEducationPostGraduationRequest = createAction('getEducationPostGraduationRequest');
const getEducationPostGraduationSuccess = createAction('getEducationPostGraduationSuccess');
const getEducationPostGraduationFail = createAction('getEducationPostGraduationFail');

const createEducationMphilRequest = createAction('createEducationMphilRequest');
const createEducationMphilSuccess = createAction('createEducationMphilSuccess');
const createEducationMphilFail = createAction('createEducationMphilFail');
const getEducationMphilRequest = createAction('getEducationMphilRequest');
const getEducationMphilSuccess = createAction('getEducationMphilSuccess');
const getEducationMphilFail = createAction('getEducationMphilFail');

const createEducationPhdRequest = createAction('createEducationPhdRequest');
const createEducationPhdSuccess = createAction('createEducationPhdSuccess');
const createEducationPhdFail = createAction('createEducationPhdFail');
const getEducationPhdRequest = createAction('getEducationPhdRequest');
const getEducationPhdSuccess = createAction('getEducationPhdSuccess');
const getEducationPhdFail = createAction('getEducationPhdFail');

const clearError = createAction('clearError');
const clearMessage = createAction('clearMessage');

export const educationGraduationReducer = createReducer({}, (builder) => {
    builder
        .addCase(createEduactionGraduationRequest, (state) => {
            state.loading = true;
        })
        .addCase(createEduactionGraduationSuccess, (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        })
        .addCase(createEduactionGraduationFail, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(getEduactionGraduationRequest, (state) => {
            state.loading = true;
        })
        .addCase(getEduactionGraduationSuccess, (state, action) => {
            state.loading = false;
            state.educationGraduation = action.payload.graduation;
        })
        .addCase(getEduactionGraduationFail, (state, action) => {
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

export const educationPostGraduationReducer = createReducer({}, (builder) => {
    builder
        .addCase(createEducationPostGraduationRequest, (state) => {
            state.loading = true;
        })
        .addCase(createEducationPostGraduationSuccess, (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        })
        .addCase(createEducationPostGraduationFail, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(getEducationPostGraduationRequest, (state) => {
            state.loading = true;
        })
        .addCase(getEducationPostGraduationSuccess, (state, action) => {
            state.loading = false;
            state.educationPostGraduation = action.payload.postGraduation;
        })
        .addCase(getEducationPostGraduationFail, (state, action) => {
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

export const educationMphilReducer = createReducer({}, (builder) => {
    builder
        .addCase(createEducationMphilRequest, (state) => {
            state.loading = true;
        })
        .addCase(createEducationMphilSuccess, (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        })
        .addCase(createEducationMphilFail, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(getEducationMphilRequest, (state) => {
            state.loading = true;
        })
        .addCase(getEducationMphilSuccess, (state, action) => {
            state.loading = false;
            state.educationMphil = action.payload.mPhil;
        })
        .addCase(getEducationMphilFail, (state, action) => {
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

export const educationPhdReducer = createReducer({}, (builder) => {
    builder
        .addCase(createEducationPhdRequest, (state) => {
            state.loading = true;
        })
        .addCase(createEducationPhdSuccess, (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        })
        .addCase(createEducationPhdFail, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(getEducationPhdRequest, (state) => {
            state.loading = true;
        })
        .addCase(getEducationPhdSuccess, (state, action) => {
            state.loading = false;
            state.educationPhd = action.payload.phd;
        })
        .addCase(getEducationPhdFail, (state, action) => {
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