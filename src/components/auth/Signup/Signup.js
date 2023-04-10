import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Box, Button, Container, FormLabel, Heading, HStack, Input, VStack } from '@chakra-ui/react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { register } from '../../../redux/actions/user';
import { InputGroup, InputRightElement, IconButton } from '@chakra-ui/react';

const Signup = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [showPassword, setShowPassword] = useState(false); // added state for password visibility

    const dispatch = useDispatch();

    const submitHandler = e => {
        e.preventDefault();

        const myForm = new FormData();
        myForm.append('firstName', firstName);
        myForm.append('lastName', lastName);
        myForm.append('email', email);
        myForm.append('password', password);
        myForm.append('phoneNumber', phoneNumber);

        dispatch(register(myForm));
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Container maxH={'150vh'} >
            <VStack h={'full'} justifyContent="center" spacing={'16'}>
                <Heading mt={'3rem'} textTransform={'uppercase'} children={'Registration'} color={'white'} background={'rgb(133,50,92)'} py={'3'} px={'6'} borderRadius={'20'} />

                <form onSubmit={submitHandler} style={{ width: '130%' }} >
                    <HStack  justifyContent={'center'} >
                    <Box my={'4'} maxW={'40rem'}>
                        <FormLabel htmlFor="firstName" children="First Name" />
                        <Input
                            required
                            id="firstName"
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)}
                            placeholder="First Name"
                            type={'text'}
                            focusBorderColor="yellow.500"
                            w={"19.5rem"}
                        />
                    </Box>
                    <Box my={'4'}>
                        <FormLabel htmlFor="lastName" children="Last Name" />
                        <Input
                            required
                            id="lastName"
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
                            placeholder="Last Name"
                            type={'text'}
                            focusBorderColor="yellow.500"
                            maxW={'20rem'}
                            w={'19.5rem'}

                        />
                    </Box>
                    </HStack>
                    <Box my={'4'}>
                        <FormLabel htmlFor="email" children="Email Address" />
                        <Input
                            required
                            id="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="abc@gmail.com"
                            type={'email'}
                            focusBorderColor="yellow.500"
                        />
                    </Box>
                    <Box my={4}>
                        <FormLabel htmlFor="password" children={'Password'} />
                        <InputGroup>
                            <Input
                                required
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter Your Password"
                                type={showPassword ? 'text' : 'password'} // toggle between text and password
                                focusBorderColor={'rgb(133,50,92)'}
                            />
                            <InputRightElement>
                                <IconButton
                                    variant="ghost"
                                    aria-label={showPassword ? 'Hide Password' : 'Show Password'}
                                    icon={showPassword ? <FaEyeSlash /> : <FaEye />}
                                    onClick={toggleShowPassword}
                                />
                            </InputRightElement>
                        </InputGroup>
                    </Box>

                    <Box my={'4'}>
                        <FormLabel htmlFor="phoneNumber" children="Phone Number" />
                        <Input
                            required
                            id="phoneNumber"
                            value={phoneNumber}
                            onChange={e => setPhoneNumber(e.target.value)}
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
