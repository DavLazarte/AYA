import { Flex, Heading, Box, Center, Text } from "@chakra-ui/core";
import { Search } from "../components/Search";
import { Category } from "../components/CarouselCategory";

export const Hero = () => (
  <Flex justifyContent="center">
    <Box
      bg="red.500"
      pos="absolute"
      w="100%"
      h={60}
      borderRadius="0px 0px 20px 20px"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)">
      <Heading
        pt="8px"
        color="white"
        fontFamily="ABeeZee"
        fontWeight="normal"
        fontSize="40px"
        fontStyle="normal"
        textAlign="center">
        aqui
        <Text
          fontFamily="ABeeZee"
          display="inline"
          fontSize="50px"
          color="black"
          fontStyle="italic">
          YA
        </Text>
        hora
      </Heading>
      <Center>
        <Search />
      </Center>
    </Box>
    <Category />
  </Flex>
);

// Hero.defaultProps = {
//   title: "aquiYAhora",
// };
