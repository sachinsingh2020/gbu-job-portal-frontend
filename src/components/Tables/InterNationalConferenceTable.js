import React, { useEffect } from 'react'
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer, Button } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteInterNationalConference, getInterNationalConference } from '../../redux/actions/conference';
import { toast } from 'react-hot-toast';
import { loadUser } from '../../redux/actions/user';

const InterNationalConferenceTable = ({ conferenceData }) => {

    const dispatch = useDispatch();

    const { loading, error, message } = useSelector(state => state.interNationalConference);

    const deleteHandler = (id) => {
        dispatch(deleteInterNationalConference(id));
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
        dispatch(getInterNationalConference());
        dispatch(loadUser())

    }, [dispatch, error, message]);


    return (
        <TableContainer h={'10rem'} overflowY={'scroll'} paddingX={'2rem'}>
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
                            <Button
                                isLoading={loading}
                                onClick={() => deleteHandler(data._id)} style={{ backgroundColor: '#85325c', color: 'white', }} >Delete</Button>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    )
}

export default InterNationalConferenceTable
