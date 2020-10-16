import Head from "next/head";
import Entity from "../components/entity/EntityComponent";
import Header from "../components/permanent/Header";
import Footer from "../components/permanent/Footer";
import fetch from "isomorphic-fetch";
const Enti = (props) => {
  return (
    <>
      <Header />
      <Head>
        <title>Categoria</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/flatly/bootstrap.min.css"
        />
      </Head>
      <Entity entities={props.entities} />
      <Footer />
    </>
  );
};
Enti.getInitialProps = async (ctx) => {
  const res = await fetch("http://localhost:4000/entities");
  const resJSON = await res.json();
  return { entities: resJSON };
};
export default Enti;
