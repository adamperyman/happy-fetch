# happy-fetch

A simple GraphQL request client.

![](https://media.giphy.com/media/1136UBdSNn6Bu8/giphy.gif)

## Usage

```
import HappyFetch from 'happy-fetch'

const graphqlQuery = `{
  users {
    _id
    name
  }
}`

try {
  const happyFetch = new HappyFetch(<API_URL>)

  const response = await happyFetch.query(graphqlQuery)

  // Do stuff with response..
} catch (error) {
  // Handle API errors..
}

```
