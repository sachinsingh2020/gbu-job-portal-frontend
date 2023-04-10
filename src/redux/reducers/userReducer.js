import { createAction, createReducer } from "@reduxjs/toolkit";

const loginRequest = createAction('loginRequest');
const loginSuccess = createAction('loginSuccess');
const loginFail = createAction('loginFail');
const logoutRequest = createAction('logoutRequest');
const logoutSuccess = createAction('logoutSuccess');
const logoutFail = createAction('logoutFail');
const registerRequest = createAction('registerRequest');
const registerSuccess = createAction('registerSuccess');
const registerFail = createAction('registerFail');
const loadUserRequest = createAction('loadUserRequest');
const loadUserSuccess = createAction('loadUserSuccess');
const loadUserFail = createAction('loadUserFail');
const clearError = createAction('clearError');
const clearMessage = createAction('clearMessage');


export const userReducer = createReducer({}, (builder) => {
    builder
        .addCase(loginRequest, (state) => {
            state.loading = true;
        })
        .addCase(loginSuccess, (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.message = action.payload.message;
        })
        .addCase(loginFail, (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.error = action.payload;
        })
        .addCase(logoutRequest, (state) => {
            state.loading = true;
        })
        .addCase(logoutSuccess, (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.user = null;
            state.message = action.payload;
        })
        .addCase(logoutFail, (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.error = action.payload;
        })
        .addCase(registerRequest, (state) => {
            state.loading = true;
        })
        .addCase(registerSuccess, (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.message = action.payload.message;
        })
        .addCase(registerFail, (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.error = action.payload;
        })
        .addCase(loadUserRequest, (state) => {
            state.loading = true;
        })
        .addCase(loadUserSuccess, (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload;
        })
        .addCase(loadUserFail, (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.error = action.payload;
        })
        .addCase(clearError, (state) => {
            state.error = null;
        })
        .addCase(clearMessage, (state) => {
            state.message = null;
        })
});

