import React, { useEffect, useState } from 'react';
import { Box, Container, HStack, VStack, Button } from '@chakra-ui/react';
import Graduation from '../Education/Graduation';
import PostGraduation from '../Education/PostGraduation';
import Mphil from '../Education/Mphil';
import Phd from '../Education/Phd';

const Education = () => {
  const [activeComponent, setActiveComponent] = useState('graduation');

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

  useEffect(() => {
    const tree = document.querySelector('.educationButton');
    tree.style.backgroundColor = '#85325c';
    tree.style.color = 'white';
  }, [])



  return (
    <Container maxW={'60%'} minH={'70vh'}>
      <HStack>
        <VStack w={'15rem'}>
          <Box display={'flex'}>
            <Button my={'2rem'} backgroundColor={'blackAlpha.400'} className='educationButton' w={'10rem'} onClick={(e) => handleButtonClick(e, 'graduation')}>Graduation</Button>
          </Box>
          <Box display={'flex'}>
            <Button my={'2rem'} backgroundColor={'blackAlpha.400'} className='educationButton' w={'10rem'} onClick={(e) => handleButtonClick(e, 'postgraduation')}>Post Graduation</Button>
          </Box>
          <Box display={'flex'}>
            <Button my={'2rem'} backgroundColor={'blackAlpha.400'} className='educationButton' w={'10rem'} onClick={(e) => handleButtonClick(e, 'mphil')}>Mphil</Button>
          </Box>
          <Box display={'flex'}>
            <Button my={'2rem'} backgroundColor={'blackAlpha.400'} className='educationButton' w={'10rem'} onClick={(e) => handleButtonClick(e, 'phd')}>Phd</Button>
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