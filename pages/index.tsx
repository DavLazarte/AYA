import Head from "next/head";
import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Destacadas } from "../components/entity/HighlightComponent";
// import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { CTA } from "../components/CTA";
import { Farmacia } from "../interfaces/index";
import { Box } from "@chakra-ui/core";
import fetch from "isomorphic-fetch";

type Props = {
  items: Farmacia[];
};
const Index = ({ items }: Props) => {
  return (
    <>
      <Head>
        <title>AquiYAhora</title>
        <link
          href="https://fonts.googleapis.com/css2?family=ABeeZee&display=swap"
          rel="stylesheet"></link>
      </Head>
      <Container>
        <Hero />
        {/* <DarkModeSwitch /> */}
        <Destacadas items={items} />
        <CTA />
      </Container>
    </>
  );
};
Index.getInitialProps = async (ctx) => {
  if (process.env.ENV == "dev") {
    const res = await fetch("http://localhost:4000/farmacias");
    const resJSON = await res.json();
    return { items: resJSON };
  } else {
    const res = await fetch("https://api-aya.herokuapp.com/farmacias");
    const resJSON = await res.json();
    return { items: resJSON };
  }
};

export default Index;
