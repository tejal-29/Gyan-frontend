// // // import ReactDOM from "react-dom/client";
// // import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import Register from "./pages/Register";
// // import Login from "./pages/Login";
// // import Landing from "./pages/Landing";
// // import Internship from "./pages/Internship";
// // import Search from "./pages/Search";
// // import Profile from "./pages/Profile";
// // import IDetail from "./pages/IDetail";
// // import Payment from "./pages/Payment";
// // import Applied from "./pages/Applied";
// // import NoPage from "./pages/NoPage";
// // import AboutUs from "./pages/AboutUs";
// // import Blogs from "./pages/Blogs";
// // import Admin from "./pages/Admin";
// // import ViewApplication from "./pages/ViewApplications";
// // import ViewInternshipDetails from "./pages/ViewInternshipDetails";
// // import UpdateInternshipDetails from "./pages/UpdateInternshipDetails";
// // import { useDispatch, useSelector } from "react-redux";
// // import axios from 'axios';
// // import { loadUserSuccess } from "./Actions/userActions";
// // import ChangePassword from "./pages/ChangePassword";
// // // import { useSelector } from "react-redux";
// // import { useBreakpointValue } from '@chakra-ui/react';
// // export default function App() {
// //   const dispatch = useDispatch();

// //   const { isAuthenticated } = useSelector((state) => state.user);
// //   const { isAdmin } = useSelector((state) => state.user);

// //   const loadUser = async (accessToken) => {
// //     try {
// //       const config = {
// //         headers: {
// //           'Authorization': `Bearer ${accessToken}`
// //         }
// //       };
// //       const res = await axios.get(`https://gyanbackend.aim4u.co.in/profile/`, config);
// //       //  console.log(res.data)
// //       const email = res.data.email;
// //       const id = res.data.id;
// //       const isAdmin = res.data.is_admin;
// //       dispatch(loadUserSuccess({ email, id, isAdmin }))
// //     }
// //     catch (e) {

// //     }
// //   }

// //   const accessToken = window.sessionStorage.getItem('accessToken');
// //   if (accessToken) {
// //     loadUser(accessToken);
// //   }

// //   // const user = useSelector(state => { return state.user });
// //   return (
// //     <BrowserRouter>
// //       <Routes>
// //         <Route path="/" element={<Landing />} />
// //         <Route path="/login" element={!isAuthenticated ? <Login /> : <Landing />} />
// //         <Route path="/register" element={!isAuthenticated ? <Register /> : <Landing />} />
// //         <Route path="/profile" element={isAuthenticated ? <Profile /> : <Login />} />
// //         <Route path="/payment" element={<Payment />} />
// //         <Route path="/details/:id" element={isAuthenticated ? <IDetail /> : <Login />} />
// //         <Route path="/search" element={<Search />} />
// //         <Route path="/applied" element={isAuthenticated ? <Applied /> : <Login />} />
// //         <Route path="/changePassword" element={isAuthenticated ? <ChangePassword /> : <Login />} />
// //         <Route path="/internship" element={<Internship />} />
// //         <Route path="/about" element={<AboutUs />} />
// //         <Route path="/blog" element={<Blogs />} />
// //         <Route path="/admin" element={isAdmin ? <Admin /> : <p>current user is not admin</p>} />
// //         <Route path="/applications" element={isAdmin ? <ViewApplication /> : <p>current user is not admin</p>} />
// //         <Route path="/internshipDetails" element={isAdmin ? <ViewInternshipDetails /> : <p>current user is not admin</p>} />
// //         <Route path="/updateDetails/:id" element={isAdmin ? <UpdateInternshipDetails /> : <p>current user is not admin</p>} />
// //         <Route path="*" element={<NoPage />} />
// //       </Routes>
// //     </BrowserRouter>
// //   );
// // }
// // const MyResponsiveComponent = () => {
// //   const fontSize = useBreakpointValue({ base: 'sm', md: 'md', lg: 'lg' });

// //   return (
// //     <div style={{ fontSize }}>
// //       {/* Your responsive content goes here */}
// //     </div>
// //   );
// // };


// // // const root = ReactDOM.createRoot(document.getElementById('root'));
// // // root.render(<App />);

// import React, { useEffect } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { ChakraProvider, extendTheme, Box } from '@chakra-ui/react';
// import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
// import { loadUserSuccess } from './Actions/userActions';
// import { useBreakpointValue } from '@chakra-ui/react';

// import Register from './pages/Register';
// import Login from './pages/Login';
// import Landing from './pages/Landing';
// import Internship from './pages/Internship';
// import Search from './pages/Search';
// import Profile from './pages/Profile';
// import IDetail from './pages/IDetail';
// import Payment from './pages/Payment';
// import Applied from './pages/Applied';
// import NoPage from './pages/NoPage';
// import AboutUs from './pages/AboutUs';
// import Blogs from './pages/Blogs';
// import Admin from './pages/Admin';
// import ViewApplication from './pages/ViewApplications';
// import ViewInternshipDetails from './pages/ViewInternshipDetails';
// import UpdateInternshipDetails from './pages/UpdateInternshipDetails';
// import ChangePassword from './pages/ChangePassword';

// const breakpoints = {
//   base: '0px',
//   sm: '320px',
//   md: '900px',
//   lg: '960px',
//   xl: '1200px',
//   '2xl': '1536px',
// };

// const theme = extendTheme({
//   fonts: {
//     heading: `'Poppins', sans-serif`,
//     body: `'Poppins', sans-serif`,
//   },
//   breakpoints: breakpoints,
// });

