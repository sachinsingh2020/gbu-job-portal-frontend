import React, { useEffect, useState } from 'react'
import { Box, Button, Container, FormLabel, HStack, Input, VStack } from '@chakra-ui/react'
import InterNationalConferenceTable from '../Tables/InterNationalConferenceTable';
import { useDispatch, useSelector } from 'react-redux';
import { createInterNationalConference, getInterNationalConference } from '../../redux/actions/conference';
import { FaArrowRight } from "react-icons/fa";
import { toast } from 'react-hot-toast';
import { loadUser } from '../../redux/actions/user';
import { useNavigate } from 'react-router-dom';

const InterNationalConference = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [nameOfConference, setNameOfConference] = useState();
    const [whenAndWhere, setWhenAndWhere] = useState();

    const { loading, error, message } = useSelector(state => state.interNationalConference);

    const submitHandler = (e) => {
        e.preventDefault();

        const myForm = new FormData();

        myForm.append('nameOfConference', nameOfConference);
        myForm.append('whenAndWhere', whenAndWhere);

        dispatch(createInterNationalConference(myForm))

    };

    const newPageHandler = () => {
        let activeIndex = 7;    
        return navigate('/', { state: { activeIndex } });
    }

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({ type: 'clearError' });
        }

        if (message) {
            toast.success(message);
            dispatch({ type: 'clearMessage' });
            setNameOfConference('');
            setWhenAndWhere('');
        }
        dispatch(getInterNationalConference());
        dispatch(loadUser())

    }, [dispatch, error, message]);

    const { interNationalConferenceDetails } = useSelector(state => state.interNationalConference);

    return (
        <>
            {
                interNationalConferenceDetails && interNationalConferenceDetails.length > 0 && <InterNationalConferenceTable conferenceData={interNationalConferenceDetails} />
            }
            <Container display={'flex'} alignItems={'center'} justifyContent={'center'} minH={'70vh'} minW={'200%'} pb={'6rem'}>
                <form onSubmit={submitHandler}>
                    <VStack b>
                        <HStack display={'flex'} justifyContent={'center'} >
                            <Box my={4} mx={'1.5rem'}  >
                                <FormLabel htmlFor='nameOfConference' children={"Name of Conference"} />
                                <Input
                                    required
                                    id='nameOfConference'
                                    name='nameOfConference'
                                    value={nameOfConference}
                                    onChange={(e) => setNameOfConference(e.target.value)}
                                    type={'text'}
                                    focusBorderColor={"rgb(133,50,92)"}
                                    borderColor={'rgb(133,50,92)'}
                                    borderWidth={'2px'}
                                    w={'15rem'}
                                    fontWeight={'500'}
                                />
                            </Box>
                        </HStack>
                        <HStack display={'flex'} justifyContent={'space-evenly'} >
                            <Box my={4} mx={'1.5rem'} >
                                <FormLabel htmlFor='whenAndWhere' children={"When and Where"} />
                                <Input
                                    required
                                    id='whenAndWhere'
                                    name='whenAndWhere'
                                    value={whenAndWhere}
                                    onChange={(e) => setWhenAndWhere(e.target.value)}
                                    type={'text'}
                                    focusBorderColor={"rgb(133,50,92)"}
                                    borderColor={'rgb(133,50,92)'}
                                    borderWidth={'2px'}
                                    w={'15rem'}
                                    fontWeight={'500'}
                                />
                            </Box>
                        </HStack>
                    </VStack>
                    <Button
                        isLoading={loading}
                        style={{ backgroundColor: '#85325c', color: 'white', }} pos={'absolute'} bottom={'16rem'} right={'23rem'} type='submit' mt={8}>
                        Add Data
                    </Button>
                </form>
                <Button onClick={newPageHandler} rightIcon={<FaArrowRight />} style={{ backgroundColor: '#85325c', color: 'white', }} pos={'absolute'} bottom={'10rem'} right={'20rem'} w={'9rem'} type='submit' mt={8}>
                    Save & Next
                </Button>
            </Container>
        </>
    )
}

export default InterNationalConference
