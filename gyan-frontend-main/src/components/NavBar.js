// // // import React from "react";
// // // import {
// // //   Flex,
// // //   Text,
// // //   Box,
// // //   Image,
// // //   Spacer,
// // //   Avatar,
// // //   Menu,
// // //   Button,
// // //   ButtonGroup,
// // //   MenuList,
// // //   MenuItem,
// // //   MenuButton,
// // //   useToast,
// // //   Heading,
// // // } from "@chakra-ui/react";
// // // import { Link } from "react-router-dom";
// // // import { ChevronDownIcon } from "@chakra-ui/icons";
// // // import axios from "axios";
// // // import { useSelector } from "react-redux";
// // // import img10 from "../images/AiM4u Registered Logo (1).png";
// // // const Navbar = ({ isAdmin }) => {
// // //   const toast = useToast();
// // //   const { userId } = useSelector((state) => {
// // //     return state.user;
// // //   });
// // //   const { isAuthenticated } = useSelector((state) => {
// // //     return state.user;
// // //   });
// // //   const linkStyles = {
// // //     p: ["2", "2", "2", "3"],
// // //     mx: ["0", "0", "3", "3"],
// // //     fontSize: ["xl", "xl", "2xl", "2xl"],
// // //     color: "white",
// // //     _hover: {
// // //       color: "white",
// // //       textDecoration: "underline",
// // //     },
// // //   };
// // //   return (
// // //     <Flex
// // //       // py={['2', '2', '2', '4']}
// // //       // px={['4', '4', '6', '8']}
// // //       w="100%"
// // //       direction={["column", "column", "row", "row"]}
// // //       overflowX="auto"
// // //       whiteSpace="nowrap"
// // //       flexWrap="wrap"
// // //       backgroundColor="white"
// // //     >
// // //       <Link to="https://www.aim4u.co.in/#/gyan-at-aim4u">
// // //         <Image src={img10} w={"7rem"} />
// // //       </Link>
// // //       <Heading alignSelf={"center"}>Gyan</Heading>
// // //       <Spacer />

// // //       <Flex
// // //         align={["center", "center", "center", "center"]}
// // //         direction={["column", "column", "row", "row"]}
// // //       >
// // //         <Box {...linkStyles}>
// // //           <Link to="/" className="nav-link">
// // //             <Text color={"#000080"} _hover={{ opacity: "50%" }}>
// // //               Home
// // //             </Text>
// // //           </Link>
// // //         </Box>
// // //         <Box {...linkStyles}>
// // //           <Link to="/about" className="nav-link">
// // //             <Text color={"#000080"} _hover={{ opacity: "50%" }}>
// // //               About
// // //             </Text>
// // //           </Link>
// // //         </Box>
// // //         <Box {...linkStyles}>
// // //           <Link to="/internship" className="nav-link">
// // //             <Text color={"#000080"} _hover={{ opacity: "50%" }}>
// // //               Internships
// // //             </Text>
// // //           </Link>
// // //         </Box>
// // //         <Box {...linkStyles}>
// // //           <Link to="/search" className="nav-link">
// // //             <Text color={"#000080"} _hover={{ opacity: "50%" }}>
// // //               Search
// // //             </Text>
// // //           </Link>
// // //         </Box>
// // //         {/* <Box {...linkStyles}>
// // //           <Link to="/blog" className="nav-link">Blog</Link>
// // //         </Box> */}
// // //       </Flex>

// // //       <Spacer />
// // //       {isAuthenticated && (
// // //         <Flex
// // //           direction={["column", "column", "row", "row"]}
// // //           align={["center", "center", "center", "center"]}
// // //         >
// // //           <Flex
// // //             direction={"row"}
// // //             p={["2", "2", "2", "3"]}
// // //             my={["3", "3", "auto", "auto"]}
// // //             fontSize={["xl", "xl", "2xl", "2xl"]}
// // //             color="#000080"
// // //           >
// // //             <Avatar bg="#000080" mb="2" ml="8" mr="3" />
// // //             <Menu>
// // //               <MenuButton
// // //                 as={Button}
// // //                 color={"#000080"}
// // //                 marginTop={"4%"}
// // //                 fontSize={["md", "md", "lg", "lg"]}
// // //                 backgroundColor={"transparent"}
// // //                 rightIcon={<ChevronDownIcon />}
// // //                 border={"1px"}
// // //                 _hover={{ color: "#000080" }}
// // //               >
// // //                 Profile
// // //               </MenuButton>

