// // import { Box, Flex, Image, Text } from "@chakra-ui/react";
// // import { useEffect, useState } from "react";
// // import React from "react";
// // import logo from "../images/AiM4u Registered Logo (1).png";
// // import { Link } from "react-router-dom";
// // import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";

// // const Footer = () => {
// //   const [viewersCount, setViewersCount] = useState(0);

// //   // Increment viewers count when component mounts
// //   useEffect(() => {
// //     const currentCount = localStorage.getItem("viewersCount");
// //     if (currentCount) {
// //       setViewersCount(parseInt(currentCount, 10));
// //     } else {
// //       setViewersCount(0);
// //     }

// //     // Increment the count
// //     setViewersCount((prevCount) => {
// //       const newCount = prevCount + 1;
// //       localStorage.setItem("viewersCount", newCount);
// //       return newCount;
// //     });

// //     // Clean up when component unmounts
// //     return () => {
// //       // Any cleanup code if needed
// //     };
// //   }, []);

// //   return (
// //     <>
// //       <div>
// //         <Flex
// //           direction="row"
// //           bgColor="#252641"
// //           color="white"
// //           h="md"
// //           margin={"auto"}
// //           mt={["30%", "30%", "10"]}
// //         >
// //           <Flex direction="column" mt="10" mx="7%">
// //             <Text fontSize={["sm", "md", "lg", "xl"]}>Explore</Text>
// //             <Link to="/">
// //               <Text
// //                 mt="2"
// //                 fontSize={["sm", "md", "lg", "xl"]}
// //                 _hover={{ textDecoration: "underline" }}
// //               >
// //                 Home
// //               </Text>
// //             </Link>
// //             <Link to="/about">
// //               <Text
// //                 mt="2"
// //                 fontSize={["sm", "md", "lg", "xl"]}
// //                 _hover={{ textDecoration: "underline" }}
// //               >
// //                 About
// //               </Text>
// //             </Link>
// //             {/* <Link to="/blogs"><Text mt='2' fontSize='xl' _hover={{ textDecoration: 'underline' }}>Blogs</Text></Link> */}
// //           </Flex>
// //           <Flex direction="column" mt="10" mx="7%">
// //             <Text fontSize={["sm", "md", "lg", "xl"]}>Contact</Text>
// //             <Text fontSize={["sm", "md", "lg", "xl"]} mt="2">
// //               Sardar Patel Technology{" "}
// //             </Text>
// //             <Text fontSize={["sm", "md", "lg", "xl"]}>
// //               Business Incubator (SP-TBI),{" "}
// //             </Text>
// //             <Text fontSize={["sm", "md", "lg", "xl"]}>
// //               Munshi Nagar, Andheri (W){" "}
// //             </Text>
// //             <Text fontSize={["sm", "md", "lg", "xl"]}>
// //               Mumbai, Maharashtra 400053
// //             </Text>

