import { Flex, Heading, Box, Center,Text } from "@chakra-ui/core";
import {Search} from "../components/Search"

export const Hero = () => (
  <Flex justifyContent="center"  >
   <Box
    bg="red.500"
    pos="absolute"
    w="100%"
    h="235px"
    pl="0px"
    pt="0px"
    borderRadius="0px 0px 20px 20px"
    boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
  >
    <Heading
      pt="8px"
      color="white"
      fontFamily="ABeeZee"
      fontWeight="normal"
      fontSize="40px"
      fontStyle="normal"
      textAlign="center"
      
    >
   
      aqui<Text display="inline" fontSize="50px" color="black" fontStyle="italic">YA</Text>hora
    </Heading>
    <Center>
    <Search/>
    </Center>
    <Box>
    <Text
    pos="absolute"
      color="white"
      fontFamily="ABeeZee"
      fontWeight="normal"
      fontSize="20px"
      fontStyle="normal"
      lineHeight="47px"
      textAlign="center">Lo que Buscas cuando lo Buscas</Text>
    </Box>
  </Box>
  </Flex>
 
);

// Hero.defaultProps = {
//   title: "aquiYAhora",
// };
