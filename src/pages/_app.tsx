import 'src/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import Header from 'src/components/Header';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <link rel="icon" href="/favicon.ico" />
      <title>Fuku</title>
    </Head>
    <Header />
    <Component {...pageProps} />
    </>
  );
};

export default App;