// // //               <MenuList color={"#000080"}>
// // //                 {!isAdmin && (
// // //                   <Link to="/profile">
// // //                     <MenuItem>Update Profile</MenuItem>
// // //                   </Link>
// // //                 )}
// // //                 {isAdmin && (
// // //                   <Link to="/admin">
// // //                     <MenuItem>Admin Interface</MenuItem>
// // //                   </Link>
// // //                 )}
// // //                 {!isAdmin && (
// // //                   <Link to={"/applied"}>
// // //                     <MenuItem>My Applications</MenuItem>
// // //                   </Link>
// // //                 )}
// // //                 <Link to={"/changePassword"}>
// // //                   <MenuItem>Change Password</MenuItem>
// // //                 </Link>
// // //                 {/* {!isAdmin && <MenuItem onClick={async () => {
// // //                   try {
// // //                     const accessToken = window.sessionStorage.getItem('accessToken');
// // //                     const formData = new FormData();
// // //                     formData.append('user', userId);
// // //                     const { data } = await axios.post(`https://gyanbackend.aim4u.co.in/view-user-resume/`,
// // //                       formData,
// // //                       {
// // //                         headers: {
// // //                           'Content-Type': 'multipart/form-data',
// // //                           'Authorization': `Bearer ${accessToken}`,
// // //                         }
// // //                       });
// // //                     toast({
// // //                       title: 'Resume Fetched Successfully',
// // //                       description: 'Download will start soon',
// // //                       status: 'success',
// // //                       duration: 5000,
// // //                       isClosable: true,
// // //                     });
// // //                     window.open(data.user_resume, '_blank', 'noopener noreferrer');
// // //                   } catch (error) {
// // //                     toast({
// // //                       title: 'Failed to get resume',
// // //                       description: 'Something went wrong',
// // //                       status: 'error',
// // //                       duration: 5000,
// // //                       isClosable: true,
// // //                     });
// // //                     console.log(error);
// // //                   }
// // //                 }}>
// // //                   My Resume
// // //                 </MenuItem>
// // //                 } */}
// // //                 <MenuItem
// // //                   onClick={() => {
// // //                     window.sessionStorage.removeItem("accessToken");
// // //                     window.location.href = "/login";
// // //                   }}
// // //                 >
// // //                   Logout
// // //                 </MenuItem>
// // //               </MenuList>
// // //             </Menu>
// // //           </Flex>
// // //         </Flex>
// // //       )}
// // //       {!isAuthenticated && (
// // //         <Box bg="white" pl={0} alignSelf={"center"}>
// // //           <Flex as="nav">
// // //             <ButtonGroup pr="2vw" pt="0.5vw" spacing={4} alignSelf={"center"}>
// // //               <Link to="/login">
// // //                 <Button
// // //                   size={{ base: "sm", md: "md", lg: "lg" }}
// // //                   bg={"#000080"}
// // //                   textColor={"white"}
// // //                 >
// // //                   Login
// // //                 </Button>
// // //               </Link>
// // //               <Link to="/register">
// // //                 <Button
// // //                   size={{ base: "sm", md: "md", lg: "lg" }}
// // //                   borderColor={"#000080"}
// // //                   variant={"outline"}
// // //                   textColor={"#000080"}
// // //                 >
// // //                   Register
// // //                 </Button>
// // //               </Link>
// // //             </ButtonGroup>
// // //           </Flex>
// // //         </Box>
// // //       )}
// // //     </Flex>
// // //   );
// // // };

// // // export default Navbar;

// // import React from "react";
// // import {
// //   Flex,
// //   Text,
// //   Box,
// //   Image,
// //   Spacer,
// //   Avatar,
// //   Menu,
// //   Button,
// //   ButtonGroup,
// //   MenuList,
// //   MenuItem,
// //   MenuButton,
// //   useToast,
// //   Heading,
// // } from "@chakra-ui/react";
// // import { Link } from "react-router-dom";
// // import { ChevronDownIcon } from "@chakra-ui/icons";
// // import axios from "axios";
// // import { useSelector } from "react-redux";
// // import img10 from "../images/AiM4u Registered Logo (1).png";

// // const Navbar = ({ isAdmin }) => {
// //   const toast = useToast();
// //   const { userId } = useSelector((state) => state.user);
// //   const { isAuthenticated } = useSelector((state) => state.user);

