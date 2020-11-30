import {
  Flex,
  Heading,
  Box,
  Link,
  Text,
  Link as ChakraLink,
  Icon,
  Center,
} from "@chakra-ui/core";
import { MdArrowBack, MdPeople } from "react-icons/md";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <Flex justifyContent="center" mb={16}>
      <Box
        as="nav"
        bg="red.500"
        pos="absolute"
        w="100%"
        h="55px"
        display="flex"
        alignItems="center"
        justifyContent="space-between"

        // pl="0px"
        // pt="0px"
      >
        <Box>
          {/* <ChakraLink href="/"> */}
          <Icon
            as={MdArrowBack}
            boxSize={8}
            color="white"
            onClick={() => router.back()}
          />
          {/* </ChakraLink> */}
        </Box>
        <Box>
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
        <Box>
          {/* <ChakraLink href="/"> */}
          <Icon as={MdPeople} boxSize={8} color="white" />
          {/* </ChakraLink> */}
        </Box>
      </Box>
    </Flex>
  );
}

// Hero.defaultProps = {
//   title: "aquiYAhora",
// };
