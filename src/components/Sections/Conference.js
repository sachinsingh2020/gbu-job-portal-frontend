import React, { useEffect, useState } from 'react';
import { Box, Container, HStack, VStack, Button } from '@chakra-ui/react';
import NationalConference from '../Conference/NationalConference';
import InterNationalConference from '../Conference/InterNationalConference';

const Conference = ({setActiveIndex}) => {
  const [activeComponent, setActiveComponent] = useState('nationalconference');


  const renderComponent = () => {
    switch (activeComponent) {
      case 'nationalconference':
        return <NationalConference />;
      case 'internationalconference':
        return <InterNationalConference />;
      default:
        return null;
    }
  };

  useEffect(() => {
    setActiveComponent(setActiveIndex);
    // const tree = document.querySelector('.educationButton');
    // tree.style.backgroundColor = '#85325c';
    // tree.style.color = 'white';
  }, [setActiveComponent, setActiveIndex])
  return (
    <Container maxW={'60%'} minH={'70vh'}>
      <HStack>
        <VStack w={'15rem'} display={'flex'} alignItems={'center'} h={'100%'} >
          <Box display={'flex'}>
            <Button my={'2rem'} backgroundColor={'blackAlpha.400'}  style={{ cursor: "pointer", backgroundColor: activeComponent === 'nationalconference' ? '#85325c' : '', color: activeComponent === 'nationalconference' ? 'white' : '' }} className='educationButton' w={'10rem'} >National</Button>
          </Box>
          <Box display={'flex'}>
            <Button my={'2rem'} backgroundColor={'blackAlpha.400'} style={{ cursor: "pointer", backgroundColor: activeComponent === 'internationalconference' ? '#85325c' : '', color: activeComponent === 'internationalconference' ? 'white' : '' }}  className='educationButton' w={'10rem'} >International</Button>
          </Box>
        </VStack>
        <VStack>
          {renderComponent()}
        </VStack>
      </HStack>
    </Container>
  )
}

export default Conference
