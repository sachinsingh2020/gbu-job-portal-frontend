import React, { useEffect, useState } from 'react';
import { Box, Container, HStack, VStack, Button } from '@chakra-ui/react';
import Graduation from '../Education/Graduation';
import PostGraduation from '../Education/PostGraduation';
import Mphil from '../Education/Mphil';
import Phd from '../Education/Phd';

const Education = ({ setActiveIndex }) => {
  const [activeComponent, setActiveComponent] = useState('graduation');


  useEffect(() => {
    setActiveComponent(setActiveIndex);

    // const tree = document.querySelector(`.educationButton-${activeComponent}`);
    // tree.style.backgroundColor = '#85325c';
    // tree.style.color = 'white';

  }, [setActiveIndex, activeComponent])

  const renderComponent = () => {
    switch (activeComponent) {
      case 'graduation':
        return <Graduation />;
      case 'postgraduation':
        return <PostGraduation />;
      case 'mphil':
        return <Mphil />;
      case 'phd':
        return <Phd />;
      default:
        return null;
    }
  };



  return (
      <Container maxW={'60%'} minH={'70vh'}>
        <HStack>
          <VStack w={'15rem'}>
            <Box display={'flex'}>
              <Button my={'2rem'} backgroundColor={'blackAlpha.400'} style={{ cursor: "pointer", backgroundColor: activeComponent === 'graduation' ? '#85325c' : '', color: activeComponent === 'graduation' ? 'white' : '' }} className={`educationButton educationButton-${activeComponent}`} w={'10rem'} >Graduation</Button>
            </Box>
            <Box display={'flex'}>
              <Button my={'2rem'} backgroundColor={'blackAlpha.400'} style={{ cursor: "pointer", backgroundColor: activeComponent === 'postgraduation' ? '#85325c' : '', color: activeComponent === 'postgraduation' ? 'white' : '' }} className={`educationButton educationButton-${activeComponent}`} w={'10rem'}>Post Graduation</Button>
            </Box>
            <Box display={'flex'}>
              <Button my={'2rem'} backgroundColor={'blackAlpha.400'} style={{ cursor: "pointer", backgroundColor: activeComponent === 'mphil' ? '#85325c' : '', color: activeComponent === 'mphil' ? 'white' : '' }} className={`educationButton educationButton-${activeComponent}`} w={'10rem'} >Mphil</Button>
            </Box>
            <Box display={'flex'}>
              <Button my={'2rem'} backgroundColor={'blackAlpha.400'} style={{ cursor: "pointer", backgroundColor: activeComponent === 'phd' ? '#85325c' : '', color: activeComponent === 'phd' ? 'white' : '' }} className={`educationButton educationButton-${activeComponent}`} w={'10rem'} >Phd</Button>
            </Box>
          </VStack>
          <VStack>
            {renderComponent()}
          </VStack>
        </HStack>
      </Container>
  );
};

export default Education;