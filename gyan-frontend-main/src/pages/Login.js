// import React, { useEffect, useState } from 'react';
// import { HStack, Box, Text, Button, Input, Checkbox, Image, Flex, useToast, Heading } from '@chakra-ui/react';
// import image1 from '../images/course2.png';
// import logo from '../images/google_logo.png';
// import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { loginSuccess } from '../Actions/userActions';
// import axios from 'axios';
// import NavBar from '../components/NavBar';
// import './Login.css';
// import { Spinner } from '@chakra-ui/react'

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const toast = useToast();
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { isAuthenticated } = useSelector((state) => state.user);
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setTimeout(2000);
//     try {
//       const { data } = await axios.post(`https://gyanbackend.aim4u.co.in/login/`, {
//         email,
//         password,
//       });
//       toast({
//         title: 'Login Successful!',
//         description: 'Welcome to Gyam AIM4u.',
//         status: 'success',
//         duration: 5000,
//         isClosable: true,
//       });
//       const id = data.id;
//       const isAdmin = data.isadmin;
//       const payload = { email: email, id: id, isAdmin: isAdmin };
//       console.log(payload);
//       const accessToken = data.token.access;
//       window.sessionStorage.setItem('accessToken', accessToken);
//       dispatch(loginSuccess(payload));
//       setTimeout(2000);
//       navigate('/');
//       setLoading(false);
//     } catch (error) {
//       toast({
//         title: 'Authentication failed.',
//         description:
//           'Please check your credentials and try again.',
//         status: 'error',
//         duration: 5000,
//         isClosable: true,
//       });
//       setLoading(false);
//       console.log(error);
//     }
//   };
//   return (
//     <Box position={'relative'}>

//       {/* Loading */}
//       {loading && <Box position={'absolute'} zIndex={1} w={'100vw'} h={'100vh'} display={'flex'} alignItems={'center'} justifyContent={'center'} bgColor={'rgba(0,0,0,0.6)'}><Spinner size={'xl'} /></Box>}

//       {isAuthenticated && <NavBar name={'Login'} />}
//       <HStack spacing='80px' paddingTop='50' ml='100' position={'relative'} zIndex={0}>
//         <Box w='700px' h='450px' paddingTop='60px'>
//           <Image
//             src={image1}
//             alt=''
//             style={{
//               width: '100%',
//               height: '100%',
//               objectFit: 'cover',
//               borderRadius: '20px',
//             }}
//           />
//         </Box>

//         <Box padding={'20px'} backgroundColor={'#E4FFFF'} borderRadius={'25px'}>
//           <Heading pt={8} textAlign={'left'}><Heading as="span" size={{ base: "base", md: "md", lg: "xl" }} color="#2F327D">Welcome to </Heading><Heading as="span" size={{ base: "base", md: "md", lg: "xl" }} color="#9acd32">Gyan@Aim4u</Heading></Heading>
//           <HStack spacing='4px'>
//             <Heading color={'#2F327D'} size={{ base: "base", md: "sm", lg: "sm" }}>Lets get you started</Heading>
//           </HStack>
//           <br />
//           <Text ml='30px' fontSize='14px' style={{ fontWeight: 'bold' }}>
//             Email Address
//           </Text>
//           <Input
//             placeholder='Enter your Email Address'
//             pl='20px'
//             borderRadius='25px'
//             ml='20px'
//             h='40px'
//             w='430px'
//             backgroundColor={'white'}
//             borderColor='rgba(45, 240, 228, 0.4)'
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           ></Input>
//           <br></br>
//           <Text ml='30px' fontSize='14px' style={{ fontWeight: 'bold' }}>
//             Password
//           </Text>
//           <Input
//             placeholder='Enter your Password'
//             pl='20px'
//             pr='20'
//             borderRadius='25px'
//             type='password'
//             ml='20px'
//             h='40px'
//             w='430px'
//             backgroundColor={'white'}
//             borderColor='rgba(45, 240, 228, 0.4)'
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           ></Input>
//           <div style={{ display: 'flex', alignItems: 'center' }}>
//             <Flex>
//               <Box height='20px'>
//                 <Checkbox fontSize='15px' ml='25px'>
//                   <input
//                     type='checkbox'
//                     style={{ marginRight: '5px', display: 'none' }}
//                   />
//                   <span style={{ cursor: 'pointer', fontSize: '12px' }}>Remember me</span>
//                 </Checkbox>
//               </Box>
//             </Flex>
//           </div>
//           <br />
//           <br />
//           <Button
//             marginLeft='25px'
//             w='450px'
//             h='40px'
//             borderRadius='25px'
//             bg='#000080'
//             color='white'
//             _hover={{
//               bg: 'rgba(45, 240, 228, 1)',
//               cursor: 'pointer',
//             }}
//             _active={{
//               bg: 'rgba(45, 240, 228, 1)',
//             }}
//             fontSize='15px'
//             border='none'
//             type='submit'
//             onClick={handleSubmit}
//           >
//             Login
//           </Button>
//           {/* <Text textAlign={'center'} mt='2%' fontSize='18px' fontWeight='bold'>
//             or
//           </Text>

