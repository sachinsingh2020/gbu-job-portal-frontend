import React, { useEffect } from 'react'
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer, Button } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTeachingExperience, getTeachingExperience } from '../../redux/actions/teaching';
import { toast } from 'react-hot-toast';
import { loadUser } from '../../redux/actions/user';


const TeachinExperienceTable = ({ teachingData }) => {
    const dispatch = useDispatch();

    const { loading, error, message } = useSelector(state => state.teaching);

    const deleteHandler = (id) => {
        dispatch(deleteTeachingExperience(id));
    }

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({ type: 'clearError' });
        }

        if (message) {
            toast.success(message);
            dispatch({ type: 'clearMessage' });
        }
        dispatch(getTeachingExperience());
        dispatch(loadUser())

    }, [dispatch, error, message]);
    return (
        <TableContainer h={'10rem'} overflowY={'scroll'} paddingX={'2rem'}>
            <Table variant='simple'>
                <TableCaption>Previously Added Data</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Position Held</Th>
                        <Th>Institute</Th>
                        <Th>Joining Date</Th>
                        <Th>Leaving Date</Th>
                        <Th>Total Period ( months)</Th>
                        <Th>Nature Of Duties</Th>
                        <Th>Course Taught</Th>
                        <Th>Level UG/PG</Th>
                        <Th>Last Pay</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {[...teachingData].reverse().map((data, index) => (
                        <Tr key={index}>
                            <Td>{data.positionHeld}</Td>
                            <Td>{data.organizationInstitute}</Td>
                            <Td>{`${String(data.dateOfJoining).split('T')[0]}`}</Td>
                            <Td>{`${String(data.dateOfLeaving).split('T')[0]}`}</Td>
                            <Td>{data.totalPeriodDuration}</Td>
                            <Td>{data.natureOfDuties}</Td>
                            <Td>{data.courseTaught}</Td>
                            <Td>{data.levelUgPg}</Td>
                            <Td>{`₹ ${data.lastPay}`}</Td>
                            <Td>
                                <Button
                                    isLoading={loading}
                                    onClick={() => deleteHandler(data._id)} style={{ backgroundColor: '#85325c', color: 'white', }} >Delete</Button>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    )
}

export default TeachinExperienceTable
