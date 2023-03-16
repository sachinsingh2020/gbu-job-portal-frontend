import React from 'react'
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer } from '@chakra-ui/react';


const TeachinExperienceTable = ({teachingData}) => {
    return (
        <TableContainer>
            <Table variant='simple'>
                <TableCaption>Previously Added Data</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Position Held</Th>
                        <Th>Organization / Institute</Th>
                        <Th>Date of Joining</Th>
                        <Th>Date of Leaving</Th>
                        <Th>Total Period (in months)</Th>
                        <Th>Nature Of Duties</Th>
                        <Th>Course Taught</Th>
                        <Th>Level UG/PG</Th>
                        <Th>Last Pay</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {teachingData.map((data, index) => (
                        <Tr key={index}>
                            <Td>{data.positionHeld}</Td>
                            <Td>{data.organizationInstitute}</Td>
                            <Td>{data.dateOfJoining}</Td>
                            <Td>{data.dateOfLeaving}</Td>
                            <Td>{data.totalPeriodDuration}</Td>
                            <Td>{data.natureOfDuties}</Td>
                            <Td>{data.courseTaught}</Td>
                            <Td>{data.levelUgPg}</Td>
                            <Td>{data.lastPay}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    )
}

export default TeachinExperienceTable
