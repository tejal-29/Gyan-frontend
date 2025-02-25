import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NavBar from "../components/NavBar"; 
import Footer from "../components/Footer";
import axios from "axios";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  Text,
  Badge,
  useToast,
} from "@chakra-ui/react";

const ViewApplication = () => {
  const [applications, setApplications] = useState([]);
  const { isAdmin } = useSelector((state) => state.user);
  const toast = useToast();

  // Fetch Applications
  const getApplications = async () => {
    try {
      const accessToken = window.sessionStorage.getItem("accessToken");
      if (!accessToken) {
        console.error("No access token found.");
        return;
      }

      const response = await axios.get(
        "http://127.0.0.1:8000/intern/view-applied-interns/", 
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );

      console.log("Fetched Applications:", response.data);
      setApplications(response.data);
    } catch (error) {
      console.error(
        "Error fetching applications:",
        error.response?.data || error.message
      );
      toast({
        title: "Error",
        description: "Could not fetch applications.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    getApplications();
  }, []);

  // Update Application Status
  const updateStatus = async (id, newStatus, email) => {
    if (!id) {
      console.error("Invalid Application ID");
      return;
    }

    try {
      const accessToken = window.sessionStorage.getItem("accessToken");
      if (!accessToken) {
        console.error("No access token found.");
        return;
      }

      // Update application status in the backend
      await axios.post(
        `http://127.0.0.1:8000/intern/update-application/${id}/`,
        { status: newStatus },
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );

      // Send email notification
      await axios.post(
        "http://127.0.0.1:8000/intern/send-email/",
        { email, status: newStatus },
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );

      // Update UI directly
      setApplications((prevApplications) =>
        prevApplications.map((app) =>
          app.id === id ? { ...app, status: newStatus } : app
        )
      );

      toast({
        title: `Application ${newStatus}!`,
        description: `The application has been ${newStatus.toLowerCase()}.`,
        status: newStatus === "Approved" ? "success" : "error",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Error updating status:", error.response?.data || error.message);
      toast({
        title: "Error",
        description: "Could not update application status.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box>
      <NavBar isAdmin={isAdmin} />
      <Box bg="#e8f3fd" w="full" minH="100vh" p="20px">
        <Text fontSize="35px" fontWeight="bold" ml="80px" mb="20px">
          Applications
        </Text>

        <TableContainer bg="white" borderRadius="10px" boxShadow="lg" mx="80px">
          <Table variant="striped" colorScheme="blue">
            <Thead bg="blue.500">
              <Tr>
                <Th color="white">Name</Th>
                <Th color="white">Email</Th>
                <Th color="white">Role Applied</Th>
                <Th color="white">Status</Th>
                <Th color="white">Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {applications.map((app) => (
                <Tr key={app.id}>
                  <Td>{app.name}</Td>
                  <Td>{app.email}</Td>
                  <Td>{app.role}</Td>
                  <Td>
                    <Badge
                      colorScheme={
                        app.status === "Approved"
                          ? "green"
                          : app.status === "Rejected"
                          ? "red"
                          : "yellow"
                      }
                    >
                      {app.status}
                    </Badge>
                  </Td>
                  <Td>
                    <Button
                      colorScheme="green"
                      size="sm"
                      onClick={() => updateStatus(app.id, "Approved", app.email)}
                      isDisabled={app.status === "Approved"}
                      mr="2"
                    >
                      Approve
                    </Button>
                    <Button
                      colorScheme="red"
                      size="sm"
                      onClick={() => updateStatus(app.id, "Rejected", app.email)}
                      isDisabled={app.status === "Rejected"}
                    >
                      Reject
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <Footer />
    </Box>
  );
};

export default ViewApplication;
