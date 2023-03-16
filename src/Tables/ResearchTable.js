import React from 'react'
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer } from '@chakra-ui/react';


const ResearchTable = ({ researchData }) => {
    console.log("Sachin");
    return (
        <TableContainer>
            <Table variant='simple'>
                <TableCaption>Previously Added Data</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Name of Journel</Th>
                        <Th>Impact Factor</Th>
                        <Th>No. of Papers Published</Th>
                        <Th>Broad Areas</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {researchData.map((data, index) => (
                        <Tr key={index}>
                            <Td>{data.nameOfJournel}</Td>
                            <Td>{data.impactFactor}</Td>
                            <Td>{data.noOfPaperPublished}</Td>
                            <Td>{data.broadAreas}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    )
}

export default ResearchTable
