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
      {/* <SimpleGrid minChildWidth="120px" spacing="40px"> */}
      {items.map((item) => (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src={item.imagePath} alt="Imagen" />
          <Box p="6">
            <Box d="flex" alignItems="baseline">
              <Badge borderRadius="full" px="2" colorScheme="teal">
                Categorias
              </Badge>
              {item.category.map((cate) => (
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2">
                  &bull; {cate.subcategory}
                </Box>
              ))}
            </Box>
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated>
              {item.name}
            </Box>
          </Box>
          <Text>Dirección: {item.location.address}</Text>
          <Text>Contacto: {item.contact.cellphone}</Text>
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
