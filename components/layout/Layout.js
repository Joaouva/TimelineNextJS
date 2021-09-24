import Head from "next/head";
import Header from "../header/header";
import styles from "./layout.module.scss";

function Layout({ children, home, isLoggedIn, setIsLoggedIn }) {

    console.log(isLoggedIn);
    console.log(setIsLoggedIn);
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Exercise Next.js" />
      </Head>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
