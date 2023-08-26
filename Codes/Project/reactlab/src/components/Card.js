import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Box bg="white" borderRadius="lg" paddingBottom={2}>
      <VStack gap={5}>
       <Image src={imageSrc}  borderRadius='lg'/>
      <VStack  gap={6} paddingX={4} align="start">
        
      <Heading align="flex-start" size="md" textColor="black">{title}</Heading>
       <Text textColor="blackAlpha.700">{description}</Text>
       <HStack>
          <Text textColor="black">See More</Text> 
          <FontAwesomeIcon color="black" size="1x"  icon={faArrowRight}/>
       </HStack>
      </VStack>
    </VStack>
    </Box>
     
  );
};

export default Card;