//           <button type="button" class="login-with-google-btn" >
//             Sign in with Google
//           </button> */}
//           <Text textAlign={'center'} mt='2%' fontSize='14px' fontWeight='bold'>
//             Don't have an Account? <Link to='/register'><span style={{ color: '#000080' }}>Register</span></Link>
//           </Text>
//         </Box>
//       </HStack>
//     </Box>
//   );
// };

// export default Login;

// import React, { useEffect, useState } from 'react';
// import { HStack, Box, Text, Button, Input, Checkbox, Image, Flex, useToast, Heading } from '@chakra-ui/react';
// import image1 from '../images/course2.png';
// import logo from '../images/google_logo.png';
// import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { loginSuccess } from '../Actions/userActions';
// import axios from 'axios';
// import NavBar from '../components/NavBar';
// import './Login.css';
// import { Spinner } from '@chakra-ui/react'
// import { useCookies } from 'react-cookie'


// const Login = () => {
//   const [email, setEmail] = useState('');
//   const toast = useToast();
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { isAuthenticated } = useSelector((state) => state.user);
//   const [loading, setLoading] = useState(false);
//   const [cookies, setCookie] = useCookies(['user'])
//   let count=0
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setCookie('user', email, { path: '/' })
//     count++;
//     console.log("number of users created: ",count)
//     setTimeout(2000);
//     try {
//       const { data } = await axios.post(`https://gyanbackend.aim4u.co.in/login/`, {
//         email,
//         password,
//       });
//       toast({
//         title: 'Login Successful!',
//         description: 'Welcome to Gyam AIM4u.',
//         status: 'success',
//         duration: 5000,
//         isClosable: true,
//       });
//       const id = data.id;
//       const isAdmin = data.isadmin;
//       const payload = { email: email, id: id, isAdmin: isAdmin };
//       console.log(payload);
//       const accessToken = data.token.access;
//       window.sessionStorage.setItem('accessToken', accessToken);
//       dispatch(loginSuccess(payload));
//       setTimeout(2000);
//       navigate('/');
//       setLoading(false);
//     } catch (error) {
//       toast({
//         title: 'Authentication failed.',
//         description:
//           'Please check your credentials and try again.',
//         status: 'error',
//         duration: 5000,
//         isClosable: true,
//       });
//       setLoading(false);
//       console.log(error);
//     }
//   };

  
//   return (
//     <Box position={'relative'}>

//       {/* Loading */}
//       {loading && <Box position={'absolute'} zIndex={1} w={'100vw'} h={'100vh'} display={'flex'} alignItems={'center'} justifyContent={'center'} bgColor={'rgba(0,0,0,0.6)'}><Spinner size={'xl'} /></Box>}

//       {isAuthenticated && <NavBar name={'Login'} />}
//       <HStack spacing='80px' paddingTop='50' ml='100' position={'relative'} zIndex={0}>
//         <Box w='700px' h='450px' paddingTop='60px'>
//           <Image
//             src={image1}
//             alt=''
//             style={{
//               width: '100%',
//               height: '100%',
//               objectFit: 'cover',
//               borderRadius: '20px',
//             }}
//           />
//         </Box>

