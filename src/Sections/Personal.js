import { Box, Button, Container, FormLabel, HStack, Input, InputGroup, InputLeftAddon, Select } from '@chakra-ui/react'
import React from 'react'
import { fileUploadStyle } from '../App'

const Personal = () => {

    return (
        <Container minH={'70vh'} maxW={'60%'} pb={'6rem'}>
            <HStack display={'flex'} justifyContent={'space-evenly'} >
                <Box my={4} >
                    <FormLabel htmlFor='firstName' children={"First Name"} />
                    <Input
                        required
                        id='firstName'
                        type={'text'}
                        focusBorderColor={"rgb(133,50,92)"}
                        borderColor={'rgb(133,50,92)'}
                        borderWidth={'2px'}
                        w={'18rem'}
                        fontWeight={'500'}
                    />
                </Box>
                <Box my={4} >
                    <FormLabel htmlFor='firstName' children={"Last Name"} />
                    <Input
                        required
                        id='lastName'
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
                    <FormLabel htmlFor='dob' children={"Date of Birth"} />
                    <Input
                        required
                        id='dob'
                        type={'date'}
                        focusBorderColor={"rgb(133,50,92)"}
                        borderColor={'rgb(133,50,92)'}
                        borderWidth={'2px'}
                        w={'18rem'}
                        fontWeight={'500'}
                    />
                </Box>
                <Box my={4} >
                    <FormLabel htmlFor='gender' children={"Gender"} />
                    <Select placeholder='Select option' w={'18rem'} focusBorderColor={"rgb(133,50,92)"} borderColor={"rgb(133,50,92)"} borderWidth={'2px'}>
                        <option value='male'>Male</option>
                        <option value='female'>Female</option>
                        <option value='other'>Other</option>
                    </Select>
                </Box>
            </HStack>
            <HStack display={'flex'} justifyContent={'space-evenly'} >
                <Box my={4} >
                    <FormLabel htmlFor='martialStatus' children={"Martial Status"} />
                    <Input
                        required
                        id='martialStatus'
                        type={'text'}
                        focusBorderColor={"rgb(133,50,92)"}
                        borderColor={'rgb(133,50,92)'}
                        borderWidth={'2px'}
                        w={'18rem'}
                        fontWeight={'500'}
                    />
                </Box>
                <Box my={4} >
                    <FormLabel htmlFor='nationality' children={"Nationality"} />
                    <Input
                        required
                        id='nationality'
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
                    <FormLabel htmlFor='category' children={"Category"} />
                    <Select placeholder='Select option' w={'18rem'} focusBorderColor={"rgb(133,50,92)"} borderColor={"rgb(133,50,92)"} borderWidth={'2px'}>
                        <option value='general'>General</option>
                        <option value='obccreamy'>OBC (Creamy Layer)</option>
                        <option value='obcnoncreamy'>OBC (Non-Creamy Layer)</option>
                        <option value='scst'>SC/ST</option>
                        <option value='pwd'>PWD (Person With Disability)</option>
                    </Select>
                </Box>
                <Box my={4} >
                    <FormLabel htmlFor='email' children={"Email Address"} />
                    <Input
                        required
                        id='email'
                        type={'email'}
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
                    <FormLabel htmlFor='phoneNumber' children={"Phone Number"} />
                    <InputGroup>
                        <InputLeftAddon w={'4rem'} background={'#85325c'} color={'white'} children='+91' />
                        <Input
                            required
                            id='phoneNumber'
                            type={'number'}
                            focusBorderColor={"rgb(133,50,92)"}
                            borderColor={'rgb(133,50,92)'}
                            borderWidth={'2px'}
                            w={'14rem'}
                            fontWeight={'500'}
                        />
                    </InputGroup>
                </Box>
                <Box my={4} >
                    <FormLabel htmlFor='alternativePhoneNumber' children={"Alternative Phone Number"} />
                    <InputGroup>
                        <InputLeftAddon w={'4rem'} background={'#85325c'} color={'white'} children='+91' />
                        <Input
                            required
                            id='alternativePhoneNumber'
                            type={'number'}
                            focusBorderColor={"rgb(133,50,92)"}
                            borderColor={'rgb(133,50,92)'}
                            borderWidth={'2px'}
                            w={'14rem'}
                            fontWeight={'500'}
                        />
                    </InputGroup>
                </Box>

            </HStack>
            <HStack display={'flex'} justifyContent={'space-evenly'} >
                <Box my={4} >
                    <FormLabel htmlFor='fatherName' children={"Father’s/ Husband’s Name"} />
                    <Input
                        required
                        id='fatherName'
                        type={'text'}
                        focusBorderColor={"rgb(133,50,92)"}
                        borderColor={'rgb(133,50,92)'}
                        borderWidth={'2px'}
                        w={'18rem'}
                        fontWeight={'500'}
                    />
                </Box>
                <Box my={4} >
                    <FormLabel htmlFor='permanentAddress' children={"Permanent Address"} />
                    <Input
                        required
                        id='permanentAddress'
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
                    <FormLabel htmlFor='passportSizePhoto' children={"Upload a Passport size photograph"} />
                    <Input
                        accept="image/*"
                        required
                        id="chooseAvatar"
                        type={'file'}
                        css={fileUploadStyle}
                        focusBorderColor={"rgb(133,50,92)"}
                        borderColor={'rgb(133,50,92)'}
                        borderWidth={'2px'}
                        w={'18rem'}
                    />
                </Box>
                <Box my={4} >
                    <FormLabel htmlFor='aadharNumber' children={"Aadhar Number"} />
                    <Input
                        required
                        id='aadharNumber'
                        type={'text'}
                        focusBorderColor={"rgb(133,50,92)"}
                        borderColor={'rgb(133,50,92)'}
                        borderWidth={'2px'}
                        w={'18rem'}
                        fontWeight={'500'}
                    />
                </Box>
            </HStack>
            <Button style={{ backgroundColor: '#85325c', color: 'white', }} pos={'absolute'} bottom={'13rem'} right={'25.5rem'} w={'6rem'} type='submit' mt={8}>
                Save
            </Button>
        </Container>
    )
}

export default Personal
