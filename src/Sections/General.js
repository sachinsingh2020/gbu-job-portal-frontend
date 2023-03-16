import React from 'react'
import { Box, Button, Container, FormLabel, HStack, Input, Select } from '@chakra-ui/react'

const General = () => {
    return (
        <Container minH={'70vh'} maxW={'60%'} pb={'6rem'}>
            <HStack display={'flex'} justifyContent={"flex-start"} ml={'6.1rem'} >
                <Box my={4} >
                    <FormLabel htmlFor='acceptSalary' children={"	Are you willing to accept the initial salary of the grade"} />
                    <Select placeholder='Select option' w={'18rem'} focusBorderColor={"rgb(133,50,92)"} borderColor={"rgb(133,50,92)"} borderWidth={'2px'}>
                        <option value='1'>Yes</option>
                        <option value='2'>No</option>
                    </Select>
                </Box>
            </HStack>
            <HStack display={'flex'} justifyContent={"flex-start"} ml={'6.1rem'} >
                <Box my={4} >
                    <FormLabel htmlFor='mentionSalary' children={"Mention period needed for joining if offered a post"} />
                    <Input
                        required
                        id='mentionSalary'
                        type={'text'}
                        focusBorderColor={"rgb(133,50,92)"}
                        borderColor={'rgb(133,50,92)'}
                        borderWidth={'2px'}
                        w={'18rem'}
                        fontWeight={'500'}
                    />
                </Box>
            </HStack>
            <HStack display={'flex'} justifyContent={"flex-start"} ml={'6.1rem'} >
                <Box my={4} >
                    <FormLabel htmlFor='acceptSalary' children={"Are you willing to accept a lower position, which has also been advertised in the same Advertisement"} />
                    <Select placeholder='Select option' w={'18rem'} focusBorderColor={"rgb(133,50,92)"} borderColor={"rgb(133,50,92)"} borderWidth={'2px'}>
                        <option value='1'>Yes</option>
                        <option value='2'>No</option>
                    </Select>
                </Box>

            </HStack>
            <HStack display={'flex'} justifyContent={"flex-start"} ml={'6.1rem'} >
                <Box my={4} >
                    <FormLabel htmlFor='specialization' children={"Were you ever declared medically unfit or asked to submit resignation or discharged/ dismissed?"} />
                    <Select placeholder='Select option' w={'18rem'} focusBorderColor={"rgb(133,50,92)"} borderColor={"rgb(133,50,92)"} borderWidth={'2px'}>
                        <option value='1'>Yes</option>
                        <option value='2'>No</option>
                    </Select>
                </Box>
            </HStack>
            <Button style={{ backgroundColor: '#85325c', color: 'white', }} pos={'absolute'} bottom={'7.6rem'} right={'14rem'}>
                Save & Submit
            </Button>
        </Container>
    )
}

export default General
