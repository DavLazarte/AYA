import { Entity } from "../../interfaces/index";
import { Locales } from "../entity/EntityComponent";
import {
  Heading,
  Box,
  Center,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/core";

type Props = {
  items: Entity[];
};

export const Destacadas = ({ items }: Props) => {
  return (
    <>
      <Box mt={[64, 72, 80]}>
        <Center>
          <Heading>Destacados</Heading>
        </Center>
        <Tabs m={[1, 3, 5, 7]} variant="soft-rounded" colorScheme="red">
          <Center>
            <TabList>
              <Tab>Delivery</Tab>
              <Tab>Farmacias</Tab>
              <Tab>Servicios</Tab>
            </TabList>
          </Center>
          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <Center>
                <Locales items={items} />
              </Center>
              {/* <Box p={0}> */}
              {/* </Box> */}
            </TabPanel>
            <TabPanel>
              <p>Servicio destacado</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
};
