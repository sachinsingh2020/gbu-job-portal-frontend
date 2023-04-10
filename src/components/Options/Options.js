import { Box, Container, HStack } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import PreFooter from '../Footer/PreFooter';



const Options = () => {

    const sectionArray = [{ name: 'Personal', path: '/personal' }, { name: 'Applied For', path: '/applied' }, { name: 'Education', path: '/education' }, { name: 'Phd Details', path: '/phddetails' }, { name: 'Teaching Experience', path: '/teaching' }, { name: 'Research Paper', path: '/research' }, { name: 'Conference', path: '/conference' }, { name: 'General', path: '/general' }]
    // eslint-disable-next-line
    const [activeIndex, setActiveIndex] = useState(0);
    const boxRefs = useRef([]);
    const navigate = useNavigate();

    const colorHandler = (e, index) => {
        setActiveIndex(index);
        e.target.style.background = "#85325c";
        e.target.style.color = "white";

        boxRefs.current.forEach((ref, i) => {
            if (i !== index) {
                ref.style.background = '#f8f9fa';
                ref.style.color = 'black';
            }
        });

        navigate(sectionArray[index].path);
    }
    const nextHandler = () => {
        setActiveIndex(activeIndex);
        if (activeIndex !== sectionArray.length - 1) {
            const nextIndex = activeIndex + 1;
            setActiveIndex(nextIndex);
            boxRefs.current[nextIndex].style.background = "#85325c";
            boxRefs.current[nextIndex].style.color = "white";

            boxRefs.current.forEach((ref, i) => {
                if (i !== nextIndex) {
                    ref.style.background = '#f8f9fa';
                    ref.style.color = 'black';
                }
            });

            navigate(sectionArray[nextIndex].path);
        }
    }
    const previousHandler = () => {
        console.log(activeIndex);
        setActiveIndex(activeIndex);
        if (activeIndex > 0) {
            setActiveIndex(activeIndex - 1);
            boxRefs.current[activeIndex - 1].style.background = "#85325c";
            boxRefs.current[activeIndex - 1].style.color = "white";

            boxRefs.current.forEach((ref, i) => {
                if (i !== activeIndex - 1) {
                    ref.style.background = '#f8f9fa';
                    ref.style.color = 'black';
                }
            });

            navigate(sectionArray[activeIndex - 1].path);
        }
    }

    useEffect(() => {
        boxRefs.current[activeIndex].style.background = "#85325c";
        boxRefs.current[activeIndex].style.color = "white";

        navigate(sectionArray[activeIndex].path);
        // eslint-disable-next-line
    }, [navigate]);



    return (
        <>
            <Container my={'5'} maxW='90%' display={"flex"} justifyContent={'center'} background={'#f8f9fa'}>
                <HStack my={2} fontSize={'lg'} as="b" spacing={3} mx={'2'} maxH={'4rem'} border={"3px solid #85325c"} borderRadius={'4'} style={{ minWidth: "20%", maxWidth: "80%" }}>
                    {
                        sectionArray.map((item, index) => (
                            <Box key={index} ref={(ref) => (boxRefs.current[index] = ref)} style={{ cursor: "pointer" }} onClick={(e) => colorHandler(e, index)} px={'2'} py={'1'} >{item.name}</Box>
                        ))
                    }
                </HStack>
            </Container >
            <PreFooter nextHandler={nextHandler} previousHandler={previousHandler} activeIndex={activeIndex} />
        </>
    )
}

export default Options