// //   const linkStyles = {
// //     p: ["2", "2", "2", "3"],
// //     mx: ["0", "0", "3", "3"],
// //     fontSize: ["xl", "xl", "2xl", "2xl"],
// //     color: "white",
// //     _hover: {
// //       color: "white",
// //       textDecoration: "underline",
// //     },
// //   };

// //   return (
// //     <Flex
// //       py={["2", "2", "2", "4"]} // Padding for small to extra large screens
// //       px={["4", "4", "6", "8"]} // Padding for small to extra large screens
// //       direction={["column", "column", "row", "row"]} // Column layout for small screens, row layout for medium to extra large screens
// //       alignItems={["center", "center", "center", "center"]} // Center alignment for all screen sizes
// //       backgroundColor="white"
// //     >
// //       <Link to="https://www.aim4u.co.in/#/gyan-at-aim4u">
// //         <Image src={img10} w={["7rem", "7rem", "auto", "auto"]} />{" "}
// //         {/* Adjust image size for small screens */}
// //       </Link>
// //       <Heading alignSelf="center" fontSize={["2xl", "2xl", "3xl", "4xl"]}>
// //         Gyan
// //       </Heading>{" "}
// //       {/* Adjust heading size for different screens */}
// //       <Spacer />
// //       <Flex
// //         align={["center", "center", "center", "center"]} // Center alignment for all screen sizes
// //         direction={["column", "column", "row", "row"]} // Column layout for small screens, row layout for medium to extra large screens
// //       >
// //         <Box {...linkStyles}>
// //           <Link to="/" className="nav-link">
// //             <Text color={"#000080"} _hover={{ opacity: "50%" }}>
// //               Home
// //             </Text>
// //           </Link>
// //         </Box>
// //         <Box {...linkStyles}>
// //           <Link to="/about" className="nav-link">
// //             <Text color={"#000080"} _hover={{ opacity: "50%" }}>
// //               About
// //             </Text>
// //           </Link>
// //         </Box>
// //         <Box {...linkStyles}>
// //           <Link to="/internship" className="nav-link">
// //             <Text color={"#000080"} _hover={{ opacity: "50%" }}>
// //               Internships
// //             </Text>
// //           </Link>
// //         </Box>
// //         <Box {...linkStyles}>
// //           <Link to="/search" className="nav-link">
// //             <Text color={"#000080"} _hover={{ opacity: "50%" }}>
// //               Search
// //             </Text>
// //           </Link>
// //         </Box>
// //       </Flex>
// //       <Spacer />
// //       {isAuthenticated && (
// //         <Flex
// //           direction={["column", "column", "row", "row"]} // Column layout for small screens, row layout for medium to extra large screens
// //           align={["center", "center", "center", "center"]} // Center alignment for all screen sizes
// //         >
// //           <Flex
// //             direction={"row"}
// //             p={["2", "2", "2", "3"]}
// //             my={["3", "3", "auto", "auto"]}
// //             fontSize={["xl", "xl", "2xl", "2xl"]}
// //             color="#000080"
// //           >
// //             <Avatar bg="#000080" mb="2" ml="8" mr="3" />
// //             <Menu>
// //               <MenuButton
// //                 as={Button}
// //                 color={"#000080"}
// //                 marginTop={"4%"}
// //                 fontSize={["md", "md", "lg", "lg"]}
// //                 backgroundColor={"transparent"}
// //                 rightIcon={<ChevronDownIcon />}
// //                 border={"1px"}
// //                 _hover={{ color: "#000080" }}
// //               >
// //                 Profile
// //               </MenuButton>

