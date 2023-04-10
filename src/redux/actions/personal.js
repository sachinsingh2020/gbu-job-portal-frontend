import { server } from '../store';
import axios from 'axios';

export const createPersonal = (formdata) => async (dispatch) => {
    try {
        dispatch({ type: 'createPersonalRequest' });

        const { data } = await axios.post(`${server}/createpersonal`, formdata, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            withCredentials: true,
        });
        dispatch({ type: 'createPersonalSuccess', payload: data });
    }
    catch (error) {
        dispatch({ type: 'createPersonalFail', payload: error.response.data.message });
    }
}

export const getPersonal = () => async (dispatch) => {
    try {
        dispatch({ type: 'getPersonalRequest' });

        const { data } = await axios.get(`${server}/getpersonaldetails`, {
            withCredentials: true,
        });
        dispatch({ type: 'getPersonalSuccess', payload: data });
    }
    catch (error) {
        dispatch({ type: 'getPersonalFail', payload: error.response.data.message });
    }
}