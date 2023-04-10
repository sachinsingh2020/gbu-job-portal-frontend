import React, { useEffect, useState } from 'react'
import { Box, Button, Container, FormLabel, HStack, Input, VStack } from '@chakra-ui/react'
import NationalResearchTable from '../Tables/NationalResearchTable';
import { useDispatch, useSelector } from 'react-redux';
import { createNationalResearch, getNationalResearch } from '../../redux/actions/research';
import { toast } from 'react-hot-toast';
import { loadUser } from '../../redux/actions/user';
import { FaArrowDown } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';



const NationalResearch = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [nameOfJournel, setNameOfJournel] = useState();
    const [impactFactor, setImpactFactor] = useState();
    const [noOfPaperPublished, setNoOfPaperPublished] = useState();
    const [broadAreas, setBroadAreas] = useState();

    const { error, message } = useSelector(state => state.nationalResearch);

    const downPageHandler = () => {
        let activeIndex = 5;
        let activeIndexIndex = "internationalresearch"
        navigate('/', { state: { activeIndex, activeIndexIndex } });
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const myForm = new FormData();
        myForm.append('nameOfJournel', nameOfJournel);
        myForm.append('impactFactor', impactFactor);
        myForm.append('noOfPaperPublished', noOfPaperPublished);
        myForm.append('broadAreas', broadAreas);

        dispatch(createNationalResearch(myForm));
    };

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({ type: 'clearError' });
        }

        if (message) {
            toast.success(message);
            dispatch({ type: 'clearMessage' });
            setNameOfJournel('');
            setImpactFactor('');
            setNoOfPaperPublished('');
            setBroadAreas('');
        }
        dispatch(getNationalResearch());
        dispatch(loadUser())

    }, [dispatch, error, message]);

    const { nationalResearchDetails } = useSelector(state => state.nationalResearch);

    return (
        <>
            {
                nationalResearchDetails && nationalResearchDetails.length !== 0 ? <NationalResearchTable researchData={nationalResearchDetails} /> : null
            }
            <Container display={'flex'} alignItems={'center'} minH={'70vh'} maxW={'100%'} pb={'6rem'}>
                <form onSubmit={handleFormSubmit}>
                    <VStack >
                        <HStack display={'flex'} justifyContent={'space-around'} >
                            <Box my={4} mx={'1.5rem'}  >
                                <FormLabel htmlFor='nameOfJournel' children={"Name of Journel"} />
                                <Input
                                    required
                                    id='nameOfJournel'
                                    name='nameOfJournel'
                                    value={nameOfJournel}
                                    onChange={(e) => setNameOfJournel(e.target.value)}
                                    type={'text'}
                                    focusBorderColor={"rgb(133,50,92)"}
                                    borderColor={'rgb(133,50,92)'}
                                    borderWidth={'2px'}
                                    w={'15rem'}
                                    fontWeight={'500'}
                                />
                            </Box>
                            <Box my={4} >
                                <FormLabel htmlFor='impactFactor' children={"Impact Factor"} />
                                <Input
                                    required
                                    id='impactFactor'
                                    name='impactFactor'
                                    value={impactFactor}
                                    onChange={(e) => setImpactFactor(e.target.value)}
                                    type={'number'}
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
                                <FormLabel htmlFor='noOfPaperPublished' children={"No. of Papers Published"} />
                                <Input
                                    required
                                    id='noOfPaperPublished'
                                    name='noOfPaperPublished'
                                    value={noOfPaperPublished}
                                    onChange={(e) => setNoOfPaperPublished(e.target.value)}
                                    type={'number'}
                                    focusBorderColor={"rgb(133,50,92)"}
                                    borderColor={'rgb(133,50,92)'}
                                    borderWidth={'2px'}
                                    w={'15rem'}
                                    fontWeight={'500'}
                                />
                            </Box>
                            <Box my={4} >
                                <FormLabel htmlFor='broadAreas' children={"Broad Areas"} />
                                <Input
                                    required
                                    id='broadAreas'
                                    name='broadAreas'
                                    value={broadAreas}
                                    onChange={(e) => setBroadAreas(e.target.value)}
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
                    <Button style={{ backgroundColor: '#85325c', color: 'white', }} pos={'absolute'} bottom={'16rem'} right={'23rem'} type='submit' mt={8}>
                        Add Data
                    </Button>
                </form>
                <Button onClick={downPageHandler} rightIcon={<FaArrowDown />} style={{ backgroundColor: '#85325c', color: 'white', }} pos={'absolute'} bottom={'10rem'} right={'20rem'} w={'9rem'} type='submit' mt={8}>
                    Save & Next
                </Button>
            </Container>
        </>

    )
}

export default NationalResearch
