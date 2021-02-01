import { GetServerSideProps } from "next";
import Head from "next/head";
import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { CarouselIndex } from "../components/CarouselIndex";
import { BannerCel } from "../components/promos/BannerCel";
import { Destacadas } from "../components/entity/HighlightComponent";
import { CTA } from "../components/CTA";
import { Entity } from "../interfaces/index";
import fetch from "isomorphic-fetch";
import { VStack, Box, Center, Heading } from "@chakra-ui/core";

type Props = {
  items: Entity[];
};
const Index = ({ items }: Props) => {
  const farma = items.filter((local) =>
    local.subcategories.toString().includes("farmacia")
  );
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/icon-192.png"
          rel="icon"
          type="image/png"
          sizes="192x192"
        />
        <link
          href="/icons/icon-512.png"
          rel="icon"
          type="image/png"
          sizes="512x512"
        />

        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#ff0036" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/flatly/bootstrap.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=ABeeZee&display=swap"
          rel="stylesheet"></link>
        <title>AquiYAhora</title>
      </Head>
      <Container mb={12}>
        <Hero />
        {/* <DarkModeSwitch /> */}
        <CarouselIndex />
        <VStack mt={[80]} spacing={0.25}>
          <Box>
            <Center>
              <Heading>Hoy de Turno</Heading>
            </Center>
            <Destacadas items={farma} />
          </Box>
          <Box>
            <Center>
              <Heading>Destacados</Heading>
            </Center>
            <Destacadas items={items} />
          </Box>
          <Box>
            <BannerCel />
          </Box>
        </VStack>
        <CTA />
      </Container>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  if (process.env.ENV == "dev") {
    const res = await fetch("http://localhost:4000/destacadas");
    const items: Entity[] = await res.json();
    return { props: { items } };
  } else {
    const res = await fetch("https://api-aya.herokuapp.com/destacadas");
    const items: Entity[] = await res.json();
    return { props: { items } };
  }
};

export default Index;
