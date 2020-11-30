import { Entity } from "../../interfaces/index";
import { Locales } from "../entity/EntityComponent";
// import { LocalesGast } from "../gastronomy/localgastronomyController";
// import { Servicios } from "../servi/ServicesComponent";
import { Carousel, CarouselItem } from "react-bootstrap";
import { MdAddLocation } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import {
  Heading,
  Box,
  Center,
  Badge,
  Image,
  HStack,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/core";

type Props = {
  items: Entity[];
};

export const Destacadas = ({ items }: Props) => {
  return (
    <>
      <Box mt={[64, 72, 80]}>
        <Center>
          <Heading>Destacados</Heading>
        </Center>
        <Carousel>
          {items.map((item) => (
            <Carousel.Item key={item._id}>
              <Box
                m={[5, 7, 9, 12]}
                maxWidth="48rem"
                w="90%"
                borderWidth="3px"
                borderRadius="lg">
                <HStack spacing={2}>
                  <Box>
                    <Image
                      src={item.imagePath}
                      alt="Imagen"
                      borderRadius="full"
                      boxSize={[12, 14, 18]}
                      m="2"
                    />
                  </Box>
                  <Box>
                    <Heading as="h2" size="md">
                      {item.name}
                    </Heading>
                  </Box>
                </HStack>
                <Box p="2">
                  <Box d="flex" alignItems="baseline">
                    {item.subcategories.map((cate, i) => (
                      <Box
                        color="gray.500"
                        fontWeight="normal"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                        ml="1"
                        key={i}>
                        <Badge borderRadius="full" px="1" colorScheme="teal">
                          &bull; {cate}
                        </Badge>
                      </Box>
                    ))}
                  </Box>
                </Box>
                <Box
                  m={3}
                  letterSpacing="wide"
                  fontWeight="semibold"
                  // as="h4"
                  lineHeight="tight"
                  isTruncated>
                  <List spacing={3}>
                    <ListItem>
                      <ListIcon as={MdAddLocation} color="green.500" />
                      {item.location.address} - {item.location.city}
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaWhatsapp} color="green.500" />
                      {item.contact.cellphone}
                    </ListItem>
                  </List>
                </Box>
              </Box>
            </Carousel.Item>
          ))}
        </Carousel>
      </Box>
    </>
  );
};
