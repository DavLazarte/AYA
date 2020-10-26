import {
  InputGroup,
  InputRightElement,
  Input,
  Flex,
  Text,
  Box,
  Stack,
} from "@chakra-ui/core";
import { Search2Icon } from "@chakra-ui/icons";

export const Search = () => (
  <Flex mt={[2, 4, 6, 8]} justify="center">
    <Stack spacing={4}>
      <Box>
        <InputGroup>
          <Input variant="filled" placeholder="Busca aqui y ahora" />
          <InputRightElement
            pointerEvents="none"
            children={<Search2Icon color="gray.300" />}
          />
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
