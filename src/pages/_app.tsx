import '../styles/globals.scss'
import Layout from '../components/Layout'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import adobeLoader from '../functions/adobeloader'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(()=>{
    if(process.browser){
      adobeLoader(document);
    }
  },[])

  useEffect(() => {},[router])

  return (
    <Layout route={router.pathname}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp