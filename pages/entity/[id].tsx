import Link from "next/link";
import fetch from "isomorphic-fetch";
import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import { Entity } from "../../interfaces/index";
import NavBar from "../../components/NavbarComponent";
import { CTA } from "../../components/CTA";
import { Container } from "../../components/Container";
import { MdAddLocation, MdCheck, MdWatchLater, MdClose } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { SiFacebook } from "react-icons/si";
import { GiHealthNormal } from "react-icons/gi";
import {
  Box,
  Badge,
  Image,
  Text,
  Divider,
  Heading,
  List,
  ListItem,
  ListIcon,
  Center,
  Link as ChakraLink,
  HStack,
  Tag,
  TagLeftIcon,
  TagLabel,
} from "@chakra-ui/core";
type Props = {
  items: Entity;
};
const Local = ({ items }: Props) => {
  return (
    <>
      <Head>
        <title>{items.name}</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/flatly/bootstrap.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=ABeeZee&display=swap"
          rel="stylesheet"></link>
      </Head>
      <Container>
        <NavBar />
        <Box
          m={[3, 5, 7, 9]}
          maxWidth="48rem"
          w="90%"
          mb="33%"
          borderWidth="3px"
          borderRadius="lg"
          key={items._id}>
          <Center>
            <Image
              src={items.imagePath}
              alt="Imagen"
              borderRadius="full"
              boxSize={[36, 40, 44]}
              m="2"
            />
            <Heading as="h2" size="md" m={[3, 5]}>
              {items.name}
            </Heading>
          </Center>
          {/*
          {/* <HStack spacing={2}> */}
          {/* {items.name ? (
          ) : (
            <Heading as="h2" size="md">
              Hola
            </Heading>
          )} */}
          {/* </HStack> */}
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
            <Text mt={2}>{items.description}</Text>
          </Box>
          <Box
            m={2}
            letterSpacing="wide"
            fontWeight="semibold"
            // as="h4"
            lineHeight="tight"
            isTruncated>
            <Box d="flex" alignItems="baseline" mb={2}>
              <ChakraLink href={items.contact.facebook} isExternal>
                <ListIcon
                  fontSize="1.4rem"
                  _visited={{ color: "green.300" }}
                  as={SiFacebook}
                  color="green.500"
                />
              </ChakraLink>
              <ChakraLink href={items.contact.instagram} isExternal>
                <ListIcon
                  fontSize="1.4rem"
                  as={FiInstagram}
                  color="green.500"
                />
              </ChakraLink>
              {items.turno ? (
                <Tag size="sm" variant="subtle" colorScheme="green">
                  <TagLeftIcon boxSize="12px" as={GiHealthNormal} />
                  <TagLabel>DE TURNO</TagLabel>
                </Tag>
              ) : null}
            </Box>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={MdAddLocation} color="green.500" />
                {items.location.address} - {items.location.city}
              </ListItem>
              <ListItem>
                <ListIcon as={FaWhatsapp} color="green.500" />
                {items.contact.cellphone}
              </ListItem>
              <ListItem>
                <ListIcon as={MdWatchLater} color="green.500" />
                {items.businessHours}
              </ListItem>
            </List>
          </Box>
          <Divider />
          {items.categories.toString().includes("gastronomia") ? (
            <Box
              m={3}
              letterSpacing="wide"
              fontWeight="semibold"
              // as="h4"
              lineHeight="tight"
              isTruncated
              d="flex"
              alignItems="baseline">
              <HStack spacing={4}>
                {items.delivery ? (
                  <Tag size="sm" variant="subtle" colorScheme="green">
                    <TagLeftIcon boxSize="12px" as={MdCheck} />
                    <TagLabel>Delivery</TagLabel>
                  </Tag>
                ) : (
                  <Tag size="sm" variant="subtle" colorScheme="red">
                    <TagLeftIcon boxSize="12px" as={MdClose} />
                    <TagLabel>Delivery</TagLabel>
                  </Tag>
                )}
                {items.almuerzo ? (
                  <Tag size="sm" variant="subtle" colorScheme="green">
                    <TagLeftIcon boxSize="12px" as={MdCheck} />
                    <TagLabel>Almuerzo</TagLabel>
                  </Tag>
                ) : (
                  <Tag size="sm" variant="subtle" colorScheme="red">
                    <TagLeftIcon boxSize="12px" as={MdClose} />
                    <TagLabel>Almuerzo</TagLabel>
                  </Tag>
                )}
                {items.merienda ? (
                  <Tag size="sm" variant="subtle" colorScheme="green">
                    <TagLeftIcon boxSize="12px" as={MdCheck} />
                    <TagLabel>Merienda</TagLabel>
                  </Tag>
                ) : (
                  <Tag size="sm" variant="subtle" colorScheme="red">
                    <TagLeftIcon boxSize="12px" as={MdClose} />
                    <TagLabel>Merienda</TagLabel>
                  </Tag>
                )}
              </HStack>
            </Box>
          ) : null}
        </Box>
      </Container>
      <CTA />
    </>
  );
};
export const getStaticPaths: GetStaticPaths = async () => {
  if (process.env.ENV == "dev") {
    const res = await fetch("http://localhost:4000/entities");
    const locales = await res.json();
    const paths = locales.map((loc) => ({
      params: { id: loc._id },
    }));
    return { paths, fallback: false };
  } else {
    const res = await fetch("https://api-aya.herokuapp.com/entities");
    const locales = await res.json();
    const paths = locales.map((loc) => ({
      params: { id: loc._id },
    }));
    return { paths, fallback: false };
  }
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (process.env.ENV == "dev") {
    const res = await fetch(`http://localhost:4000/entity/${params.id}`);
    const items: Entity = await res.json();
    return { props: { items } };
  } else {
    const res = await fetch(
      `https://api-aya.herokuapp.com/entity/${params.id}`
    );
    const items: Entity[] = await res.json();
    return { props: { items } };
  }
};
export default Local;
