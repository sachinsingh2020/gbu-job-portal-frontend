import { Box, Button, Container, FormLabel, HStack, Input, Select } from '@chakra-ui/react'
import React from 'react'

const PhdDetails = () => {
    return (
        <Container minH={'70vh'} maxW={'60%'} pb={'6rem'}>
            <HStack display={'flex'} justifyContent={'space-evenly'} >
                <Box my={4} >
                    <FormLabel htmlFor='phdThesisTitle' children={"Ph. D Thesis Title"} />
                    <Input
                        required
                        id='phdThesisTitle'
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
                    <FormLabel htmlFor='postApplied' children={"Post Applied"} />
                    <Select placeholder='Select option' w={'18rem'} focusBorderColor={"rgb(133,50,92)"} borderColor={"rgb(133,50,92)"} borderWidth={'2px'}>
                        <option value='1'>Part time</option>
                        <option value='2'>Full time</option>
                    </Select>
                </Box>
                <Box my={4} >
                    <FormLabel htmlFor='institutionUniversity' children={"Institution / University"} />
                    <Input
                        required
                        id='institutionUniversity'
                        type={'text'}
                        focusBorderColor={"rgb(133,50,92)"}
                        borderColor={'rgb(133,50,92)'}
                        borderWidth={'2px'}
                        w={'18rem'}
                        fontWeight={'500'}
                    />
                </Box>
            </HStack>
            <Button style={{ backgroundColor: '#85325c', color: 'white', }} pos={'absolute'} bottom={'14rem'} right={'24rem'} w={'6rem'} type='submit' mt={8}>
                Save
            </Button>
        </Container>
    )
}

export default PhdDetails
