import Head from "next/head";
import '../styles/globals.css'


const MyApp = ({ Component, pageProps }) =>  {
  return (
    <div className="root-app">
        <Head>
            <title>Create Next App Edit</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
    </div>
)
}

export default MyApp
