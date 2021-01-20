import { GetStaticProps, GetServerSideProps } from "next";
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

const ServicesPage = ({ items }: Props) => {
  const aa = items.filter((local) =>
    local.subcategories.toString().includes("aires acondicionados")
  );
  const estetic = items.filter((local) =>
    local.subcategories.toString().includes("centro de estetica")
  );
  const hogar = items.filter((local) =>
    local.subcategories.toString().includes("hogar")
  );
  const profe = items.filter((local) =>
    local.subcategories.toString().includes("profesor")
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
          Servicios
        </Heading>
        <Tabs
          isLazy
          align="center"
          size="sm"
          variant="soft-rounded"
          colorScheme="red">
          <TabList>
            <SimpleGrid columns={3} spacing={1}>
              <Tab>Aires Acondicionados</Tab>
              <Tab>Belleza y estetica</Tab>
              <Tab>Hogar</Tab>
              <Tab>Profesores</Tab>
            </SimpleGrid>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Locales items={aa} />
            </TabPanel>
            <TabPanel>
              <Locales items={estetic} />
            </TabPanel>
            <TabPanel>
              <Locales items={hogar} />
            </TabPanel>
            <TabPanel>
              <Locales items={profe} />
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
    const res = await fetch("http://localhost:4000/services");
    const items: Entity[] = await res.json();
    return { props: { items } };
  } else {
    const res = await fetch("https://api-aya.herokuapp.com/services");
    const items: Entity[] = await res.json();
    return { props: { items } };
  }
};
export default ServicesPage;
