// import React from "react";
// import NavBar from "../components/NavBar";
// import { Box, Center, Flex, Heading, Image, Text } from "@chakra-ui/react";
// import sir from "../images/sir.png";
// import ambassidor from "../images/ambassidor.png";
// import PrevInterns from "../components/PrevInterns";
// import Footer from "../components/Footer";
// import about from "../images/about.png";
// import { useSelector } from "react-redux";
// const AboutUs = () => {
//   const { isAdmin } = useSelector((state) => {
//     return state.user;
//   });
//   return (
//     <div>
//       <NavBar isAdmin={isAdmin} />
//       <Flex
//         mt={["2", "2", "4"]}
//         overflowX={"auto"}
//         direction={["column", "column", "row"]}
//         alignItems={"center"}
//       >
//         <Text
//           mx="auto"
//           maxW={["100%", "100%", "33%"]}
//           width={["100%", "100%", "33%"]}
//           as="u"
//           fontSize={["xl", "2xl", "2xl"]}
//           // color="#000080"
//           textAlign={["center", "center", "left"]}
//           mb={["4", "4", "0"]} // Add margin-bottom for spacing between Text and Image
//           textDecoration={"none"}
//           textAlign="justify"
//         >
//           <Text mt="10" fontSize="3xl" fontWeight={"semibold"} color="#000080">
//             About Us
//           </Text>
//           We believe in fostering the next generation of talent. Our internship
//           program is more than just an opportunity - it's a gateway to hands-on
//           experience, mentorship, and a vibrant community that values
//           innovation, growth, and diversity.
//         </Text>
//         <Image
//           src={about}
//           alt="picture"
//           mx="auto"
//           minW={["100%", "100%", "400px"]} // Set minimum width for small screens
//           maxW={["100%", "100%", "55%"]} // Set maximum width for larger screens
//           mb={["4", "4", "4"]} // Add margin-bottom for spacing between Text and Image
//           order={["2", "2", "1"]} // Change order for small and medium screens
//           textAlign="justify"
//         />
//       </Flex>

//       {/* <div>
//         <Box bgColor="#000080" mt="10">
//           <Heading p="12" fontSize="3xl" color="white">
//             Our Master Trainer
//           </Heading>
//           <Center>
//             <Image
//               src={sir}
//               alt=""
//               bgColor="white"
//               borderRadius="16"
//               p="28"
//               mb="10"
//               mx="auto"
//               w="70%"
//             />
//           </Center>
//         </Box>
//         <Box bgColor="#000080" mt="10">
//           <Heading p="12" fontSize="3xl" color="white">
//             Our Ambassador
//           </Heading>
//           <Center>
//             <Image
//               src={ambassidor}
//               alt=""
//               bgColor="white"
//               borderRadius="16"
//               p="28"
//               mb="10"
//               mx="auto"
//               w="70%"
//             />
//           </Center>
//         </Box>
//         <Box bgColor="#000080" mt="10">
//           <Heading p="12" fontSize="3xl" color="white">
//             Our Previous Interns
//           </Heading>
//           <PrevInterns />
//           <Center></Center>
//         </Box>
//       </div> */}

//       <div>
//         <div>
//           <Box bgColor="#000080" mt="10" px={[4, 8]}>
//             <Flex
//               direction={["column", "column", "row"]}
//               alignItems={["center", "center", "flex-start"]}
//               justify="center"
//               textAlign="center"
//               flexWrap="wrap"
//             >
//               {/* First Box */}
//               <Box
//                 bgColor="white"
//                 borderRadius="20"
//                 p={[4, 6]}
//                 mb={[6, 6, 0]}
//                 mt={"30px"}
//                 mb={"30px"}
//                 width={["100%", "100%", "50%"]} // Full width on small screens, 50% on larger screens
//                 maxWidth={["100%", "100%", "500px"]}
//                 textAlign={["center", "center", "left"]}
//                 marginRight={"100px"}
//                 float="right"
//                 height={"auto"}

