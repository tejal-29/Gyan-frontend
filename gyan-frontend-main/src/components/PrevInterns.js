import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Center,
  Flex,
  Grid,
  GridItem,
  Image,
  Spacer,
  Text,
  IconButton, Link as ChakraLink, 
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Tejas from "../images/InternImages/Tejas.png";
import Neil from "../images/InternImages/Neil.png";
import tanvi from "../images/InternImages/tanvi.png";
import Sarah from "../images/InternImages/Sarah.png";
import Aditya from "../images/InternImages/Aditya.png";
import Sumit from "../images/InternImages/Sumit.png";
import Rithvika from "../images/InternImages/Rithvika.png";
import parth from "../images/InternImages/parth.png";
import Mahesh from "../images/InternImages/Mahesh.png";
import palak from "../images/InternImages/palak.png";
import SarahSonje from "../images/InternImages/SarahSonje.png";
import Smruti from "../images/InternImages/Smruti.png";
import Urvi from "../images/InternImages/Urvi.png";
import Aumkar from "../images/InternImages/Aumkar.png";
import Anjali from "../images/InternImages/Anjali.png";
import Tanisha from "../images/InternImages/Tanisha.png";
import { PlayArrow } from "@mui/icons-material";
import linkedin from "../images/linkedin.png";

const PrevInterns = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [internsPerPage, setInternsPerPage] = useState(4); // Default to 4 interns per page

  useEffect(() => {
    const handleResize = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth < 600) setInternsPerPage(2);
        else if (screenWidth >= 600 && screenWidth < 1024) setInternsPerPage(3);
        else setInternsPerPage(6);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
}, [internsPerPage]); // ✅ Add 'internsPerPage' dependency


  const data = [
    {
      srNo: 0,
      name: "Tejas Chheda",
      role: "Machine Learning Software Engineer @ Meta",
      imageSrc: Tejas,
      linkedin: "https://www.linkedin.com/in/tejas-chh?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      srNo: 1,
      name: "Neil Daftary",
      role: "Machine Learning Engineer @ Linkedin",
      imageSrc: Neil,
      linkedin: "https://www.linkedin.com/in/neil-daftary?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      srNo: 2,
      name: "Tanvi Dhope",
      role: "Software Engineer @ Microsoft",
      imageSrc: tanvi,
      linkedin: "https://www.linkedin.com/in/tanvi-dhope?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      srNo: 3,
      name: "Sarah Gawade",
      role: "Software Engineer @ Microsoft",
      imageSrc: Sarah,
      linkedin: "https://www.linkedin.com/in/sarah-gawde-7aa155176?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      srNo: 4,
      name: "Aditya Das",
      role: "Senior Software Engineer @ SalesForce",
      imageSrc: Aditya,
      linkedin: "https://www.linkedin.com/in/adityadas96?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      srNo: 5,
      name: "Sumit Gouthaman",
      role: "Senior Software Engineer @ Google",
      imageSrc: Sumit,
      linkedin: "https://www.linkedin.com/in/sumitgouthaman?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      srNo: 6,
      name: "Rithvika Iyer",
      role: "Former Machine Learning Engineer @ Reliance Jio",
      imageSrc: Rithvika,
      linkedin: "https://www.linkedin.com/in/rithvika-iyer-b93513154?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      srNo: 7,
      name: "Parth Dedhia",
      role: "Senior Machine Learning Engineer @ Quantiphi",
      imageSrc: parth,
      linkedin: "https://www.linkedin.com/in/parth-dedhia?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      srNo: 8,
      name: "Mahesh Tamse",
      role: "Software Development Engineer @ Amazon",
      imageSrc: Mahesh,
      linkedin: "https://www.linkedin.com/in/mahesh-tamse?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      srNo: 9,
      name: "Palak Davda",
      role: "Software Development Engineer @ Amazon",
      imageSrc: palak,
      linkedin: "https://www.linkedin.com/in/palak-davda?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      srNo: 10,
      name: "Sarah Sonje",
      role: "Former Software Development Engineer @ Amazon",
      imageSrc: SarahSonje,
      linkedin: "https://www.linkedin.com/in/sarah-sonje?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      srNo: 11,
      name: "Smruti Varvadekar",
      role: "Software Development Engineer @ AWS-IOT",
      imageSrc: Smruti,
      linkedin: "https://www.linkedin.com/in/smruti-varvadekar-558294122?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      srNo: 12,
      name: "Urvi Bhanushali",
      role: "Former Senior Technology Associate @ Morgan Stanley",
      imageSrc: Urvi,
      linkedin: "https://www.linkedin.com/in/urvibh?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      srNo: 13,
      name: "Aumkar Gadekar",
      role: "Senior Analyst @ Deutsche Bank",
      imageSrc: Aumkar,
      linkedin: "https://www.linkedin.com/in/aumkar-gadekar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      srNo: 14,
      name: "Anjali Karvinde",
      role: "Technology Analyst @ Deutsche Bank",
      imageSrc: Anjali,
      linkedin: "https://www.linkedin.com/in/anjali-kanvinde?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      srNo: 15,
      name: "Tanisha Kulkarni",
      role: "Business Analyst @ Barclays Business Banking",
      imageSrc: Tanisha,
      linkedin: "https://www.linkedin.com/in/tanisha-kulkarni?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ];

  const sliceIndices = [];
  for (let i = 0; i < internsPerPage; i++) {
    sliceIndices.push((currentIndex + i) % data.length);
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    // console.log(internsPerPage);
    // console.log(sliceIndices);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    // console.log(internsPerPage);
    // console.log(sliceIndices);
  };

  return (
    <div>
      <Flex mt="" mb="0" align="center" justify="space-between">
        <Center>
        <IconButton
          icon={<ChevronLeftIcon />}
          aria-label="Previous"
          onClick={handlePrev}
          />

          
          <Grid
            templateColumns={`repeat(${internsPerPage}, 1fr)`}
            gap={4}
            width="90%"
            overflowX="hidden"
          >
            
            {sliceIndices.map((sliceIndex, index) => (
              <GridItem key={index}>
                <Flex
                  direction="column"
                  align="center"
                  justify="center"
                  mb={"40px"}
                  mx={[7, 1]}
                >
                  <Card
                    shadow="2xl"
                    h="425px"
                    w="100%"
                    border="10px"
                    zIndex="1"

                  
                  >
                    <Image
                      src={data[sliceIndex].imageSrc}
                      alt="intern"
                      boxSize="150px"
                      objectFit="cover"
                      borderRadius="md"
                      margin={"auto"}
                      marginTop={"15px"}
                    />
                    <CardHeader
                      textAlign="center"
                      fontWeight={"bold"}
                      fontSize={{ base: "lg", md: "xl" }}
                      mt={{ base: "1", md: "1" }}
                    >
                      {`${data[sliceIndex].name}`}{" "}
                      {/* Display Sr. No. along with name */}
                    </CardHeader>
                    <CardBody>
                      <Text
                        textAlign="center"
                        fontSize={{ base: "sm", md: "md" }}
                        mb="2"
                      >
                        {data[sliceIndex].role}
                      </Text>
                      <ChakraLink href={data[sliceIndex].linkedin} target="_blank" rel="noopener noreferrer">
                        <Image boxSize="25px" ml="70px" mt="10px" src={linkedin}></Image>
                      </ChakraLink>
                    </CardBody>
                  </Card>
                </Flex>
              </GridItem>
            ))}
          </Grid>
        <IconButton
          icon={<ChevronRightIcon />}
          aria-label="Next"
          onClick={handleNext}
          />
          </Center>
      </Flex>
    </div>
  );
};

export default PrevInterns;