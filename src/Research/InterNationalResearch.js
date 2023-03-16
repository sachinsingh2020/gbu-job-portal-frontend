import React from 'react'
import { Box, Container, FormLabel, HStack, Input, VStack, Button } from '@chakra-ui/react'
import ResearchTable from '../Tables/ResearchTable';

const InterNationalResearch = () => {
    const [researchData, setResearchData] = React.useState([]);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Get the form data
        const formData = new FormData(e.target);
        const nameOfJournel = formData.get('nameOfJournel');
        const impactFactor = formData.get('impactFactor');
        const noOfPaperPublished = formData.get('noOfPaperPublished');
        const broadAreas = formData.get('broadAreas');

        // Add the new data to the state variable
        setResearchData([
            ...researchData,
            {
                nameOfJournel,
                impactFactor,
                noOfPaperPublished,
                broadAreas,
            },
        ]);

        // Reset the form
        e.target.reset();
    };
    return (
        <>
            {
                researchData.length > 0 && <ResearchTable researchData={researchData} />
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
                                <FormLabel htmlFor='noOfPaperPublished' children={"No. of Papers Published"} />
                                <Input
                                    required
                                    id='noOfPaperPublished'
                                    name='noOfPaperPublished'
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
                                <FormLabel htmlFor='broadAreas' children={"Broad Areas"} />
                                <Input
                                    required
                                    id='broadAreas'
                                    name='broadAreas'
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
                    </VStack>
                    <Button style={{ backgroundColor: '#85325c', color: 'white', }} pos={'absolute'} bottom={'20rem'} right={'25rem'} type='submit' mt={8}>
                        Add Data
                    </Button>
                </form>
            </Container>
        </>
    )
}

export default InterNationalResearch
