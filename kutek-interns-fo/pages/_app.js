import '../styles/globals.css';
import Script from 'next/script';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>          
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" 
      rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" 
      crossorigin="anonymous"/>
      </Head>

      <Component {...pageProps} />

      <Script
      id="bootstrap-cdn"
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" />

    </>
  );
}

export default MyApp