import { GetServerSideProps } from "next";
import Head from "next/head";
import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { CarouselIndex } from "../components/CarouselIndex";
import { Destacadas } from "../components/entity/HighlightComponent";
import { CTA } from "../components/CTA";
import { Entity } from "../interfaces/index";
import fetch from "isomorphic-fetch";

type Props = {
  items: Entity[];
};
const Index = ({ items }: Props) => {
  return (
    <>
      <Head>
        <title>AquiYAhora</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/flatly/bootstrap.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=ABeeZee&display=swap"
          rel="stylesheet"></link>
      </Head>
      <Container>
        <Hero />
        <CarouselIndex />
        {/* <DarkModeSwitch /> */}
        <Destacadas items={items} />
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
