import type { AppProps } from 'next/app'
import { Provider } from 'urql'
import { MantineProvider } from '@mantine/core'

import { client } from '../libs/graphqlClient'
import Layout from '../components/layout'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Provider value={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </MantineProvider>
  )
}
