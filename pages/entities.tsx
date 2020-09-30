import Head from "next/head"
import Entity from "../components/entity/EntityComponent"
import fetch from "isomorphic-fetch";
import styles from "../styles/Home.module.css"
const Enti = (props) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Categoria</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/flatly/bootstrap.min.css" />
            </Head>
            <main className={styles.main}>
                {/* <h1 className={styles.title}>Categoria</h1> */}
                <Entity entities={props.entities} />
            </main>
        </div>
    )
}
Enti.getInitialProps = async (ctx) => {
    const res = await fetch("http://localhost:4000/entities");
    const resJSON = await res.json();
    return { entities: resJSON };
};
export default Enti