// //             <Text mt="4" fontSize={["sm", "md", "lg", "xl"]}>
// //               <PhoneIcon mr="2" />
// //               +91 8657424574
// //             </Text>
// //             <Link to="support@aim4u.co.in">
// //               <Text
// //                 mt="2"
// //                 fontSize={["sm", "md", "lg", "xl"]}
// //                 _hover={{ textDecoration: "underline" }}
// //               >
// //                 <EmailIcon mr="2" _hover={{ textDecoration: "underline" }} />
// //                 support@aim4u.co.in
// //               </Text>
// //             </Link>
// //           </Flex>
// //           <Flex direction="column" mt="10" mx="7%">
// //             <Text fontSize={["sm", "md", "lg", "xl"]}>Follow</Text>
// //             <Text
// //               mt="2"
// //               fontSize={["sm", "md", "lg", "xl"]}
// //               cursor={"pointer"}
// //               onClick={() =>
// //                 window.open(
// //                   "https://www.instagram.com/aim4u.co.in/",
// //                   "_blank",
// //                   "noopener noreferrer"
// //                 )
// //               }
// //             >
// //               Instagram
// //             </Text>
// //             <Text
// //               mt="4"
// //               fontSize={["sm", "md", "lg", "xl"]}
// //               cursor={"pointer"}
// //               onClick={() =>
// //                 window.open(
// //                   "https://www.linkedin.com/company/aim4u-software-solution/",
// //                   "_blank",
// //                   "noopener noreferrer"
// //                 )
// //               }
// //             >
// //               LinkedIn
// //             </Text>
// //             <Text
// //               mt="4"
// //               fontSize={["sm", "md", "lg", "xl"]}
// //               cursor={"pointer"}
// //               onClick={() =>
// //                 window.open(
// //                   "https://www.facebook.com/aim4usoftwaresolutions/",
// //                   "_blank",
// //                   "noopener noreferrer"
// //                 )
// //               }
// //             >
// //               Facebook
// //             </Text>
// //           </Flex>
// //           <Flex direction="column" mt="10" mx="7%">
// //             <Text fontSize={["sm", "md", "lg", "xl"]}>Legal</Text>
// //             <Text
// //               mt="2"
// //               fontSize={["sm", "md", "lg", "xl"]}
// //               cursor={"pointer"}
// //               onClick={() =>
// //                 window.open(
// //                   "https://www.aim4u.co.in/#/terms-and-conditions",
// //                   "_blank",
// //                   "noopener noreferrer"
// //                 )
// //               }
// //             >
// //               Terms & Conditions
// //             </Text>
// //             <Text
// //               mt="4"
// //               fontSize={["sm", "md", "lg", "xl"]}
// //               cursor={"pointer"}
// //               onClick={() =>
// //                 window.open(
// //                   "https://www.aim4u.co.in/#/privacy-policy",
// //                   "_blank",
// //                   "noopener noreferrer"
// //                 )
// //               }
// //             >
// //               Privacy Policy
// //             </Text>
// //           </Flex>
// //         </Flex>
// //       </div>
// //       <div>
// //         {/* Statement of "All Copyrights Reserved 2024" */}
// //         {/* <Box bgColor="#252641" color="white" p="4" textAlign="center">
// //         <Text fontSize="xl">All Copyrights Reserved 2024</Text>
// //       </Box> */}

// //         <Flex
// //           bgColor="#252641"
// //           color="white"
// //           direction="row"
// //           alignItems="center"
// //           // pl="0"
// //           width="100%"
// //         >
// //           {/* Box with two Text components */}
// //           <Box
// //             bgColor="#252641"
// //             color="white"
// //             p="4"
// //             textAlign="center"
// //             width={"90%"}
// //           >
// //             <Text fontSize={["sm", "md", "lg", "xl"]}>
// //               All Copyrights Reserved 2024
// //             </Text>
// //             <Text fontSize={["sm", "md", "lg", "xl"]}>
// //               Number of Viewers: {viewersCount}
// //             </Text>
// //           </Box>

// //           {/* Box with the logo */}
// //           <Box bgColor="#252641" p="4" textAlign="right" width={"20%"}>
// //             {/* <Link to="https://www.aim4u.co.in/#/gyan-at-aim4u">
// //               <Image src={logo} alt="Logo" h="auto" />
// //             </Link> */}
// //           </Box>
// //         </Flex>
// //       </div>
// //     </>
// //   );
// // };

// // export default Footer;

// import { Box, Flex, Image, Text } from "@chakra-ui/react";
// import { useEffect, useState } from "react";
// import React from "react";
// import logo from "../images/AiM4u Registered Logo (1).png";
// import { Link } from "react-router-dom";
// import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";

// const Footer = () => {
//   const [viewersCount, setViewersCount] = useState(0);

//   // Increment viewers count when component mounts
//   useEffect(() => {
//     const currentCount = localStorage.getItem("viewersCount");
//     if (currentCount) {
//       setViewersCount(parseInt(currentCount, 10));
//     } else {
//       setViewersCount(0);
//     }

//     // Increment the count
//     setViewersCount((prevCount) => {
//       const newCount = prevCount + 1;
//       localStorage.setItem("viewersCount", newCount);
//       return newCount;
//     });

