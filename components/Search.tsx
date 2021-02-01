import {
  Flex,
  Box,
  List,
  ListItem,
  ListIcon,
  InputGroup,
  Input,
  Text,
  Stack,
  InputLeftElement,
} from "@chakra-ui/core";
import { Entity } from "../interfaces/index";
import { MdSearch } from "react-icons/md";
import SearchIcon from "@chakra-ui/icons";
import { useState } from "react";
import { GetStaticProps } from "next";
type Props = {
  items: Entity[];
};

export const Search = ({ items }: Props) => {
  // const [searchTerm, setSearchTerm] = useState("");
  // const handleChange = (event) => {
  //   setSearchTerm(event.target.value);
  // };
  // const results = !searchTerm
  //   ? []
  //   : items.filter(
  //       (local) =>
  //         local.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
  //         !local.description
  //           .toLowerCase()
  //           .includes(searchTerm.toLocaleLowerCase())
  //     );
  return (
    <Flex mt={[2, 4, 6, 8]} justify="center">
      <Stack spacing={4}>
        <Box>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<MdSearch color="green.500" />}
            />
            <Input variant="filled" placeholder="Busca aqui y ahora" />
          </InputGroup>
        </Box>
      </Stack>
      <Box>
        {/* <List spacing={3}>
          {results.map((s, i) => (
            <ListItem key={i}>{s.name}</ListItem>
          ))}
        </List> */}
      </Box>
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
    </Flex>
  );
};
