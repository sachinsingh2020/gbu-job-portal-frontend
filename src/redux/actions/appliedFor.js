import { server } from '../store';
import axios from 'axios';

export const createPostApplied = (formdata) => async (dispatch) => {
    try {
        dispatch({ type: 'createPostAppliedRequest' });

        const { data } = await axios.post(`${server}/appliedfor/create`, formdata, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        });
        dispatch({ type: 'createPostAppliedSuccess', payload: data });
    }
    catch (error) {
        dispatch({ type: 'createPostAppliedFail', payload: error.response.data.message });
    }
}

export const getPostApplied = () => async (dispatch) => {
    try {
        dispatch({ type: 'getPostAppliedRequest' });

        const { data } = await axios.get(`${server}/appliedfor/details`, {
            withCredentials: true,
        });
        dispatch({ type: 'getPostAppliedSuccess', payload: data });
    }
    catch (error) {
        dispatch({ type: 'getPostAppliedFail', payload: error.response.data.message });
    }
}