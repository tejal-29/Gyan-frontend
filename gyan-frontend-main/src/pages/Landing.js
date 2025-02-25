import {
  Button,
  ButtonGroup,
  Heading,
  Center,
  GridItem,
  Grid,
  Box,
  Flex,
  Image,
  Spacer,
  Text,
  useToast,
  useBreakpointValue,
} from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { wrap } from "framer-motion";
import img1 from "../images/img10.jpg";
import img2 from "../images/img12.jpg";
import img3 from "../images/homepage.png";
import img4 from "../images/diploma@2x.png";
import img5 from "../images/paper-plane@2x.png";
import img6 from "../images/project-management@2x.png";
import img7 from "../images/graduate@2x.png";
import img8 from "../images/bookmark@2x.png";
import img9 from "../images/star.png";
import img11 from "../images/girl.gif";
import img10 from "../images/aim4u_logo.jpg";
import { useSelector } from "react-redux";
import Navbar from "../components/NavBar";
import InternshipCard from "../components/InternshipCard"; // Update the path accordingly
import Footer from "../components/Footer";
import Home from "../images/Home.png";

function Landing() {
  const { isAuthenticated, isAdmin } = useSelector((state) => {
    return state.user;
  });

  <style >
    {`
  .t {
  textWrap: balance;
  }
 
  .scroll {
  padding-top: 3vw;
  float: center;
  padding-left: 4vw;
  transform: scale(1.0);
  padding-bottom: 3vw;
  }
 
  .container {
  position: relative;
  
  
  }
 
  /* Bottom right text */
  .text-block {
  max-width: 45vw;
  max-height: 30vh;
  position: absolute;
  top: 9.5vw;
  left: 8vw;
  transform: scale(1.2);
  color: white;
  }
 
  img {
  width: 100%;
  image-rendering: pixelated;
  }
  
  
  `}
  
  </style>;
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const toast = useToast();

  return ( 
       
    <Box 
    style={{ fontFamily:"SF Pro Display, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"}}

    >
        <Navbar isAdmin={isAdmin} />
      <Box mb={"4rem"} >
        <div>
          <div className="container"   style={{ display: 'flex', alignItems: 'center', marginTop:"20px"}}>
            <Heading
              as="span"
              size={{ base: "base", md: "lg", lg: "2xl" }}
              color="#000080"
             
              margin={"20"}>
              <br />Join Us and Shape Tommorrow
            <Heading
              as="span"
              size={{ base: "base", md: "lg", lg: "2xl" }}
              color="#9acd32" >
              <br/>Interships
            </Heading>
              that make a<br/>
                Difference
                <Text style={{ fontSize: 20, color:'black', fontWeight:'semibold'}}>
            <br />Discover learning with Aim4u, merging internships, expert-led AI & ML education,<br/>empowering you for the world.
            </Text>
            </Heading>
            
            
            <Image src={img11} width={550}></Image>
            
          </div>
          
            <div className="text-block">
              <Heading
                textAlign="center"
                size={{
                  base: "base",
                  sm: "sm",
                  md: "md",
                  lg: "lg",
                  xl: "lg",
                  "2xl": "2xl",
                }}
                margin={"auto"} >
                {" "}
                <Link to={"/internship"}>
                  <Button
                    // margin={"auto"}
                    size={{ base: "sm", md: "md", lg: "lg" }}
                    backgroundColor={"#000080"}
                    color={"white"}
                    _hover={{ bg: "#9acd32" }}
                    margin={"10"}
                    marginBottom={"3"} >
                    Apply Now
                  </Button>
                </Link>
              </Heading>
            </div>
        </div>
        <Box pt="3vw" pb="1vw" fontSize={["sm", "md", "lg", "xl"]}>
          <Heading size="lg" pt={10} textAlign={"center"}>
            <Heading
              as="span"
              size={{ base: "base", md: "lg", lg: "2xl" }}
              color="#000080"
              margin={"3"}
            >
              Where Learning Meets{""}
            </Heading>
            <Heading
              as="span"
              size={{ base: "base", md: "lg", lg: "2xl" }}
              color="#9acd32"
            >
              Opportunity
            </Heading>
          </Heading>
          <Center>
            <Center w="60vw" p={5} fontWeight="medium" textAlign="justify">
              {" "}
              Perfect for students who aspire to embark on careers with leading
              tech giants like Microsoft, Google, and Barclays. Our
              opportunities are limited, and selection will be based on the
              information you provide in your application. Your future with
              these prestigious tech companies may just be a click away.
            </Center>
          </Center>

          <Flex
            justifyContent="space-evenly"
            p={5}
            flexWrap={{ base: "wrap", lg: "nowrap" }}
          >
            
            <Box width={{ base: "45%", lg: "18%" }}>
              <Heading
                size={{ base: "base", md: "lg", lg: "3xl" }}
                style={{
                  background: "linear-gradient(to left, #9acd32, #000080)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  textAlign: "center",
                }}
              >
                50+
              </Heading>
              <Text
                fontSize={{ base: "base", md: "lg", lg: "2xl" }}
                fontWeight="bold"
                textAlign={"center"}
              >
                Top Universities
              </Text>
            </Box>

            
            <Box width={{ base: "45%", lg: "18%" }}>
              <Heading
                size={{ base: "base", md: "lg", lg: "3xl" }}
                style={{
                  background: "linear-gradient(to left, #9acd32, #000080)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  textAlign: "center",
                }}
              >
                100+
              </Heading>
              <Text
                fontSize={{ base: "base", md: "lg", lg: "2xl" }}
                fontWeight="bold"
                textAlign={"center"}
              >
                Projects
              </Text>
            </Box>

            
            <Box width={{ base: "45%", lg: "18%" }}>
              <Heading
                size={{ base: "base", md: "lg", lg: "3xl" }}
                style={{
                  background: "linear-gradient(to left, #9acd32, #000080)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  textAlign: "center",
                }}
              >
                7+
              </Heading>
              <Text
                fontSize={{ base: "base", md: "lg", lg: "2xl" }}
                fontWeight="bold"
                textAlign={"center"}
              >
                Industry Experts
              </Text>
            </Box>

            
            <Box width={{ base: "45%", lg: "18%" }}>
              <Heading
                size={{ base: "base", md: "lg", lg: "3xl" }}
                style={{
                  background: "linear-gradient(to left, #9acd32, #000080)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  textAlign: "center",
                }}
              >
                100+
              </Heading>
              <Text
                fontSize={{ base: "base", md: "lg", lg: "2xl" }}
                fontWeight="bold"
                textAlign={"center"}
              >
                Students
              </Text>
            </Box>
          </Flex>
        </Box>

        <Box fontSize={["sm", "md", "lg", "xl"]}>
          <Heading pt={10} textAlign={"center"}>
            <Heading
              as="span"
              size={{ base: "base", md: "lg", lg: "2xl" }}
              color="#000080"
            >
              What is{" "}
            </Heading>
            <Heading
              as="span"
              size={{ base: "base", md: "lg", lg: "2xl" }}
              color="#9acd32"
            >
              Gyan?
            </Heading>
          </Heading>
          <Center>
            <Center
              w="60vw"
              p={5}
              fontSize={["sm", "md", "lg", "xl"]}
              fontWeight="medium"
              textAlign="justify"
            >
              {" "}
              Gyan@Aim4u - Experience the power of learning with Aim4u. This is
              a transformation in learning process which incorporates internship
              experience along with learning from the industry experts and get
              ready to face the world of Artificial Intelligence and Machine
              Learning.
            </Center>
          </Center>

          <Center>
            <Flex
              wrap={wrap}
              width="70vw"
              justifyContent="space-between"
              gap={"10"}
              pt={5}
            >
              <Box>
                <div className="image-wrapper">
                  <Image src={img1} className="image" />
                  
                </div>
              </Box>
              <Box>
                <div className="image-wrapper">
                  <Image src={img2} className="image" />
                  
                </div>
              </Box>
              <Box></Box>
            </Flex>
          </Center>
        </Box>
        <Box>
          <Box fontSize={["sm", "md", "lg", "xl"]} pt="4%" pl={"4"}>
            <Heading textAlign={"center"}>
              <Heading
                as="span"
                size={{ base: "base", md: "lg", lg: "2xl" }}
                color="#000080"
              >
                Benefits Of Joining Our{" "}
              </Heading>
              <Heading
                as="span"
                size={{ base: "base", md: "lg", lg: "2xl" }}
                color="#9acd32"
              >
                Internship
              </Heading>
            </Heading>

            <Center>
              <Grid
                pt="5vw"
                h="400px"
                mb={"10%"}
                templateRows={{
                  base: "repeat(4, 1fr)",
                  sm: "repeat(4, 1fr)",
                  md: "repeat(4, 1fr)",
                  lg: "repeat(2, 1fr)",
                  xl: "repeat(2, 1fr)",
                }}
                templateColumns={{
                  base: "repeat(4, 1fr)",
                  sm: "repeat(4, 1fr)",
                  md: "repeat(4, 1fr)",
                  lg: "repeat(6, 1fr)",
                  xl: "repeat(6, 1fr)",
                }}
                gap={4}
              >
                <GridItem colSpan={2}>
                  <Center>
                    <Image boxSize="6vw" src={img4} /> <br />
                  </Center>
                  <Center
                    fontSize={["sm", "md", "lg", "xl"]}
                    w="25vw"
                    fontWeight="bold"
                    textAlign= "center"
                  >
                    {" "}
                    Letter Of Recommendation
                  </Center>
                  <Center
                    fontSize={["sm", "md", "lg", "lg"]}
                    className="t"
                    w="25vw"
                    fontWeight="medium"
                    textAlign= "center"
                  >
                    {" "}
                    <Text>
                      Attract top universities and companies with the LOR
                      provided by our world-class professor
                    </Text>{" "}
                  </Center>
                  <br />
                </GridItem>
                <GridItem colSpan={2}>
                  <Center>
                    <Image boxSize="6vw" src={img5} /> <br />
                  </Center>
                  <Center
                    fontSize={["sm", "md", "lg", "xl"]}
                    w="25vw"
                    fontWeight="bold"
                    textAlign= "center"
                  >
                    Internship Certificate
                  </Center>
                  <Center
                    fontSize={["sm", "md", "lg", "lg"]}
                    w="25vw"
                    className="t"
                    fontWeight="medium"
                    textAlign= "center"
                  >
                    {" "}
                    A certificate of Completion to upskill your resume and chart
                    your career growth
                  </Center>
                  <br />
                </GridItem>
                <GridItem colSpan={2}>
                  <Center>
                    <Image boxSize="6vw" src={img6} /> <br />
                  </Center>
                  <Center
                    fontSize={["sm", "md", "lg", "xl"]}
                    w="25vw"
                    fontWeight="bold"
                    textAlign= "center"
                  >
                    {" "}
                    Real-Life Projects{" "}
                  </Center>
                  <Center
                    fontSize={["sm", "md", "lg", "lg"]}
                    w="25vw"
                    className="t"
                    fontWeight="medium"
                    textAlign= "center"
                  >
                    Industry level projects that focus on society issues,
                    business analytics and many more
                  </Center>
                  <br />
                </GridItem>

                <GridItem colSpan={2}>
                  <Center>
                    <Image boxSize="6vw" src={img7} /> <br />
                  </Center>
                  <Center
                    fontSize={["sm", "md", "lg", "xl"]}
                    w="25vw"
                    fontWeight="bold"
                    textAlign= "center"
                  >
                    Research Opportunity
                  </Center>
                  <Center
                    fontSize={["sm", "md", "lg", "lg"]}
                    w="25vw"
                    className="t"
                    fontWeight="medium"
                    textAlign= "center"
                  >
                    {" "}
                    Publishing Research Papers efficiently that will boost your
                    career chart
                  </Center>
                  <br />
                </GridItem>

                <GridItem colSpan={2}>
                  <Center>
                    <Image boxSize="6vw" src={img8} /> <br />
                  </Center>
                  <Center
                    fontSize={["sm", "md", "lg", "xl"]}
                    w="25vw"
                    fontWeight="bold"
                    textAlign= "center"
                  >
                    Structured Learning
                  </Center>
                  <Center
                    fontSize={["sm", "md", "lg", "lg"]}
                    w="25vw"
                    className="t"
                    fontWeight="medium"
                    textAlign= "center"
                  >
                    The course has been designed to facilitate an outcome based
                    learning experience
                  </Center>
                  <br />
                </GridItem>
                <GridItem colSpan={2}>
                  <Center>
                    <Image boxSize="6vw" src={img9} /> <br />
                  </Center>
                  <Center
                    fontSize={["sm", "md", "lg", "xl"]}
                    w="25vw"
                    fontWeight="bold"
                    textAlign= "center"
                  >
                    {" "}
                    And much more!
                  </Center>
                  <Center
                    fontSize={["sm", "md", "lg", "lg"]}
                    w="25vw"
                    className="t"
                    fontWeight="medium"
                    textAlign= "center"
                  >
                    {" "}
                    Connect with mentors and ease your way to the top
                  </Center>
                  
 
                  <br />
                </GridItem>
              </Grid>
            </Center>
          </Box>
            
         <Box
         
         backgroundColor={"White"}
         fontSize={["sm", "md", "lg", "xl"]}
         pt="1%"
         pl={"2"}
         
         
         >



<div style={{ position: "relative"  }}>
  <div style={{ position: "absolute", top: 0, left: 0, width: "100%" }}>
    <Heading
      fontFamily="SF Pro Display, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"                  
      paddingLeft="6%"
      color="#000080"
      width="40%"
    >
      Start Your Career Journey with Our Internships!
    </Heading>
    <Heading
      textAlign="left"
      paddingLeft="6%"
      paddingTop="3%"
      size={{
        base: "base",
        sm: "sm",
        md: "md",
        lg: "lg",
        xl: "lg",
        "2xl": "2xl",
      }}
      marginTop="0%"
    >
      {" "}
      <Link to="/internship">
        <Button
          size={{ base: "sm", md: "md", lg: "lg" }}
          backgroundColor="#000080"
          color="white"
          _hover={{ bg: "#0066cc" }}
          margin="0"
          marginBottom="0"
          fontFamily="SF Pro Display, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"                  
        >
          Apply Now
        </Button>
      </Link>
    </Heading>
  </div>
  <Image
    src={Home }
    alt="picture"
    width="100%"
    height={"350px"}
    pt="0%"
    minW={["100%", "100%", "370px"]}
    // mb={["4", "4", "4"]}
    order={["2", "2", "1"]}
    
    textAlign="justify"
  />
    </div>
        </Box>
      </Box>
  </Box>
      <Footer />
  </Box>
  );
}

export default Landing;
