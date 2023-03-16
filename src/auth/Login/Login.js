import { Box, Button, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'



const Login = () => {

    return (
        <Container h={"75vh"} >
            <VStack h={"full"} mt={'3rem'} spacing={'16'}>
                <Heading children={'Welcome To Portal'} color={'white'} background={'rgb(133,50,92)'} py={'3'} px={'6'} borderRadius={'20'} />
                <form style={{ width: '100%' }}>
                    <Box my={4} >
                        <FormLabel htmlFor='email' children={"Email Address"} />
                        <Input
                            required
                            id='email'
                            placeholder='abc@gmail.com'
                            type={'email'}
                            focusBorderColor={"rgb(133,50,92)"}
                        />
                    </Box>
                    <Box my={4} >
                        <FormLabel htmlFor='password' children={"Password"} />
                        <Input
                            required
                            id='password'
                            placeholder='Enter Your Password'
                            type={'password'}
                            focusBorderColor={"rgb(133,50,92)"}
                        />
                    </Box>

                    <Box>
                        <Link to="/forgetpassword">
                            <Button fontSize={'sm'} variant="link">
                                Forget Password?
                            </Button>
                        </Link>
                    </Box>

                    <Button my="4" style={{ backgroundColor: '#85325c', color: 'white', }} type="submit">
                        Login
                    </Button>

                    <Box my="4">
                        New User?{' '}
                        <Link to="/signup">
                            <Button color={'rgb(133,50,92)'} variant="link">
                                Sign Up
                            </Button>{' '}
                        </Link>
                        here
                    </Box>

                </form>
            </VStack>
        </Container>
    )
}

export default Login