//                 // Center text on small screens, align left on larger screens
//               >
//                 <Heading
//                   fontSize="3xl"
//                   color="#000080"
//                   textAlign="center"
//                   py={4}
//                 >
//                   Our Master Trainer
//                 </Heading>

//                 <Image
//                   src={sir}
//                   alt="Master Trainer"
//                   borderRadius="16"
//                   p="4"
//                   w="50%"
//                   mx="auto"
//                   mb={[4, 0]}
//                 />
//                 <Text fontSize="xl" fontWeight="semibold" mb="4">
//                   Dr. Dhananjay Kalbande
//                 </Text>
//                 <Text fontSize="20px" textAlign="justify">
//                   Dr. Kalbande is a globally-recognized scholar, teacher,
//                   consultant, and speaker in business innovation, machine
//                   learning, and enterprise analytics. He has published eight
//                   patents. He has written four books, as well as dozens of
//                   influential articles in leading academic journals and
//                   conferences.
//                 </Text>
//               </Box>

//               {/* Second Box */}

//               <Box
//                 bgColor="white"
//                 borderRadius="20"
//                 p={[4, 6]}
//                 mb={[6, 6, 0]}
//                 mt={"30px"}
//                 mb={"30px"}
//                 width={["100%", "100%", "50%"]} // Full width on small screens, 50% on larger screens
//                 maxWidth={["100%", "100%", "500px"]}
//                 textAlign={["center", "center", "left"]}
//                 marginRight={"100px"}
//                 float="right"
//                 height={"auto"}

//                 // Center text on small screens, align left on larger screens
//               >
//                 <Heading
//                   fontSize="3xl"
//                   color="#000080"
//                   textAlign="center"
//                   py={4}
//                 >
//                   Our Ambassador
//                 </Heading>

//                 <Image
//                   src={ambassidor}
//                   alt="Master Trainer"
//                   borderRadius="16"
//                   p="4"
//                   w="50%"
//                   mx="auto"
//                   mb={[4, 0]}
//                 />
//                 <Text fontSize="xl" fontWeight="semibold" mb="4">
//                   Ojas Archana Pravin Deotale
//                 </Text>
//                 <Text fontSize="20px" textAlign="justify">
//                   From the mystical land of Nagpur in Maharashtra, a champion
//                   has arisen. Let us celebrate his triumph, for he has bought
//                   glory to our great nation, winning three golds in the esteemed
//                   Asian Games of Hangzhou, China in 2023. With pride in our
//                   heart and jubilant roar, let us chant "Jay Hind, Jay
//                   Maharashtra".
//                 </Text>
//               </Box>
//             </Flex>
//           </Box>
//         </div>

