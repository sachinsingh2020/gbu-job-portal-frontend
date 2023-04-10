import { Box, Button, Container, FormLabel, HStack, Input, Select, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { createTeachingExperience, getTeachingExperience } from '../../redux/actions/teaching';
import { loadUser } from '../../redux/actions/user';
import TeachinExperienceTable from '../Tables/TeachinExperienceTable';
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const Teaching = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [positionHeld, setPositionHeld] = useState('');
    const [organizationInstitute, setOrganizationInstitute] = useState('');
    const [dateOfJoining, setDateOfJoining] = useState('');
    const [dateOfLeaving, setDateOfLeaving] = useState('');
    const [totalPeriodDuration, setTotalPeriodDuration] = useState('');
    const [natureOfDuties, setNatureOfDuties] = useState('');
    const [courseTaught, setCourseTaught] = useState('');
    const [levelUgPg, setLevelUgPg] = useState('');
    const [lastPay, setLastPay] = useState('');

    const { error, message } = useSelector(state => state.teaching);


    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('positionHeld', positionHeld);
        formData.append('organizationInstitute', organizationInstitute);
        formData.append('dateOfJoining', dateOfJoining);
        formData.append('dateOfLeaving', dateOfLeaving);
        formData.append('totalPeriodDuration', totalPeriodDuration);
        formData.append('natureOfDuties', natureOfDuties);
        formData.append('courseTaught', courseTaught);
        formData.append('levelUgPg', levelUgPg);
        formData.append('lastPay', lastPay);

        dispatch(createTeachingExperience(formData));

    }

    const nextPageHandler = () => {
        toast.success('All Teaching Details Saved Successfully');
        let activeIndex = 5;
        navigate('/', { state: { activeIndex } });
    }

    const getAllData = async () => {
        console.log("sachin")
        await dispatch(getTeachingExperience());
        await dispatch(loadUser())
    }

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({ type: 'clearError' });
        }

        if (message) {
            toast.success(message);
            dispatch({ type: 'clearMessage' });
            setPositionHeld('');
            setOrganizationInstitute('');
            setDateOfJoining('');
            setDateOfLeaving('');
            setTotalPeriodDuration('');
            setNatureOfDuties('');
            setCourseTaught('');
            setLevelUgPg('');
            setLastPay('');
        }
        else {
            setLevelUgPg('');
        }
    }, [dispatch, error, message]);

    useEffect(() => {
        getAllData();
        // eslint-disable-next-line
      }, []);

    const { teachingExperience, loading } = useSelector(state => state.teaching);

    return (
            <VStack pb={'2rem'} minH={'60vh'}>
                {
                        teachingExperience && teachingExperience.length !== 0 ? <TeachinExperienceTable teachingData={teachingExperience} /> : null
                    }
                <Container maxW='60%' mt={8} >
                    <form onSubmit={submitHandler}>
                        <HStack justifyContent={'space-evenly'}>
                            <Box>
                                <FormLabel>Position Held</FormLabel>
                                <Input
                                    value={positionHeld}
                                    onChange={(e) => setPositionHeld(e.target.value)}
                                    focusBorderColor={"rgb(133,50,92)"}
                                    borderColor={'rgb(133,50,92)'}
                                    borderWidth={'2px'} w={'12rem'} name='positionHeld' type='text' placeholder='Enter position held' required />
                            </Box>

                            <Box>
                                <FormLabel>Organization / Institute</FormLabel>
                                <Input
                                    value={organizationInstitute}
                                    onChange={(e) => setOrganizationInstitute(e.target.value)}
                                    focusBorderColor={"rgb(133,50,92)"}
                                    borderColor={'rgb(133,50,92)'}
                                    borderWidth={'2px'} w={'12rem'} name='organizationInstitute' type='text' placeholder='Enter organization/institute' required />
                            </Box>

                            <Box>
                                <FormLabel>Date of Joining</FormLabel>
                                <Input
                                    value={dateOfJoining}
                                    onChange={(e) => setDateOfJoining(e.target.value)}
                                    focusBorderColor={"rgb(133,50,92)"}
                                    borderColor={'rgb(133,50,92)'}
                                    borderWidth={'2px'} w={'12rem'} name='dateOfJoining' type='date' placeholder='Enter date of joining' required />
                            </Box>

                        </HStack>

                        <HStack mt={8} justifyContent={'space-evenly'}>
                            <Box>
                                <FormLabel>Date of Leaving</FormLabel>
                                <Input
                                    value={dateOfLeaving}
                                    onChange={(e) => setDateOfLeaving(e.target.value)}
                                    focusBorderColor={"rgb(133,50,92)"}
                                    borderColor={'rgb(133,50,92)'}
                                    borderWidth={'2px'} w={'12rem'} name='dateOfLeaving' type='date' placeholder='Enter date of leaving' required />
                            </Box>
                            <Box>
                                <FormLabel>Total Period (in months)</FormLabel>
                                <Input
                                    value={totalPeriodDuration}
                                    onChange={(e) => setTotalPeriodDuration(e.target.value)}
                                    focusBorderColor={"rgb(133,50,92)"}
                                    borderColor={'rgb(133,50,92)'}
                                    borderWidth={'2px'} w={'12rem'} name='totalPeriodDuration' type='number' placeholder='Enter total period duration' required />
                            </Box>

                            <Box>
                                <FormLabel>Nature Of Duties</FormLabel>
                                <Input
                                    value={natureOfDuties}
                                    onChange={(e) => setNatureOfDuties(e.target.value)}
                                    focusBorderColor={"rgb(133,50,92)"}
                                    borderColor={'rgb(133,50,92)'}
                                    borderWidth={'2px'} w={'12rem'} name='natureOfDuties' type='text' placeholder='Enter nature of duties' required />
                            </Box>


                        </HStack>
                        <HStack mt={8} mb={"8rem"} justifyContent={'space-evenly'}>
                            <Box>
                                <FormLabel>Course Taught</FormLabel>
                                <Input
                                    value={courseTaught}
                                    onChange={(e) => setCourseTaught(e.target.value)}
                                    focusBorderColor={"rgb(133,50,92)"}
                                    borderColor={'rgb(133,50,92)'}
                                    borderWidth={'2px'} w={'12rem'} name='courseTaught' type='text' placeholder='Enter course taught' required />
                            </Box>
                            <Box>
                                <FormLabel htmlFor='postApplied' children={"Post Applied"} />
                                <Select
                                    value={levelUgPg}
                                    onChange={(e) => setLevelUgPg(e.target.value)}
                                    w={'12rem'}
                                    placeholder='Select option' focusBorderColor={"rgb(133,50,92)"} borderColor={"rgb(133,50,92)"} borderWidth={'2px'}>
                                    <option value='UG'>UG</option>
                                    <option value='PG'>PG</option>
                                </Select>
                            </Box>

                            <Box>
                                <FormLabel>Last Pay</FormLabel>
                                <Input
                                    value={lastPay}
                                    onChange={(e) => setLastPay(e.target.value)}
                                    focusBorderColor={"rgb(133,50,92)"}
                                    borderColor={'rgb(133,50,92)'}
                                    borderWidth={'2px'} w={'12rem'} name='lastPay' type='number' placeholder='Enter last pay' required />
                            </Box>
                        </HStack>

                        <Button style={{ backgroundColor: '#85325c', color: 'white', }} pos={'absolute'} bottom={'13rem'} right={'24rem'} type='submit' mt={8}>
                            Add Data
                        </Button>
                    </form>
                    <Button onClick={nextPageHandler} rightIcon={<FaArrowRight />} style={{ backgroundColor: '#85325c', color: 'white', }} pos={'absolute'} bottom={'8rem'} right={'18rem'} w={'9rem'} type='submit' mt={8}>
                        Save & Next
                    </Button>
                </Container>
            </VStack>
    )
};


export default Teaching