//     // Clean up when component unmounts
//     return () => {
//       // Any cleanup code if needed
//     };
//   }, []);

//   return (
//     <>
//       <div>
//         <Flex
//           direction="row"
//           bgColor="#252641"
//           color="white"
//           h="md"
//           margin={"auto"}
//           mt={["30%", "30%", "10"]}
//         >
//           <Flex direction="column" mt="10" mx="7%">
//             <Text fontSize={["sm", "md", "lg", "xl"]}>Explore</Text>
//             <Link to="/">
//               <Text
//                 mt="2"
//                 fontSize={["sm", "md", "lg", "xl"]}
//                 _hover={{ textDecoration: "underline" }}
//               >
//                 Home
//               </Text>
//             </Link>
//             <Link to="/about">
//               <Text
//                 mt="2"
//                 fontSize={["sm", "md", "lg", "xl"]}
//                 _hover={{ textDecoration: "underline" }}
//               >
//                 About
//               </Text>
//             </Link>
//             {/* <Link to="/blogs"><Text mt='2' fontSize='xl' _hover={{ textDecoration: 'underline' }}>Blogs</Text></Link> */}
//           </Flex>
//           <Flex direction="column" mt="10" mx="7%">
//             <Text fontSize={["sm", "md", "lg", "xl"]}>Contact</Text>
//             <Text fontSize={["sm", "md", "lg", "xl"]} mt="2">
//               Sardar Patel Technology{" "}
//             </Text>
//             <Text fontSize={["sm", "md", "lg", "xl"]}>
//               Business Incubator (SP-TBI),{" "}
//             </Text>
//             <Text fontSize={["sm", "md", "lg", "xl"]}>
//               Munshi Nagar, Andheri (W){" "}
//             </Text>
//             <Text fontSize={["sm", "md", "lg", "xl"]}>
//               Mumbai, Maharashtra 400053
//             </Text>

//             <Text mt="4" fontSize={["sm", "md", "lg", "xl"]}>
//               <PhoneIcon mr="2" />
//               +91 8657424574
//             </Text>
//             <Link to="support@aim4u.co.in">
//               <Text
//                 mt="2"
//                 fontSize={["sm", "md", "lg", "xl"]}
//                 _hover={{ textDecoration: "underline" }}
//               >
//                 <EmailIcon mr="2" _hover={{ textDecoration: "underline" }} />
//                 support@aim4u.co.in
//               </Text>
//             </Link>
//           </Flex>
//           <Flex direction="column" mt="10" mx="7%">
//             <Text fontSize={["sm", "md", "lg", "xl"]}>Follow</Text>
//             <Text
//               mt="2"
//               fontSize={["sm", "md", "lg", "xl"]}
//               cursor={"pointer"}
//               onClick={() =>
//                 window.open(
//                   "https://www.instagram.com/aim4u.co.in/",
//                   "_blank",
//                   "noopener noreferrer"
//                 )
//               }
//             >
//               Instagram
//             </Text>
//             <Text
//               mt="4"
//               fontSize={["sm", "md", "lg", "xl"]}
//               cursor={"pointer"}
//               onClick={() =>
//                 window.open(
//                   "https://www.linkedin.com/company/aim4u-software-solution/",
//                   "_blank",
//                   "noopener noreferrer"
//                 )
//               }
//             >
//               LinkedIn
//             </Text>
//             <Text
//               mt="4"
//               fontSize={["sm", "md", "lg", "xl"]}
//               cursor={"pointer"}
//               onClick={() =>
//                 window.open(
//                   "https://www.facebook.com/aim4usoftwaresolutions/",
//                   "_blank",
//                   "noopener noreferrer"
//                 )
//               }
//             >
//               Facebook
//             </Text>
//           </Flex>
//           <Flex direction="column" mt="10" mx="7%">
//             <Text fontSize={["sm", "md", "lg", "xl"]}>Legal</Text>
//             <Text
//               mt="2"
//               fontSize={["sm", "md", "lg", "xl"]}
//               cursor={"pointer"}
//               onClick={() =>
//                 window.open(
//                   "https://www.aim4u.co.in/#/terms-and-conditions",
//                   "_blank",
//                   "noopener noreferrer"
//                 )
//               }
//             >
//               Terms & Conditions
//             </Text>
//             <Text
//               mt="4"
//               fontSize={["sm", "md", "lg", "xl"]}
//               cursor={"pointer"}
//               onClick={() =>
//                 window.open(
//                   "https://www.aim4u.co.in/#/privacy-policy",
//                   "_blank",
//                   "noopener noreferrer"
//                 )
//               }
//             >
//               Privacy Policy
//             </Text>
//           </Flex>
//         </Flex>
//       </div>
//       <div>
//         {/* Statement of "All Copyrights Reserved 2024" */}
//         {/* <Box bgColor="#252641" color="white" p="4" textAlign="center">
//         <Text fontSize="xl">All Copyrights Reserved 2024</Text>
//       </Box> */}