//         {/* <Box bgColor="#000080" mt="10">
//           <Heading p="4" fontSize="3xl" color="white" textAlign="left">
//             Our Master Trainer
//           </Heading>
//           <Flex
//             direction={["column", "column", "row"]}
//             alignItems="center"
//             justify="center"
//             textAlign="center"
//           >
//             <Box
//               bgColor="white"
//               borderRadius="20"
//               p="4"
//               mb={["6", "6", "0"]}
//               width={["70%", "70%", "40%"]} // Full width on small screens, 50% on larger screens
//               maxWidth="400px"
//               textAlign={["center", "center", "left"]} // Center text on small screens, align left on larger screens
//             >
//               <Image
//                 src={sir}
//                 alt="Master Trainer"
//                 borderRadius="16"
//                 p="4"
//                 w="50%"
//                 // width={["100%", "100%", "50%"]}
//               />
//               <Text fontSize="xl" fontWeight="semibold" mb="4">
//                 Dr. Dhananjay Kalbande
//               </Text>
//               <Text fontSize="20px" textAlign={"left"} textAlign="justify">
//                 Dr. Kalbande is a globally-recognized scholar, teacher,
//                 consultant, and speaker in business innovation, machine
//                 learning, and enterprise analytics. He has published eight
//                 patents. He has written four books, as well as dozens of
//                 influential articles in leading academic journals and
//                 conferences.
//               </Text>
//             </Box>
//           </Flex>
//         </Box>
//         <Box bgColor="#000080" mt="10">
//           <Heading p="12" fontSize="3xl" color="white">
//             Our Ambassador
//           </Heading>
//           <Flex
//             direction={["column", "column", "row"]}
//             alignItems="center"
//             justify="center"
//             textAlign="center"
//           >
//             <Box
//               bgColor="white"
//               borderRadius="20"
//               p="4"
//               mb={["6", "6", "0"]}
//               width={["70%", "70%", "40%"]} // Full width on small screens, 50% on larger screens
//               maxWidth="400px"
//               textAlign={["center", "center", "left"]} // Center text on small screens, align left on larger screens
//             >
//               <Image
//                 src={ambassidor}
//                 alt="Master Trainer"
//                 borderRadius="16"
//                 p="4"
//                 w="50%"
//                 // width={["100%", "100%", "50%"]}
//               />
//               <Text fontSize="xl" fontWeight="semibold" mb="4">
//                 Ojas Archana Pravin Deotale
//               </Text>
//               <Text fontSize="20px" textAlign={"left"} textAlign="justify">
//                 From the mystical land of Nagpur in Maharashtra, a champion has
//                 arisen. Let us celebrate his triumph, for he has bought glory to
//                 our great nation, winning three golds in the esteemed Asian
//                 Games of Hangzhou, China in 2023. With pride in our heart and
//                 jubliant roar, let us chant "Jay Hind, Jay Maharashtra".
//               </Text>
//             </Box>
//             <Box
//               w={["70%", "70%", "40%"]} // Full width on small screens, 50% on larger screens
//               maxWidth="600px"
//               mb={["6", "6", "0"]}
//             ></Box>
//           </Flex>
//     </Box>*/}

//         <Box bgColor="#000080" mt="10">
//           <Heading p="12" fontSize="3xl" color="white">
//             Our Previous Interns
//           </Heading>
//           <PrevInterns />
//           <Center></Center>
//         </Box>
//       </div>

//       <Footer />
//     </div>
//   );
// };
// export default AboutUs;

// // import React from 'react';
// // import NavBar from '../components/NavBar';
// // import { Box, Center, Flex, Heading, Image, Text } from '@chakra-ui/react';
// // import sir from '../images/sir.png';
// // import ambassidor from '../images/ambassidor.png';
// // import Neil from '../images/InternImages/Neil.png';
// // import Tejas from '../images/InternImages/Tejas.png';
// // import tanvi from '../images/InternImages/tanvi.png';
// // import Sarah from '../images/InternImages/Sarah.png';
// // import Aditya from '../images/InternImages/Aditya.png';
// // import Sumit from '../images/InternImages/Sumit.png';
// // import Rithvika from '../images/InternImages/Rithvika.png';
// // import parth from '../images/InternImages/parth.png';

// // // import Mahesh from '../InternImages/Mahesh.png';
// // // import palak from '../InternImages/palak.png';
// // // import SarahSonje from '../InternImages/Sarah Sonje.png';

