import { Box, Button, Container, FormLabel, HStack, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import { fileUploadStyle } from '../App'


const Mphil = () => {
  return (
    <Container display={'flex'} alignItems={'center'} minH={'70vh'} maxW={'100%'} pb={'6rem'}>
      <VStack >
        <HStack display={'flex'} justifyContent={'space-around'} >
          <Box my={4} mx={'1.5rem'}  >
            <FormLabel htmlFor='university' children={"University"} />
            <Input
              required
              id='university'
              type={'text'}
              focusBorderColor={"rgb(133,50,92)"}
              borderColor={'rgb(133,50,92)'}
              borderWidth={'2px'}
              w={'15rem'}
              fontWeight={'500'}
            />
          </Box>
          <Box my={4} >
            <FormLabel htmlFor='specialization' children={"Specialization"} />
            <Input
              required
              id='specialization'
              type={'text'}
              focusBorderColor={"rgb(133,50,92)"}
              borderColor={'rgb(133,50,92)'}
              borderWidth={'2px'}
              w={'15rem'}
              fontWeight={'500'}
            />
          </Box>
        </HStack>
        <HStack display={'flex'} justifyContent={'space-evenly'} >
          <Box my={4} mx={'1.5rem'} >
            <FormLabel htmlFor='yearOfPassing' children={"Year Of Passing"} />
            <Input
              required
              id='yearOfPassing'
              type={'number'}
              focusBorderColor={"rgb(133,50,92)"}
              borderColor={'rgb(133,50,92)'}
              borderWidth={'2px'}
              w={'15rem'}
              fontWeight={'500'}
              placeholder={'e.g. 2022'}
            />
          </Box>
          <Box my={4} >
            <FormLabel htmlFor='percentageOfMarks' children={"Percentage of Marks/Grade"} />
            <Input
              required
              id='percentageOfMarks'
              type={'text'}
              focusBorderColor={"rgb(133,50,92)"}
              borderColor={'rgb(133,50,92)'}
              borderWidth={'2px'}
              w={'15rem'}
              fontWeight={'500'}
              placeholder={'e.g. 91'}
            />
          </Box>
        </HStack>
        <HStack display={'flex'} justifyContent={'space-evenly'} >
          <Box my={4} ml={'2.8rem'} mr={'1.5rem'} >
            <FormLabel htmlFor='classGrade' children={"Class / Grade"} />
            <Input
              required
              id='classGrade'
              type={'text'}
              focusBorderColor={"rgb(133,50,92)"}
              borderColor={'rgb(133,50,92)'}
              borderWidth={'2px'}
              w={'15rem'}
              fontWeight={'500'}
              placeholder={'e.g. 2022'}
            />
          </Box>
          <Box my={4} >
            <FormLabel htmlFor='passportSizePhoto' children={"Upload a Passport size photograph"} />
            <Input
              required
              id="chooseAvatar"
              type={'file'}
              css={fileUploadStyle}
              focusBorderColor={"rgb(133,50,92)"}
              borderColor={'rgb(133,50,92)'}
              borderWidth={'2px'}
              w={'15rem'}
            />
          </Box>
        </HStack>
      </VStack>
      <Button style={{ backgroundColor: '#85325c', color: 'white', }} pos={'absolute'} bottom={'16rem'} right={'23rem'} w={'6rem'} type='submit' mt={8}>
        Save
      </Button>
    </Container>
  )
}

export default Mphil
