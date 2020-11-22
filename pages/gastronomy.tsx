import Head from "next/head";
import { GastronomyLocal } from "../interfaces/index";
import { NavBar } from "../components/NavbarComponent";
import { CTA } from "../components/CTA";
import { Container } from "../components/Container";
import { Locales } from "../components/gastronomy/localgastronomyController";
import fetch from "isomorphic-fetch";

type Props = {
  items: GastronomyLocal[];
};

const LocalsPage = ({ items }: Props) => {
  return (
    <>
      <Head>
        <title>Bares y Resto</title>
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
        <Locales items={items} />
        <CTA />
      </Container>
    </>
  );
};

LocalsPage.getInitialProps = async (ctx) => {
  if (process.env.ENV == "dev") {
    const res = await fetch("http://localhost:4000/localsgas");
    const resJSON = await res.json();
    return { items: resJSON };
  } else {
    const res = await fetch("https://api-aya.herokuapp.com/gastronomy");
    const resJSON = await res.json();
    return { items: resJSON };
  }
};
export default LocalsPage;
