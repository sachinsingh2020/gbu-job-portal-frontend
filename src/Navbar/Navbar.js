import { Button, HStack } from '@chakra-ui/react'
import React from 'react'
import gbuLogo from '../assets/GBU-logo.png'

const Navbar = () => {
    return (
        <HStack maxH={"10rem"}  >
            <HStack w={'50%'} background={'#f8f9fa'}>
                <img style={{ height: '4rem', marginLeft: '1rem' }} src={gbuLogo} alt="" />
            </HStack>
            <HStack background={'#f8f9fa'} w={'50%'} h={'4rem'} justifyContent={"space-evenly"} ml={'3rem'} >
                <a href='https://www.gbu.ac.in/' target={'_blank'} rel="noreferrer">
                    <Button size={'lg'} variant={"link"}>Home</Button>
                </a>
                <a href='https://www.gbu.ac.in/about/home' target={'_blank'} rel="noreferrer">
                    <Button size={'lg'} variant={"link"}>About Us</Button>
                </a>
                <a href='https://pravesh.gbu.ac.in/' target={'_blank'} rel="noreferrer">
                    <Button size={'lg'} variant={"link"}>Admissions</Button>
                </a>
            </HStack>
        </HStack>
    )
}

export default Navbar
