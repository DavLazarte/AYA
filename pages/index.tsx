import Head from "next/head";
import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
// import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { CTA } from "../components/CTA";

const Index = () => (
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
      <CTA />
    </Container>
  </>
);

export default Index;
