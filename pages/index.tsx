import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useRegisterServiceWorker } from "@/hooks/register-sw";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useRegisterServiceWorker();

  return (
    <>
      <Head>
        <title>PWA Demo</title>
        <meta name="description" content="PWA Demo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <p>Hej</p>
      </main>
    </>
  );
}
