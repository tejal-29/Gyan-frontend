import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Box, Text, Grid, GridItem, Button, Icon, Flex } from '@chakra-ui/react';
import { FaEdit } from 'react-icons/fa';

const ViewInternshipDetails = () => {
    const { isAdmin } = useSelector((state) => state.user);
    const [internships, setInternships] = useState([]);

    const getInternships = async () => {
        try {
            const accessToken = window.sessionStorage.getItem('accessToken');
            const { data } = await axios.get(`http://127.0.0.1:8000/super/view-internships/`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            });
            setInternships(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getInternships();
    }, []);

    return (
        <Box bg="gray.100" minH="100vh">
            <NavBar isAdmin={isAdmin} />
            <Flex justify="center" py={10}>
                <Text fontSize="3xl" fontWeight="bold" color="blue.700">
                    Internship Listings
                </Text>
            </Flex>

            <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={6} px={10}>
                {internships.map((internship) => (
                    <GridItem key={internship.id}>
                        <Box
                            bg="white"
                            borderRadius="lg"
                            boxShadow="md"
                            p={6}
                            transition="all 0.3s ease-in-out"
                            _hover={{ transform: "scale(1.03)", boxShadow: "xl" }}
                        >
                            <Text fontSize="xl" fontWeight="bold" color="blue.600">
                                {internship.Internship_title}
                            </Text>
                            <Text fontSize="sm" color="gray.600" mb={3}>
                                Gyan/Aim4U
                            </Text>
                            <Text fontSize="md" fontWeight="semibold" color="gray.800">
                                Duration: <Text as="span" fontWeight="normal">{internship.duration_weeks} weeks</Text>
                            </Text>
                            <Text fontSize="md" fontWeight="semibold" color="gray.800">
                                Fees: <Text as="span" fontWeight="normal">₹{internship.fees}</Text>
                            </Text>
                            <Text fontSize="md" fontWeight="semibold" color="gray.800">
                                Type: <Text as="span" fontWeight="normal">{internship.internship_type}</Text>
                            </Text>
                            <Text fontSize="md" fontWeight="semibold" color="gray.800">
                                Key Skills: <Text as="span" fontWeight="normal">{internship.key_skills}</Text>
                            </Text>
                            <Text fontSize="md" fontWeight="semibold" color="gray.800">
                                LOR: <Text as="span" fontWeight="normal">{internship.lor ? "Yes" : "No"}</Text>
                            </Text>
                            <Text fontSize="md" fontWeight="semibold" color="gray.800">
                                Paper Writing: <Text as="span" fontWeight="normal">{internship.paper_writing ? "Yes" : "No"}</Text>
                            </Text>
                            <Text fontSize="md" fontWeight="semibold" color="gray.800">
                                Project Count: <Text as="span" fontWeight="normal">{internship.project_count}</Text>
                            </Text>

                            <Link to={`/updateDetails/${internship.id}`}>
                                <Button
                                    mt={4}
                                    size="sm"
                                    leftIcon={<Icon as={FaEdit} />}
                                    colorScheme="green"
                                    variant="outline"
                                >
                                    Edit Details
                                </Button>
                            </Link>
                        </Box>
                    </GridItem>
                ))}
            </Grid>

            <Footer />
        </Box>
    );
};

export default ViewInternshipDetails;