//         <Box padding={'20px'} backgroundColor={'#E4FFFF'} borderRadius={'25px'}>
//           <Heading pt={8} textAlign={'left'}><Heading as="span" size={{ base: "base", md: "md", lg: "xl" }} color="#2F327D">Welcome to </Heading><Heading as="span" size={{ base: "base", md: "md", lg: "xl" }} color="#9acd32">Gyan@Aim4u</Heading></Heading>
//           <HStack spacing='4px'>
//             <Heading color={'#2F327D'} size={{ base: "base", md: "sm", lg: "sm" }}>Lets get you started</Heading>
//           </HStack>
//           <br />
//           <Text ml='30px' fontSize='14px' style={{ fontWeight: 'bold' }}>
//             Email Address
//           </Text>
//           <Input
//             placeholder='Enter your Email Address'
//             pl='20px'
//             borderRadius='25px'
//             ml='20px'
//             h='40px'
//             w='430px'
//             backgroundColor={'white'}
//             borderColor='rgba(45, 240, 228, 0.4)'
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           ></Input>
//           <br></br>
//           <Text ml='30px' fontSize='14px' style={{ fontWeight: 'bold' }}>
//             Password
//           </Text>
//           <Input
//             placeholder='Enter your Password'
//             pl='20px'
//             pr='20'
//             borderRadius='25px'
//             type='password'
//             ml='20px'
//             h='40px'
//             w='430px'
//             backgroundColor={'white'}
//             borderColor='rgba(45, 240, 228, 0.4)'
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           ></Input>
//           <div style={{ display: 'flex', alignItems: 'center' }}>
//             <Flex>
//               <Box height='20px'>
//                 <Checkbox fontSize='15px' ml='25px'>
//                   <input
//                     type='checkbox'
//                     style={{ marginRight: '5px', display: 'none' }}
//                   />
//                   <span style={{ cursor: 'pointer', fontSize: '12px' }}>Remember me</span>
//                 </Checkbox>
//               </Box>
//             </Flex>
//           </div>
//           <br />
//           <br />
//           <Button
//             marginLeft='25px'
//             w='450px'
//             h='40px'
//             borderRadius='25px'
//             bg='#000080'
//             color='white'
//             _hover={{
//               bg: 'rgba(45, 240, 228, 1)',
//               cursor: 'pointer',
//             }}
//             _active={{
//               bg: 'rgba(45, 240, 228, 1)',
//             }}
//             fontSize='15px'
//             border='none'
//             type='submit'
//             onClick={handleSubmit}
//           >
//             Login
//           </Button>
//           {/* <Text textAlign={'center'} mt='2%' fontSize='18px' fontWeight='bold'>
//             or
//           </Text>

//           <button type="button" class="login-with-google-btn" >
//             Sign in with Google
//           </button> */}
//           <Text textAlign={'center'} mt='2%' fontSize='14px' fontWeight='bold'>
//             Don't have an Account? <Link to='/register'><span style={{ color: '#000080' }}>Register</span></Link>
//           </Text>
//         </Box>
//       </HStack>
//     </Box>
//   );
// };

// export default Login;

// import React, { useState } from 'react';
// import {
//   HStack,
//   Box,
//   Text,
//   Button,
//   Input,
//   Checkbox,
//   Image,
//   Flex,
//   useToast,
//   Heading,
//   Spinner,
//   useMediaQuery,
// } from '@chakra-ui/react';
// import image1 from '../images/course2.png';
// import logo from '../images/google_logo.png';
// import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { loginSuccess } from '../Actions/userActions';
// import axios from 'axios';
// import NavBar from '../components/NavBar';
// import './Login.css';
// import { useCookies } from 'react-cookie';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const toast = useToast();
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { isAuthenticated } = useSelector((state) => state.user);
//   const [loading, setLoading] = useState(false);
//   const [cookies, setCookie] = useCookies(['user']);
//   let count = 0;
//   const [isLargeScreen] = useMediaQuery("(min-width: 48em)"); // Adjust the breakpoint as needed

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setCookie('user', email, { path: '/' });
//     count++;
//     console.log("number of users created: ", count);
//     setTimeout(2000);
//     try {
//       const { data } = await axios.post(`https://gyanbackend.aim4u.co.in/login/`, {
//         email,
//         password,
//       });
//       toast({
//         title: 'Login Successful!',
//         description: 'Welcome to Gyam AIM4u.',
//         status: 'success',
//         duration: 5000,
//         isClosable: true,
//       });
//       const id = data.id;
//       const isAdmin = data.isadmin;
//       const payload = { email: email, id: id, isAdmin: isAdmin };
//       console.log(payload);
//       const accessToken = data.token.access;
//       window.sessionStorage.setItem('accessToken', accessToken);
//       dispatch(loginSuccess(payload));
//       setTimeout(2000);
//       navigate('/');
//       setLoading(false);
//     } catch (error) {
//       toast({
//         title: 'Authentication failed.',
//         description: 'Please check your credentials and try again.',
//         status: 'error',
//         duration: 5000,
//         isClosable: true,
//       });
//       setLoading(false);
//       console.log(error);
//     }
//   };

