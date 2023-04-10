import React, { useEffect, useState } from 'react'
import { Box, Button, Container, FormLabel, HStack, Input, Select } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { createGeneral } from '../../redux/actions/general';
import { FaArrowRight } from "react-icons/fa";
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const General = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [acceptSalary, setAcceptSalary] = useState('')
    const [mentionPeriod, setMentionPeriod] = useState('')
    const [acceptPosition, setAcceptPosition] = useState('')
    const [medicallyUnfit, setMedicallyUnfit] = useState('')

    const { error, message, loading } = useSelector(state => state.general);

    const submitHandler = (e) => {
        e.preventDefault()

        const myForm = new FormData();
        myForm.append('acceptSalary', acceptSalary);
        myForm.append('mentionPeriod', mentionPeriod);
        myForm.append('acceptPosition', acceptPosition);
        myForm.append('medicallyUnfit', medicallyUnfit);

        dispatch(createGeneral(myForm));


    }

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({ type: 'clearError' });
        }

        if (message) {
            toast.success(message);
            dispatch({ type: 'clearMessage' });
            navigate('/finalsubmit');
        }

    }, [dispatch, error, message, navigate]);


    return (
        <Container minH={'70vh'} maxW={'60%'} pb={'6rem'}>
            <HStack display={'flex'} justifyContent={"flex-start"} ml={'6.1rem'} >
                <Box my={4} >
                    <FormLabel htmlFor='acceptSalary' children={"	Are you willing to accept the initial salary of the grade"} />
                    <Select
                        onChange={(e) => { setAcceptSalary(e.target.value) }}
                        placeholder='Select option' w={'18rem'} focusBorderColor={"rgb(133,50,92)"} borderColor={"rgb(133,50,92)"} borderWidth={'2px'}>
                        <option value='Yes'>Yes</option>
                        <option value='No'>No</option>
                    </Select>
                </Box>
            </HStack>
            <HStack display={'flex'} justifyContent={"flex-start"} ml={'6.1rem'} >
                <Box my={4} >
                    <FormLabel htmlFor='mentionPeriod' children={"Mention period needed for joining if offered a post (in Days)"} />
                    <Input
                        required
                        id='mentionPeriod'
                        type={'number'}
                        value={mentionPeriod}
                        onChange={(e) => { setMentionPeriod(e.target.value) }}
                        focusBorderColor={"rgb(133,50,92)"}
                        borderColor={'rgb(133,50,92)'}
                        borderWidth={'2px'}
                        w={'18rem'}
                        fontWeight={'500'}
                    />
                </Box>
            </HStack>
            <HStack display={'flex'} justifyContent={"flex-start"} ml={'6.1rem'} >
                <Box my={4} >
                    <FormLabel htmlFor='acceptPosition' children={"Are you willing to accept a lower position, which has also been advertised in the same Advertisement"} />
                    <Select
                        onChange={(e) => { setAcceptPosition(e.target.value) }}
                        placeholder='Select option' w={'18rem'} focusBorderColor={"rgb(133,50,92)"} borderColor={"rgb(133,50,92)"} borderWidth={'2px'}>
                        <option value='Yes'>Yes</option>
                        <option value='No'>No</option>
                    </Select>
                </Box>

            </HStack>
            <HStack display={'flex'} justifyContent={"flex-start"} ml={'6.1rem'} >
                <Box my={4} >
                    <FormLabel htmlFor='medicallyUnfit' children={"Were you ever declared medically unfit or asked to submit resignation or discharged/ dismissed?"} />
                    <Select
                        onChange={(e) => { setMedicallyUnfit(e.target.value) }}
                        placeholder='Select option' w={'18rem'} focusBorderColor={"rgb(133,50,92)"} borderColor={"rgb(133,50,92)"} borderWidth={'2px'}>
                        <option value='Yes'>Yes</option>
                        <option value='No'>No</option>
                    </Select>
                </Box>
            </HStack>
            <Button onClick={submitHandler} rightIcon={<FaArrowRight />} style={{ backgroundColor: '#85325c', color: 'white', }} pos={'absolute'} bottom={'7.6rem'} right={'14rem'} w={'9rem'} type='submit' mt={8}>
                Save & Next
            </Button>
        </Container>
    )
}

export default General
