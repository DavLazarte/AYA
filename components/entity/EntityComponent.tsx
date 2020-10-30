import { NextPage } from "next";
import { SimpleGrid, Box, Divider } from "@chakra-ui/core";
import { Entity } from "../../interfaces/index";

type Props = {
  items: Entity;
};

const Entity: NextPage<Props> = ({ items }) => {
  return (
    <SimpleGrid minChildWidth="120px" spacing="40px">
      <Box w="100%" p={4} color="black">
        <h1>{items.category}</h1>
        <ul>
          {/* {items.map((entity) => (
            <li key={entity._id}>
              <h3>Nombre: {entity.name} &rarr;</h3>
              <p>Dirección: {entity.location.address}</p>
              <p>Contacto: {entity.contact.cellphone}</p>
              <Divider orientation="horizontal" />
            </li>
          ))} */}
        </ul>
      </Box>
    </SimpleGrid>
  );
};

export default Entity;
