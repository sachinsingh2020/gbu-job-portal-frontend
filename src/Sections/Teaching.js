import { Box, Button, Container, FormLabel, HStack, Input, Select } from '@chakra-ui/react';
import React, { useState } from 'react';
import TeachinExperienceTable from '../Tables/TeachinExperienceTable';

const Teaching = () => {
    // Create a state variable to store the data
    const [teachingData, setTeachingData] = useState([]);

    // Create a function to handle the form submission
    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Get the form data
        const formData = new FormData(e.target);
        const positionHeld = formData.get('positionHeld');
        const organizationInstitute = formData.get('organizationInstitute');
        const dateOfJoining = formData.get('dateOfJoining');
        const dateOfLeaving = formData.get('dateOfLeaving');
        const totalPeriodDuration = formData.get('totalPeriodDuration');
        const natureOfDuties = formData.get('natureOfDuties');
        const courseTaught = formData.get('courseTaught');
        const levelUgPg = formData.get('levelUgPg');
        const lastPay = formData.get('lastPay');

        // Add the new data to the state variable
        setTeachingData([
            ...teachingData,
            {
                positionHeld,
                organizationInstitute,
                dateOfJoining,
                dateOfLeaving,
                totalPeriodDuration,
                natureOfDuties,
                courseTaught,
                levelUgPg,
                lastPay,
            },
        ]);

        // Reset the form
        e.target.reset();
    };

    return (
        <>
            {
                teachingData.length > 0 && <TeachinExperienceTable teachingData={teachingData} />
            }
            <Container maxW='60%' mt={8} >
                <form onSubmit={handleFormSubmit}>
                    <HStack justifyContent={'space-evenly'}>
                        <Box>
                            <FormLabel>Position Held</FormLabel>
                            <Input   focusBorderColor={"rgb(133,50,92)"}
                                    borderColor={'rgb(133,50,92)'}
                                    borderWidth={'2px'} w={'12rem'} name='positionHeld' type='text' placeholder='Enter position held' required />
                        </Box>

                        <Box>
                            <FormLabel>Organization / Institute</FormLabel>
                            <Input   focusBorderColor={"rgb(133,50,92)"}
                                    borderColor={'rgb(133,50,92)'}
                                    borderWidth={'2px'} w={'12rem'} name='organizationInstitute' type='text' placeholder='Enter organization/institute' required />
                        </Box>

                        <Box>
                            <FormLabel>Date of Joining</FormLabel>
                            <Input   focusBorderColor={"rgb(133,50,92)"}
                                    borderColor={'rgb(133,50,92)'}
                                    borderWidth={'2px'} w={'12rem'} name='dateOfJoining' type='date' placeholder='Enter date of joining' required />
                        </Box>

                    </HStack>

                    <HStack mt={8} justifyContent={'space-evenly'}>
                        <Box>
                            <FormLabel>Date of Leaving</FormLabel>
                            <Input   focusBorderColor={"rgb(133,50,92)"}
                                    borderColor={'rgb(133,50,92)'}
                                    borderWidth={'2px'} w={'12rem'} name='dateOfLeaving' type='date' placeholder='Enter date of leaving' required />
                        </Box>
                        <Box>
                            <FormLabel>Total Period (in months)</FormLabel>
                            <Input   focusBorderColor={"rgb(133,50,92)"}
                                    borderColor={'rgb(133,50,92)'}
                                    borderWidth={'2px'} w={'12rem'} name='totalPeriodDuration' type='number' placeholder='Enter total period duration' required />
                        </Box>

                        <Box>
                            <FormLabel>Nature Of Duties</FormLabel>
                            <Input   focusBorderColor={"rgb(133,50,92)"}
                                    borderColor={'rgb(133,50,92)'}
                                    borderWidth={'2px'} w={'12rem'} name='natureOfDuties' type='text' placeholder='Enter nature of duties' required />
                        </Box>


                    </HStack>
                    <HStack mt={8} mb={"8rem"} justifyContent={'space-evenly'}>
                        <Box>
                            <FormLabel>Course Taught</FormLabel>
                            <Input   focusBorderColor={"rgb(133,50,92)"}
                                    borderColor={'rgb(133,50,92)'}
                                    borderWidth={'2px'} w={'12rem'} name='courseTaught' type='text' placeholder='Enter course taught' required />
                        </Box>
                        <Box>
                            <FormLabel>Level UG/PG</FormLabel>
                            <Select   focusBorderColor={"rgb(133,50,92)"}
                                    borderColor={'rgb(133,50,92)'}
                                    borderWidth={'2px'} w={'12rem'} name='levelUgPg' required>
                                <option value='UG'>UG</option>
                                <option value='PG'>PG</option>
                            </Select>
                        </Box>

                        <Box>
                            <FormLabel>Last Pay</FormLabel>
                            <Input   focusBorderColor={"rgb(133,50,92)"}
                                    borderColor={'rgb(133,50,92)'}
                                    borderWidth={'2px'} w={'12rem'} name='lastPay' type='number' placeholder='Enter last pay' required />
                        </Box>
                    </HStack>

                    <Button style={{ backgroundColor: '#85325c', color: 'white', }} pos={'absolute'} bottom={'14rem'} right={'24rem'} type='submit' mt={8}>
                        Add Data
                    </Button>
                </form>
            </Container>
        </>
    )
};


export default Teaching