// // // import Smruti from '../InternImages/Smruti.png';
// // import Urvi from '../images/InternImages/Urvi.png';
// // import Aumkar from '../images/InternImages/Aumkar.png';
// // import Tanisha from '../images/InternImages/Tanisha.png';
// // import Anjali from '../images/InternImages/Anjali.png';
// // // import PrevInterns from '../components/PrevInterns';
// // import Footer from '../components/Footer';
// // import about from '../images/about.png';
// // import { useSelector } from 'react-redux';
// // const AboutUs = () => {
// //   const { isAdmin } = useSelector((state) => { return state.user });
// //   return (
// //     <div>
// //       <NavBar isAdmin={isAdmin} />
// //       <Flex
// //         mt={['2', '2', '4']}
// //         overflowX={'auto'}
// //         direction={['column', 'column', 'row']}
// //         alignItems={'center'}
// //       >
// //         <Text
// //           mx="auto"
// //           maxW={['100%', '100%', '33%']}
// //           width={['100%', '100%', '33%']}
// //           as="u"
// //           fontSize={['xl', '2xl', '2xl']}
// //           // color="#000080"
// //           textAlign={['center', 'center', 'left']}
// //           mb={['4', '4', '0']} // Add margin-bottom for spacing between Text and Image
// //           textDecoration={'none'}
// //         >
// //           <Text mt='10' fontSize="3xl" fontWeight={'semibold'} color="#000080">
// //             About Us
// //           </Text>
// //           We believe in fostering the next generation of talent. Our internship program is more than just an opportunity - it's a gateway to hands-on experience, mentorship, and a vibrant community that values innovation, growth, and diversity.
// //         </Text>
// //         <Image
// //           src={about}
// //           alt="picture"
// //           mx="auto"
// //           minW={['100%', '100%', '400px']} // Set minimum width for small screens
// //           maxW={['100%', '100%', '55%']} // Set maximum width for larger screens
// //           mb={['4', '4', '0']} // Add margin-bottom for spacing between Text and Image
// //           order={['2', '2', '1']} // Change order for small and medium screens
// //         />
// //       </Flex>

// //       <div>
// //         <Box bgColor="#000080" mt="10">
// //           <Heading p="12" fontSize="3xl" color="white">
// //             Our Master Trainer
// //           </Heading>
// //           <Center>
// //             <Image
// //               src={sir}
// //               alt=""
// //               bgColor="white"
// //               borderRadius="16"
// //               p="28"
// //               mb="10"
// //               mx='auto'
// //               w='70%'
// //             />
// //           </Center>
// //         </Box>
// //         <Box bgColor="#000080" mt="10">
// //           <Heading p="12" fontSize="3xl" color="white">
// //             Our Ambassador
// //           </Heading>
// //           <Center>
// //             <Image
// //               src={ambassidor}
// //               alt=""
// //               bgColor="white"
// //               borderRadius="16"
// //               p="28"
// //               mb="10"
// //               mx='auto'
// //               w='70%'
// //             />
// //           </Center>
// //         </Box>

// //         {/* previous Interns */}

// //         <Box bgColor="#000080" mt="10">
// //           <Heading p="12" fontSize="3xl" color="white">
// //             Our Interns
// //           </Heading>
// //           <Center>
// //             {/* <Image
// //               // src={ambassidor}
// //               alt=""
// //               bgColor="white"
// //               borderRadius="16"
// //               p="28"
// //               mb="10"
// //               mx='auto'
// //               w='70%'
// //             /> */}
// //             <Box bgColor="#000080" mt="1">
// //       {/* <Heading p="12" fontSize="3xl" color="white">
// //         Our Interns
// //       </Heading> */}
// // <Box display="flex" justifyContent="space-between" w="100%" flexWrap="wrap">
// //   <Center>
// //     <Box display="flex" justifyContent="space-between" w="80%">
// //           {/* First Image */}
// //           <Image
// //             src={Tejas} // Replace with your image source
// //             alt=""
// //             bgColor="white"
// //             borderRadius="10"
// //             p="2"
// //             mb="10"
// //             w="23%" // Adjust the width as needed
// //           />

// //           {/* Second Image */}
// //           <Image
// //             src={Neil} // Replace with your image source
// //             alt=""
// //             bgColor="white"
// //             borderRadius="10"
// //             p="2"
// //             mb="10"
// //             w="23%" // Adjust the width as needed
// //           />
// //           {/* Third Image */}
// //           <Image
// //             src={tanvi} // Replace with your image source
// //             alt=""
// //             bgColor="white"
// //             borderRadius="10"
// //             p="2"
// //             mb="10"
// //             w="23%" // Adjust the width as needed
// //           />
// //           {/* Fourth Image */}
// //           <Image
// //             src={Sarah} // Replace with your image source
// //             alt=""
// //             bgColor="white"
// //             borderRadius="10"
// //             p="2"
// //             mb="10"
// //             w="23%" // Adjust the width as needed
// //           />
// //     </Box>
// //   </Center>
// // </Box>

