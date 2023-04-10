import React, { useEffect, useState } from 'react';
import { Box, Container, HStack, VStack, Button } from '@chakra-ui/react';
import NationalResearch from '../Research/NationalResearch';
import InterNationalResearch from '../Research/InterNationalResearch';

const Research = ({ setActiveIndex }) => {

    const [activeComponent, setActiveComponent] = useState('nationalresearch');


    const renderComponent = () => {
        switch (activeComponent) {
            case 'nationalresearch':
                return <NationalResearch />;
            case 'internationalresearch':
                return <InterNationalResearch />;
            default:
                return null;
        }
    };

    useEffect(() => {
        setActiveComponent(setActiveIndex);
        // const tree = document.querySelector('.educationButton');
        // tree.style.backgroundColor = '#85325c';
        // tree.style.color = 'white';
    }, [setActiveIndex, activeComponent])

    return (
        <Container maxW={'60%'} minH={'70vh'}>
            <HStack>
                <VStack minW={'10rem'} display={'flex'} h={'100%'} >
                    <Box display={'flex'}>
                        <Button my={'2rem'} backgroundColor={'blackAlpha.400'} style={{ cursor: "pointer", backgroundColor: activeComponent === 'nationalresearch' ? '#85325c' : '', color: activeComponent === 'nationalresearch' ? 'white' : '' }} className='educationButton' w={'10rem'} >National</Button>
                    </Box>
                    <Box display={'flex'}>
                        <Button my={'2rem'} backgroundColor={'blackAlpha.400'} style={{ cursor: "pointer", backgroundColor: activeComponent === 'internationalresearch' ? '#85325c' : '', color: activeComponent === 'internationalresearch' ? 'white' : '' }} className='educationButton' w={'10rem'} >International</Button>
                    </Box>
                </VStack>
                <VStack>
                    {renderComponent()}
                </VStack>
            </HStack>
        </Container>
    )
}

export default Research
