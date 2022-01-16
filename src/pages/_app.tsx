import '../styles/globals.scss'
import Layout from '../components/Layout'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import adobeLoader from '../functions/adobeloader'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(()=>{
    if(process.browser){
      adobeLoader(document);
    }
  },[])
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp