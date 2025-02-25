// import React, { useEffect, useState } from 'react'
// import Navbar from '../components/NavBar'
// import { useSelector } from 'react-redux';
// import Footer from '../components/Footer';
// import { Link } from 'react-router-dom';
// import { Box, Button, Text, VStack, useToast } from '@chakra-ui/react';
// import axios from 'axios';

// const Applied = () => {
//   const { isAdmin } = useSelector((state) => { return state.user });
//   const { userId } = useSelector((state) => { return state.user });
//   const [appliedInternships, setAppliedInternships] = useState([]);
//   const [notAppliedToAny, setNotAppliedToAny] = useState(false);
//   const user = useSelector((state) => { return state.user });
//   const toast = useToast();
//   const viewApplied = async (e) => {
//     try {
//       const accessToken = window.sessionStorage.getItem('accessToken');
//       const { data } = await axios.post(`https://gyanbackend.aim4u.co.in/intern/apply-internships/`,
//         { user: userId },
//         {
//           headers: {
//             'Authorization': `Bearer ${accessToken}`
//           }
//         });
//       setAppliedInternships(data);
//       if (data.length === 0) {
//         setNotAppliedToAny(true);
//       }
//     } catch (error) {
//       console.log("error:", error);
//       toast({
//         title: 'Failed to Fetch Applied Internships',
//         description: 'Something went wrong while fetching applied internships',
//         status: 'error',
//         duration: 5000,
//         isClosable: true,
//       });
//     }
//   }
//   useEffect(() => {
//     viewApplied();
//   },  [userId]);

//   return (
//     <div>
//       <Navbar isAdmin={isAdmin} />
//       <Box h='fit-content' pb='4' bg="#e8f3fd" w={"full"} >
//         {!notAppliedToAny && <Text fontSize='35px' fontWeight='bold' ml="80px" paddingTop="15px">Applied Internships</Text>}
//         {notAppliedToAny && <Text fontSize={25} fontWeight={'semibold'} ml={'80px'} paddingTop="15px">You have not applied to any internships</Text>}
//         <VStack bg="#e8f3fd" w={"full"}>

//           {
//             appliedInternships.map((item, index) => (
//               <Box
//                 key={item.id}// assuming each internship has a unique id
//                 w="1060px"
//                 h="290px"
//                 ml='100px'
//                 mt='30px'
//                 bg="white"
//                 borderRadius="10px"
//                 boxShadow="2px -2px 10px #000080"
//               >
//                 <Text fontSize="30px" fontWeight="semibold" ml="25px" paddingTop="25px">
//                   {index + 1}.{item.Internship_title}
//                 </Text>
//                 <Text fontSize="23px" fontWeight="semibold" ml="25px" paddingBottom="19px">
//                   Gyan/Aim4U
//                 </Text>
//                 <hr />
//                 <hr />
//                 <hr />
//                 <Text fontSize="14px" fontWeight="bold" ml="25px" paddingTop="25px" lineHeight="30px">
//                   {/* Openings: {internship.openings} <br /> */}
//                   Techstack: {index + 1}.{item.key_skills} <br />
//                   Duration: {index + 1}.{item.duration_weeks} <br />
//                   Fees: {index + 1}.{item.fees}<br />
//                 </Text>
//                 <Link to={`/details/${item.id}`}>
//                   <Text fontSize="14px" cursor={'pointer'} fontWeight="semibold" ml="25px" color="#9acd32" paddingTop="10px">
//                     View details .
//                   </Text>
//                 </Link>
//                 <Button
//                   bg="#000080"
//                   w="200px"
//                   h="35px"
//                   ml="40px"
//                   marginTop="8px"
//                   borderRadius="11px"
//                   _hover={{ bg: '#9acd32' }}
//                   onClick={async () => {
//                     try {
//                       const accessToken = window.sessionStorage.getItem('accessToken');
//                       const { data } = await axios.post(`https://gyanbackend.aim4u.co.in/intern/delete-applied-internship/`,
//                         { user: userId, internship_id: item.id },
//                         {
//                           headers: {
//                             Authorization: `Bearer ${accessToken}`
//                           }
//                         });
//                       toast({
//                         title: 'Deletion Successful',
//                         description: 'Your application has been removed',
//                         status: 'success',
//                         duration: 5000,
//                         isClosable: true,
//                       });
//                       setAppliedInternships(appliedInternships.filter(x => x.id !== item.id));
//                       console.log(data)
//                     } catch (error) {
//                       toast({
//                         title: 'Failed to Delete',
//                         description: 'Something went wrong',
//                         status: 'error',
//                         duration: 5000,
//                         isClosable: true,
//                       });
//                       console.log(error);
//                     }
//                   }}
//                 >
//                   <Text fontSize="20px" fontWeight="semibold" color="white">
//                     Delete
//                   </Text>
//                 </Button>
//               </Box>
//             ))}
//         </VStack>
//       </Box>
//       <Footer />
//     </div>
//   )
// }

