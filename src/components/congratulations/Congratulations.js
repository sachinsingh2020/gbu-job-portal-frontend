import { Button, Container } from '@chakra-ui/react'
import React from 'react'
import { AiFillSmile } from "react-icons/ai";

const Congratulations = () => {
    return (
        <Container  maxW={'75vw'} minH={'80vh'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} fontSize={'18px'} fontWeight={'bold'}>
            <AiFillSmile style={{marginBottom:'1rem'}} size={100} color={'rgb(133,50,92)'} />
            <h1 style={{marginBottom:'1rem'}}>Congratulations</h1>
            <h2 style={{marginBottom:'1rem'}}>Your Form Has Been Submitted</h2>
            <h2 style={{marginBottom:'1rem'}}>We Will Contact You Shortly</h2>
            <Button background={'rgb(133,50,92)'} color={'white'}><a href="https://www.gbu.ac.in/">Go To Home</a></Button>
        </Container>
    )
}

export default Congratulations
