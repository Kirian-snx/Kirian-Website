import { SWRConfig } from 'swr'

import Layout from '@/components/Layout'

import fetch from '@/lib/fetchJson'
import '../styles/globals.scss'
import '../styles/fonts.scss'
import App from 'next/app'
 
export default function MyApp({ Component, pageProps, example }) {
  return (
    <SWRConfig
            value={{
                fetcher: fetch,
                onError: (err) => {
                    console.error(err)
                },
            }}
        >
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </SWRConfig>
  )
}
 
MyApp.getInitialProps = async (context) => {
  const ctx = await App.getInitialProps(context)
 
  return { ...ctx, example: 'data' }
}
