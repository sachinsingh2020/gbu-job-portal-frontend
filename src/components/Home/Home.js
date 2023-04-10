import {
    Box, Container, HStack, Button
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Personal from '../Sections/Personal';
import Applied from '../Sections/Applied';
import Education from '../Sections/Education';
import PhdDetails from '../Sections/PhdDetails';
import Teaching from '../Sections/Teaching';
import Research from '../Sections/Research';
import Conference from '../Sections/Conference';
import General from '../Sections/General';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/actions/user';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useLocation } from 'react-router-dom';

const Home = ({ user }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { message, error } = useSelector(state => state.user);

    const handleButtonClick = (index) => {
        setActiveIndex(index);
    };

    const logoutHandler = () => {
        dispatch(logout());
        navigate('/login');
    }

    const location = useLocation();


    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({ type: 'clearError' });
        }

        if (message) {
            toast.success(message);
            dispatch({ type: 'clearMessage' });
        }
        setActiveIndex(location.state?.activeIndex || 0)


    }, [dispatch, error, message, location.state?.activeIndex]);

    const renderComponent = () => {
        switch (activeIndex) {
            case 0:
                return <Personal />;
            case 1:
                return <Applied />;
            case 2:
                return <Education setActiveIndex={location.state?.activeIndexIndex || 'graduation'} />;
            case 3:
                return <PhdDetails />;
            case 4:
                return <Teaching />;
            case 5:
                return <Research setActiveIndex={location.state?.activeIndexIndex|| 'nationalresearch'} />;
            case 6:
                return <Conference setActiveIndex={location.state?.activeIndexIndex || 'nationalconference'} />;
            case 7:
                return <General />
            default:
                return null;
        }
    };


    useEffect(() => {
        const tree = document.querySelector('.homeButton');
        tree.style.backgroundColor = '#85325c';
        tree.style.color = 'white';
    }, [])

    return (
                <>
                <Button onClick={logoutHandler} pos={"absolute"} top={'4.5rem'} right={'2rem'} style={{ backgroundColor: '#85325c', color: 'white', }} >Logout</Button>
                <Container my={'5'} minW={'100vw'} mt={'3rem'} display={"flex"} justifyContent={'center'} background={'#f8f9fa'}>
                    <HStack my={2} fontSize={'lg'} as="b" spacing={3} mx={'2'} maxH={'4rem'} border={"3px solid #85325c"} borderRadius={'4'}>
                        <Box className='homeButton' onClick={() => handleButtonClick(0)} style={{ cursor: "pointer", backgroundColor: activeIndex === 0 ? '#85325c' : '', color: activeIndex === 0 ? 'white' : '' }} px={'2'} py={'1'} >Personal</Box>
                        <Box onClick={() => handleButtonClick(1)} style={{ cursor: "pointer", backgroundColor: activeIndex === 1 ? '#85325c' : '', color: activeIndex === 1 ? 'white' : '' }} px={'2'} py={'1'} >Applied For</Box>
                        <Box onClick={() => handleButtonClick(2)} style={{ cursor: "pointer", backgroundColor: activeIndex === 2 ? '#85325c' : '', color: activeIndex === 2 ? 'white' : '' }} px={'2'} py={'1'} >Education</Box>
                        <Box onClick={() => handleButtonClick(3)} style={{ cursor: "pointer", backgroundColor: activeIndex === 3 ? '#85325c' : '', color: activeIndex === 3 ? 'white' : '' }} px={'2'} py={'1'} >Phd Details</Box>
                        <Box onClick={() => handleButtonClick(4)} style={{ cursor: "pointer", backgroundColor: activeIndex === 4 ? '#85325c' : '', color: activeIndex === 4 ? 'white' : '' }} px={'2'} py={'1'} >Teaching Experience</Box>
                        <Box onClick={() => handleButtonClick(5)} style={{ cursor: "pointer", backgroundColor: activeIndex === 5 ? '#85325c' : '', color: activeIndex === 5 ? 'white' : '' }}
                            px={'2'} py={'1'} >Research</Box>
                        <Box onClick={() => handleButtonClick(6)} style={{ cursor: "pointer", backgroundColor: activeIndex === 6 ? '#85325c' : '', color: activeIndex === 6 ? 'white' : '' }} px={'2'} py={'1'} >Conference</Box>
                        <Box onClick={() => handleButtonClick(7)} style={{ cursor: "pointer", backgroundColor: activeIndex === 7 ? '#85325c' : '', color: activeIndex === 7 ? 'white' : '' }} px={'2'} py={'1'} >General</Box>
                    </HStack>
                </Container>
                {renderComponent()}
                <Container display={"flex"} justifyContent={"space-between"} maxW='90%' mx={'auto'} my={'5'} >
                </Container>
    
            </>
            )
}

export default Home;
