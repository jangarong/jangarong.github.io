import type { AppProps } from 'next/app'
import Layout from '../components/layout'

import '../styles/globals.scss'
import '../styles/card.scss'
import 'pattern.css/pattern.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )

}

export default MyApp