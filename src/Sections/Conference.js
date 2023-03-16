import React, { useEffect, useState } from 'react';
import { Box, Container, HStack, VStack, Button } from '@chakra-ui/react';
import NationalConference from '../Conference/NationalConference';
import InterNationalConference from '../Conference/InterNationalConference';

const Conference = () => {
  const [activeComponent, setActiveComponent] = useState('nationalresearch');

  const handleButtonClick = (e, component) => {
    setActiveComponent(component);
    e.target.style.background = '#85325c';
    e.target.style.color = 'white';

    document.querySelectorAll('.educationButton:not(:focus)').forEach((button) => {
      button.style.background = '';
      button.style.color = '';
    });
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 'nationalresearch':
        return <NationalConference />;
      case 'internationalresearch':
        return <InterNationalConference />;
      default:
        return null;
    }
  };

  useEffect(() => {
    const tree = document.querySelector('.educationButton');
    tree.style.backgroundColor = '#85325c';
    tree.style.color = 'white';
  }, [])
  return (
    <Container maxW={'60%'} minH={'70vh'}>
      <HStack>
        <VStack w={'15rem'} display={'flex'} alignItems={'center'} h={'100%'} >
          <Box display={'flex'}>
            <Button my={'2rem'} backgroundColor={'blackAlpha.400'} className='educationButton' w={'10rem'} onClick={(e) => handleButtonClick(e, 'nationalresearch')}>National</Button>
          </Box>
          <Box display={'flex'}>
            <Button my={'2rem'} backgroundColor={'blackAlpha.400'} className='educationButton' w={'10rem'} onClick={(e) => handleButtonClick(e, 'internationalresearch')}>International</Button>
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
