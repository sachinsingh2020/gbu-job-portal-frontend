import { Box, Button, Container, FormLabel, HStack, Input, InputGroup, InputLeftAddon, Select } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { fileUploadStyle } from '../../App.js'
import { createPersonal } from '../../redux/actions/personal.js';
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const Personal = () => {

    const { user } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [dateOfBirth, setDateOfBirth] = useState("");
    // eslint-disable-next-line
    const [gender, setGender] = useState("");
    // eslint-disable-next-line
    const [maritalStatus, setMaritalStatus] = useState("");
    const [nationality, setNationality] = useState("");
    // eslint-disable-next-line
    const [category, setCategory] = useState("");
    const [email, setEmail] = useState(user.email);
    const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
    const [alternativePhoneNumber, setAlternativePhoneNumber] = useState("");
    const [fatherHusbandName, setFatherHusbandName] = useState("");
    const [permanentAddress, setPermanentAddress] = useState("");
    // eslint-disable-next-line
    const [image, setImage] = useState("");
    const [aadharNumber, setAadharNumber] = useState("");

    const navigate = useNavigate();

    const changeImageHandler = (e) => {
        const file = e.target.files[0];
        setImage(file);
    }

    const { message, error,loading } = useSelector(state => state.personal);

    const submitHandler = async (e) => {
        e.preventDefault();
        const myForm = new FormData();

        myForm.append('firstName', firstName);
        myForm.append('lastName', lastName);
        myForm.append('dateOfBirth', dateOfBirth);
        myForm.append('gender', gender);
        myForm.append('maritalStatus', maritalStatus);
        myForm.append('nationality', nationality);
        myForm.append('category', category);
        myForm.append('emailAddress', email);
        myForm.append('phoneNumber', phoneNumber);
        myForm.append('alternativePhoneNumber', alternativePhoneNumber);
        myForm.append('fatherHusbandName', fatherHusbandName);
        myForm.append('permanentAddress', permanentAddress);
        myForm.append('file', image);
        myForm.append('aadharNumber', aadharNumber);

        await dispatch(createPersonal(myForm));
    };


    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({ type: 'clearError' });
        }

        if (message) {
            toast.success(message);
            dispatch({ type: 'clearMessage' });
            let activeIndex = 0;
            activeIndex = 1;
            navigate('/', { state: { activeIndex } });
        }

    }, [dispatch, error, message, navigate]);

    return (
        // loading ? (<Loader />) : (
        <Container minH={'70vh'} maxW={'60%'} pb={'6rem'}>
            <HStack display={'flex'} justifyContent={'space-evenly'} >
                <Box my={4} >
                    <FormLabel htmlFor='firstName' children={"First Name"} />
                    <Input
                        required
                        id='firstName'
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
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
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
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
                    <FormLabel htmlFor='dateOfBirth' children={"Date of Birth"} />
                    <Input
                        required
                        id='dateOfBirth'
                        type={'date'}
                        onChange={e => setDateOfBirth(e.target.value)}
                        focusBorderColor={"rgb(133,50,92)"}
                        borderColor={'rgb(133,50,92)'}
                        borderWidth={'2px'}
                        w={'18rem'}
                        fontWeight={'500'}
                    />
                </Box>
                <Box my={4} >
                    <FormLabel htmlFor='gender' children={"Gender"} />
                    <Select
                        onChange={(e) => { setGender(e.target.value) }}
                        placeholder='Select option' w={'18rem'} focusBorderColor={"rgb(133,50,92)"} borderColor={"rgb(133,50,92)"} borderWidth={'2px'}>
                        <option value='Male'>Male</option>
                        <option value='Female'>Female</option>
                        <option value='Other'>Other</option>
                    </Select>
                </Box>
            </HStack>
            <HStack display={'flex'} justifyContent={'space-evenly'} >
                <Box my={4} >
                    <FormLabel htmlFor='maritalStatus' children={"Marital Status"} />
                    <Select
                        onChange={(e) => { setMaritalStatus(e.target.value) }}
                        placeholder='Select option' w={'18rem'} focusBorderColor={"rgb(133,50,92)"} borderColor={"rgb(133,50,92)"} borderWidth={'2px'}>
                        <option value='Single'>Single</option>
                        <option value='Married'>Married</option>
                        <option value='Divorced'>Divorced</option>
                        <option value='Cohabitating'>Cohabitating</option>
                    </Select>
                </Box>
                <Box my={4} >
                    <FormLabel htmlFor='nationality' children={"Nationality"} />
                    <Input
                        required
                        id='nationality'
                        value={nationality}
                        onChange={e => setNationality(e.target.value)}
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
                    <Select
                        onChange={(e) => { setCategory(e.target.value) }}
                        placeholder='Select option' w={'18rem'} focusBorderColor={"rgb(133,50,92)"} borderColor={"rgb(133,50,92)"} borderWidth={'2px'}>
                        <option value='General'>General</option>
                        <option value='OBC (Creamy-Layer)'>OBC (Creamy Layer)</option>
                        <option value='OBC (Non-Creamy-Layer)'>OBC (Non-Creamy Layer)</option>
                        <option value='SC/ST'>SC/ST</option>
                        <option value='PWD (Person With Disability)'>PWD (Person With Disability)</option>
                    </Select>
                </Box>
                <Box my={4} >
                    <FormLabel htmlFor='email' children={"Email Address"} />
                    <Input
                        required
                        id='email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
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
                            value={phoneNumber}
                            onChange={e => setPhoneNumber(e.target.value)}
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
                            value={alternativePhoneNumber}
                            onChange={e => setAlternativePhoneNumber(e.target.value)}
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
                    <FormLabel htmlFor='fatherHusbandName' children={"Father’s/ Husband’s Name"} />
                    <Input
                        required
                        id='fatherHusbandName'
                        value={fatherHusbandName}
                        onChange={e => setFatherHusbandName(e.target.value)}
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
                        value={permanentAddress}
                        onChange={e => setPermanentAddress(e.target.value)}
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
                        onChange={changeImageHandler}
                    />
                </Box>
                <Box my={4} >
                    <FormLabel htmlFor='aadharNumber' children={"Aadhar Number"} />
                    <Input
                        required
                        id='aadharNumber'
                        value={aadharNumber}
                        onChange={e => setAadharNumber(e.target.value)}
                        type={'number'}
                        focusBorderColor={"rgb(133,50,92)"}
                        borderColor={'rgb(133,50,92)'}
                        borderWidth={'2px'}
                        w={'18rem'}
                        fontWeight={'500'}
                    />
                </Box>
            </HStack>
            <Button isLoading={loading} onClick={submitHandler} rightIcon={<FaArrowRight />} style={{ backgroundColor: '#85325c', color: 'white', }} pos={'absolute'} bottom={'11rem'} right={'22rem'} w={'9rem'} type='submit' mt={8}>
                Save & Next
            </Button>
        </Container>
        )
    // )
}

export default Personal
