import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Box, Heading, Input, Button, Switch, FormControl, FormLabel, useToast } from '@chakra-ui/react';
import { FaSave } from 'react-icons/fa';
import axios from 'axios';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const UpdateInternshipDetails = () => {
    const { isAdmin } = useSelector((state) => state.user);
    const { id } = useParams();
    const internshipId = parseInt(id, 10);  // Convert id to integer
    const toast = useToast();

    const [title, setTitle] = useState('');
    const [completionCertificate, setCompletionCertificate] = useState(false);
    const [duration, setDuration] = useState('');
    const [fees, setFees] = useState('');
    const [type, setType] = useState('');
    const [keySkills, setKeySkills] = useState('');
    const [LOR, setLOR] = useState(false);
    const [paperWriting, setPaperWriting] = useState(false);
    const [projectCount, setProjectCount] = useState('');

    // Fetch internship details
    const getInternshipDetails = async () => {
        try {
            const accessToken = window.sessionStorage.getItem('accessToken');
            const { data } = await axios.get(`http://127.0.0.1:8000/super/view-internships/${internshipId}/`, {
                headers: { Authorization: `Bearer ${accessToken}` }
            });
            setTitle(data.Internship_title);
            setCompletionCertificate(data.completion_certificate);
            setDuration(data.duration_weeks);
            setFees(data.fees);
            setType(data.internship_type);
            setKeySkills(data.key_skills);
            setLOR(data.lor);
            setPaperWriting(data.paper_writing);
            setProjectCount(data.project_count);
        } catch (error) {
            console.error('Error fetching internship details:', error);
        }
    };

    // Update internship details
    const updateDetails = async () => {
        try {
            const accessToken = window.sessionStorage.getItem('accessToken');
            await axios.put(`http://127.0.0.1:8000/super/view-internships/${internshipId}/update/`, {
                Internship_title: title,
                internship_type: type,
                key_skills: keySkills,
                duration_weeks: duration,
                project_count: projectCount,
                paper_writing: paperWriting,
                lor: LOR,
                completion_certificate: completionCertificate,
                fees
            }, {
                headers: { Authorization: `Bearer ${accessToken}` }
            });

            toast({
                title: 'Update Successful',
                description: 'Internship details updated successfully.',
                status: 'success',
                duration: 5000,
                isClosable: true
            });
        } catch (error) {
            toast({
                title: 'Update Failed',
                description: 'Something went wrong while updating.',
                status: 'error',
                duration: 5000,
                isClosable: true
            });
            console.error('Error updating internship:', error);
        }
    };

    useEffect(() => { getInternshipDetails(); }, []);

    return (
        <>
            <NavBar isAdmin={isAdmin} />
            <Box bgGradient="linear(to-r, teal.200, blue.500)" minH="100vh" py={10} display="flex" flexDirection="column" alignItems="center">
                <Box bg="white" p={8} borderRadius={10} boxShadow="xl" w={['90%', '60%', '40%']}>
                    <Heading size="lg" mb={5} textAlign="center">Update Internship Details</Heading>
                    <FormControl mb={4}>
                        <FormLabel>Title</FormLabel>
                        <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter title" />
                    </FormControl>
                    <FormControl mb={4}>
                        <FormLabel>Type</FormLabel>
                        <Input value={type} onChange={(e) => setType(e.target.value)} placeholder="Enter type" />
                    </FormControl>
                    <FormControl mb={4}>
                        <FormLabel>Key Skills</FormLabel>
                        <Input value={keySkills} onChange={(e) => setKeySkills(e.target.value)} placeholder="Enter key skills" />
                    </FormControl>
                    <FormControl mb={4}>
                        <FormLabel>Duration (weeks)</FormLabel>
                        <Input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} placeholder="Enter duration" />
                    </FormControl>
                    <FormControl mb={4}>
                        <FormLabel>Fees</FormLabel>
                        <Input type="number" value={fees} onChange={(e) => setFees(e.target.value)} placeholder="Enter fees" />
                    </FormControl>
                    <FormControl display="flex" alignItems="center" mb={4}>
                        <FormLabel mb={0}>Completion Certificate</FormLabel>
                        <Switch isChecked={completionCertificate} onChange={() => setCompletionCertificate(!completionCertificate)} />
                    </FormControl>
                    <FormControl display="flex" alignItems="center" mb={4}>
                        <FormLabel mb={0}>LOR</FormLabel>
                        <Switch isChecked={LOR} onChange={() => setLOR(!LOR)} />
                    </FormControl>
                    <FormControl display="flex" alignItems="center" mb={4}>
                        <FormLabel mb={0}>Paper Writing</FormLabel>
                        <Switch isChecked={paperWriting} onChange={() => setPaperWriting(!paperWriting)} />
                    </FormControl>
                    <FormControl mb={4}>
                        <FormLabel>Project Count</FormLabel>
                        <Input type="number" value={projectCount} onChange={(e) => setProjectCount(e.target.value)} placeholder="Enter project count" />
                    </FormControl>
                    <Button leftIcon={<FaSave />} colorScheme="blue" w="full" mt={5} onClick={updateDetails}>Update</Button>
                </Box>
            </Box>
            <Footer />
        </>
    );
};

export default UpdateInternshipDetails;
