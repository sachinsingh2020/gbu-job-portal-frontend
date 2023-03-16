import { Box, Container, HStack, Button } from '@chakra-ui/react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import React, { useEffect, useState } from 'react'
import Personal from '../Sections/Personal';
import Applied from '../Sections/Applied';
import Education from '../Sections/Education';
import PhdDetails from '../Sections/PhdDetails';
import Teaching from '../Sections/Teaching';
import Research from '../Sections/Research';
import Conference from '../Sections/Conference';
import General from '../Sections/General';

const Home = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleButtonClick = (index) => {
        setActiveIndex(index);
    };

    const renderComponent = () => {
        switch (activeIndex) {
            case 0:
                return <Personal />;
            case 1:
                return <Applied />;
            case 2:
                return <Education />;
            case 3:
                return <PhdDetails />;
            case 4:
                return <Teaching />;
            case 5:
                return <Research />;
            case 6:
                return <Conference />;
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
            <Container my={'5'} maxW='90%' display={"flex"} justifyContent={'center'} background={'#f8f9fa'}>
                <HStack my={2} fontSize={'lg'} as="b" spacing={3} mx={'2'} maxH={'4rem'} border={"3px solid #85325c"} borderRadius={'4'} style={{ minWidth: "20%", maxWidth: "80%" }}>
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
                <Button size={'md'} leftIcon={<FaArrowLeft />}  style={{ backgroundColor: '#85325c', color: 'white', }} onClick={() => setActiveIndex(activeIndex === 0 ? 0 : activeIndex - 1)} isDisabled={activeIndex === 0}>Previous </Button>
                <Button size={'md'} rightIcon={<FaArrowRight />}  style={{ backgroundColor: '#85325c', color: 'white', }} onClick={() => setActiveIndex(activeIndex === 7 ? 7 : activeIndex + 1)} isDisabled={activeIndex === 7}>Next </Button>
            </Container>
        </>
    )
}

export default Home;