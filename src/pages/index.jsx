import Head from 'next/head';
import Header from 'src//components/Header';
import Main from 'src/components/Main';
import Footer from 'src/components/Footer';

const App = () => {
  return (
    <><Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      <title>Fuku</title>
    </Head>
    <div className="text-center">
      <Header />
      <Main />
      <Footer />
    </div></>
  );
};

export default App;