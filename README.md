# happy-fetch

A simple GraphQL request client.

## Usage

```
import HappyFetch from 'happy-fetch'

const graphqlQuery = `
{
  users {
    _id
    name
  }
}`

const happyFetch = new HappyFetch(<API_URL>)

const response = await happyFetch.query(graphqlQuery)

// Do stuff with response..
```