// //               <MenuList color={"#000080"}>
// //                 {!isAdmin && (
// //                   <Link to="/profile">
// //                     <MenuItem>Update Profile</MenuItem>
// //                   </Link>
// //                 )}
// //                 {isAdmin && (
// //                   <Link to="/admin">
// //                     <MenuItem>Admin Interface</MenuItem>
// //                   </Link>
// //                 )}
// //                 {!isAdmin && (
// //                   <Link to={"/applied"}>
// //                     <MenuItem>My Applications</MenuItem>
// //                   </Link>
// //                 )}
// //                 <Link to={"/changePassword"}>
// //                   <MenuItem>Change Password</MenuItem>
// //                 </Link>
// //                 <MenuItem
// //                   onClick={() => {
// //                     window.sessionStorage.removeItem("accessToken");
// //                     window.location.href = "/login";
// //                   }}
// //                 >
// //                   Logout
// //                 </MenuItem>
// //               </MenuList>
// //             </Menu>
// //           </Flex>
// //         </Flex>
// //       )}
// //       {!isAuthenticated && (
// //         <Box bg="white" pl={0} alignSelf={"center"}>
// //           <Flex as="nav">
// //             <ButtonGroup pr="2vw" pt="0.5vw" spacing={4} alignSelf={"center"}>
// //               <Link to="/login">
// //                 <Button
// //                   size={{ base: "sm", md: "md", lg: "lg" }}
// //                   bg={"#000080"}
// //                   textColor={"white"}
// //                 >
// //                   Login
// //                 </Button>
// //               </Link>
// //               <Link to="/register">
// //                 <Button
// //                   size={{ base: "sm", md: "md", lg: "lg" }}
// //                   borderColor={"#000080"}
// //                   variant={"outline"}
// //                   textColor={"#000080"}
// //                 >
// //                   Register
// //                 </Button>
// //               </Link>
// //             </ButtonGroup>
// //           </Flex>
// //         </Box>
// //       )}
// //     </Flex>
// //   );
// // };

// // export default Navbar;

// import React from "react";
// import {
//   Flex,
//   Text,
//   Spacer,
//   Avatar,
//   Menu,
//   Button,
//   MenuList,
//   MenuItem,
//   MenuButton,
//   useToast,
//   Image,
// } from "@chakra-ui/react";
// import { Link } from "react-router-dom";
// import { ChevronDownIcon } from "@chakra-ui/icons";
// import axios from "axios";
// import { useSelector } from "react-redux";
// import img10 from "../images/AiM4u Registered Logo (1).png";

// const Navbar = ({ isAdmin }) => {
//   const toast = useToast();
//   const { userId, isAuthenticated } = useSelector((state) => state.user);

//   const linkStyles = {
//     p: ["2", "2", "2", "3"],
//     mx: ["0", "0", "3", "3"],
//     fontSize: ["xl", "xl", "2xl", "2xl"],
//     color: "white",
//     _hover: {
//       color: "white",
//       textDecoration: "underline",
//     },
//   };

//   return (
//     <Flex
//       py={["2", "2", "2", "4"]}
//       px={["4", "4", "6", "8"]}
//       direction={["row", "row", "row", "row"]}
//       alignItems="center"
//       backgroundColor="white"
//       size={{
//         base: "base",
//         sm: "sm",
//         md: "md",
//         lg: "lg",
//         xl: "2xl",
//         "2xl": "2xl",
//       }}
//       color="white"
//     >
//       <Link to="https://www.aim4u.co.in/#/gyan-at-aim4u">
//         <Image src={img10} w={"7rem"} />
//       </Link>
//       {/* <Text fontSize={["2xl", "2xl", "3xl", "4xl"]} color={"#000080"} font-weight: bold>
//         Gyan
//       </Text> */}
//       <Text
//         fontSize={["2xl", "2xl", "3xl", "4xl"]}
//         color={"#000080"}
//         fontWeight="bold"
//         size={{
//           base: "base",
//           sm: "sm",
//           md: "md",
//           lg: "lg",
//           xl: "2xl",
//           "2xl": "2xl",
//         }}
//       >
//         Gyan
//       </Text>