// // <Box display="flex" justifyContent="space-between" w="100%" flexWrap="wrap">
// //   <Center>
// //     <Box display="flex" justifyContent="space-between" w="80%">
// //           {/* First Image */}
// //           <Image
// //             src={Aditya} // Replace with your image source
// //             alt=""
// //             bgColor="white"
// //             borderRadius="10"
// //             p="2"
// //             mb="10"
// //             w="23%" // Adjust the width as needed
// //           />

// //           {/* Second Image */}
// //           <Image
// //             src={Sumit} // Replace with your image source
// //             alt=""
// //             bgColor="white"
// //             borderRadius="10"
// //             p="2"
// //             mb="10"
// //             w="23%" // Adjust the width as needed
// //           />
// //           {/* Third Image */}
// //           <Image
// //             src={Rithvika} // Replace with your image source
// //             alt=""
// //             bgColor="white"
// //             borderRadius="10"
// //             p="2"
// //             mb="10"
// //             w="23%" // Adjust the width as needed
// //           />
// //           {/* Fourth Image */}
// //           <Image
// //             src={parth} // Replace with your image source
// //             alt=""
// //             bgColor="white"
// //             borderRadius="10"
// //             p="2"
// //             mb="10"
// //             w="23%" // Adjust the width as needed
// //           />
// //     </Box>
// //   </Center>
// // </Box>

// // <Box display="flex" justifyContent="space-between" w="100%" flexWrap="wrap">
// //   <Center>
// //     <Box display="flex" justifyContent="space-between" w="80%">
// //           {/* First Image */}
// //           <Image
// //             src={Aditya} // Replace with your image source
// //             alt=""
// //             bgColor="white"
// //             borderRadius="10"
// //             p="2"
// //             mb="10"
// //             w="23%" // Adjust the width as needed
// //           />

// //           {/* Second Image */}
// //           <Image
// //             src={Sumit} // Replace with your image source
// //             alt=""
// //             bgColor="white"
// //             borderRadius="10"
// //             p="2"
// //             mb="10"
// //             w="23%" // Adjust the width as needed
// //           />
// //           {/* Third Image */}
// //           <Image
// //             src={Rithvika} // Replace with your image source
// //             alt=""
// //             bgColor="white"
// //             borderRadius="10"
// //             p="2"
// //             mb="10"
// //             w="23%" // Adjust the width as needed
// //           />
// //           {/* Fourth Image */}
// //           <Image
// //             src={parth} // Replace with your image source
// //             alt=""
// //             bgColor="white"
// //             borderRadius="10"
// //             p="2"
// //             mb="10"
// //             w="23%" // Adjust the width as needed
// //           />
// //     </Box>
// //   </Center>
// // </Box>

// // <Box display="flex" justifyContent="space-between" w="100%" flexWrap="wrap">
// //   <Center>
// //     <Box display="flex" justifyContent="space-between" w="80%">
// //           {/* First Image */}
// //           <Image
// //             src={Urvi} // Replace with your image source
// //             alt=""
// //             bgColor="white"
// //             borderRadius="10"
// //             p="2"
// //             mb="10"
// //             w="23%" // Adjust the width as needed
// //           />

// //           {/* Second Image */}
// //           <Image
// //             src={Aumkar} // Replace with your image source
// //             alt=""
// //             bgColor="white"
// //             borderRadius="10"
// //             p="2"
// //             mb="10"
// //             w="23%" // Adjust the width as needed
// //           />
// //           {/* Third Image */}
// //           <Image
// //             src={Anjali} // Replace with your image source
// //             alt=""
// //             bgColor="white"
// //             borderRadius="10"
// //             p="2"
// //             mb="10"
// //             w="23%" // Adjust the width as needed
// //           />
// //           {/* Fourth Image */}
// //           <Image
// //             src={Tanisha} // Replace with your image source
// //             alt=""
// //             bgColor="white"
// //             borderRadius="10"
// //             p="2"
// //             mb="10"
// //             w="23%" // Adjust the width as needed
// //           />
// //     </Box>
// //   </Center>
// // </Box>

