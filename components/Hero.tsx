import { Flex, Heading, Box, Text } from "@chakra-ui/core";
import { Category } from "../components/CarouselCategory";

export const Hero = () => {
  return (
    <Flex justifyContent="center">
      <Box
        bg="red.500"
        pos="absolute"
        w="100%"
        h={32}
        borderRadius="0px 0px 20px 20px"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)">
        <Heading
          pt="8px"
          color="white"
          fontFamily="ABeeZee"
          fontWeight="normal"
          fontSize="30px"
          fontStyle="normal"
          textAlign="center">
          aqui
          <Text
            fontFamily="ABeeZee"
            display="inline"
            fontSize="40px"
            color="black"
            fontStyle="italic">
            YA
          </Text>
          hora
        </Heading>
      </Box>
      <Category />
    </Flex>
  );
};
