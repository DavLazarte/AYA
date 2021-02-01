import Head from "next/head";
import { Entity } from "../interfaces/index";
import NavBar from "../components/NavbarComponent";
import { CTA } from "../components/CTA";
import { Container } from "../components/Container";
import { Locales } from "../components/entity/EntityComponent";
import fetch from "isomorphic-fetch";

type Props = {
  items: Entity[];
};

const Entities = ({ items }: Props) => {
  return (
    <>
      <Head>
        <title>Novedades</title>
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
        {/* <Locales items={items} /> */}
        <CTA />
      </Container>
    </>
  );
};

// Entities.getInitialProps = async () => {
//   if (process.env.ENV == "dev") {
//     const res = await fetch("http://localhost:4000/entities");
//     const resJSON = await res.json();
//     return { items: resJSON };
//   } else {
//     const res = await fetch("https://api-aya.herokuapp.com/entities");
//     const resJSON = await res.json();
//     return { items: resJSON };
//   }
// };
export default Entities;
