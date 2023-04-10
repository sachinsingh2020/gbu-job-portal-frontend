import {
    Box,
    Button,
    Container,
    FormLabel,
    Heading,
    Input,
    InputGroup,
    InputRightElement,
    IconButton,
    VStack
} from '@chakra-ui/react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../../redux/actions/user.js';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
        navigate('/');
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Container maxH={'95vh'} minH={'75vh'}>
            <VStack h={'full'} mt={'3rem'} spacing={'16'}>
                <Heading
                    children={'Welcome To Portal'}
                    color={'white'}
                    background={'rgb(133,50,92)'}
                    py={'3'}
                    px={'6'}
                    borderRadius={'20'}
                />
                <form style={{ width: '100%' }}>
                    <Box my={4}>
                        <FormLabel htmlFor="email" children={'Email Address'} />
                        <Input
                            required
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="abc@gmail.com"
                            type="email"
                            focusBorderColor={'rgb(133,50 92)'}
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
                    <Box>
                        <Link to="/forgetpassword">
                            <Button fontSize={'sm'} variant="link">
                                Forget Password?
                            </Button>
                        </Link>
                    </Box>
                    <Button
                    onClick={submitHandler}
                    my="4"
                    style={{ backgroundColor: '#85325c', color: 'white' }}
                    type="submit"
                >
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
);
};

export default Login;