import { Flex, Heading, Box, Link, Text } from "@chakra-ui/core";

export const NavBar = () => (
  <Flex justifyContent="center" mb={16}>
    <Box
      as="nav"
      bg="red.500"
      pos="absolute"
      w="100%"
      h="55px"

      // pl="0px"
      // pt="0px"
    >
      <Link href="/">
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
      </Link>
    </Box>
  </Flex>
);

// Hero.defaultProps = {
//   title: "aquiYAhora",
// };
