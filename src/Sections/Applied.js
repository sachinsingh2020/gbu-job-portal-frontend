import { Box, Button, Container, FormLabel, HStack, Select } from '@chakra-ui/react'
import React from 'react'

const Applied = () => {
    return (
        <Container minH={'70vh'} maxW={'60%'} pb={'6rem'}>
            <HStack display={'flex'} justifyContent={'space-evenly'} >
                <Box my={4} >
                    <FormLabel htmlFor='postApplied' children={"Post Applied"} />
                    <Select placeholder='Select option' w={'18rem'} focusBorderColor={"rgb(133,50,92)"} borderColor={"rgb(133,50,92)"} borderWidth={'2px'}>
                        <option value='1'>post 1</option>
                        <option value='2'>post 2</option>
                        <option value='3'>post 3</option>
                        <option value='4'>post 4</option>
                        <option value='5'>post 5</option>
                    </Select>
                </Box>
                <Box my={4} >
                    <FormLabel htmlFor='department' children={"Department"} />
                    <Select placeholder='Select option' w={'18rem'} focusBorderColor={"rgb(133,50,92)"} borderColor={"rgb(133,50,92)"} borderWidth={'2px'}>
                        <option value='1'>post 1</option>
                        <option value='2'>post 2</option>
                        <option value='3'>post 3</option>
                        <option value='4'>post 4</option>
                        <option value='5'>post 5</option>
                    </Select>
                </Box>
            </HStack>
            <HStack display={'flex'} justifyContent={'space-evenly'} >
                <Box my={4} >
                    <FormLabel htmlFor='department' children={"Department"} />
                    <Select placeholder='Select option' w={'18rem'} focusBorderColor={"rgb(133,50,92)"} borderColor={"rgb(133,50,92)"} borderWidth={'2px'}>
                        <option value='1'>post 1</option>
                        <option value='2'>post 2</option>
                        <option value='3'>post 3</option>
                        <option value='4'>post 4</option>
                        <option value='5'>post 5</option>
                    </Select>
                </Box>
                <Box my={4} >
                    <FormLabel htmlFor='specialization' children={"Field of Specialization"} />
                    <Select placeholder='Select option' w={'18rem'} focusBorderColor={"rgb(133,50,92)"} borderColor={"rgb(133,50,92)"} borderWidth={'2px'}>
                        <option value='1'>post 1</option>
                        <option value='2'>post 2</option>
                        <option value='3'>post 3</option>
                        <option value='4'>post 4</option>
                        <option value='5'>post 5</option>
                    </Select>
                </Box>
            </HStack>
            <HStack display={'flex'} justifyContent={"flex-start"} ml={'6.1rem'} >
                <Box my={4} >
                    <FormLabel htmlFor='advertisement' children={"Advertisement no."} />
                    <Select placeholder='Select option' w={'18rem'} focusBorderColor={"rgb(133,50,92)"} borderColor={"rgb(133,50,92)"} borderWidth={'2px'}>
                        <option value='general'>General</option>
                        <option value='obccreamy'>OBC (Creamy Layer)</option>
                        <option value='obcnoncreamy'>OBC (Non-Creamy Layer)</option>
                        <option value='scst'>SC/ST</option>
                        <option value='pwd'>PWD (Person With Disability)</option>
                    </Select>
                </Box>
            </HStack>
            <Button style={{ backgroundColor: '#85325c', color: 'white', }} pos={'absolute'} bottom={'20rem'} right={'25.5rem'} w={'6rem'} type='submit' mt={8}>
                Save
            </Button>
        </Container>
    )
}

export default Applied
