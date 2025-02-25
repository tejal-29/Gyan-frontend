import React from 'react';
import { Link } from 'react-router-dom';
import { Box, VStack, Button } from '@chakra-ui/react';
import '../components/Sidebar.css';

const Sidebar = () => {
  return (
    <Box className="sidebar">
      <VStack spacing={4} align="stretch">
        <Link to="/dashboard">
          <Button className="sidebar-btn">Dashboard</Button>
        </Link>
        <Link to="/internships">
          <Button className="sidebar-btn">Manage Internships</Button>
        </Link>
        <Link to="/applications">
          <Button className="sidebar-btn">View Applications</Button>
        </Link>
      </VStack>
    </Box>
  );
};

export default Sidebar;