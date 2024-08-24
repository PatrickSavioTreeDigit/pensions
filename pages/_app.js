
import Head from 'next/head';
import '../styles/index.scss';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Brand from '@/components/Brands/Brand';
import { createClient } from 'contentful';
import App from 'next/app';
import { useState } from 'react';

export default function MyApp({ Component, pageProps, preFooter, prefooterDescription,headerContent }) {
const [show,setShow] = useState(false);
 
  return (
    <>
      <Head>
        <title>Diageo Pensions</title>
        <link rel='icon' href='' />
        <meta name="description" content="This is the site for all members of Diageo's UK and Ireland pension schemes." />
      </Head>

      {/* {headerContent && <Header content={headerContent}/>} */}
      {headerContent && <Component {...pageProps} headerContent = {headerContent} prefooterDescriptionContent={prefooterDescription} content={preFooter}/>}
      {/* {preFooter && <Brand content={preFooter} />} */}
      {/* {prefooterDescription && <Footer content={prefooterDescription}  />} */}
     
    </>
  );
}

MyApp.getInitialProps = async (context) => {
  const ctx = await App.getInitialProps(context);
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  try {
    
    const preFooterRes = await client.getEntries({ content_type: 'preFooter' });
    const prefooterDescriptionRes = await client.getEntries({ content_type: 'prefooterDescription' ,"fields.heading":"DIAGEO Pension" });
    const res = await client.getEntries({ content_type: "sectionLinks","fields.title":"Header"})

    
    

    return {
      ...ctx,
      preFooter: preFooterRes.items[0].fields,
      prefooterDescription: prefooterDescriptionRes.items[0].fields,
      headerContent: res.items[0].fields,
     
    };
  } catch (error) {
    console.error('Error fetching Contentful data:', error);
    return { ...ctx };
  }
}; 