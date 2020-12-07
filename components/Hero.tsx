import { Flex, Heading, Box, Center, Text } from "@chakra-ui/core";
import { Search } from "../components/Search";
import { Category } from "../components/CarouselCategory";
import { GetStaticProps } from "next";
import { Entity } from "../interfaces/index";

type Props = {
  items: Entity[];
};
export const Hero = ({ items }: Props) => {
  return (
    <Flex justifyContent="center">
      <Box
        bg="red.500"
        pos="absolute"
        w="100%"
        h={60}
        borderRadius="0px 0px 20px 20px"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)">
        <Heading
          pt="8px"
          color="white"
          fontFamily="ABeeZee"
          fontWeight="normal"
          fontSize="40px"
          fontStyle="normal"
          textAlign="center">
          aqui
          <Text
            fontFamily="ABeeZee"
            display="inline"
            fontSize="50px"
            color="black"
            fontStyle="italic">
            YA
          </Text>
          hora
        </Heading>
        <Center>
          <Search items={items} />
        </Center>
      </Box>
      <Category />
    </Flex>
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
// Hero.defaultProps = {
//   title: "aquiYAhora",
// };
