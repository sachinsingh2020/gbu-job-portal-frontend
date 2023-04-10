import { Box, Button, Container, FormLabel, HStack, Select } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux'
import { createPostApplied } from '../../redux/actions/appliedFor.js';
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';



const Applied = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const [postApplied, setPostApplied] = useState('');
    const [department, setDepartment] = useState('');
    const [school, setSchool] = useState('');
    const [specialization, setSpecialization] = useState('');
    const [advertisement, setAdvertisement] = useState('');

    const { error, message,loading } = useSelector(state => state.postApplied);

    const submitHandler = async (e) => {
        e.preventDefault();

        const myForm = new FormData();
        myForm.append('postApplied', postApplied);
        myForm.append('department', department);
        myForm.append('school', school);
        myForm.append('specialization', specialization);
        myForm.append('advertisement', advertisement);

        await dispatch(createPostApplied(myForm));

    }

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({ type: 'clearError' });
        }

        if (message) {
            toast.success(message);
            dispatch({ type: 'clearMessage' });
            let activeIndex = 0;
            activeIndex = 2;
            navigate('/', { state: { activeIndex } });
        }

    }, [dispatch, error, message, navigate]);


    return (
        <Container minH={'70vh'} maxW={'60%'} pb={'6rem'}>
            <HStack display={'flex'} justifyContent={'space-evenly'} >
                <Box my={4} >
                    <FormLabel htmlFor='postApplied' children={"Post Applied"} />
                    <Select
                        onChange={(e) => { setPostApplied(e.target.value) }}
                        placeholder='Select option' w={'18rem'} focusBorderColor={"rgb(133,50,92)"} borderColor={"rgb(133,50,92)"} borderWidth={'2px'}>
                        <option value='1'>post 1</option>
                        <option value='2'>post 2</option>
                        <option value='3'>post 3</option>
                        <option value='4'>post 4</option>
                        <option value='5'>post 5</option>
                    </Select>
                </Box>
                <Box my={4} >
                    <FormLabel htmlFor='department' children={"Department"} />
                    <Select
                        onChange={(e) => { setDepartment(e.target.value) }}
                        placeholder='Select option' w={'18rem'} focusBorderColor={"rgb(133,50,92)"} borderColor={"rgb(133,50,92)"} borderWidth={'2px'}>
                        <option value='1'>post 1</option>
                        <option value='2'>post 2</option>
                        <option value='3'>post 3</option>
                        <option value='4'>post 4</option>
                        <option value='5'>post 5</option>
                    </Select>
                </Box>
            </HStack>
            <HStack display={'flex'} justifyContent={'space-evenly'} >
                <Box my={4} >
                    <FormLabel htmlFor='school' children={"School"} />
                    <Select
                        onChange={(e) => { setSchool(e.target.value) }}
                        placeholder='Select option' w={'18rem'} focusBorderColor={"rgb(133,50,92)"} borderColor={"rgb(133,50,92)"} borderWidth={'2px'}>
                        <option value='1'>post 1</option>
                        <option value='2'>post 2</option>
                        <option value='3'>post 3</option>
                        <option value='4'>post 4</option>
                        <option value='5'>post 5</option>
                    </Select>
                </Box>
                <Box my={4} >
                    <FormLabel htmlFor='specialization' children={"Field of Specialization"} />
                    <Select
                        onChange={(e) => { setSpecialization(e.target.value) }}
                        placeholder='Select option' w={'18rem'} focusBorderColor={"rgb(133,50,92)"} borderColor={"rgb(133,50,92)"} borderWidth={'2px'}>
                        <option value='1'>post 1</option>
                        <option value='2'>post 2</option>
                        <option value='3'>post 3</option>
                        <option value='4'>post 4</option>
                        <option value='5'>post 5</option>
                    </Select>
                </Box>
            </HStack>
            <HStack display={'flex'} justifyContent={"flex-start"} ml={'6.1rem'} >
                <Box my={4} >
                    <FormLabel htmlFor='advertisement' children={"Advertisement no."} />
                    <Select
                        onChange={(e) => { setAdvertisement(e.target.value) }}
                        placeholder='Select option' w={'18rem'} focusBorderColor={"rgb(133,50,92)"} borderColor={"rgb(133,50,92)"} borderWidth={'2px'}>
                        <option value='1'>post 1</option>
                        <option value='2'>post 2</option>
                        <option value='3'>post 3</option>
                        <option value='4'>post 4</option>
                        <option value='5'>post 5</option>
                    </Select>
                </Box>
            </HStack>
            <Button isLoading={loading} onClick={submitHandler} rightIcon={<FaArrowRight />} style={{ backgroundColor: '#85325c', color: 'white', }} pos={'absolute'} bottom={'13rem'} right={'25.5rem'} w={'9rem'} type='submit' mt={8}>
                Save & Next
            </Button>
        </Container>
    )
}

export default Applied
