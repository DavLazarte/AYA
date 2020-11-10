import { NextPage } from "next";
import { Box, Badge, Image, Text, HStack, Stack } from "@chakra-ui/core";
import { Entity } from "../../interfaces/index";

type Props = {
  items: Entity[];
};

export const Locales: NextPage<Props> = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <Box
          m={[1, 3, 5, 7]}
          maxWidth="48rem"
          w="90%"
          borderWidth="3px"
          borderRadius="lg"
          key={item._id}>
          <HStack spacing={1}>
            <Box>
              <Image
                src={item.imagePath}
                alt="Imagen"
                borderRadius="full"
                boxSize="50px"
                m="2"
              />
            </Box>
            <Box p="6">
              <Box d="flex" alignItems="baseline">
                {item.category.map((cate) => (
                  <Box
                    color="gray.500"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize="xs"
                    textTransform="uppercase"
                    ml="2"
                    key={item._id}>
                    <Badge borderRadius="full" px="2" colorScheme="teal">
                      &bull; {cate.subcategory}
                    </Badge>
                  </Box>
                ))}
              </Box>
            </Box>
          </HStack>
          <Box
            mt={1}
            ml={3}
            mr={3}
            letterSpacing="wide"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated>
            {item.name}
            <Text textAlign="left">{item.location.address}</Text>
            <Text textAlign="left">{item.contact.cellphone}</Text>
          </Box>
        </Box>
      ))}
    </>
  );
};
