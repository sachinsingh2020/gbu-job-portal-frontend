import { server } from '../store';
import axios from 'axios';

export const createNationalConference = (formdata) => async (dispatch) => {
    try {
        dispatch({ type: 'createNationalConferenceRequest' });

        const { data } = await axios.post(`${server}/conference/national/create`, formdata, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        });
        dispatch({ type: 'createNationalConferenceSuccess', payload: data });
    }
    catch (error) {
        dispatch({ type: 'createNationalConferenceFail', payload: error.response.data.message });
    }
}

export const getNationalConference = () => async (dispatch) => {
    try {
        dispatch({ type: 'getNationalConferenceRequest' });

        const { data } = await axios.get(`${server}/conference/national/details`, {
            withCredentials: true,
        });
        dispatch({ type: 'getNationalConferenceSuccess', payload: data });
    }
    catch (error) {
        dispatch({ type: 'getNationalConferenceFail', payload: error.response.data.message });
    }
}

export const deleteNationalConference = (id) => async (dispatch) => {
    try {
        dispatch({ type: 'deleteNationalConferenceRequest' });

        const { data } = await axios.delete(`${server}/conference/national/delete/${id}`, {
            withCredentials: true,
        });
        dispatch({ type: 'deleteNationalConferenceSuccess', payload: data });
    }
    catch (error) {
        dispatch({ type: 'deleteNationalConferenceFail', payload: error.response.data.message });
    }
}

export const createInterNationalConference = (formdata) => async (dispatch) => {
    try {
        dispatch({ type: 'createInterNationalConferenceRequest' });

        const { data } = await axios.post(`${server}/conference/international/create`, formdata, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        });
        dispatch({ type: 'createInterNationalConferenceSuccess', payload: data });
    }
    catch (error) {
        dispatch({ type: 'createInterNationalConferenceFail', payload: error.response.data.message });
    }
}

export const getInterNationalConference = () => async (dispatch) => {
    try {
        dispatch({ type: 'getInterNationalConferenceRequest' });

        const { data } = await axios.get(`${server}/conference/international/details`, {
            withCredentials: true,
        });
        dispatch({ type: 'getInterNationalConferenceSuccess', payload: data });
    }
    catch (error) {
        dispatch({ type: 'getInterNationalConferenceFail', payload: error.response.data.message });
    }
}

export const deleteInterNationalConference = (id) => async (dispatch) => {
    try {
        dispatch({ type: 'deleteInterNationalConferenceRequest' });

        const { data } = await axios.delete(`${server}/conference/international/delete/${id}`, {
            withCredentials: true,
        });
        dispatch({ type: 'deleteInterNationalConferenceSuccess', payload: data });
    }
    catch (error) {
        dispatch({ type: 'deleteInterNationalConferenceFail', payload: error.response.data.message });
    }
}