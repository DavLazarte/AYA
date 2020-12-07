import {
  Center,
  Box,
  List,
  ListItem,
  ListIcon,
  InputGroup,
  Input,
  Text,
  Stack,
  IconButton,
  InputRightElement,
} from "@chakra-ui/core";
import { Search } from "../components/Search";
import { GetStaticProps } from "next";
import Head from "next/head";
import { Entity } from "../interfaces/index";
import NavBar from "../components/NavbarComponent";
import { CTA } from "../components/CTA";
import { Container } from "../components/Container";
import { Locales } from "../components/entity/EntityComponent";
import fetch from "isomorphic-fetch";
import { useState, useEffect } from "react";
import { MdCheckCircle, MdSearch } from "react-icons/md";

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
    : items.filter((local) =>
        local.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      );

  return (
    <>
      <Head>
        <title>Busqueda</title>
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
          {/* <Stack spacing={4}> */}
          {/* <Box> */}
          <InputGroup>
            <Input
              variant="outline"
              placeholder="Busca aqui y ahora"
              value={searchTerm}
              onChange={handleChange}
            />
            <InputRightElement
              pointerEvents="none"
              children={<MdSearch color="green.500" fontSize="20px" />}
            />
          </InputGroup>
          {/* </Box> */}
          {/* </Stack> */}
          {/* <Text
            pos="absolute"
            color="Black"
            fontFamily="ABeeZee"
            fontWeight="normal"
            fontSize="15px"
            fontStyle="normal"
            textAlign="center"
            mt={[12, 14, 16]}>
            Aqui y ahora lo que queres encontrar
          </Text> */}
          {/* <Search onChange={handleChange} /> */}
        </Center>
        <Box>
          <List spacing={3}>
            {results.map((s, i) => (
              <ListItem key={i}>{s.name}</ListItem>
            ))}
          </List>
        </Box>
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
