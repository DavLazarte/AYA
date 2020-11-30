import { NextPage } from "next";
import {
  Box,
  Badge,
  Image,
  SimpleGrid,
  HStack,
  Heading,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/core";
import { Services } from "../../interfaces/index";
import { MdAddLocation } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

type Props = {
  servs: Services[];
};

export const Servicios: NextPage<Props> = ({ servs }) => {
  return (
    <>
      {servs.map((item) => (
        <Box
          m={[3, 5, 7, 9]}
          maxWidth="48rem"
          w="90%"
          borderWidth="3px"
          borderRadius="lg"
          key={item._id}>
          <HStack spacing={2}>
            <Box>
              <Image
                src={item.imagePath}
                alt="Imagen"
                borderRadius="full"
                boxSize={[9, 14, 18]}
                m="2"
              />
            </Box>
            <Heading as="h2" size="md">
              {item.name}
            </Heading>
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
                  <HStack spacing={1}>
                    <Badge borderRadius="full" px="1" colorScheme="orange">
                      &bull; {cate}
                    </Badge>
                  </HStack>
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
                <ListIcon as={MdAddLocation} color="orange.500" />
                {item.location.address} - {item.location.city}
              </ListItem>
              <ListItem>
                <ListIcon as={FaWhatsapp} color="orange.500" />
                {item.contact.cellphone}
              </ListItem>
            </List>
          </Box>
        </Box>
      ))}
    </>
  );
};
