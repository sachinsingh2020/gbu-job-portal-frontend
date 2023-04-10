import { Box, Button, Container, FormLabel, HStack, Input, Select } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux'
import { createPhdDetails } from '../../redux/actions/phdDetails';
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const PhdDetails = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [phdThesisTitle, setPhdThesisTitle] = useState('')
    const [researchAreaThesisWork, setResearchAreaThesisWork] = useState('')
    const [dateOfJoining, setDateOfJoining] = useState('')
    const [dateOfSubmission, setDateOfSubmission] = useState('')
    const [dateOfCompletion, setDateOfCompletion] = useState('')
    const [nameOfThesisSupervisor, setNameOfThesisSupervisor] = useState('')
    const [partTimeFullTime, setPartTimeFullTime] = useState('')
    const [institutionUniversity, setInstitutionUniversity] = useState('')

    const { error, message,loading } = useSelector(state => state.phdDetails);

    const submitHandler = (e) => {
        e.preventDefault()

        const myForm = new FormData();
        myForm.append('phdThesisTitle', phdThesisTitle);
        myForm.append('researchAreaThesisWork', researchAreaThesisWork);
        myForm.append('dateOfJoining', dateOfJoining);
        myForm.append('dateOfSubmission', dateOfSubmission);
        myForm.append('dateOfCompletion', dateOfCompletion);
        myForm.append('nameOfThesisSupervisor', nameOfThesisSupervisor);
        myForm.append('partTimeFullTime', partTimeFullTime);
        myForm.append('institutionUniversity', institutionUniversity);

        dispatch(createPhdDetails(myForm));
    }

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({ type: 'clearError' });
        }

        if (message) {
            toast.success(message);
            dispatch({ type: 'clearMessage' });
            let activeIndex = 4;
            navigate('/', { state: { activeIndex } })
        }

    }, [dispatch, error, message, navigate]);

    return (
            <Container minH={'70vh'} maxW={'60%'} pb={'6rem'}>
                <HStack display={'flex'} justifyContent={'space-evenly'} >
                    <Box my={4} >
                        <FormLabel htmlFor='phdThesisTitle' children={"Ph. D Thesis Title"} />
                        <Input
                            required
                            id='phdThesisTitle'
                            value={phdThesisTitle}
                            onChange={(e) => { setPhdThesisTitle(e.target.value) }}
                            type={'text'}
                            focusBorderColor={"rgb(133,50,92)"}
                            borderColor={'rgb(133,50,92)'}
                            borderWidth={'2px'}
                            w={'18rem'}
                            fontWeight={'500'}
                        />
                    </Box>
                    <Box my={4} >
                        <FormLabel htmlFor='researchAreaThesisWork' children={"Research area of Ph. D Thesis work"} />
                        <Input
                            required
                            id='researchAreaThesisWork'
                            value={researchAreaThesisWork}
                            onChange={(e) => { setResearchAreaThesisWork(e.target.value) }}
                            type={'text'}
                            focusBorderColor={"rgb(133,50,92)"}
                            borderColor={'rgb(133,50,92)'}
                            borderWidth={'2px'}
                            w={'18rem'}
                            fontWeight={'500'}
                        />
                    </Box>
                </HStack>
                <HStack display={'flex'} justifyContent={'space-evenly'} >
                    <Box my={4} >
                        <FormLabel htmlFor='dateOfJoining' children={"Date Of Joining"} />
                        <Input
                            required
                            id='dateOfJoining'
                            value={dateOfJoining}
                            onChange={(e) => { setDateOfJoining(e.target.value) }}
                            type={'date'}
                            focusBorderColor={"rgb(133,50,92)"}
                            borderColor={'rgb(133,50,92)'}
                            borderWidth={'2px'}
                            w={'18rem'}
                            fontWeight={'500'}
                        />
                    </Box>
                    <Box my={4} >
                        <FormLabel htmlFor='dateOfSubmission' children={"Date of Submission of Ph. D Thesis"} />
                        <Input
                            required
                            id='dateOfSubmission'
                            value={dateOfSubmission}
                            onChange={(e) => { setDateOfSubmission(e.target.value) }}
                            type={'date'}
                            focusBorderColor={"rgb(133,50,92)"}
                            borderColor={'rgb(133,50,92)'}
                            borderWidth={'2px'}
                            w={'18rem'}
                            fontWeight={'500'}
                        />
                    </Box>
                </HStack>
                <HStack display={'flex'} justifyContent={'space-evenly'} >
                    <Box my={4} >
                        <FormLabel htmlFor='dateOfCompletion' children={"Date of completion of Ph. D Programme"} />
                        <Input
                            required
                            id='dateOfCompletion'
                            value={dateOfCompletion}
                            onChange={(e) => { setDateOfCompletion(e.target.value) }}
                            type={'date'}
                            focusBorderColor={"rgb(133,50,92)"}
                            borderColor={'rgb(133,50,92)'}
                            borderWidth={'2px'}
                            w={'18rem'}
                            fontWeight={'500'}
                        />
                    </Box>
                    <Box my={4} >
                        <FormLabel htmlFor='nameOfThesisSupervisor' children={"Name of Thesis Supervisor"} />
                        <Input
                            required
                            id='nameOfThesisSupervisor'
                            value={nameOfThesisSupervisor}
                            onChange={(e) => { setNameOfThesisSupervisor(e.target.value) }}
                            type={'text'}
                            focusBorderColor={"rgb(133,50,92)"}
                            borderColor={'rgb(133,50,92)'}
                            borderWidth={'2px'}
                            w={'18rem'}
                            fontWeight={'500'}
                        />
                    </Box>
                </HStack>
                <HStack display={'flex'} justifyContent={'space-evenly'} >
                    <Box my={4} >
                        <FormLabel htmlFor='partTimeFullTime' children={"Part Time / Full Time"} />
                        <Select
                            onChange={(e) => { setPartTimeFullTime(e.target.value) }}
                            placeholder='Select option' w={'18rem'} focusBorderColor={"rgb(133,50,92)"} borderColor={"rgb(133,50,92)"} borderWidth={'2px'}>
                            <option value='Part Time'>Part time</option>
                            <option value='Full Time'>Full time</option>
                        </Select>
                    </Box>
                    <Box my={4} >
                        <FormLabel htmlFor='institutionUniversity' children={"Institution / University"} />
                        <Input
                            required
                            id='institutionUniversity'
                            value={institutionUniversity}
                            onChange={(e) => { setInstitutionUniversity(e.target.value) }}
                            type={'text'}
                            focusBorderColor={"rgb(133,50,92)"}
                            borderColor={'rgb(133,50,92)'}
                            borderWidth={'2px'}
                            w={'18rem'}
                            fontWeight={'500'}
                        />
                    </Box>
                </HStack>
                <Button isLoading={loading} onClick={submitHandler} rightIcon={<FaArrowRight />} style={{ backgroundColor: '#85325c', color: 'white', }} pos={'absolute'} bottom={'11rem'} right={'22rem'} w={'9rem'} type='submit' mt={8}>
                    Save & Next
                </Button>
            </Container>
    )
}

export default PhdDetails
