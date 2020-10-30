import {
  InputGroup,
  InputRightElement,
  Input,
  Flex,
  Text,
  Box,
  Stack,
  IconButton,
} from "@chakra-ui/core";
import { MdSearch } from "react-icons/md";

export const Search = () => (
  <Flex mt={[2, 4, 6, 8]} justify="center">
    <Stack spacing={4}>
      <Box>
        <InputGroup>
          <Input variant="filled" placeholder="Busca aqui y ahora" />
          <IconButton aria-label="Search database" icon={<MdSearch />} />
        </InputGroup>
      </Box>
    </Stack>
    <Text
      pos="absolute"
      color="white"
      fontFamily="ABeeZee"
      fontWeight="normal"
      fontSize="15px"
      fontStyle="normal"
      textAlign="center"
      mt={[12, 14, 16]}>
      Aqui y ahora lo que queres encontrar
    </Text>
  </Flex>
);
