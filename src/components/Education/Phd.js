import { Box, Button, Container, FormLabel, HStack, Input, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { fileUploadStyle } from '../../App.js'
import { createEducationPhd } from '../../redux/actions/education.js';
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const Phd = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [university, setUniversity] = useState('')
    const [specialization, setSpecialization] = useState('')
    const [yearOfPassing, setYearOfPassing] = useState('')
    const [percentageOfMarks, setPercentageOfMarks] = useState('')
    const [classGrade, setClassGrade] = useState('')
    const [file, setFile] = useState("");

    const { error, message,loading } = useSelector(state => state.educationPhd);

    const changeImageHandler = (e) => {
        const file = e.target.files[0];
        setFile(file);
    }

    const submitHandler = (e) => {
        e.preventDefault()

        const myForm = new FormData();
        myForm.append('university', university);
        myForm.append('specialization', specialization);
        myForm.append('yearOfPassing', yearOfPassing);
        myForm.append('percentageOfMarks', percentageOfMarks);
        myForm.append('classGrade', classGrade);
        myForm.append('file', file);

        dispatch(createEducationPhd(myForm));
    }

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({ type: 'clearError' });
        }

        if (message) {
            toast.success(message);
            dispatch({ type: 'clearMessage' });
            let activeIndex = 3;
            navigate('/', { state: { activeIndex } })
        }

    }, [dispatch, error, message, navigate]);



    return (
            <Container display={'flex'} alignItems={'center'} minH={'70vh'} maxW={'100%'} pb={'6rem'}>
                <VStack >
                    <HStack display={'flex'} justifyContent={'space-around'} >
                        <Box my={4} mx={'1.5rem'}  >
                            <FormLabel htmlFor='university' children={"University"} />
                            <Input
                                required
                                id='university'
                                value={university}
                                onChange={(e) => { setUniversity(e.target.value) }}
                                type={'text'}
                                focusBorderColor={"rgb(133,50,92)"}
                                borderColor={'rgb(133,50,92)'}
                                borderWidth={'2px'}
                                w={'15rem'}
                                fontWeight={'500'}
                            />
                        </Box>
                        <Box my={4} >
                            <FormLabel htmlFor='specialization' children={"Specialization"} />
                            <Input
                                required
                                id='specialization'
                                value={specialization}
                                onChange={(e) => { setSpecialization(e.target.value) }}
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
                            <FormLabel htmlFor='yearOfPassing' children={"Year Of Passing"} />
                            <Input
                                required
                                id='yearOfPassing'
                                value={yearOfPassing}
                                onChange={(e) => { setYearOfPassing(e.target.value) }}
                                type={'number'}
                                focusBorderColor={"rgb(133,50,92)"}
                                borderColor={'rgb(133,50,92)'}
                                borderWidth={'2px'}
                                w={'15rem'}
                                fontWeight={'500'}
                                placeholder={'e.g. 2022'}
                            />
                        </Box>
                        <Box my={4} >
                            <FormLabel htmlFor='percentageOfMarks' children={"Percentage of Marks/Grade"} />
                            <Input
                                required
                                id='percentageOfMarks'
                                value={percentageOfMarks}
                                onChange={(e) => { setPercentageOfMarks(e.target.value) }}
                                type={'text'}
                                focusBorderColor={"rgb(133,50,92)"}
                                borderColor={'rgb(133,50,92)'}
                                borderWidth={'2px'}
                                w={'15rem'}
                                fontWeight={'500'}
                                placeholder={'e.g. 91'}
                            />
                        </Box>
                    </HStack>
                    <HStack display={'flex'} justifyContent={'space-evenly'} >
                        <Box my={4} ml={'2.8rem'} mr={'1.5rem'} >
                            <FormLabel htmlFor='classGrade' children={"Class / Grade"} />
                            <Input
                                required
                                id='classGrade'
                                value={classGrade}
                                onChange={(e) => { setClassGrade(e.target.value) }}
                                type={'text'}
                                focusBorderColor={"rgb(133,50,92)"}
                                borderColor={'rgb(133,50,92)'}
                                borderWidth={'2px'}
                                w={'15rem'}
                                fontWeight={'500'}
                            />
                        </Box>
                        <Box my={4} >
                            <FormLabel htmlFor='selfAttestedCopy' children={"Self-attested Copy"} />
                            <Input
                                required
                                id="selfAttestedCopy"
                                type={'file'}
                                onChange={changeImageHandler}
                                css={fileUploadStyle}
                                focusBorderColor={"rgb(133,50,92)"}
                                borderColor={'rgb(133,50,92)'}
                                borderWidth={'2px'}
                                w={'15rem'}
                            />
                        </Box>
                    </HStack>
                </VStack>
                <Button isLoading={loading} onClick={submitHandler} rightIcon={<FaArrowRight />} style={{ backgroundColor: '#85325c', color: 'white', }} pos={'absolute'} bottom={'13rem'} right={'20rem'} w={'9rem'} type='submit' mt={8}>
                    Save & Next
                </Button>
            </Container>
    )
}

export default Phd