// //           </Box>
// //           {/* </Box> */}
// //       </Center>

// //         </Box>

// //       </div>

// //       {/* <PrevInterns /> */}

// //       <Footer />

// //     </div>

// //   );
// // };

// // export default AboutUs;
import React from "react";
import NavBar from "../components/NavBar";
import { Box, Center, Flex, Heading, Image, Text } from "@chakra-ui/react";
import sir from "../images/sir.png";
import ambassidor from "../images/ambassidor.png";
import PrevInterns from "../components/PrevInterns";
import Footer from "../components/Footer";
import about from "../images/about.png";
import vedu from "../images/vedu.jpg";
import { useSelector } from "react-redux";
const AboutUs = () => {
  const { isAdmin } = useSelector((state) => {
    return state.user;
  });
  return (
    <div
    style={{ fontFamily:"SF Pro Display, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"}}

    >
      <NavBar isAdmin={isAdmin} />
      <Flex
        mt={["2", "2", "4"]}
        overflowX={"auto"}
        direction={["column", "column", "row"]}
        alignItems={"center"}
        marginRight={"5%"}
        marginLeft={"5%"}
        fontFamily="SF Pro Display, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
      >
        <Text
          mx="auto"
          maxW={["100%", "100%", "33%"]}
          width={["100%", "100%", "33%"]}
          as="u"
          fontSize={["xl", "2xl", "2xl"]}
          // color="#000080"
          // textAlign={["center", "center", "left"]}
          mb={["4", "4", "0"]} // Add margin-bottom for spacing between Text and Image
          textDecoration={"none"}
          textAlign="justify"
          
        >
          <Text mt="10" fontSize="3xl" fontWeight={"semibold"} color="#000080" 
          fontFamily="SF Pro Display, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
          >
            About Us
          </Text>
          We believe in fostering the next generation of talent. Our internship
          program is more than just an opportunity - it's a gateway to hands-on
          experience, mentorship, and a vibrant community that values
          innovation, growth, and diversity.
        </Text>
        <Image
          src={about}
          alt="picture"
          mx="auto"
          minW={["100%", "100%", "400px"]} // Set minimum width for small screens
          maxW={["100%", "100%", "55%"]} // Set maximum width for larger screens
          mb={["4", "4", "4"]} // Add margin-bottom for spacing between Text and Image
          order={["2", "2", "1"]} // Change order for small and medium screens
          textAlign="justify"
        />
      </Flex>

      <div>
        <div>
          <Box bgColor="#000080" mt="10" px={[8, 8]} py={[8, 8]}
          fontFamily="SF Pro Display, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
          >
            <Flex
              direction={["column", "column", "row"]}
              alignItems={["center", "center", "flex-start"]}
              justify="center"
              textAlign="center"
              flexWrap="wrap"
            >
              {/* First Box */}
              <Box
                bgColor="white"
                borderRadius="20"
                p={[4, 6]}
                // mb={[6, 6, 0]}
                mt={"30px"}
                mb={"30px"}
                my={[5, 5]}
                margin={"auto"}
                width={["100%", "100%", "500px"]} // Full width on small screens, 50% on larger screens
                maxWidth={["90%", "90%", "30%"]}
                textAlign={["center", "center", "center"]}
                marginRight={"10px"}
                float="right"
                height={"fit-content"}

                // Center text on small screens, align left on larger screens
              >
                <Heading
                  fontSize="3xl"
                  color="#000080"
                  textAlign="center"
                  justifyContent={"Center"}
                  py={4}
                >
                  Our Master Trainer
                </Heading>

                <Image
                  src={sir}
                  alt="Master Trainer"
                  borderRadius="16"
                  // p="4"
                  w="50%"
                  mx="auto"
                  mb={[4, 1]}
                />
                <Text fontSize="xl" fontWeight="semibold" mb="4" textAlign={"center"}>
                  Dr. Dhananjay Kalbande
                </Text>
                <Text fontSize="md" textAlign="justify"
                
                >
                  Dr. Kalbande is a globally-recognized scholar, teacher,
                  consultant, and speaker in business innovation, machine
                  learning, and enterprise analytics. He has published eight
                  patents. He has written four books, as well as dozens of
                  influential articles in leading academic journals and
                  conferences.
                </Text>
              </Box>

              {/* Second Box */}

              <Box
                bgColor="white"
                borderRadius="20"
                p={[4, 6]}
                // mb={[6, 6, 0]}
                mt={"30px"}
                mb={"30px"}
                my={[5, 5]}
                margin={"auto"}
                width={["100%", "100%", "500px"]} // Full width on small screens, 50% on larger screens
                maxWidth={["100%", "100%", "30%"]}
                textAlign={["center", "center", "left"]}
                marginRight={"10px"}
                float="right"
                height={"auto"}

                // Center text on small screens, align left on larger screens
              >
                <Heading
                  fontSize="3xl"
                  color="#000080"
                  textAlign="center"
                  py={4}
                >
                  Our Ambassador
                </Heading>

                <Image
                  src={ambassidor}
                  alt="Master Trainer"
                  borderRadius="16"
                  w="50%"
                  mx="auto"
                  mb={[4, 0]}
                />
                <Text fontSize="xl" fontWeight="semibold" mb="4" textAlign={"center"}>
                  Ojas Archana Pravin Deotale
                </Text>
                <Text fontSize="md" textAlign="justify">
                  From the mystical land of Nagpur in Maharashtra, a champion
                  has arisen. Let us celebrate his triumph, for he has bought
                  glory to our great nation, winning three golds in the esteemed
                  Asian Games of Hangzhou, China in 2023. With pride in our
                  heart and jubilant roar, let us chant "Jay Hind, Jay
                  Maharashtra".
                </Text>
              </Box>
              <Box
                bgColor="white"
                borderRadius="20"
                p={[4, 6]}
                // mb={[6, 6, 0]}
                mt={"30px"}
                mb={"30px"}
                my={[5, 5]}
                margin={"auto"}
                width={["100%", "100%", "500px"]} // Full width on small screens, 50% on larger screens
                maxWidth={["100%", "100%", "30%"]}
                textAlign={["center", "center", "left"]}
                marginRight={"10px"}
                float="right"
                height={"auto"}

                // Center text on small screens, align left on larger screens
              >
                <Heading
                  fontSize="3xl"
                  color="#000080"
                  textAlign="center"
                  py={4}
                >
                  A Rising Star
                </Heading>

                <Image
                  src={vedu}
                  alt="Master Trainer"
                  borderRadius="200"
                  // p="4"
                  // height={"50"}
                  w="40%"
                  mx="auto"
                  mb={[4, 4]}
                />
                <Text fontSize="xl" fontWeight="semibold" mb="4" textAlign={"center"}>
                  Vedika Kalbande
                </Text>
                <Text fontSize="md" textAlign="justify">
                  Vedika shines as the standout player in the 10 to 13 age group
                  basketball match, earning the title of Player of the Match,
                  for her unwavering commitment, persistence, and exceptional
                  talent. We pray for Vedika's continued success and believe in
                  her limitless potential to achieve even greater heights in the
                  future.
                </Text>
              </Box>
            </Flex>
          </Box>
        </div>

        <Box bgColor="#000080" mt="10">
          <Heading p="6" fontSize="3xl" color="white" textAlign={"center"}>
            Our Previous Interns
          </Heading>
          <PrevInterns />
          <Center></Center>
        </Box>
      </div>

      <Footer />
    </div>
  );
};
export default AboutUs;
