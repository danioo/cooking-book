import Head from 'next/head'
import { useQuery } from 'urql'
import { Detector } from 'react-detect-offline'
import { Grid } from '@mantine/core'

import { RecipeCard } from 'ui'

const recipesQuery = `
  {
    recipes {
      data {
        id
        attributes {
          name
          recipe
        }
      }
    }
  }
`

interface Recipe {
  id: string,
  attributes: {
    name: string
  }
}

export default function Web() {
  const [result] = useQuery({
    query: recipesQuery
  })

  const { data, fetching, error } = result

  if (fetching) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Oh no... {error.message}</p>
  }

  return (
    <>
      <Head>
        <title>Książka kucharska</title>
      </Head>

      <Detector render={({ online }) => online ? (
        <Grid>
          {data.recipes.data.map((recipe: Recipe) => (
            <Grid.Col span={4} key={recipe.id}>
              <RecipeCard id={recipe.id} title={recipe.attributes.name} />
            </Grid.Col>
          ))}
        </Grid>
      ) : (<p>You are offline!</p>)} />
    </>
  )
}
