import { server } from '../store';
import axios from 'axios';

export const createTeachingExperience = (formdata) => async (dispatch) => {
    try {
        dispatch({ type: 'createTeachingExperienceRequest' });

        const { data } = await axios.post(`${server}/teachingexperience/create`, formdata, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        });
        dispatch({ type: 'createTeachingExperienceSuccess', payload: data });
    }
    catch (error) {
        dispatch({ type: 'createTeachingExperienceFail', payload: error.response.data.message });
    }
}

export const getTeachingExperience = () => async (dispatch) => {
    try {
        dispatch({ type: 'getTeachingExperienceRequest' });

        const { data } = await axios.get(`${server}/teachingexperience/details`, {
            withCredentials: true,
        });
        // console.log(data);
        dispatch({ type: 'getTeachingExperienceSuccess', payload: data });
    }
    catch (error) {
        dispatch({ type: 'getTeachingExperienceFail', payload: error.response.data.message });
    }
}

export const deleteTeachingExperience = (id) => async (dispatch) => {
    try {
        dispatch({ type: 'deleteTeachingExperienceRequest' });

        const { data } = await axios.delete(`${server}/teachingexperience/delete/${id}`, {
            withCredentials: true,
        });
        dispatch({ type: 'deleteTeachingExperienceSuccess', payload: data });
    }
    catch (error) {
        dispatch({ type: 'deleteTeachingExperienceFail', payload: error.response.data.message });
    }
}