//   return (
//     <Box position={'relative'}>
//       {/* Loading */}
//       {loading && (
//         <Box position={'absolute'} zIndex={1} w={'100vw'} h={'100vh'} display={'flex'} alignItems={'center'} justifyContent={'center'} bgColor={'rgba(0,0,0,0.6)'}>
//           <Spinner size={'xl'} />
//         </Box>
//       )}

//       {isAuthenticated && <NavBar name={'Login'} />}
//       <HStack spacing={isLargeScreen ? '80px' : '0px'} paddingTop={isLargeScreen ? '50' : '0'} ml={isLargeScreen ? '100' : '0'} position={'relative'} zIndex={0}>
//         <Box w={isLargeScreen ? '700px' : '100%'} h={isLargeScreen ? '450px' : 'auto'} paddingTop={isLargeScreen ? '60px' : '0'}>
//           <Image
//             src={image1}
//             alt=''
//             style={{
//               width: '100%',
//               height: '100%',
//               objectFit: 'cover',
//               borderRadius: isLargeScreen ? '20px' : '0',
//             }}
//           />
//         </Box>

//         <Box padding={'20px'} backgroundColor={'#E4FFFF'} borderRadius={'25px'}>
//           <Heading pt={8} textAlign={isLargeScreen ? 'left' : 'center'}>
//             <Heading as="span" size={{ base: "base", md: "md", lg: "xl" }} color="#2F327D">Welcome to </Heading>
//             <Heading as="span" size={{ base: "base", md: "md", lg: "xl" }} color="#9acd32">Gyan@Aim4u</Heading>
//           </Heading>
//           <HStack spacing={isLargeScreen ? '4px' : '0px'}>
//             <Heading color={'#2F327D'} size={{ base: "base", md: "sm", lg: "sm" }}>Lets get you started</Heading>
//           </HStack>
//           <br />
//           <Text ml={isLargeScreen ? '30px' : '0px'} fontSize='14px' style={{ fontWeight: 'bold' }}>
//             Email Address
//           </Text>
//           <Input
//             placeholder='Enter your Email Address'
//             pl={isLargeScreen ? '20px' : '10px'}
//             borderRadius='25px'
//             ml={isLargeScreen ? '20px' : '10px'}
//             h='40px'
//             w={isLargeScreen ? '430px' : '90%'}
//             backgroundColor={'white'}
//             borderColor='rgba(45, 240, 228, 0.4)'
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           ></Input>
//           <br></br>
//           <Text ml={isLargeScreen ? '30px' : '0px'} fontSize='14px' style={{ fontWeight: 'bold' }}>
//             Password
//           </Text>
//           <Input
//             placeholder='Enter your Password'
//             pl={isLargeScreen ? '20px' : '10px'}
//             pr={isLargeScreen ? '20' : '10'}
//             borderRadius='25px'
//             type='password'
//             ml={isLargeScreen ? '20px' : '10px'}
//             h='40px'
//             w={isLargeScreen ? '430px' : '90%'}
//             backgroundColor={'white'}
//             borderColor='rgba(45, 240, 228, 0.4)'
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           ></Input>
//           <div style={{ display: 'flex', alignItems: 'center' }}>
//             <Flex>
//               <Box height='20px'>
//                 <Checkbox fontSize='15px' ml={isLargeScreen ? '25px' : '10px'}>
//                   <input
//                     type='checkbox'
//                     style={{ marginRight: '5px', display: 'none' }}
//                   />
//                   <span style={{ cursor: 'pointer', fontSize: '12px' }}>Remember me</span>
//                 </Checkbox>
//               </Box>
//             </Flex>
//           </div>
//           <br />
//           <br />
//           <Button
//             marginLeft={isLargeScreen ? '25px' : '10px'}
//             w={isLargeScreen ? '450px' : '90%'}
//             h='40px'
//             borderRadius='25px'
//             bg='#000080'
//             color='white'
//             _hover={{
//               bg: 'rgba(45, 240, 228, 1)',
//               cursor: 'pointer',
//             }}
//             _active={{
//               bg: 'rgba(45, 240, 228, 1)',
//             }}
//             fontSize='15px'
//             border='none'
//             type='submit'
//             onClick={handleSubmit}
//           >
//             Login
//           </Button>
//           <Text textAlign={isLargeScreen ? 'center' : 'center'} mt='2%' fontSize='14px' fontWeight='bold'>
//             Don't have an Account? <Link to='/register'><span style={{ color: '#000080' }}>Register</span></Link>
//           </Text>
//         </Box>
//       </HStack>
//     </Box>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import {
  Box,
  Text,
  Button,
  Input,
  Checkbox,
  Flex,
  useToast,
  Heading,
  Spinner,
  useMediaQuery,
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess } from '../Actions/userActions';
import axios from 'axios';
import NavBar from '../components/NavBar';
import { useCookies } from 'react-cookie';

