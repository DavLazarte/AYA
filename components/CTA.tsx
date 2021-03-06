import { Link as ChakraLink, Box, Icon, Text, Badge } from "@chakra-ui/core";
import { MdHome, MdSearch, MdExplore } from "react-icons/md";
import { Container } from "../components/Container";

export const CTA = () => (
  <Box
    flexDirection="row"
    position="fixed"
    bottom="0"
    width="100%"
    as="nav"
    bg="gray.300"
    // pos="absolute"
    // w="100%"
    // h="65px"
    // left="0px"
    // bottom="0"
    boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)">
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Box>
        <ChakraLink href="/">
          <Icon as={MdHome} boxSize={10} color="red.500" />
        </ChakraLink>
        <Text textAlign="center" fontSize="10px" color="red.500">
          Home
        </Text>
      </Box>
      <Box>
        <ChakraLink href="/search">
          <Icon as={MdSearch} boxSize={10} color="red.500" />
        </ChakraLink>
        <Text textAlign="center" fontSize="10px" color="red.500">
          Buscar
        </Text>
      </Box>
      <Box>
        <ChakraLink href="#">
          <Icon as={MdExplore} boxSize={10} color="red.500" />
        </ChakraLink>
        <Text textAlign="center" fontSize="10px" color="red.500">
          Pronto
        </Text>
      </Box>
    </Box>
  </Box>
);
