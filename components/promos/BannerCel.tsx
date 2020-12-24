import {
  Box,
  Link as ChakraLink,
  Text,
  HStack,
  Image,
  Heading,
  Center,
} from "@chakra-ui/core";

export const BannerCel = () => (
  <>
    <Center>
      <Heading fontSize="30px">¡Sumate Gratis!</Heading>
    </Center>
    <Box
      m={[5, 7, 9, 12]}
      width={[
        "90%", // 0-30em
        "50%", // 30em-48em
        "25%", // 48em-62em
        "15%", // 62em+
      ]}
      p={1}
      // mb={[5, 7, 9, 12]}
      borderRadius="20px 20px 20px 20px"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)">
      <Box>
        <HStack spacing={1}>
          <Image
            src="/unite.svg"
            // bg="tomato"
            alt="Imagen"
            // borderRadius="full"
            boxSize={[36, 40, 44]}
            m="1"
          />
          <Box>
            <Heading fontSize="15px" textAlign="center">
              ¿Tenes un negocio, emprendimiento o brindas un servicio? Sumalo al
            </Heading>

            <ChakraLink
              href="https://wa.me/3863515328?text=Hola!%20te%20encontre%20en%20aqui%20y%20ahora"
              isExternal>
              <Heading
                pt="8px"
                color="red.500"
                fontFamily="ABeeZee"
                fontWeight="normal"
                fontSize="20px"
                fontStyle="normal"
                textAlign="center">
                3863515328
              </Heading>
            </ChakraLink>
            {/* <Text>Slide1</Text> */}
          </Box>
        </HStack>
      </Box>
    </Box>
  </>
);
