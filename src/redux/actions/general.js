import { server } from '../store';
import axios from 'axios';

export const createGeneral = (formdata) => async (dispatch) => {
    try {
        dispatch({ type: 'createGeneralRequest' });

        const { data } = await axios.post(`${server}/general/create`, formdata, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        });
        dispatch({ type: 'createGeneralSuccess', payload: data });
    }
    catch (error) {
        dispatch({ type: 'createGeneralFail', payload: error.response.data.message });
    }
}

export const getGeneral = () => async (dispatch) => {
    try {
        dispatch({ type: 'getGeneralRequest' });

        const { data } = await axios.get(`${server}/general/details`, {
            withCredentials: true,
        });
        // console.log(data);
        dispatch({ type: 'getGeneralSuccess', payload: data });
    }
    catch (error) {
        dispatch({ type: 'getGeneralFail', payload: error.response.data.message });
    }
}
