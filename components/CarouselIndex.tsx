import {
  Box,
  Link as ChakraLink,
  Text,
  HStack,
  Image,
  Heading,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/core";
import { FaHamburger, FaHandsHelping } from "react-icons/fa";
import { Carousel } from "react-bootstrap";
import { MdLocalPharmacy, MdAddCircle } from "react-icons/md";
// import Image from "next/image";

export const CarouselIndex = () => (
  <Box
    pos="absolute"
    width={[
      "90%", // 0-30em
      "50%", // 30em-48em
      "25%", // 48em-62em
      "15%", // 62em+
    ]}
    p={1}
    mt={[36, 44, 48]}
    borderRadius="20px 20px 20px 20px"
    boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)">
    <Carousel controls={false} indicators={false}>
      <Carousel.Item>
        <Box h={36}>
          <HStack spacing={1}>
            <Image
              src="carousel/slide1.svg"
              // bg="tomato"
              alt="Imagen"
              // borderRadius="full"
              boxSize={[36, 40, 44]}
              m="1"
            />
            <Box>
              <Heading fontSize="20px" textAlign="center">
                Somos
              </Heading>
              <Heading
                pt="8px"
                color="red.500"
                fontFamily="ABeeZee"
                fontWeight="normal"
                fontSize="20px"
                fontStyle="normal"
                textAlign="center">
                aqui
                <Text
                  fontFamily="ABeeZee"
                  display="inline"
                  fontSize="25px"
                  color="black"
                  fontStyle="italic">
                  YA
                </Text>
                hora.app
              </Heading>
              {/* <Text>Slide1</Text> */}
            </Box>
          </HStack>
        </Box>
      </Carousel.Item>
      <Carousel.Item>
        <Box h={36}>
          <HStack spacing={1}>
            <Box>
              <Text
                fontFamily="ABeeZee"
                display="inline"
                fontSize="16px"
                color="black"
                fontStyle="italic">
                Tu App Guia para conectarte con lo que buscas en el momento que
                lo buscas.
              </Text>
            </Box>
            <Image
              src="carousel/slide2.svg"
              // bg="tomato"
              alt="Imagen"
              // borderRadius="full"
              boxSize={[36, 40, 44]}
              m="1"
            />
          </HStack>
        </Box>
      </Carousel.Item>
      <Carousel.Item>
        <Box h={36}>
          <HStack spacing={1}>
            <Image
              src="carousel/slide3.svg"
              // bg="tomato"
              alt="Imagen"
              // borderRadius="full"
              boxSize={[36, 40, 44]}
              m="1"
            />
            <Box>
              <List spacing={2}>
                <ListItem>
                  <ListIcon as={MdLocalPharmacy} color="red.500" />
                  <Text
                    fontFamily="ABeeZee"
                    display="inline"
                    fontSize="15px"
                    color="black"
                    fontStyle="italic">
                    Farmacias
                  </Text>
                </ListItem>
                <ListItem>
                  <ListIcon as={FaHamburger} color="red.500" />
                  <Text
                    fontFamily="ABeeZee"
                    display="inline"
                    fontSize="15px"
                    color="black"
                    fontStyle="italic">
                    Deliveries
                  </Text>
                </ListItem>
                <ListItem>
                  <ListIcon as={FaHandsHelping} color="red.500" />
                  <Text
                    fontFamily="ABeeZee"
                    display="inline"
                    fontSize="15px"
                    color="black"
                    fontStyle="italic">
                    Servicios
                  </Text>
                </ListItem>
                <ListItem>
                  <ListIcon as={MdAddCircle} color="red.500" />
                  <Text
                    fontFamily="ABeeZee"
                    display="inline"
                    fontSize="15px"
                    color="black"
                    fontStyle="italic">
                    y Más.
                  </Text>
                </ListItem>
              </List>
            </Box>
          </HStack>
        </Box>
      </Carousel.Item>
    </Carousel>
  </Box>
);
