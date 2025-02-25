import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Heading, Box, Text, HStack, OrderedList, ListItem, Button, Image, Spacer, Flex, useToast, VStack } from '@chakra-ui/react';
import course from '../images/deal1.png';
import bars from '../images/bars.png';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { useSelector } from 'react-redux';

const IDetail = () => {
  const { id } = useParams();
  const [internshipDetails, setInternshipDetails] = useState(null);
  const { isAdmin, userId } = useSelector((state) => state.user);
  const toast = useToast();

  const apply = async () => {
    if (!id) {
      alert("Please enter internship id");
      return;
    }
    try {
      const accessToken = window.sessionStorage.getItem('accessToken');
      const { data } = await axios.post(`http://127.0.0.1:8000/intern/apply/`,
        { user: userId, internship_id: id },
        { headers: { 'Authorization': `Bearer ${accessToken}` } });
      toast({ title: 'Applied Successfully', description: 'You have applied for the internship', status: 'success', duration: 5000, isClosable: true });
    } catch (error) {
      toast({ title: 'Failed to Apply', description: 'Something went wrong', status: 'error', duration: 5000, isClosable: true });
    }
  }

  useEffect(() => {
    const fetchInternshipDetails = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/intern/all-internship/`);
        const selectedInternship = response.data.find(internship => internship.id === parseInt(id, 10));
        setInternshipDetails(selectedInternship);
      } catch (error) {
        console.error('Error fetching internship details:', error);
      }
    };
    fetchInternshipDetails();
  }, [id]);

  if (!internshipDetails) return <div>Loading...</div>;

  return (
    <div style={{ fontFamily: "Poppins, sans-serif" }}>
      <NavBar isAdmin={isAdmin} />
      <Heading textAlign='center' fontSize='6xl' fontWeight='bold' mt={10} color='#2c3e50'>Internship Details</Heading>
      <Box w='80%' mx='auto' mt={10} bg='#f8f9fa' p={10} borderRadius='20px' boxShadow='lg'>
        <Flex align='center'>
          <VStack align='start' spacing={4} ml={10}>
            <Text fontSize='4xl' fontWeight='bold' color='#34495e'>{internshipDetails.Internship_title}</Text>
            <Text fontSize='xl' fontWeight='medium' color='#7f8c8d'>Become an expert and enhance your resume</Text>
            <Text fontSize='lg' fontWeight='medium'>
              <b>Duration:</b> {internshipDetails.duration_weeks} weeks <br />
              <b>Skills to learn:</b> {internshipDetails.key_skills}
            </Text>
            <Button bg='#27ae60' color='white' _hover={{ bg: '#2ecc71' }} px={8} py={6} fontSize='xl' borderRadius='10px' onClick={apply}>Apply Now</Button>
          </VStack>
          <Spacer />
          <Image src={course} alt='Internship' borderRadius='15px' boxSize='sm' mr={10} boxShadow='md'/>
        </Flex>
      </Box>
      <Box w='80%' mx='auto' mt={10} bg='#ecf0f1' p={10} borderRadius='20px' boxShadow='lg'>
        <Text fontSize='3xl' fontWeight='bold' color='#2c3e50'>About the Internship</Text>
        <OrderedList mt={5} spacing={3} fontSize='lg'>
          <ListItem>Internship Type: {internshipDetails.internship_type}</ListItem>
          {internshipDetails.project_count > 0 && <ListItem>{internshipDetails.project_count} Project(s)</ListItem>}
          {internshipDetails.lor && <ListItem>LOR</ListItem>}
          {internshipDetails.completion_certificate && <ListItem>Certificate of Completion</ListItem>}
          {internshipDetails.paper_writing && <ListItem>Publication/Paper Writing</ListItem>}
          <ListItem>Duration: {internshipDetails.duration_weeks}</ListItem>
          <ListItem>Fees: {internshipDetails.fees}</ListItem>
          <ListItem>Expert Mentors</ListItem>
        </OrderedList>
      </Box>
      <Box w='full' mt={10} bgGradient='linear(to-r, #6dd5ed, #2193b0)' p={10} textAlign='center' color='white'>
        <Text fontSize='3xl' fontWeight='bold'>Why is this internship the right choice for you?</Text>
        <Flex justify='center' wrap='wrap' mt={8} gap={10}>
          {["Cover letter, resume, interview prep and corporate referencing.", "Elevate your career with real-world insights and industry connections.", "Unlock coding essentials in 4 weeks – your gateway to the future of tech.", "Hands-on experience, skill development, and career exploration."].map((text, index) => (
            <Box 
              key={index} 
              w='300px' 
              h='200px' 
              bg='rgba(255, 255, 255, 0.3)' 
              borderRadius='15px' 
              p={5} 
              boxShadow='lg' 
              backdropFilter='blur(10px)' 
              textAlign="center"
              position="relative"
              transition="all 0.3s ease-in-out"
              _hover={{
                transform: "scale(1.05)",
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)"
              }}
              animation="fadeIn 0.8s ease-in-out"
            >
              <Text fontSize='lg' fontWeight='bold'>{text}</Text>
              <Image src={bars} alt='Icon' mt={4} boxSize='40px' mx='auto' />
            </Box>
          ))}
        </Flex>
      </Box>
      <Footer />
    </div>
  );
};

export default IDetail;