//       {/* <Heading alignSelf="center" fontSize={["2xl", "2xl", "3xl", "4xl"]}>
//         // Gyan //{" "}
//       </Heading>{" "} */}
//       <Spacer />
//       <Flex align="center">
//         <Link to="/" className="nav-link">
//           <Text {...linkStyles} color={"#000080"} _hover={{ opacity: "50%" }}>
//             Home
//           </Text>
//         </Link>
//         <Link to="/about" className="nav-link">
//           <Text {...linkStyles} color={"#000080"} _hover={{ opacity: "50%" }}>
//             About
//           </Text>
//         </Link>
//         <Link to="/internship" className="nav-link">
//           <Text {...linkStyles} color={"#000080"} _hover={{ opacity: "50%" }}>
//             Internships
//           </Text>
//         </Link>
//         <Link to="/search" className="nav-link">
//           <Text {...linkStyles} color={"#000080"} _hover={{ opacity: "50%" }}>
//             Search
//           </Text>
//         </Link>
//         <Menu>
//           {/* <MenuButton
//             as={Button}
//             color={"#000080"}
//             marginTop={"4%"}
//             fontSize={["md", "md", "lg", "lg"]}
//             backgroundColor={"white"}
//             rightIcon={<ChevronDownIcon />}
//             border={"1px"}
//             _hover={{ color: "#000080" }}
//           >
//             Profile
//           </MenuButton> */}
//           <MenuList color={"#000080"}>
//             {!isAdmin && (
//               <Link to="/profile">
//                 <MenuItem>Update Profile</MenuItem>
//               </Link>
//             )}
//             {isAdmin && (
//               <Link to="/admin">
//                 <MenuItem>Admin Interface</MenuItem>
//               </Link>
//             )}
//             {!isAdmin && (
//               <Link to={"/applied"}>
//                 <MenuItem>My Applications</MenuItem>
//               </Link>
//             )}
//             <Link to={"/changePassword"}>
//               <MenuItem>Change Password</MenuItem>
//             </Link>
//             <MenuItem
//               onClick={() => {
//                 window.sessionStorage.removeItem("accessToken");
//                 window.location.href = "/login";
//               }}
//             >
//               Logout
//             </MenuItem>
//           </MenuList>
//         </Menu>
//       </Flex>
//       {!isAuthenticated && (
//         <Flex>
//           <Link to="/login">
//             <Button bg={"#000080"} textColor={"white"} size={"md"} ml="3">
//               Login
//             </Button>
//           </Link>
//           <Link to="/register">
//             <Button
//               variant={"outline"}
//               borderColor={"#000080"}
//               textColor={"#000080"}
//               size={"md"}
//               ml="3"
//             >
//               Register
//             </Button>
//           </Link>
//         </Flex>
//       )}
//     </Flex>
//   );
// };

// export default Navbar;

