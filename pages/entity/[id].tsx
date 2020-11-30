import Link from "next/link";
import fetch from "isomorphic-fetch";
import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import { Entity } from "../../interfaces/index";
import NavBar from "../../components/NavbarComponent";
import { CTA } from "../../components/CTA";
import { Container } from "../../components/Container";
import { Locales } from "../../components/entity/EntityComponent";
import { MdAddLocation } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import {
  Box,
  Badge,
  Image,
  Text,
  HStack,
  Heading,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/core";
type Props = {
  items: Entity;
};
const Local = ({ items }: Props) => {
  return (
    <>
      {/* {items.map((item) => ( */}
      <Box
        m={[3, 5, 7, 9]}
        maxWidth="48rem"
        w="90%"
        borderWidth="3px"
        borderRadius="lg"
        key={items._id}>
        <HStack spacing={2}>
          <Box>
            <Image
              src={items.imagePath}
              alt="Imagen"
              borderRadius="full"
              boxSize={[9, 14, 18]}
              m="2"
            />
          </Box>
          <Heading as="h2" size="md">
            {items.name}
          </Heading>
          {/* onClick={() => router.push("/Entity/[id]", `/entity/${item._id}`)} */}
        </HStack>
        <Box p="2">
          <Box d="flex" alignItems="baseline">
            {items.subcategories.map((cate, i) => (
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
              {items.location.address} - {items.location.city}
            </ListItem>
            <ListItem>
              <ListIcon as={FaWhatsapp} color="green.500" />
              {items.contact.cellphone}
            </ListItem>
          </List>
        </Box>
      </Box>
      {/* ))} */}
    </>
  );
};
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("http://localhost:4000/entities");
  const locales = await res.json();
  const paths = locales.map((loc) => ({
    params: { id: loc._id },
  }));
  return { paths, fallback: false };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (process.env.ENV == "dev") {
    const res = await fetch(`http://localhost:4000/entity/${params.id}`);
    const items: Entity = await res.json();
    return { props: { items } };
  } else {
    const res = await fetch("https://api-aya.herokuapp.com/entities");
    const items: Entity[] = await res.json();
    return { props: { items } };
  }
};
export default Local;
