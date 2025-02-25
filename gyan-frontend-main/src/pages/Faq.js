
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
import { useState } from "react";
import {  Container, Accordion,AccordionIcon, AccordionItem, AccordionButton, AccordionPanel, Icon } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";



const data = [
  {
    title: "What type of internship is provided by us?",
    content: "Gyan offers project-based virtual internships to students across a variety of domains like web development, machine learning, data science, digital marketing and more.",
  },
  {
    title: "What are the benefits of  internships ?",
    content:
      "Internships provide students with practical real-world experience, opportunity to apply their knowledge, exposure to professional environments, chance to build their portfolio and network, and potential to get hired after the internship.",
  },
  {
    title: "What is a project-based internship?",
    content:
      "In a project-based internship, students work on real-world projects under the guidance of experienced mentors. They go through the complete lifecycle of planning, execution and delivery of the project.",
  },
  {
    title: "Who can do an Internship?",
    content:
      "Gyan internships are open to students currently enrolled in graduate or undergraduate programs related to the internship domain. Some internships may have additional eligibility criteria.",
  },
  {
    title: "Why do some of the internship programs involve a fee?",
    content:
      "The fee helps cover the costs of providing mentorship, project guidance, certification and ensuring a quality learning experience for the interns.",
  },
  {
    title: "How flexible is the internship program?",
    content:
      "Gyan internships are designed to be flexible and can be pursued part-time along with studies. Students can work at their own convenient hours.",
  },
  {
    title: "Does the duration of the internship affect the quality of the experience?",
    content:
      "While longer internships allow more time for deeper learning, Gyan ensures that even shorter duration internships provide a comprehensive and valuable experience through focused project work.",
  },
 
  {
    title: "What is a virtual internship?",
    content:
      "A virtual internship is an internship program that allows students to work remotely from any location on real-world projects under the guidance of industry experts.",
  },
  {
    title: "What are the benefits of virtual internships?",
    content:
      "Virtual internships provide flexibility, allow you to intern from anywhere, help build tech skills for remote work, avoid relocation costs, and provide access to opportunities globally.",
  },
  {
    title: "What is the Virtual Internships Program and what does it include?",
    content:
      "The Virtual Internships Program by Gyan provides online internship opportunities across various domains. It includes live mentorship, project work, performance evaluation and certification.",
  },
  {
    title: "What does interning remotely mean?",
    content:
      "Interning remotely means you can participate in the internship program by working from your location using digital collaboration and communication tools, without having to relocate.",
  },
  {
    title: "Who can do a Virtual Internship?",
    content:
      "",
  },
 
];

const Faq = () => {

  
  const { isAdmin } = useSelector((state) => {
    return state.user;
  });
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };


  return (
    <div
    style={{ fontFamily:"SF Pro Display, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"}}

    >
      <NavBar isAdmin={isAdmin} />
      
      <Box as="section" bg="#F3F3F3" py={{ base: 6, md: 16 }}>
      <Container maxW="container.lg" textAlign="center">
        <Text as="h2" fontFamily="Roboto-Light" fontSize={{ base: "24px", md: "32px" }} color="#000000" mb={10}>
          Frequently asked Questions
        </Text>
        {data.map((d, i) => (
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton bg="#ffffff" color="#444" cursor="pointer" borderBottom="1px solid" borderColor="#EBEBEB" borderRadius="4px" _hover={{ bgColor: "#EBEBEB" }} onClick={() => handleToggle(0)}>
                <Box flex="1" textAlign="left">
                  <Text as="span" fontFamily="Roboto-Bold" color="#D40119" p={3}>
                    Q.
                  </Text>
                  <Text as="p" fontSize="20px" color="#5C5C5C" lineHeight="1.5" p={3}>
                   {d.title}
                  </Text>
                </Box>
                <Icon as={ChevronDownIcon} boxSize={6} color="#D40119" transform={expandedIndex === 0 ? "rotate(180deg)" : ""} transition="transform .75s ease-in-out" />
              </AccordionButton>
            </h2>
            <AccordionPanel p={3} color="#5C5C5C" fontSize="16px" bg="white" overflow="hidden" display={expandedIndex === 0 ? "block" : "none"}>
          {d.content}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        ))}
      </Container>
    </Box>
      <Footer />
    </div>
  );
};
export default Faq;
