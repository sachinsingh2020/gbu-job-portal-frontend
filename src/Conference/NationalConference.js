import React from 'react'
import { Box, Button, Container, FormLabel, HStack, Input, VStack } from '@chakra-ui/react'
import ConferenceTable from '../Tables/ConferenceTable';


const NationalConference = () => {
    const [conferenceData, setConferenceData] = React.useState([]);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Get the form data
        const formData = new FormData(e.target);
        const nameOfConference = formData.get('nameOfConference');
        const whenAndWhere = formData.get('whenAndWhere');

        // Add the new data to the state variable
        setConferenceData([
            ...conferenceData,
            {
                nameOfConference,
                whenAndWhere,
            },
        ]);

        // Reset the form
        e.target.reset();
    };
    return (
        <>
            {
                conferenceData.length > 0 && <ConferenceTable conferenceData={conferenceData} />
            }
            <Container  display={'flex'} alignItems={'center'} justifyContent={'center'} minH={'70vh'} minW={'200%'} pb={'6rem'}>
                <form onSubmit={handleFormSubmit}>
                    <VStack b>
                        <HStack display={'flex'} justifyContent={'center'} >
                            <Box my={4} mx={'1.5rem'}  >
                                <FormLabel htmlFor='nameOfConference' children={"Name of Conference"} />
                                <Input
                                    required
                                    id='nameOfConference'
                                    name='nameOfConference'
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
                    <Button style={{ backgroundColor: '#85325c', color: 'white', }} pos={'absolute'} bottom={'20rem'} right={'30rem'} type='submit' mt={8}>
                        Add Data
                    </Button>
                </form>
            </Container>
        </>
    )
}

export default NationalConference
