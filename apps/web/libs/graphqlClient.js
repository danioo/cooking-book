import { createClient } from 'urql'

export const client = createClient({
  url: 'http://localhost:1337/graphql',
  requestPolicy: 'cache-and-network'
})
