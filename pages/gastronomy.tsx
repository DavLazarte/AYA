import { GetServerSideProps } from "next";
import Head from "next/head";
import { Entity } from "../interfaces/index";
import NavBar from "../components/NavbarComponent";
import { CTA } from "../components/CTA";
import { Container } from "../components/Container";
import { Locales } from "../components/entity/EntityComponent";
import fetch from "isomorphic-fetch";
import {
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  SimpleGrid,
} from "@chakra-ui/core";

type Props = {
  items: Entity[];
};

const BaresPage = ({ items }: Props) => {
  const bar = items.filter((local) =>
    local.subcategories.toString().includes("bar")
  );
  const birra = items.filter((local) =>
    local.subcategories.toString().includes("cerveceria")
  );
  const dely = items.filter((local) => local.delivery);
  const cafe = items.filter((local) =>
    local.subcategories.toString().includes("cafeteria")
  );
  const res = items.filter(
    (local) =>
      local.subcategories.toString().includes("Restaurante") ||
      local.subcategories.toString().includes("resto")
  );
  return (
    <>
      <Head>
        {items.map((item, i) => (
          <title key={i}>{item.categories.toString().replace(",", "-")}</title>
        ))}
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
        <Heading as="h6" size="md" m={[3, 5, 7, 9]}>
          Bares y Deliveries
        </Heading>
        <Tabs
          isLazy
          align="center"
          size="sm"
          variant="soft-rounded"
          colorScheme="red">
          <TabList>
            <SimpleGrid columns={3} spacing={1}>
              <Tab>Bares</Tab>
              <Tab>Cervecerias</Tab>
              <Tab>Deliveries</Tab>
              <Tab>Cafeteria</Tab>
              <Tab>Restaurantes y Restó</Tab>
            </SimpleGrid>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Locales items={bar} />
            </TabPanel>
            <TabPanel>
              <Locales items={birra} />
            </TabPanel>
            <TabPanel>
              <Locales items={dely} />
            </TabPanel>
            <TabPanel>
              <Locales items={cafe} />
            </TabPanel>
            <TabPanel>
              <Locales items={res} />
            </TabPanel>
          </TabPanels>
        </Tabs>
        <CTA />
      </Container>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  if (process.env.ENV == "dev") {
    const res = await fetch("http://localhost:4000/gastronomy");
    const items: Entity[] = await res.json();
    return { props: { items } };
  } else {
    const res = await fetch("https://api-aya.herokuapp.com/gastronomy");
    const items: Entity[] = await res.json();
    return { props: { items } };
  }
};
export default BaresPage;
