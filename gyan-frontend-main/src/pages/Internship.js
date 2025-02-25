import React, { useEffect, useState } from "react";
import {
  Heading,
  Box,
  Text,
  HStack,
  SimpleGrid,
  Button,
  VStack,
  Select,
  Input,
  InputGroup,
  InputLeftElement,
  useBreakpointValue,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

const Home = () => {
  const [internships, setInternships] = useState([]);
  const [filteredInternships, setFilteredInternships] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  
  const { userId } = useSelector((state) => state.user);
  const { isAdmin } = useSelector((state) => state.user);
  const { isAuthenticated } = useSelector((state) => state.user);
  
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });
  
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/intern/all-internship/`)
      .then((res) => {
        setInternships(res.data);
        setFilteredInternships(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userId]);
  
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    const filteredData = internships.filter(
      (internship) =>
        internship.Internship_title.toLowerCase().includes(value) ||
        internship.duration_weeks.toLowerCase().includes(value) ||
        internship.key_skills.toLowerCase().includes(value)
    );
    setFilteredInternships(filteredData);
  };

  return (
    <div
      style={{
        fontFamily:
          "SF Pro Display, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      }}
    >
      <NavBar isAdmin={isAdmin} />
      <Box mt={5} textAlign="center">
        <Heading size={isLargeScreen ? "2xl" : "lg"}>
          <Text>
            Find Your <Text as="span" color="#9acd32">Perfect Internship</Text>
          </Text>
        </Heading>
        <Text fontSize="lg" fontWeight="semibold" color="gray.1000" mt={2}>
          "Opportunities don’t happen, you create them. Find the right internship to kickstart your journey!"
        </Text>
      </Box>

      <Box textAlign="center" py={4} mt={3}>
        <InputGroup width={{ base: "90%", md: "50%" }} margin="auto">
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.500" />
          </InputLeftElement>
          <Input
            type="text"
            placeholder="Search by title, duration, tech stack..."
            value={searchTerm}
            onChange={handleSearch}
            bg="white"
            borderRadius="full"
            boxShadow="md"
          />
        </InputGroup>
      </Box>

      <VStack spacing={5} py={5}>
        <SimpleGrid columns={[1, 2, 3]} spacing={5} px={5}>
          {filteredInternships.map((internship) => (
            <Box
              key={internship.id}
              bg="white"
              borderRadius="10px"
              boxShadow="lg"
              p={5}
              transition="transform 0.2s, box-shadow 0.3s"
              _hover={{ transform: "scale(1.05)", boxShadow: "xl" }}
            >
              <Text fontSize="xl" fontWeight="bold" mb={2}>
                {internship.Internship_title}
              </Text>
              <Text fontSize="sm" color="gray.600" mb={2}>
                Techstack: {internship.key_skills}
              </Text>
              <Text fontSize="sm" color="gray.600" mb={2}>
                Duration: {internship.duration_weeks}
              </Text>
              <Text fontSize="sm" color="gray.600" mb={3}>
                Fees: {internship.fees}
              </Text>
              <Link to={`/details/${internship.id}`}>
                <Button
                  size="sm"
                  bg="#008000"
                  color="white"
                  _hover={{ bg: "#9acd32" }}
                >
                  View Details
                </Button>
              </Link>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>

      <Footer />
    </div>
  );
};

export default Home;
