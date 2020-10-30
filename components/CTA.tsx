import {
  Link as ChakraLink,
  Box,
  Flex,
  Icon,
  SimpleGrid,
  Center,
  Text,
} from "@chakra-ui/core";
import { MdHome, MdSearch, MdExplore } from "react-icons/md";

import { Container } from "../components/Container";

export const CTA = () => (
  <Container
    flexDirection="row"
    position="fixed"
    bottom="0"
    width="100%"
    // maxWidth="48rem"
    // py={2}
  >
    <Box
      as="nav"
      bg="gray.300"
      pos="absolute"
      w="100%"
      h="65px"
      left="0px"
      bottom="0"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)">
      {/* <SimpleGrid columns={[3, null, 4]} spacing={20}> */}
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box>
          <ChakraLink>
            <Icon as={MdHome} boxSize={12} color="red.500" />
          </ChakraLink>
          <Text textAlign="center" fontSize="12px" color="red.500">
            Home
          </Text>
        </Box>
        <Box>
          <ChakraLink>
            <Icon as={MdSearch} boxSize={12} color="red.500" />
          </ChakraLink>
          <Text textAlign="center" fontSize="12px" color="red.500">
            Buscar
          </Text>
        </Box>
        <Box>
          <ChakraLink href="/entities">
            <Icon as={MdExplore} boxSize={12} color="red.500" />
          </ChakraLink>
          <Text textAlign="center" fontSize="12px" color="red.500">
            Explorar
          </Text>
        </Box>
      </Box>
      {/* </SimpleGrid> */}
    </Box>
  </Container>
);
{
  /* 
   <Container
    flexDirection="row"
    position="fixed"
    bottom="0"
    width="100%"
    maxWidth="48rem"
    py={2}
  ><ChakraLink isExternal href="https://chakra-ui.com" flexGrow={1} mx={2}>
      <Button width="100%" variant="outline" colorScheme="green">
        chakra-ui
      </Button>
    </ChakraLink>

    <ChakraLink
      isExternal
      href="https://github.com/vercel/next.js/blob/canary/examples/with-chakra-ui-typescript"
      flexGrow={3}
      mx={2}
    >
      <Button width="100%" variant="solid" colorScheme="green">
        View Repo
      </Button>
    </ChakraLink> 
  </Container>*/
}