//         <Flex
//           bgColor="#252641"
//           color="white"
//           direction="row"
//           alignItems="center"
//           // pl="0"
//           width="100%"
//         >
//           {/* Box with two Text components */}
//           <Box
//             bgColor="#252641"
//             color="white"
//             p="4"
//             textAlign="center"
//             width={"100%"}
//             height={"50%"}
//           >
//             <Text fontSize={["sm", "md", "lg", "xl"]}>
//               All Copyrights Reserved 2024
//             </Text>
//             <Text fontSize={["sm", "md", "lg", "xl"]}>
//               Number of Viewers: {viewersCount}
//             </Text>
//           </Box>
//         </Flex>
//       </div>
//     </>
//   );
// };

// export default Footer;
/*

import "../index.css"
import { Box, Flex, Text, Link, Center,Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import insta from "../images/instagram-icon.svg";
import face from "../images/facebook.png";
import linkedin from "../images/linkedin.png";


const Footer = () => {
  return (
    <Flex
      direction={["column", "column", "row"]}
      bgColor="#000000"
      color="white"
      py={[4, 4, 2]}
      px={[4, 4, 8]}
      justifyContent="space-between"
      alignItems="center"
      margin="auto"
      
    >
      <Flex direction="column" mt={[4, 4, 0] }>
        <Text fontSize={["sm", "md", "lg", "2xl"]}
        
       
        >Explore
        </Text>
        <Link to="/" style={{textDecoration: "none"}}>
          <Text
            mt="2"
            fontSize={["sm", "md", "lg", "xl"]}
            _hover={{color: "#3F67F6" }}
            
          >
            Home
          </Text>
        </Link>
        <Link to="/about" style={{textDecoration: "none"}}>
          <Text
            mt="2"
            fontSize={["sm", "md", "lg", "xl"]}
            
            _hover={ { color: "#3F67F6"} }
          >
            About
          </Text>
        </Link>
      </Flex>
      <Flex direction="column" mt={[4, 4, 0]}>
        <Text fontSize={["sm", "md", "lg", "2xl"]}>
          Contact</Text>
        <Text fontSize={["sm", "md", "lg", "xl"]} mt="2">
          Sardar Patel Technology{" "}
        </Text>
        <Text fontSize={["sm", "md", "lg", "xl"]}>
          Business Incubator (SP-TBI),{" "}
        </Text>
        <Text fontSize={["sm", "md", "lg", "xl"]}>
          Munshi Nagar, Andheri (W){" "}
        </Text>
        <Text fontSize={["sm", "md", "lg", "xl"]}>
          Mumbai, Maharashtra 400053
        </Text>

        <Text mt="4" fontSize={["sm", "md", "lg", "xl"]}>
          <PhoneIcon mr="2" />
          +91 8657424574
        </Text>
        <a href="mailto:support@aim4u.co.in">
          <Text
            mt="2"
            fontSize={["sm", "md", "lg", "xl"]}
            
            _hover={{  color: "#3F67F6" }}
          >
            <EmailIcon mr="2" _hover={{ textDecoration: "underline" }} />
            support@aim4u.co.in
          </Text>
        </a>
      </Flex>
      <Flex direction="column" mt={[4, 4, 0]}>
        <Text fontSize={["sm", "md", "lg", "2xl"]}>
          Follow</Text>
        <Text
          mt="2"
          fontSize={["sm", "md", "lg", "xl"]}
          cursor={"pointer"}
          
          onClick={() =>
            window.open(
              "https://www.instagram.com/aim4u.co.in/",
              "_blank",
              "noopener noreferrer"
            )
          }
        >
          <Center>
                    <Image boxSize="2vw" src={insta} width="2vw"/> <br />
                  </Center>
        </Text>
        <Text
          mt="4"
          fontSize={["sm", "md", "lg", "xl"]}
          cursor={"pointer"}
          onClick={() =>
            window.open(
              "https://www.linkedin.com/company/aim4u-software-solution/",
              "_blank",
              "noopener noreferrer"
            )
          }
        >
          <Center>
                    <Image boxSize="2vw" src={face} width="2vw"/> <br />
                  </Center>
        </Text>
        <Text
          mt="4"
          fontSize={["sm", "md", "lg", "xl"]}
          cursor={"pointer"}
          onClick={() =>
            window.open(
              "https://www.facebook.com/aim4usoftwaresolutions/",
              "_blank",
              "noopener noreferrer"
            )
          }
        >
          <Center>
                    <Image boxSize="2vw" src={linkedin} width="2vw"/> <br />
                  </Center>
        </Text>
      </Flex>
      <Flex direction="column" mt={[4, 4, 0]}>
        <Text fontSize={["sm", "md", "lg", "2xl"]}
        >
          Legal
        </Text>
        <Text
          mt="2"
          fontSize={["sm", "md", "lg", "xl"]}
          cursor={"pointer"}
          
          _hover={{  color: "#3F67F6" }}
          onClick={() =>
            window.open(
              "https://www.aim4u.co.in/#/terms-and-conditions",
              "_blank",
              "noopener noreferrer"
            )
          }
        >
          Terms & Conditions
        </Text>
        <Text
          mt="4"
          fontSize={["sm", "md", "lg", "xl"]}
          cursor={"pointer"}
          
          _hover={{  color: "#3F67F6" }}
          onClick={() =>
            window.open(
              "https://www.aim4u.co.in/#/privacy-policy",
              "_blank",
              "noopener noreferrer"
            )
          }
        >
          Privacy Policy
        </Text>
      </Flex>
      <Box textAlign="center" mt={[4, 4, 0]}>
        <Text fontSize={["sm", "md", "lg", "xl"]}>
          All Copyrights Reserved 2024
        </Text>
        

      </Box>
    </Flex>
   
  );
};

export default Footer;

*/

