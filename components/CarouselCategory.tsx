import {
  Box,
  Link as ChakraLink,
  Text,
  IconButton,
  HStack,
} from "@chakra-ui/core";
import { FaHamburger, FaHandsHelping } from "react-icons/fa";
import { GiHealthNormal } from "react-icons/gi";
import { FaStore } from "react-icons/fa";

export const Category = () => (
  <Box
    pos="absolute"
    display="flex"
    alignItems="center"
    justifyContent="space-evenly"
    width={[
      "100%", // 0-30em
      "50%", // 30em-48em
      "25%", // 48em-62em
      "15%", // 62em+
    ]}
    p={1}
    mt={[12, 16, 20]}>
    <ChakraLink href="/salud">
      <Box>
        <IconButton
          borderRadius="full"
          bg="white"
          size="lg"
          variant="outline"
          colorScheme="red"
          aria-label="Salud"
          fontSize="30px"
          icon={<GiHealthNormal />}
        />
        <Text textAlign="center" color="white">
          Salud
        </Text>
      </Box>
    </ChakraLink>
    <ChakraLink href="/gastronomy">
      <Box>
        <IconButton
          borderRadius="full"
          bg="white"
          size="lg"
          variant="outline"
          colorScheme="red"
          aria-label="Food"
          fontSize="30px"
          icon={<FaHamburger />}
        />
        <Text textAlign="center" color="white">
          Food
        </Text>
      </Box>
    </ChakraLink>
    <ChakraLink href="/services">
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
        <Text textAlign="left" color="white">
          Servicios
        </Text>
      </Box>
    </ChakraLink>
    <ChakraLink href="/comercio">
      <Box>
        <IconButton
          borderRadius="full"
          bg="white"
          size="lg"
          variant="outline"
          colorScheme="red"
          aria-label="Servicios"
          fontSize="30px"
          textAlign="left"
          icon={<FaStore />}
        />
        <Text textAlign="left" color="white">
          Comercios
        </Text>
      </Box>
    </ChakraLink>
  </Box>
);