import React from "react";
import {
  Flex,
  Text,
  Box,
  Image,
  Spacer,
  Avatar,
  Menu,
  Button,
  ButtonGroup,
  MenuList,
  MenuItem,
  MenuButton,
  useToast,
  Heading,
  useDisclosure,
  IconButton,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerBody,
  DrawerHeader,
  DrawerFooter,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
// import axios from 'axios';
import { useSelector } from "react-redux";
import img10 from "../images/AiM4u Registered Logo (1).png";
//import { Hidden } from "@mui/material";

const Navbar = ({ isAdmin }) => {
  const toast = useToast();
  const { userId } = useSelector((state) => {
    return state.user;
  });
  const { isAuthenticated } = useSelector((state) => {
    return state.user;
  });

  const { isOpen, onOpen, onClose } = useDisclosure();

  const linkStyles = {
    p: ["2", "2", "2", "3"],
    mx: ["0", "0", "3", "3"],
    fontSize: ["xl", "xl", "2xl", "2xl"],
    color: "white",
    
    _hover: {
      color: "white",
      textDecoration: "underline",
    },
    
  };

  const LoginRegister = ({ isAuthenticated, isAdmin }) => (
    <>
      {isAuthenticated && (
        <Flex
          direction={["column", "column", "row", "row"]}
          align={["center", "center", "center", "center"]}
        >
          <Flex
            direction={"row"}
            p={["2", "2", "2", "3"]}
            my={["3", "3", "auto", "auto"]}
            fontSize={["xl", "xl", "2xl", "2xl"]}
            color="#000080"
          >
            <Avatar bg="#000080" mb="2" ml="8" mr="3" />
            <Menu >
              <MenuButton
                as={Button}
                color={"#000080"}
                marginTop={"4%"}
                fontSize={["md", "md", "lg", "lg"]}
                backgroundColor={"transparent"}
                rightIcon={<ChevronDownIcon />}
                border={"1px"}
                _hover={{ color: "#000080" }}
                
              >
                Profile
              </MenuButton>

              <MenuList color={"#000080"}>
                {!isAdmin && (
                  <Link to="/profile">
                    <MenuItem>Update Profile</MenuItem>
                  </Link>
                )}
                {isAdmin && (
                  <Link to="/admin">
                    <MenuItem>Admin Interface</MenuItem>
                  </Link>
                )}
                {!isAdmin && (
                  <Link to={"/applied"}>
                    <MenuItem>My Applications</MenuItem>
                  </Link>
                )}
                <Link to={"/changePassword"}>
                  <MenuItem>Change Password</MenuItem>
                </Link>
                <MenuItem
                  onClick={() => {
                    window.sessionStorage.removeItem("accessToken");
                    window.location.href = "/login";
                  }}
                >
                  Logout
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      )}

      {!isAuthenticated && (
        <Box bg="white" pl={0} alignSelf={"center"}>
          <Flex as="nav">
            <ButtonGroup pr="2vw" pt="0.5vw" spacing={4} alignSelf={"center"}>
              <Link to="/login">
                <Button
                  size={{ base: "sm", md: "sm", lg: "md" }}
                  bg={"#000080"}
                  textColor={"white"}
                >
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button
                  size={{ base: "sm", md: "sm", lg: "md" }}
                  borderColor={"#000080"}
                  variant={"outline"}
                  textColor={"#000080"}
                >
                  Register
                </Button>
              </Link>
            </ButtonGroup>
          </Flex>
        </Box>
      )}
    </>
  );

  // Determine whether to show desktop menu based on screen size
  const showDesktopMenu = useBreakpointValue({ base: false, md: true });

  return (
    <Flex
      // py={['2', '2', '2', '4']}
      // px={['4', '4', '6', '8']}      
      w="100%"
      h="80px"
      direction={["column", "column", "row", "row"]}
      //overflowX="auto"
      whiteSpace="nowrap"
      flexWrap="wrap"
      backgroundColor="white"
      
      position="sticky"
      top="0"
      zIndex="80"
      boxShadow="md"
    >
      <Flex>
        <Link to="https://www.aim4u.co.in/#/gyan-at-aim4u">
          <Image src={img10} w={"5.5rem"} />
        </Link>
        <Heading 
        fontFamily="SF Pro Display, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"

        alignSelf={"center"} color={"#000080"}
        >Gyan</Heading>
      </Flex>
      <Spacer />

      {/* Desktop Menu */}
      {showDesktopMenu && (
        <Stack
          direction={["row", "row", "row", "row" ]}
          display={["flex", "flex", "flex", "flex"]}
          align="center"
        >
          <Flex
            align={["center", "center", "center", "center"]}
            direction={["column", "column", "row", "row"]}
          >
            <Box {...linkStyles}>
              <Link to="/" className="nav-link">
                <Text color={"#000080"} _hover={{ opacity: "50%" }}
                fontSize={[ "xl"]}                     
                fontWeight={"bold"}

                >
                  Home
                </Text>
              </Link>
            </Box>
            <Box {...linkStyles}>
              <Link to="/about" className="nav-link">
                <Text color={"#000080"} _hover={{ opacity: "50%" }}
                fontSize={[ "xl"]}                      
                fontWeight={"bold"}
                >
                  About
                </Text>
              </Link>
            </Box>
            <Box {...linkStyles}>
              <Link to="/internship" className="nav-link">
                <Text color={"#000080"} _hover={{ opacity: "50%" }}
                fontSize={[ "xl"]}                 
                fontWeight={"bold"}>
                  Internships
                </Text>
              </Link>
            </Box>
            
            <Box {...linkStyles}>
              <Link to="/faq" className="nav-link">
                <Text color={"#000080"} _hover={{ opacity: "50%" }}
                fontSize={[ "xl"]}  
                fontWeight={"bold"}
                >
                  FAQ
                </Text>
              </Link>
            </Box>
            
          </Flex>

          <LoginRegister isAuthenticated={isAuthenticated} isAdmin={isAdmin} />
        </Stack>
      )}

      {/* Mobile Menu */}
      <IconButton
        aria-label="Open Menu"
        // width={"20px"}
        size="sm"
        mr={2}
        icon={<HamburgerIcon />}
        display={["flex", "flex", "none", "none"]}
        onClick={onOpen}
      />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        {/* <DrawerOverlay /> */}
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Gyan</DrawerHeader>
          <DrawerBody>
            <Stack spacing={4}>
              <Link to="/" className="nav-link">
                <Text color={"#000080"} _hover={{ opacity: "50%" }}>
                  Home
                </Text>
              </Link>
              <Link to="/about" className="nav-link">
                <Text color={"#000080"} _hover={{ opacity: "50%" }}>
                  About
                </Text>
              </Link>
              <Link to="/internship" className="nav-link">
                <Text color={"#000080"} _hover={{ opacity: "50%" }}>
                  Internships
                </Text>
              </Link>
              
              <Link to="/faq" className="nav-link">
                <Text color={"#000080"} _hover={{ opacity: "50%" }}>
                  Faq
                </Text>
              </Link>
              <LoginRegister
                isAuthenticated={isAuthenticated}
                isAdmin={isAdmin}
              />
            </Stack>
          </DrawerBody>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Navbar;
