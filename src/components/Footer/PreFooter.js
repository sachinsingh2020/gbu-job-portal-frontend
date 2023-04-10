import React from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Button, Container, HStack } from '@chakra-ui/react'

const PreFooter = ({ nextHandler, previousHandler, activeIndex }) => {

    return (
        <Container maxW={'60%'}>
            <HStack justifyContent={'space-between'} mt={'5'}>
                {
                    activeIndex > 0 ? (
                        <Button onClick={previousHandler} pos={'absolute'} bottom={'6rem'} left={'8rem'} w={'11rem'} my="4" style={{ backgroundColor: '#85325c', color: 'white', }} type="submit">
                            <FaArrowLeft style={{ marginRight: '5px' }} />
                            Previous Section
                        </Button>
                    ) : null
                }
                {
                    activeIndex < 7 ? (
                        <Button pos={'absolute'} bottom={'7rem'} right={'8rem'} onClick={nextHandler} w={'11rem'} my="4" style={{ backgroundColor: '#85325c', color: 'white', }} type="submit">
                            Next Section
                            <FaArrowRight style={{ marginLeft: '5px' }} />
                        </Button>
                    ) : null

                }
            </HStack>
        </Container>
    )
}

export default PreFooter
