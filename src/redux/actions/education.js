import { server } from '../store';
import axios from 'axios';

export const createEducationGraduation = (formdata) => async (dispatch) => {
    try {
        dispatch({ type: 'createEduactionGraduationRequest' });

        const { data } = await axios.post(`${server}/education/graduation`, formdata, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            withCredentials: true,
        });
        dispatch({ type: 'createEduactionGraduationSuccess', payload: data });
    }
    catch (error) {
        dispatch({ type: 'createEduactionGraduationFail', payload: error.response.data.message });
    }
}

export const getEducationGraduation = () => async (dispatch) => {
    try {
        dispatch({ type: 'getEduactionGraduationRequest' });

        const { data } = await axios.get(`${server}/education/graduationdetails`, {
            withCredentials: true,
        });
        // console.log(data);
        dispatch({ type: 'getEduactionGraduationSuccess', payload: data });
    }
    catch (error) {
        dispatch({ type: 'getEduactionGraduationFail', payload: error.response.data.message });
    }
}

export const createEducationPostGraduation = (formdata) => async (dispatch) => {
    try {
        dispatch({ type: 'createEducationPostGraduationRequest' });

        const { data } = await axios.post(`${server}/education/postgraduation`, formdata, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            withCredentials: true,
        });
        dispatch({ type: 'createEducationPostGraduationSuccess', payload: data });
    }
    catch (error) {
        dispatch({ type: 'createEducationPostGraduationFail', payload: error.response.data.message });
    }
}

export const getEducationPostGraduation = () => async (dispatch) => {
    try {
        dispatch({ type: 'getEducationPostGraduationRequest' });

        const { data } = await axios.get(`${server}/education/postgraduationdetails`, {
            withCredentials: true,
        });
        dispatch({ type: 'getEducationPostGraduationSuccess', payload: data });
    }
    catch (error) {
        dispatch({ type: 'getEducationPostGraduationFail', payload: error.response.data.message });
    }
}

export const createEducationMphil = (formdata) => async (dispatch) => {
    try {
        dispatch({ type: 'createEducationMphilRequest' });

        const { data } = await axios.post(`${server}/education/mphil`, formdata, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            withCredentials: true,
        });
        dispatch({ type: 'createEducationMphilSuccess', payload: data });
    }
    catch (error) {
        dispatch({ type: 'createEducationMphilFail', payload: error.response.data.message });
    }
}

export const getEducationMphil = () => async (dispatch) => {
    try {
        dispatch({ type: 'getEducationMphilRequest' });

        const { data } = await axios.get(`${server}/education/mphildetails`, {
            withCredentials: true,
        });
        // console.log(data)
        dispatch({ type: 'getEducationMphilSuccess', payload: data });
    }
    catch (error) {
        dispatch({ type: 'getEducationMphilFail', payload: error.response.data.message });
    }
}

export const createEducationPhd = (formdata) => async (dispatch) => {
    try {
        dispatch({ type: 'createEducationPhdRequest' });

        const { data } = await axios.post(`${server}/education/phd`, formdata, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            withCredentials: true,
        });
        dispatch({ type: 'createEducationPhdSuccess', payload: data });
    }
    catch (error) {
        dispatch({ type: 'createEducationPhdFail', payload: error.response.data.message });
    }
}

export const getEducationPhd = () => async (dispatch) => {
    try {
        dispatch({ type: 'getEducationPhdRequest' });

        const { data } = await axios.get(`${server}/education/phddetails`, {
            withCredentials: true,
        });
        // console.log(data);
        dispatch({ type: 'getEducationPhdSuccess', payload: data });
    }
    catch (error) {
        dispatch({ type: 'getEducationPhdFail', payload: error.response.data.message });
    }
}