/*
import { Box, Flex, Text,Center,Image ,Link as ChakraLink } from "@chakra-ui/react";

import insta from "../images/instagram-icon.svg";
import face from "../images/facebook.png";
import linkedin from "../images/linkedin.png";

const Footer = () => {
  return (
    <Box bg="black" color="white" py={[4, 8]} px={[4, 8]} >
      <Flex direction={["column", "column", "row"]} justifyContent={"space-around"}
         fontFamily="SF Pro Display, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif">
        <Flex direction="column" mb={[4, 0]}>
          <Text fontWeight="bold" fontSize={[ "lg", "2xl"]} >Explore</Text>
          <ChakraLink href="/" style={{textDecoration: "none"}}>

          <Text fontSize={["lg", "lg", "lg"]} _hover={{color: "#3F67F6" }} 
          >Home</Text>
          </ChakraLink>
          <ChakraLink href="/about" style={{textDecoration: "none"}}>
          <Text fontSize={["lg", "lg", "lg"]} _hover={{color: "#3F67F6" }}>About</Text>
          </ChakraLink>
        </Flex>

        <Flex direction="column" mb={[4, 0]}>
          <Text fontWeight="bold" fontSize={[ "lg", "2xl"]}>Contact</Text>
          <Text fontSize={["lg", "lg", "lg"]}>Sardar Patel Technology</Text>
          <Text fontSize={["lg", "lg", "lg"]}>Munshi Nagar, Andheri (W)</Text>
          <Text fontSize={["lg", "lg", "lg"]}>Mumbai, Maharashtra 400053</Text>
          <Text fontSize={["lg", "lg", "lg"]}>+91 8657424574</Text>
          <Text fontSize={["lg", "lg", "lg"]} _hover={{color: "#3F67F6" }}>support@aim4u.co.in</Text>
        </Flex>

        <Flex direction="column" mb={[4, 0]}>
          <Text fontWeight="bold" fontSize={["lg", "2xl"]}>Follow</Text>
         
          <Text
          mt="4"
          fontSize={["sm", "md", "lg", "xl"]}
          cursor={"pointer"}
          onClick={() =>
            window.open(
              "https://www.facebook.com/aim4usoftwaresolutions/",
              "_blank",
              "noopener noreferrer"
            )
          }
        >
          <Center>
          <Image boxSize={["20px", "30px", "30px", "35px"]} src={face} /> <br />
          </Center>
        </Text>
          <Text
          mt="4"
          fontSize={["sm", "md", "lg", "xl"]}
          cursor={"pointer"}
          onClick={() =>
            window.open(
              "https://www.linkedin.com/company/aim4u-software-solution/",
              "_blank",
              "noopener noreferrer"
            )
          }
        >
          <Center>
          <Image boxSize={["20px", "30px", "30px", "35px"]}src={linkedin} width="2vw"/> <br />
          </Center>
        </Text>
          <Text
          mt="4"
          fontSize={["sm", "md", "lg", "xl"]}
          cursor={"pointer"}
          onClick={() =>
            window.open(
              "https://www.instagram.com/aim4u.co.in/",
              "_blank",
              "noopener noreferrer"
            )
          }
        >
          <Center>
          <Image boxSize={["20px", "30px", "30px", "35px"]} src={insta} /> <br />
          </Center>
        </Text>
        </Flex>

        <Flex direction="column" mb={[4, 0]}>
          <Text fontWeight="bold" fontSize={["sm", "md", "lg", "2xl"]}>Legal</Text>
          <Text fontSize={["sm", "md", "lg"]} _hover={{color: "#3F67F6" }}
          onClick={() =>
            window.open(
              "https://www.aim4u.co.in/#/terms-and-conditions",
              "_blank",
              "noopener noreferrer"
            )
          }
        >
        Terms & Conditions</Text>
          <Text fontSize={["sm", "md", "lg"]} _hover={{color: "#3F67F6" }}
          onClick={() =>
            window.open(
              "https://www.aim4u.co.in/#/privacy-policy",
              "_blank",
              "noopener noreferrer"
            )
          }
          >  Privacy Policy</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;

*/