const Login = () => {
  const [email, setEmail] = useState('');
  const toast = useToast();
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const [cookies, setCookie] = useCookies(['user']);
  let count = 0;
  const [isLargeScreen] = useMediaQuery("(min-width: 48em)");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setCookie('user', email, { path: '/' });
    count++;
    console.log("number of users created: ", count);
    setTimeout(2000);
    try {
      const { data } = await axios.post(`http://127.0.0.1:8000/login/`, { 
        email,
        password,
      });
      toast({
        title: 'Login Successful!',
        description: 'Welcome to Gyam AIM4u.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      const id = data.id;
      const isAdmin = data.isadmin;
      const payload = { email: email, id: id, isAdmin: isAdmin };
      console.log(payload);
      const accessToken = data.token.access;
      window.sessionStorage.setItem('accessToken', accessToken);
      dispatch(loginSuccess(payload));
      setTimeout(2000);
      navigate('/');
      setLoading(false);
    } catch (error) {
      toast({
        title: 'Authentication failed.',
        description: 'Please check your credentials and try again.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <Flex
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        padding={isLargeScreen ? '20px' : '10px'}
        backgroundColor={'#E4FFFF'}
        borderRadius={'25px'}
        width={isLargeScreen ? '400px' : '90%'}
      >
        <Heading textAlign="center">
          <Heading as="span" size={{ base: "base", md: "md", lg: "xl" }} color="#2F327D">
            Welcome to
          </Heading>
          <Heading as="span" size={{ base: "base", md: "md", lg: "xl" }} color="#9acd32">
            Gyan@Aim4u
          </Heading>
        </Heading>
        <Text mt={isLargeScreen ? 4 : 2} fontSize={isLargeScreen ? '14px' : '12px'} style={{ fontWeight: 'bold' }}>
          Email Address
        </Text>
        <Input
          placeholder='Enter your Email Address'
          borderRadius='25px'
          h='40px'
          w={'100%'}
          backgroundColor={'white'}
          borderColor='rgba(45, 240, 228, 0.4)'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        ></Input>
        <Text mt={2} fontSize={isLargeScreen ? '14px' : '12px'} style={{ fontWeight: 'bold' }}>
          Password
        </Text>
        <Input
          placeholder='Enter your Password'
          borderRadius='25px'
          type='password'
          h='40px'
          w={'100%'}
          backgroundColor={'white'}
          borderColor='rgba(45, 240, 228, 0.4)'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        ></Input>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
          <Checkbox fontSize={isLargeScreen ? '15px' : '12px'}>
            <input type='checkbox' style={{ marginRight: '5px', display: 'none' }} />
            <span style={{ cursor: 'pointer', fontSize: isLargeScreen ? '12px' : '10px' }}>Remember me</span>
          </Checkbox>
        </div>
        <Button
          mt={isLargeScreen ? '10px' : '20px'}
          w={'100%'}
          h='40px'
          borderRadius='25px'
          bg='#000080'
          color='white'
          _hover={{
            bg: 'rgba(45, 240, 228, 1)',
            cursor: 'pointer',
          }}
          _active={{
            bg: 'rgba(45, 240, 228, 1)',
          }}
          fontSize={isLargeScreen ? '15px' : '12px'}
          border='none'
          type='submit'
          onClick={handleSubmit}
        >
          Login
        </Button>
        <Text textAlign='center' mt={isLargeScreen ? '10px' : '20px'} fontSize={isLargeScreen ? '14px' : '12px'} fontWeight='bold'>
          Don't have an Account?{' '}
          <Link to='/register'>
            <span style={{ color: '#000080' }}>Register</span>
          </Link>
        </Text>
      </Box>
    </Flex>
  );
};

export default Login;
