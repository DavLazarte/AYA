import { useRouter } from "next/router";
import Link from "next/link";
import {
  Center,
  Box,
  InputGroup,
  Divider,
  Input,
  Text,
  Stack,
  Avatar,
  InputLeftElement,
  Heading,
  Image,
} from "@chakra-ui/core";
import { GetStaticProps } from "next";
import Head from "next/head";
import { Entity } from "../interfaces/index";
import NavBar from "../components/NavbarComponent";
import { CTA } from "../components/CTA";
import { Container } from "../components/Container";
import fetch from "isomorphic-fetch";
import { useState } from "react";
import { MdSearch } from "react-icons/md";

type Props = {
  items: Entity[];
};
const SearchPage = ({ items }: Props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const results = !searchTerm
    ? []
    : items.filter(
        (local) =>
          local.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
          local.description
            .toLowerCase()
            .includes(searchTerm.toLocaleLowerCase())
      );

  return (
    <>
      <Head>
        <title>Buscar</title>
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
        <Center>
          <Stack spacing={4}>
            <Heading>¿Que Buscas Hoy?</Heading>
            <Box
              borderRadius="10px 10px 10px 10px"
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              m={2}>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  fontSize={20}
                  children={<MdSearch color="green.500" />}
                />
                <Input
                  variant="filled"
                  placeholder="Bares, Servicios, Farmacias y Mas"
                  value={searchTerm}
                  onChange={handleChange}
                />
              </InputGroup>
            </Box>
          </Stack>
        </Center>
        {searchTerm === "" ? (
          <Box mb="33%">
            <Image
              opacity="0.5"
              src="/searchlanding.svg"
              // bg="tomato"
              alt="Imagen background"
              // borderRadius="full"
              boxSize={[72, 80, 96]}
              m="1"></Image>
          </Box>
        ) : (
          <Box m={2} mb="33%">
            {results.map((s, i) => (
              <Stack key={i}>
                <Avatar src={s.imagePath} />
                <Box ml="2">
                  <Text fontWeight="bold">{s.name}</Text>
                  <Text fontSize="sm">{s.location.address}</Text>
                  <Link href="/entity/[id]" as={`/entity/${s._id}`}>
                    Ver Mas
                  </Link>
                </Box>
                <Divider />
              </Stack>
            ))}
          </Box>
        )}
        <CTA />
      </Container>
    </>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  if (process.env.ENV == "dev") {
    const res = await fetch("http://localhost:4000/entities");
    const items: Entity[] = await res.json();
    return { props: { items } };
  } else {
    const res = await fetch("https://api-aya.herokuapp.com/entities");
    const items: Entity[] = await res.json();
    return { props: { items } };
  }
};
export default SearchPage;