// const App = () => {
//   const dispatch = useDispatch();
//   const { isAuthenticated, isAdmin } = useSelector((state) => state.user);

//   const loadUser = async (accessToken) => {
//     try {
//       const config = {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       };
//       const res = await axios.get(`https://gyanbackend.aim4u.co.in/profile/`, config);
//       const { email, id, is_admin } = res.data;
//       dispatch(loadUserSuccess({ email, id, isAdmin: is_admin }));
//     } catch (e) {
//       // Handle error
//     }
//   };

//   useEffect(() => {
//     const accessToken = window.sessionStorage.getItem('accessToken');
//     if (accessToken) {
//       loadUser(accessToken);
//     }
//   }, [dispatch]);

//   return (
//     <ChakraProvider theme={theme}>
//       <BrowserRouter>
        // <Routes>
        //   <Route path="/" element={<Landing />} />
        //   <Route path="/login" element={!isAuthenticated ? <Login /> : <Landing />} />
        //   <Route path="/register" element={!isAuthenticated ? <Register /> : <Landing />} />
        //   <Route path="/profile" element={isAuthenticated ? <Profile /> : <Login />} />
        //   <Route path="/payment" element={<Payment />} />
        //   <Route path="/details/:id" element={isAuthenticated ? <IDetail /> : <Login />} />
        //   <Route path="/search" element={<Search />} />
        //   <Route path="/applied" element={isAuthenticated ? <Applied /> : <Login />} />
        //   <Route path="/changePassword" element={isAuthenticated ? <ChangePassword /> : <Login />} />
        //   <Route path="/internship" element={<Internship />} />
        //   <Route path="/about" element={<AboutUs />} />
        //   <Route path="/blog" element={<Blogs />} />
        //   <Route path="/admin" element={isAdmin ? <Admin /> : <p>Current user is not admin</p>} />
        //   <Route path="/applications" element={isAdmin ? <ViewApplication /> : <p>Current user is not admin</p>} />
        //   <Route
        //     path="/internshipDetails"
        //     element={isAdmin ? <ViewInternshipDetails /> : <p>Current user is not admin</p>}
        //   />
        //   <Route
        //     path="/updateDetails/:id"
        //     element={isAdmin ? <UpdateInternshipDetails /> : <p>Current user is not admin</p>}
        //   />
        //   <Route path="*" element={<NoPage />} />
        // </Routes>
//       </BrowserRouter>
//     </ChakraProvider>
//   );
// };

// export default App;


// App.js
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';


import { loadUserSuccess } from './Actions/userActions';


import Register from './pages/Register';
import Login from './pages/Login';
import Landing from './pages/Landing';
import Internship from './pages/Internship';
import Search from './pages/Search';
import Profile from './pages/Profile';
import IDetail from './pages/IDetail';
import Payment from './pages/Payment';
import Applied from './pages/Applied';
import NoPage from './pages/NoPage';
import AboutUs from './pages/AboutUs';
import Blogs from './pages/Blogs';
import Faq from './pages/Faq';

import Admin from './pages/Admin';
import ViewApplication from './pages/ViewApplications';
import ViewInternshipDetails from './pages/ViewInternshipDetails';
import UpdateInternshipDetails from './pages/UpdateInternshipDetails';
import ChangePassword from './pages/ChangePassword';
// import ViewerCounter from './ViewerCounter';




const breakpoints = {
  base: '0px',
  sm: '320px',
  md: '900px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
};

const theme = extendTheme({
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  breakpoints: breakpoints,
});

const App = () => {
  console.log("Hello check if this is even working");
  // <ViewerCounter name="Komal"/>
  const dispatch = useDispatch();
  const { isAuthenticated, isAdmin } = useSelector((state) => state.user);

  const loadUser = async (accessToken) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };
      const res = await axios.get(`http://127.0.0.1:8000/profile/`, config);
      const { email, id, is_admin } = res.data;
      dispatch(loadUserSuccess({ email, id, isAdmin: is_admin }));
    } catch (e) {
      // Handle error
    }
  };

  useEffect(() => {
    const accessToken = window.sessionStorage.getItem('accessToken');
    if (accessToken) {
        loadUser(accessToken);
    }
}, [dispatch, loadUser]);


  return (
    
    <ChakraProvider theme={theme}>
      {/* <ViewerCounter name="Komal"/> */}
     {/* <Counter /> */}
      <BrowserRouter>
        <Routes>
          {/* ... (unchanged routes) */}
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={!isAuthenticated ? <Login /> : <Landing />} />
          <Route path="/register" element={!isAuthenticated ? <Register /> : <Landing />} />
          <Route path="/profile" element={isAuthenticated ? <Profile /> : <Login />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/details/:id" element={isAuthenticated ? <IDetail /> : <Login />} />
          <Route path="/search" element={<Search />} />
          <Route path="/applied" element={isAuthenticated ? <Applied /> : <Login />} />
          <Route path="/changePassword" element={isAuthenticated ? <ChangePassword /> : <Login />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/admin" element={isAdmin ? <Admin /> : <p>Current user is not admin</p>} />
          <Route path="/faq" element={<Faq />} />

          <Route path="/applications" element={isAdmin ? <ViewApplication /> : <p>Current user is not admin</p>} />
          <Route
            path="/internshipDetails"
            element={isAdmin ? <ViewInternshipDetails /> : <p>Current user is not admin</p>}
          />
          <Route
            path="/updateDetails/:id"
            element={isAdmin ? <UpdateInternshipDetails /> : <p>Current user is not admin</p>}
          />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
      {/* <ViewerCounter name="Komal"/> */}
      {/* <Counter /> */}
    </ChakraProvider>
  );
};

export default App;
