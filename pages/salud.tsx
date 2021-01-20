import { GetStaticProps } from "next";
import Head from "next/head";
import { Entity } from "../interfaces/index";
import NavBar from "../components/NavbarComponent";
import { CTA } from "../components/CTA";
import { Container } from "../components/Container";
import { Locales } from "../components/entity/EntityComponent";
import {
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  SimpleGrid,
} from "@chakra-ui/core";
import fetch from "isomorphic-fetch";
type Props = {
  items: Entity[];
};

const SaludPage = ({ items }: Props) => {
  const farma = items.filter((local) =>
    local.subcategories.toString().includes("farmacia")
  );
  const estetic = items.filter((local) =>
    local.subcategories.toString().includes("centro de estetica")
  );
  const centrosm = items.filter((local) =>
    local.subcategories.toString().includes("centro medico")
  );
  const psico = items.filter((local) =>
    local.subcategories.toString().includes("psicologia")
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
          Servicios de Salud
        </Heading>
        <Tabs
          isLazy
          align="center"
          size="sm"
          variant="soft-rounded"
          colorScheme="red">
          <TabList>
            <SimpleGrid columns={3} spacing={1}>
              <Tab>farmacias</Tab>
              <Tab>Esteticas</Tab>
              <Tab>Centros Medicos</Tab>
              <Tab>Psicologia</Tab>
            </SimpleGrid>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Locales items={farma} />
            </TabPanel>
            <TabPanel>
              <Locales items={estetic} />
            </TabPanel>
            <TabPanel>
              <Locales items={centrosm} />
            </TabPanel>
            <TabPanel>
              <Locales items={psico} />
            </TabPanel>
          </TabPanels>
        </Tabs>
        <CTA />
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  if (process.env.ENV == "dev") {
    const res = await fetch("http://localhost:4000/salud");
    const items: Entity[] = await res.json();
    return { props: { items } };
  } else {
    const res = await fetch("https://api-aya.herokuapp.com/salud");
    const items: Entity[] = await res.json();
    return { props: { items } };
  }
};
export default SaludPage;
