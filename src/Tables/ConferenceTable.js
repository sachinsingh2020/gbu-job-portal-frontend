import React from 'react'
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer } from '@chakra-ui/react';

const ConferenceTable = ({conferenceData}) => {
    return (
        <TableContainer>
            <Table variant='simple'>
                <TableCaption>Previously Added Data</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Name of Conference</Th>
                        <Th>When and Where</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {conferenceData.map((data, index) => (
                        <Tr key={index}>
                            <Td>{data.nameOfConference}</Td>
                            <Td>{data.whenAndWhere}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    )
}

export default ConferenceTable
