import { server } from '../store';
import axios from 'axios';

export const createPhdDetails = (formdata) => async (dispatch) => {
    try {
        dispatch({ type: 'createPhdDetailsRequest' });

        const { data } = await axios.post(`${server}/createphddetails`, formdata, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        });
        dispatch({ type: 'createPhdDetailsSuccess', payload: data });
    }
    catch (error) {
        dispatch({ type: 'createPhdDetailsFail', payload: error.response.data.message });
    }
}

export const getPhdDetails = () => async (dispatch) => {
    try {
        dispatch({ type: 'getPhdDetailsRequest' });

        const { data } = await axios.get(`${server}/getphddetails`, {
            withCredentials: true,
        });
        // console.log(data);
        dispatch({ type: 'getPhdDetailsSuccess', payload: data });
    }
    catch (error) {
        dispatch({ type: 'getPhdDetailsFail', payload: error.response.data.message });
    }
}