// export default Applied


import React, { useEffect, useState } from 'react';
import Navbar from '../components/NavBar';
import { useSelector } from 'react-redux';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Box, Button, Text, VStack, SimpleGrid , useToast ,useBreakpointValue } from '@chakra-ui/react';
import axios from 'axios';

const Applied = () => {
  const { isAdmin } = useSelector((state) => state.user);
  const { userId } = useSelector((state) => state.user);
  const [appliedInternships, setAppliedInternships] = useState([]);
  const [notAppliedToAny, setNotAppliedToAny] = useState(false);
  const toast = useToast();
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });

  const viewApplied = async () => {
    try {
      const accessToken = window.sessionStorage.getItem('accessToken');
      const { data } = await axios.post(
        `http://127.0.0.1:8000/intern/apply-internships/`,
        { user: userId },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      setAppliedInternships(data);
      if (data.length === 0) {
        setNotAppliedToAny(true);
      }
    } catch (error) {
      console.log("error:", error);
      toast({
        title: 'Failed to Fetch Applied Internships',
        description: 'Something went wrong while fetching applied internships',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    viewApplied();
  }, []);

  const handleDelete = async (internshipId) => {
    try {
      
      const accessToken = window.sessionStorage.getItem('accessToken');
      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type':'application/json',
        },
        data: {
          user: userId,
          internship_id: internshipId,
        },
      };



      // const { data } = await axios.delete(
      await axios.delete(
        `http://127.0.0.1:8000/intern/delete-applied-internship`,
        config
      );
      toast({
        title: 'Deletion Successful',
        description: 'Your application has been removed',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      setAppliedInternships(appliedInternships.filter((x) => x.id !== internshipId));
      //console.log(data);
    } catch (error) {
      toast({
        title: 'Failed to Delete',
        description: 'Something went wrong',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar isAdmin={isAdmin} />
      <Box h='fit-content' pb='4' bg='#e8f3fd' w={'full'}>
        {!notAppliedToAny && (
          <Text fontSize='35px' fontWeight='bold' ml='80px' paddingTop='15px'>
            Applied Internships
          </Text>
        )}
        {notAppliedToAny && (
          <Text fontSize={25} fontWeight={'semibold'} ml={'80px'} paddingTop='15px'>
            You have not applied to any internships
          </Text>
        )}
<VStack bg="#e8f3fd" w="full">
  <SimpleGrid columns={[1, 2, 3]} >
    {appliedInternships.map((item,index) => (
      <Box
        key={item.id}
        w={isLargeScreen ? "80%" : "70%"}
        ml={isLargeScreen ? "70px" : "40px"}
        mt={isLargeScreen ? "40px" : "40px"}
        marginBottom="10px"
        bg="white"
        borderRadius="10px"
        boxShadow="2px -2px 10px #C0C0C0"
        transition="box-shadow 0.3s"
        _hover={{
          boxShadow: "0px 0px 20px 5px #C0C0C0",
        }}      >
       <Text fontSize='30px' fontWeight='semibold' ml='25px' paddingTop='25px'>
                {index + 1}.{item.Internship_title}
              </Text>
        
        <hr />
        <hr />
        <hr />
        <Text
          fontSize={isLargeScreen ? "14px" : "12px"}
          fontWeight="bold"
          ml="25px"
          paddingTop="25px"
          lineHeight={isLargeScreen ? "30px" : "18px"}
        >
          Techstack: {item.item} <br />
          Duration: {item.duration_weeks} <br />
          Fees: {item.fees}
          <br />
        </Text>
        <Link to={`/details/${item.id}`}>
              <Button
              // margin={"auto"}
              size={{ base: "sm", md: "sm", lg: "sm" }}
              backgroundColor={"#008000"}
              color={"white"}
              _hover={{ bg: "#9acd32" }}
              margin={"2"}
              paddingTop="10px"
              ml="25px"
              paddingBottom="10px"
              >
                    View Details
              </Button>
              </Link>



        
              <Button
              // margin={"auto"}
              size={{ base: "sm", md: "sm", lg: "sm" }}
              backgroundColor={"#000080"}
              color={"white"}
              _hover={{ bg: "#FF0000" }}
              margin={"2"}
              paddingTop="10px"
              ml="25px"
              paddingBottom="10px"
                 onClick={() => handleDelete(item.id)}
              >
                <Text fontSize="15px" fontWeight="semibold" color="white">
                Delete
                </Text>

                  </Button>

                 </Box>
                 
    ))}
  </SimpleGrid>
</VStack>
      </Box>
      <Footer />
    </div>
  );
};

export default Applied;


