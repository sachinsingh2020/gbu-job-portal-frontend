import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Button, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'

const Signup = () => {
    return (
        <Container h={'95vh'}>
            <VStack h={'full'} justifyContent="center" spacing={'16'}>
                <Heading textTransform={'uppercase'} children={'Registration'} color={'white'} background={'rgb(133,50,92)'} py={'3'} px={'6'} borderRadius={'20'} />

                <form style={{ width: '100%' }}>
                    <Box my={'4'}>
                        <FormLabel htmlFor="name" children="Name" />
                        <Input
                            required
                            id="name"
                            placeholder="abc"
                            type={'text'}
                            focusBorderColor="yellow.500"
                        />
                    </Box>

                    <Box my={'4'}>
                        <FormLabel htmlFor="email" children="Email Address" />
                        <Input
                            required
                            id="email"
                            placeholder="abc@gmail.com"
                            type={'email'}
                            focusBorderColor="yellow.500"
                        />
                    </Box>

                    <Box my={'4'}>
                        <FormLabel htmlFor="password" children="Password" />
                        <Input
                            required
                            id="password"
                            placeholder="Enter Your Password"
                            type={'password'}
                            focusBorderColor="yellow.500"
                        />
                    </Box>

                    <Box my={'4'}>
                        <FormLabel htmlFor="phoneNumber" children="Phone Number" />
                        <Input
                            required
                            id="phoneNumber"
                            placeholder="Enter Your Phone Number"
                            type={'number'}
                            focusBorderColor="yellow.500"
                        />
                    </Box>

                    <Button my="4" background={'rgb(133,50,92)'} color={'white'} type="submit">
                        Sign Up
                    </Button>

                    <Box my="4">
                        Already Signed Up?{' '}
                        <Link to="/login">
                            <Button color={'rgb(133,50,92)'} variant="link">
                                Login
                            </Button>{' '}
                            here
                        </Link>
                    </Box>
                </form>
            </VStack>
        </Container>
    )
}

export default Signup
