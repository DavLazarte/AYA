import { NextPage, NextPageContext } from "next";
import Head from "next/head";
import {
  Badge,
  Box,
  Divider,
  Image,
  ListItem,
  UnorderedList,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  HStack,
} from "@chakra-ui/core";
import { Entity } from "../interfaces/index";
import { NavBar } from "../components/NavbarComponent";
import { CTA } from "../components/CTA";
import fetch from "isomorphic-fetch";

type Props = {
  items: Entity[];
};

const Entities: NextPage<Props> = ({ items }) => {
  return (
    <>
      <Head>
        <title>Categoria</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/flatly/bootstrap.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=ABeeZee&display=swap"
          rel="stylesheet"></link>
      </Head>
      <NavBar />
      {/* <SimpleGrid minChildWidth="120px" spacing="10"> */}
      {items.map((item) => (
        <Box m={5} maxW="sm" borderWidth="3px" borderRadius="lg">
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
                    ml="2">
                    <Badge borderRadius="full" px="2" colorScheme="teal">
                      &bull; {cate.subcategory}
                    </Badge>
                  </Box>
                ))}
              </Box>
            </Box>
          </HStack>
          <Box
            mt="1"
            ml="3"
            mr="3"
            letterSpacing="wide"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated>
            {item.name}
            <Text>{item.location.address}</Text>
            <Text>{item.contact.cellphone}</Text>
          </Box>
        </Box>
      ))}
      {/* </SimpleGrid> */}
      <CTA />
    </>
  );
};

Entities.getInitialProps = async (ctx) => {
  const res = await fetch("http://localhost:4000/entities");
  const resJSON = await res.json();
  return { items: resJSON };
};
export default Entities;
