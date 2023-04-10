import { server } from '../store';
import axios from 'axios';

export const createNationalResearch = (formdata) => async (dispatch) => {
    try {
        dispatch({ type: 'createNationalResearchRequest' });

        const { data } = await axios.post(`${server}/research/national/create`, formdata, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        });
        dispatch({ type: 'createNationalResearchSuccess', payload: data });
    }
    catch (error) {
        dispatch({ type: 'createNationalResearchFail', payload: error.response.data.message });
    }
}

export const getNationalResearch = () => async (dispatch) => {
    try {
        dispatch({ type: 'getNationalResearchRequest' });

        const { data } = await axios.get(`${server}/research/national/details`, {
            withCredentials: true,
        });
        // console.log(data);
        dispatch({ type: 'getNationalResearchSuccess', payload: data });
    }
    catch (error) {
        dispatch({ type: 'getNationalResearchFail', payload: error.response.data.message });
    }
}

export const deleteNationalResearch = (id) => async (dispatch) => {
    try {
        dispatch({ type: 'deleteNationalResearchRequest' });

        const { data } = await axios.delete(`${server}/research/national/delete/${id}`, {
            withCredentials: true,
        });
        dispatch({ type: 'deleteNationalResearchSuccess', payload: data });
    }
    catch (error) {
        dispatch({ type: 'deleteNationalResearchFail', payload: error.response.data.message });
    }
}

export const createInternationalResearch = (formdata) => async (dispatch) => {
    try {
        dispatch({ type: 'createInterNationalResearchRequest' });

        const { data } = await axios.post(`${server}/research/international/create`, formdata, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        });
        dispatch({ type: 'createInterNationalResearchSuccess', payload: data });
    }
    catch (error) {
        dispatch({ type: 'createInterNationalResearchFail', payload: error.response.data.message });
    }
}

export const getInternationalResearch = () => async (dispatch) => {
    try {
        dispatch({ type: 'getInterNationalResearchRequest' });

        const { data } = await axios.get(`${server}/research/international/details`, {
            withCredentials: true,
        });
        dispatch({ type: 'getInterNationalResearchSuccess', payload: data });
    }
    catch (error) {
        dispatch({ type: 'getInterNationalResearchFail', payload: error.response.data.message });
    }
}

export const deleteInternationalResearch = (id) => async (dispatch) => {
    try {
        dispatch({ type: 'deleteInterNationalResearchRequest' });

        const { data } = await axios.delete(`${server}/research/international/delete/${id}`, {
            withCredentials: true,
        });
        dispatch({ type: 'deleteInterNationalResearchSuccess', payload: data });
    }
    catch (error) {
        dispatch({ type: 'deleteInterNationalResearchFail', payload: error.response.data.message });
    }
}
