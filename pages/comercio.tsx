import { GetStaticProps } from "next";
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

const ComercioPage = ({ items }: Props) => {
  const moda = items.filter((local) =>
    local.subcategories.toString().includes("moda y calzado")
  );
  const pan = items.filter((local) =>
    local.subcategories.toString().includes("panaderia")
  );
  const kiosco = items.filter((local) =>
    local.subcategories.toString().includes("drugstore")
  );
  const ventas = items.filter((local) =>
    local.subcategories.toString().includes("venta")
  );
  const arte = items.filter((local) =>
    local.subcategories.toString().includes("artesania")
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
          Comercios y Emprendimientos
        </Heading>
        <Tabs
          isLazy
          align="center"
          size="sm"
          variant="soft-rounded"
          colorScheme="red">
          <TabList>
            <SimpleGrid columns={3} spacing={1}>
              <Tab>Moda</Tab>
              <Tab>Panaderias</Tab>
              <Tab>Drugstore</Tab>
              <Tab>Ventas</Tab>
              <Tab>Artesanias</Tab>
            </SimpleGrid>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Locales items={moda} />
            </TabPanel>
            <TabPanel>
              <Locales items={pan} />
            </TabPanel>
            <TabPanel>
              <Locales items={kiosco} />
            </TabPanel>
            <TabPanel>
              <Locales items={ventas} />
            </TabPanel>
            <TabPanel>
              <Locales items={arte} />
            </TabPanel>
          </TabPanels>
        </Tabs>
        <CTA />
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  if (process.env.ENV == "dev") {
    const res = await fetch("http://localhost:4000/comercios");
    const items: Entity[] = await res.json();
    return { props: { items } };
  } else {
    const res = await fetch("https://api-aya.herokuapp.com/comercios");
    const items: Entity[] = await res.json();
    return { props: { items } };
  }
};
export default ComercioPage;
