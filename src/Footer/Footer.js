import { Box, Heading, HStack, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaTwitter, FaFacebook } from "react-icons/fa";
import { TiSocialInstagramCircular } from 'react-icons/ti'

const Footer = () => {
    return (
        <Box padding={'4'} bg="rgb(133,50,92)" minH={'10vh'} >
            <Stack direction={['column', 'row']} >
                <VStack alignItems={['center', 'flex-start']} width={'full'} >
                    <Heading children={'All Right Reserved'} color="white" />
                    <Heading children={'@GBU'} fontFamily={'body'} size={'sm'} color={'yellow.400'} />
                </VStack>
                <HStack spacing={['2', '8']} justifyContent={'center'} color={'white'} fontSize='50' >
                    <a href="https://www.facebook.com/gbugrnoida.dic/" rel="noreferrer" target={'_blank'}>
                        <FaFacebook size={'2rem'} color={'white'} />
                    </a>
                    <a href="https://www.instagram.com/invites/contact/?i=rqpoxm8cck95&utm_content=1ckxxez" rel="noreferrer" target={'_blank'}>
                        <TiSocialInstagramCircular size={'2rem'} color={'white'} />
                    </a>
                    <a href="https://twitter.com/gbugrnoida" rel="noreferrer" target={'_blank'}>
                        <FaTwitter size={'2rem'} color={'white'} />
                    </a>
                </HStack>
            </Stack>
        </Box>
    )
}

export default Footer