import insta from "../images/instagram-icon.svg";
import face from "../images/facebook.png";
import linkedin from "../images/linkedin.png";

import {Image, Box, Heading, Flex, List, Link as ChakraLink, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box
      as="footer"
      bg="#000000"
      color="#ffffff"
      borderTop="1px solid"
      borderColor="gray.300"
      py="2.5rem"
      fontSize="1.1rem"
      fontFamily="SF Pro Display, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
    >
      <Box
        maxW="64rem"
        marginX="auto"
        pb="2rem"
        mb="1.5rem"
        px={10}
        borderBottom="1px solid"
        borderColor="gray.300"
        color="#ffffff"
      >
        <Flex flexWrap="wrap" alignItems="start" justifyContent="space-between">
          <Box w={{ base: '100%', sm: '50%', md: 'max-content' }} 
               
              mb={{ base: '1.5rem', lg: '0' }}>
            <Heading as="h5" color="#ffffff" mb="0.5rem" fontSize="1.2rem" fontWeight="600">
              Explore
            </Heading>
            <List lineHeight="2"  color="#ffffff" justifyContent="center">
              <Text  fontSize={["sm", "md", "md"]} _hover={{color: "#3F67F6" }}>
              <ChakraLink href="/"style={{ textDecoration: "none" }} >
                Home
              </ChakraLink>
              </Text>
              <Text style={{ textDecoration: "none" }} fontSize={["sm", "md", "md"]} _hover={{color: "#3F67F6" }}>
              <ChakraLink href="/about"  style={{ textDecoration: "none" }}>
                About
              </ChakraLink>
              </Text>

            </List>
          </Box>
          <Box w={{ base: '100%', sm: '50%', md: 'max-content' }} mb={{ base: '1.5rem', lg: '0' }}>
            <Heading as="h5"   mb="0.5rem" fontSize="1.2rem" fontWeight="600">
              Contact
            </Heading>
            <List lineHeight="1.4">
              <Text>Sardar Patel Technology</Text>
              <Text>Business Incubator (SP-TBI)</Text>
              <Text>Munshi Nagar, Andehri (W)</Text>
              <Text>Mumbai, Maharashtra 400053</Text>
              <Text >+91 8657424574</Text>
              <Text _hover={{color: "#3F67F6"} }>support@aim4u.co.in</Text>
              
            </List>
          </Box>
          <Box w={{ base: '100%', sm: '50%', md: 'max-content' }} mb={{ base: '1.5rem', lg: '0' }}>
            <Heading as="h5"  mb="0.5rem" fontSize="1.2rem" fontWeight="600">
              Follow Us
            </Heading>
            <List lineHeight="1" justifyContent="center">

            <Text style={{ textDecoration: "none" }} fontSize={["sm", "md", "md"]} _hover={{color: "#3F67F6" }}>
              <ChakraLink href="https://www.facebook.com/aim4usoftwaresolutions/"  style={{ textDecoration: "none" }}>
              <Image boxSize={["20px", "30px", "30px", "35px"]} src={face} /> <br />
              </ChakraLink>
            </Text>
            <Text style={{ textDecoration: "none" }} fontSize={["sm", "md", "md"]} _hover={{color: "#3F67F6" }}>
              <ChakraLink href="https://www.instagram.com/aim4u.co.in/"  style={{ textDecoration: "none" }}>
              <Image boxSize={["20px", "30px", "30px", "35px"]} src={insta} /> <br />
              </ChakraLink>
            </Text>
            <Text style={{ textDecoration: "none" }} fontSize={["sm", "md", "md"]} _hover={{color: "#3F67F6" }}>
              <ChakraLink href="https://www.linkedin.com/company/aim4u-software-solution/"  style={{ textDecoration: "none" }}>
              <Image boxSize={["20px", "30px", "30px", "35px"]} src={linkedin} /> <br />
              </ChakraLink>
            </Text>

          
              
            </List>
          </Box>

          <Box w={{ base: '100%', sm: '50%', md: 'max-content' }} mb={{ base: '1.5rem', lg: '0' }}>
            <Heading as="h5"  mb="0.5rem" fontSize="1.2rem" fontWeight="600">
              Legal
            </Heading>
            <List lineHeight="2" justifyContent="center">
              <Text  fontSize={["sm", "md", "lg"]} _hover={{color: "#3F67F6" }}>
              <ChakraLink href="https://www.aim4u.co.in/#/terms-and-conditions"style={{ textDecoration: "none" }} >
              Terms & Conditions
              </ChakraLink>
              </Text>
              <Text fontSize={["sm", "md", "lg"]} _hover={{color: "#3F67F6" }}>
              <ChakraLink href="https://www.aim4u.co.in/#/privacy-policy"  style={{ textDecoration: "none" }}>
                Privacy Policy
              </ChakraLink>
              </Text>

            
            </List>
          </Box>
          
          
        </Flex>
      </Box>
      <Flex maxW="64rem" mx="auto" alignItems="center" px={10}>
        
        <Text  fontSize="1.1rem" pl="0.5rem">
          &copy; 2024 , Inc. All rights reserved.
        </Text>
      </Flex>
    </Box>
  );
};



export default Footer;