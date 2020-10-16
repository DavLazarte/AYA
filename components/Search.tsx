import {  InputGroup, InputRightElement ,Input, Flex } from "@chakra-ui/core";
import {Search2Icon} from "@chakra-ui/icons"

export const Search = () => (
    <Flex boxSize={["sm", "md", "lg", "xl"]}  justify="center" mt={[2, 4, 6, 8]}>
        <InputGroup>
        <Input variant="filled" placeholder="Tenes hambre?, Se te rompio algo?"/>
        <InputRightElement pointerEvents="none" children={<Search2Icon color="gray.300" />} />
        </InputGroup>
    </Flex>
);
