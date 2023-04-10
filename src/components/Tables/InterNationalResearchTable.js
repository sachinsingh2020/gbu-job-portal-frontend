import React, { useEffect } from 'react'
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer, Button } from '@chakra-ui/react';
import { deleteInternationalResearch, getInternationalResearch } from '../../redux/actions/research';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { loadUser } from '../../redux/actions/user';


const InterNationalResearchTable = ({ researchData }) => {
    const dispatch = useDispatch();

    const { loading, error, message } = useSelector(state => state.interNationalResearch);

    const deleteHandler = (id) => {
        dispatch(deleteInternationalResearch(id));
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
        dispatch(getInternationalResearch());
        dispatch(loadUser())

    }, [dispatch, error, message]);
    return (
        <TableContainer h={'10rem'} overflowY={'scroll'} paddingX={'2rem'}>
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

export default InterNationalResearchTable
