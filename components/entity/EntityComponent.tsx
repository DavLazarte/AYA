import { SimpleGrid, Box, Divider } from "@chakra-ui/core";

const Entity = (props) => {
  return (
    <SimpleGrid minChildWidth="120px" spacing="40px">
      <Box w="100%" p={4} color="black">
        <h1>{props.entities.category}</h1>
        <ul>
          {props.entities.map((entity) => (
            <li key={entity._id}>
              <h3>Nombre: {entity.name} &rarr;</h3>
              <p>Dirección: {entity.location.address}</p>
              <p>Contacto: {entity.contact.cellphone}</p>
              <Divider orientation="horizontal" />
            </li>
          ))}
        </ul>
      </Box>
    </SimpleGrid>
  );
};

export default Entity;
