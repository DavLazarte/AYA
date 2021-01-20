import { GetStaticProps } from "next";
import Head from "next/head";
import { Entity } from "../interfaces/index";
import NavBar from "../components/NavbarComponent";
import { CTA } from "../components/CTA";
import { Container } from "../components/Container";
import { Locales } from "../components/entity/EntityComponent";
import { Heading } from "@chakra-ui/core";
import fetch from "isomorphic-fetch";
type Props = {
  items: Entity[];
};

const SaludPage = ({ items }: Props) => {
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
        <Locales items={items} />
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
