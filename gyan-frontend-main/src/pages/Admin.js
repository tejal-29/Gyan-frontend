import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Box, Button, Divider, Flex, FormControl, FormLabel, Input, useToast, Heading, Text, Icon,
} from '@chakra-ui/react';
import { FaUpload, FaClipboardList, FaBriefcase } from 'react-icons/fa';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import axios from 'axios';

const Admin = () => {
  const [CSV, setCSV] = useState(null);
  const [isUploading, setIsUploading] = useState(false); // Track upload state
  const toast = useToast();
  const navigate = useNavigate();
  const { isAdmin } = useSelector((state) => state.user);

  // ✅ Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCSV(file);
      console.log("✅ File selected:", file.name);
    }
  };

  // ✅ Handle file upload
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("🚀 Upload button clicked!");

    if (!CSV) {
      toast({
        title: 'No File Selected',
        description: 'Please choose a file.',
        status: 'error',
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    const formData = new FormData();
    formData.append('file', CSV);

    const accessToken = window.sessionStorage.getItem('accessToken');
    if (!accessToken) {
      toast({
        title: 'Authentication Error',
        description: 'Access token missing',
        status: 'error',
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    setIsUploading(true); // Disable button while uploading

    try {
      console.log("📤 Uploading File:", CSV.name);

      const response = await axios.post(
        `http://127.0.0.1:8000/super/upload-csv/`,
        formData,
        {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log("✅ Upload Response:", response.data);
      toast({
        title: 'Upload Successful',
        description: 'CSV uploaded successfully!',
        status: 'success',
        duration: 4000,
        isClosable: true,
      });

      setCSV(null);
      document.getElementById("fileInput").value = ""; // Clear input field
    } catch (error) {
      console.error('❌ Upload error:', error.response?.data || error.message);
      toast({
        title: 'Upload Failed',
        description: 'Something went wrong. Try again.',
        status: 'error',
        duration: 4000,
        isClosable: true,
      });
    } finally {
      setIsUploading(false); // Re-enable button
    }
  };

  return (
    <Box bg="gray.100" minH="100vh">
      <NavBar isAdmin={isAdmin} />
      <Flex direction="column" align="center" py={10}>
        <Heading color="blue.700" mb={6}>Admin Dashboard</Heading>

        {/* Action Buttons */}
        <Flex gap={6} wrap="wrap" justify="center">
          <Box p={6} w="280px" bg="white" boxShadow="md" borderRadius="md" textAlign="center" _hover={{ boxShadow: "xl" }}>
            <Icon as={FaClipboardList} boxSize={12} color="green.500" mb={3} />
            <Text fontSize="lg" fontWeight="bold">View Applications</Text>
            <Button mt={3} colorScheme="green" onClick={() => navigate('/applications')}>Go</Button>
          </Box>

          <Box p={6} w="280px" bg="white" boxShadow="md" borderRadius="md" textAlign="center" _hover={{ boxShadow: "xl" }}>
            <Icon as={FaBriefcase} boxSize={12} color="blue.500" mb={3} />
            <Text fontSize="lg" fontWeight="bold">View Internship Details</Text>
            <Button mt={3} colorScheme="blue" onClick={() => navigate('/internshipDetails')}>Go</Button>
          </Box>
        </Flex>

        <Divider my={10} w="80%" borderColor="gray.400" />

        {/* CSV Upload Section */}
        <Box bg="white" p={6} boxShadow="lg" borderRadius="lg" w={{ base: "90%", md: "50%" }}>
          <Flex align="center" justify="center" direction="column">
            <Icon as={FaUpload} boxSize={14} color="blue.500" mb={3} />
            <Heading size="md" color="blue.600">Upload CSV File</Heading>
            <FormControl mt={5} textAlign="center">
              <FormLabel color="gray.600">Select a file to upload</FormLabel>
              <Input id="fileInput" type="file" accept=".csv" onChange={handleFileChange} p={1} />
              <Button
                colorScheme="whatsapp"
                mt={4}
                onClick={handleSubmit}
                isLoading={isUploading} // Disable button when uploading
                loadingText="Uploading..."
                isDisabled={!CSV} // Disable if no file selected
              >
                Upload
              </Button>
            </FormControl>
          </Flex>
        </Box>
      </Flex>
      <Footer />
    </Box>
  );
};

export default Admin;
