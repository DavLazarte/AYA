import { Box, Link as ChakraLink, Text, IconButton } from "@chakra-ui/core";
import { FaHamburger, FaHandsHelping } from "react-icons/fa";
import { BiHealth } from "react-icons/bi";

export const Category = () => (
  // <Flex boxSize={["sm", "md", "lg", "xl"]} justify="center" mt={[2, 4, 6, 8]}>
  <Box
    pos="absolute"
    display="flex"
    alignItems="center"
    justifyContent="space-evenly"
    // bg="tomato"
    width={[
      "100%", // 0-30em
      "50%", // 30em-48em
      "25%", // 48em-62em
      "15%", // 62em+
    ]}
    // maxWidth="48rem"
    // w="100%"
    // pt="300px"
    p={2}
    mt={[40, 48]}>
    <Box>
      <IconButton
        borderRadius="full"
        bg="white"
        size="lg"
        variant="outline"
        colorScheme="red"
        aria-label="Servicios"
        fontSize="30px"
        icon={<BiHealth />}
      />
      <Text textAlign="center" color="white">
        Salud
      </Text>
    </Box>
    <Box>
      <IconButton
        borderRadius="full"
        bg="white"
        size="lg"
        variant="outline"
        colorScheme="red"
        aria-label="Servicios"
        fontSize="30px"
        icon={<FaHamburger />}
      />
      <Text textAlign="center" color="white">
        Food
      </Text>
    </Box>
    <Box>
      <IconButton
        borderRadius="full"
        bg="white"
        size="lg"
        variant="outline"
        colorScheme="red"
        aria-label="Servicios"
        fontSize="30px"
        icon={<FaHandsHelping />}
      />
      <Text textAlign="center" color="white">
        Servicios
      </Text>
    </Box>
  </Box>
);
