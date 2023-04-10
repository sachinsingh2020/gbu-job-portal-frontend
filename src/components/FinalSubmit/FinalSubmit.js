import { Box, Button, Container, HStack, Heading, Image, Table, TableContainer, Tbody, Td, Th, Thead, Tr, VStack } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react';
import { getPersonal } from '../../redux/actions/personal';
import { useDispatch, useSelector } from 'react-redux';
import { getPostApplied } from '../../redux/actions/appliedFor';
import { getEducationGraduation, getEducationMphil, getEducationPhd, getEducationPostGraduation } from '../../redux/actions/education';
import { getPhdDetails } from '../../redux/actions/phdDetails';
import { getTeachingExperience } from '../../redux/actions/teaching';
import { getInternationalResearch, getNationalResearch } from '../../redux/actions/research';
import { getInterNationalConference, getNationalConference } from '../../redux/actions/conference';
import { getGeneral } from '../../redux/actions/general';
import { FaArrowRight } from "react-icons/fa";
import Loader from '../Loader/Loader';
import { useNavigate } from 'react-router-dom';


const FinalSubmit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getAllData = async () => {
    await dispatch(getPersonal());
    await dispatch(getPostApplied());
    await dispatch(getEducationGraduation());
    await dispatch(getEducationPostGraduation());
    await dispatch(getEducationMphil());
    await dispatch(getEducationPhd());
    await dispatch(getPhdDetails());
    await dispatch(getTeachingExperience());
    await dispatch(getNationalResearch());
    await dispatch(getInternationalResearch());
    await dispatch(getNationalConference());
    await dispatch(getInterNationalConference());
    await dispatch(getGeneral());
  }


  useEffect(() => {
    getAllData();
    // eslint-disable-next-line
  }, []);


  const { personal, loading: loading1 } = useSelector(state => state.personal);
  const { postApplied, loading: loading2 } = useSelector(state => state.postApplied);
  const { educationGraduation, loading: loading3 } = useSelector(state => state.educationGraduation);
  const { educationPostGraduation, loading: loading4 } = useSelector(state => state.educationPostGraduation);
  const { educationMphil, loading: loading5 } = useSelector(state => state.educationMphil);
  const { educationPhd, loading: loading6 } = useSelector(state => state.educationPhd);
  const { phdDetails, loading: loading7 } = useSelector(state => state.phdDetails);
  const { teachingExperience, loading: loading8 } = useSelector(state => state.teaching);
  const { nationalResearchDetails, loading: loading9 } = useSelector(state => state.nationalResearch);
  const { interNationalResearchDetails, loading: loading10 } = useSelector(state => state.interNationalResearch);
  const { nationalConferenceDetails, loading: loading11 } = useSelector(state => state.nationalConference);
  const { interNationalConferenceDetails, loading: loading12 } = useSelector(state => state.interNationalConference);
  const { generalDetails, loading: loading13 } = useSelector(state => state.general);
  // console.log("singh",generalDetails);

  const submitHandler = () => {
    navigate('/congratulations');
  }

  return (
    loading1 || loading2 || loading3 || loading4 || loading5 || loading6 || loading7 || loading8 || loading9 || loading10 || loading11 || loading12 || loading13
      ? <Loader /> :
      <>
        {
          personal && postApplied && educationGraduation && educationPostGraduation && educationMphil && educationPhd && phdDetails && teachingExperience && nationalConferenceDetails && interNationalConferenceDetails && generalDetails && (
            <Container maxW={'100vw'}>
              <VStack py={'2rem'}>
                <Heading
                  children={'Preview and Final Submit'}
                  color={'white'}
                  background={'rgb(133,50,92)'}
                  py={'3'}
                  px={'6'}
                  borderRadius={'20'}
                />
                <HStack p={'2rem'} minW={'65vw'}>
                  <VStack w={'65%'} fontFamily={"sans-serif"} fontSize={'16px'} fontWeight={'bold'} alignItems={'flex-start'}>
                    <HStack minW={'35rem'}>
                      <Box color={'#50596a'} w={'15rem'}>Application No.:</Box>
                      <Box>3423234322</Box>
                    </HStack>
                    <HStack minW={'35rem'}>
                      <Box color={'#50596a'} w={'15rem'}>Full Name: </Box>
                      <Box>{`${personal.firstName} ${personal.lastName}`}</Box>
                    </HStack>
                    <HStack minW={'35rem'}>
                      <Box color={'#50596a'} w={'15rem'}>Date Of Birth:</Box>
                      <Box>{`${String(personal.dateOfBirth).split('T')[0]}`}</Box>
                    </HStack>
                    <HStack minW={'35rem'}>
                      <Box color={'#50596a'} w={'15rem'}>Gender: </Box>
                      <Box>{personal.gender}</Box>
                    </HStack>
                    <HStack minW={'35rem'}>
                      <Box color={'#50596a'} w={'15rem'}>Maritial Status: </Box>
                      <Box>{personal.maritalStatus}</Box>
                    </HStack>
                    <HStack minW={'35rem'}>
                      <Box color={'#50596a'} w={'15rem'}>Nationality: </Box>
                      <Box>{personal.nationality}</Box>
                    </HStack>
                    <HStack minW={'35rem'}>
                      <Box color={'#50596a'} w={'15rem'}>Category: </Box>
                      <Box>{personal.category}</Box>
                    </HStack>
                    <HStack minW={'35rem'}>
                      <Box color={'#50596a'} w={'15rem'}>Email: </Box>
                      <Box>{personal.emailAddress}</Box>
                    </HStack>
                    <HStack minW={'35rem'}>
                      <Box color={'#50596a'} w={'15rem'}>Phone No.: </Box>
                      <Box>{personal.phoneNumber}</Box>
                    </HStack>
                    <HStack minW={'35rem'}>
                      <Box color={'#50596a'} w={'15rem'}>Alternative Phone No.: </Box>
                      <Box>{personal.alternativePhoneNumber}</Box>
                    </HStack>
                    <HStack minW={'35rem'}>
                      <Box color={'#50596a'} w={'15rem'}>Father/Husband Name: </Box>
                      <Box>{personal.fatherHusbandName}</Box>
                    </HStack>
                    <HStack minW={'35rem'}>
                      <Box color={'#50596a'} w={'15rem'}>Permanent Address: </Box>
                      <Box maxW={'18rem'}>{personal.permanentAddress}</Box>
                    </HStack>
                    <HStack minW={'35rem'}>
                      <Box color={'#50596a'} w={'15rem'}>Aadhar Number: </Box>
                      <Box>{personal.aadharNumber}</Box>
                    </HStack>

                  </VStack>
                  <VStack w='35%' border={'2px solid purple'}>
                    <Image height={'20rem'} width={'15rem'}
                      objectFit='cover'
                      src={personal.profilePic.url} alt='Dan Abramov' />
                  </VStack>
                </HStack>
              </VStack>
              <Container mb={'2rem'} minW={'85vw'} fontFamily={"sans-serif"} fontSize={'16px'} fontWeight={'bold'} >
                <Heading as={'h2'} children={'Applied For'}></Heading>
                <HStack py={'1rem'} >
                  <HStack ml={'10rem'} minW={'35rem'}>
                    <Box color={'#50596a'} w={'15rem'}>Post Applied: </Box>
                    <Box>{postApplied.postApplied}</Box>
                  </HStack>
                  <HStack ml={'10rem'} minW={'35rem'} >
                    <Box color={'#50596a'} w={'15rem'}>Department: </Box>
                    <Box>{postApplied.department}</Box>
                  </HStack>
                </HStack>
                <HStack py={'1rem'} >
                  <HStack ml={'10rem'} minW={'35rem'}>
                    <Box color={'#50596a'} w={'15rem'}>School: </Box>
                    <Box>{postApplied.school}</Box>
                  </HStack>
                  <HStack ml={'10rem'} minW={'35rem'}>
                    <Box color={'#50596a'} w={'15rem'}>Specialization: </Box>
                    <Box>{postApplied.specialization}</Box>
                  </HStack>
                </HStack>
                <HStack py={'1rem'} ml={'10rem'} minW={'35rem'}>
                  <Box color={'#50596a'} w={'15rem'}>Advertisement: </Box>
                  <Box>{postApplied.advertisement}</Box>
                </HStack>
              </Container>
              <Container minW={'85vw'}>
                <Heading as={'h2'} children={'Education'}></Heading>
                <TableContainer>
                  <Table varient={'simple'}>
                    <Thead>
                      <Tr>
                        <Th></Th>
                        <Th>University</Th>
                        <Th>Specialization</Th>
                        <Th>Year Of Passing</Th>
                        <Th>Percentage Of Marks</Th>
                        <Th>Class Grade</Th>
                        <Th>Self-Attested Copy</Th>
                      </Tr>
                    </Thead>
                    <Tbody fontSize={'16px'} fontWeight={'bold'}>
                      <Tr>
                        <Td color={'#50596a'}>Graduation</Td>
                        <Td>{educationGraduation.university}</Td>
                        <Td>{educationGraduation.specialization}</Td>
                        <Td>{educationGraduation.yearOfPassing}</Td>
                        <Td>{educationGraduation.percentageOfMarks}%</Td>
                        <Td>{educationGraduation.classGrade}</Td>
                        <Td><Button background={'rgb(133,50,92)'} color={'white'}><a href={educationGraduation.selfAttestedCopy.url} target='_blank' rel="noreferrer">Click to Download</a></Button></Td>
                      </Tr>
                      <Tr>
                        <Td color={'#50596a'}>Post Graduation</Td>
                        <Td>{educationPostGraduation.university}</Td>
                        <Td>{educationPostGraduation.specialization}</Td>
                        <Td>{educationPostGraduation.yearOfPassing}</Td>
                        <Td>{educationPostGraduation.percentageOfMarks}%</Td>
                        <Td>{educationPostGraduation.classGrade}</Td>
                        <Td><Button background={'rgb(133,50,92)'} color={'white'}><a href={educationPostGraduation.selfAttestedCopy.url} target='_blank' rel="noreferrer">Click to Download</a></Button></Td>
                      </Tr>
                      <Tr>
                        <Td color={'#50596a'}>Mphil</Td>
                        <Td>{educationMphil.university}</Td>
                        <Td>{educationMphil.specialization}</Td>
                        <Td>{educationMphil.yearOfPassing}</Td>
                        <Td>{educationMphil.percentageOfMarks}%</Td>
                        <Td>{educationMphil.classGrade}</Td>
                        <Td><Button background={'rgb(133,50,92)'} color={'white'}><a href={educationMphil.selfAttestedCopy.url} target='_blank' rel="noreferrer">Click to Download</a></Button></Td>
                      </Tr>
                      <Tr>
                        <Td color={'#50596a'}>PhD</Td>
                        <Td>{educationPhd.university}</Td>
                        <Td>{educationPhd.specialization}</Td>
                        <Td>{educationPhd.yearOfPassing}</Td>
                        <Td>{educationPhd.percentageOfMarks}%</Td>
                        <Td>{educationPhd.classGrade}</Td>
                        <Td><Button background={'rgb(133,50,92)'} color={'white'}><a href={educationPhd.selfAttestedCopy.url} target='_blank' rel="noreferrer">Click to Download</a></Button></Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
              </Container>
              <Container my={'2rem'} minW={'85vw'} fontFamily={"sans-serif"} fontSize={'16px'} fontWeight={'bold'} >
                <Heading as={'h2'} children={'PhD Details'}></Heading>
                <HStack py={'1rem'} >
                  <HStack ml={'10rem'} minW={'35rem'}>
                    <Box color={'#50596a'} w={'15rem'}>Phd Thesis Details: </Box>
                    <Box>{phdDetails.phdThesisTitle}</Box>
                  </HStack>
                  <HStack ml={'10rem'} minW={'35rem'} >
                    <Box color={'#50596a'} w={'15rem'}>Research Area Thesis Work: </Box>
                    <Box>{phdDetails.researchAreaThesisWork}</Box>
                  </HStack>
                </HStack>
                <HStack py={'1rem'} >
                  <HStack ml={'10rem'} minW={'35rem'}>
                    <Box color={'#50596a'} w={'15rem'}>Joining Date: </Box>
                    <Box>{`${String(phdDetails.dateOfJoining).split('T')[0]}`}</Box>
                  </HStack>
                  <HStack ml={'10rem'} minW={'35rem'}>
                    <Box color={'#50596a'} w={'15rem'}>Submission Date: </Box>
                    <Box>{`${String(phdDetails.dateOfSubmission).split('T')[0]}`}</Box>
                  </HStack>
                </HStack>
                <HStack py={'1rem'} >
                  <HStack ml={'10rem'} minW={'35rem'}>
                    <Box color={'#50596a'} w={'15rem'}>Date of completion of Ph. D Programme: </Box>
                    <Box>{`${String(phdDetails.dateOfCompletion).split('T')[0]}`}</Box>
                  </HStack>
                  <HStack ml={'10rem'} minW={'35rem'}>
                    <Box color={'#50596a'} w={'15rem'}>Name of Thesis Supervisor: </Box>
                    <Box>{phdDetails.nameOfThesisSupervisor}</Box>
                  </HStack>
                </HStack>
                <HStack py={'1rem'} >
                  <HStack ml={'10rem'} minW={'35rem'}>
                    <Box color={'#50596a'} w={'15rem'}>Part Time/ Full Time: </Box>
                    <Box>{phdDetails.partTimeFullTime}</Box>
                  </HStack>
                  <HStack py={'1rem'} ml={'10rem'} minW={'35rem'}>
                    <Box color={'#50596a'} w={'15rem'}>Institution/Univeristy: </Box>
                    <Box>{phdDetails.institutionUniversity}</Box>
                  </HStack>
                </HStack>
              </Container>
              {
                teachingExperience.length > 0 && (
                  <Container minW={'85vw'}>
                    <Heading mb={'1rem'} as={'h2'} children={'Teaching Experience'}></Heading>
                    <TableContainer>
                      <Table varient={'simple'}>
                        <Thead>
                          <Tr>
                            <Th>POSITION HELD</Th>
                            <Th>INSTITUTE</Th>
                            <Th>JOINING DATE</Th>
                            <Th>LEAVING DATE</Th>
                            <Th>TOTAL PERIOD (MONTHS)</Th>
                            <Th>NATURE OF DUTIES</Th>
                            <Th>COURSE TAUGHT</Th>
                            <Th>LEVEL UG/PG</Th>
                            <Th>LAST PAY</Th>

                          </Tr>
                        </Thead>
                        <Tbody fontSize={'16px'} fontWeight={'bold'}>
                          {[...teachingExperience].reverse().map((data, index) => (
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
                            </Tr>
                          ))}
                        </Tbody>
                      </Table>
                    </TableContainer>
                  </Container>
                )
              }
              {
                (nationalResearchDetails.length > 0 || interNationalResearchDetails.length > 0) && (
                  <Container minW={'85vw'} my={'1rem'}>
                    <Heading as={'h2'} children={'Research'}></Heading>
                    <TableContainer>
                      <Table varient={'simple'}>
                        <Thead>
                          <Tr>
                            <Th></Th>
                            <Th>NAME OF JOURNEL</Th>
                            <Th>IMPACT FACTOR</Th>
                            <Th>NO. OF PAPERS PUBLISHED</Th>
                            <Th>BROAD AREAS</Th>
                          </Tr>
                        </Thead>
                        <Tbody fontSize={'16px'} fontWeight={'bold'}>
                          {nationalResearchDetails.map((data, index) => (
                            <Tr key={index}>
                              <Td color={'#50596a'}>National</Td>
                              <Td>{data.nameOfJournel}</Td>
                              <Td>{data.impactFactor}</Td>
                              <Td>{data.noOfPaperPublished}</Td>
                              <Td>{data.broadAreas}</Td>
                            </Tr>
                          ))}
                          {interNationalResearchDetails.map((data, index) => (
                            <Tr key={index}>
                              <Td color={'#50596a'}>International</Td>
                              <Td>{data.nameOfJournel}</Td>
                              <Td>{data.impactFactor}</Td>
                              <Td>{data.noOfPaperPublished}</Td>
                              <Td>{data.broadAreas}</Td>
                            </Tr>
                          ))}
                        </Tbody>
                      </Table>
                    </TableContainer>
                  </Container>
                )
              }
              {
                (nationalConferenceDetails.length > 0 || interNationalConferenceDetails.length) > 0 && (
                  <Container minW={'85vw'} mt={'1rem'}>
                    <Heading as={'h2'} children={'Conference'}></Heading>
                    <TableContainer>
                      <Table varient={'simple'}>
                        <Thead>
                          <Tr>
                            <Th></Th>
                            <Th>NAME OF CONFERENCE</Th>
                            <Th>WHEN AND WHERE</Th>
                          </Tr>
                        </Thead>
                        <Tbody fontSize={'16px'} fontWeight={'bold'}>
                          {nationalConferenceDetails.map((data, index) => (
                            <Tr key={index}>
                              <Td color={'#50596a'}>National</Td>
                              <Td>{data.nameOfConference}</Td>
                              <Td>{data.whenAndWhere}</Td>
                            </Tr>
                          ))}
                          {interNationalConferenceDetails.map((data, index) => (
                            <Tr key={index}>
                              <Td color={'#50596a'}>International</Td>
                              <Td>{data.nameOfConference}</Td>
                              <Td>{data.whenAndWhere}</Td>
                            </Tr>
                          ))}
                        </Tbody>
                      </Table>
                    </TableContainer>
                  </Container>
                )
              }
              <Container maxW={'85vw'} pt={'2rem'} pb={'8rem'}>
                <Heading children={'General Information'}></Heading>
                <HStack fontWeight={'bold'} mt={'1rem'}>
                  <VStack ml={'4rem'} w={'50%'}>
                    <Box w={'100%'} color={'#50596a'} >Are you willing to accept the initial salary of the grade</Box>
                  </VStack>
                  <VStack w={'50%'}>
                    <Box>{generalDetails.acceptSalary}</Box>
                  </VStack>
                </HStack>
                <HStack fontWeight={'bold'} mt={'1rem'}>
                  <VStack ml={'4rem'} w={'50%'} >
                    <Box w={'100%'} color={'#50596a'}>Mention period needed for joining if offered a post (in Days)</Box>
                  </VStack>
                  <VStack w={'50%'}>
                    <Box>{generalDetails.mentionPeriod}</Box>
                  </VStack>
                </HStack>
                <HStack fontWeight={'bold'} mt={'1rem'}>
                  <VStack ml={'4rem'} w={'50%'} >
                    <Box w={'100%'} color={'#50596a'}>Are you willing to accept a lower position, which has also been advertised in the same Advertisement</Box>
                  </VStack>
                  <VStack w={'50%'}>
                    <Box>{generalDetails.acceptPosition}</Box>
                  </VStack>
                </HStack>
                <HStack fontWeight={'bold'} mt={'1rem'}>
                  <VStack ml={'4rem'} w={'50%'} >
                    <Box w={'100%'} color={'#50596a'}>Were you ever declared medically unfit or asked to submit resignation or discharged/ dismissed?</Box>
                  </VStack>
                  <VStack w={'50%'}>
                    <Box>{generalDetails.medicallyUnfit}</Box>
                  </VStack>
                </HStack>
              </Container>
              <Button onClick={submitHandler} rightIcon={<FaArrowRight />} style={{ backgroundColor: '#85325c', color: 'white', }} pos={'absolute'} bottom={'7.6rem'} right={'14rem'} w={'9rem'} type='submit' mt={8}>
                Final Submit
              </Button>
            </Container>
          )
        }
      </>
  )
}

export default FinalSubmit
