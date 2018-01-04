import fetch from 'isomorphic-fetch'
import urlRegex from 'url-regex'

const $apiUrl = Symbol('apiUrl')

const DEFAULT_ROUTE = 'data'

const BASE_FETCH_OPTIONS = {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
}

const BASE_OPTIONS = {
  strictUrlCheck: true
}

export default class HappyFetch {
  constructor (apiUrl, options = BASE_OPTIONS) {
    if (!urlRegex({ exact: options.strictUrlCheck }).test(apiUrl)) {
      throw new Error(`Failed to parse API URL: ${apiUrl} :(`)
    }

    this[$apiUrl] = apiUrl
  }

  query = async (query, variables, route = DEFAULT_ROUTE) => {
    const url = `${this[$apiUrl]}/${route}`

    const payload = {
      query,
      variables
    }

    const options = Object.assign({
      body: JSON.stringify(payload)
    }, BASE_FETCH_OPTIONS)

    const response = await fetch(url, options)
    const responseJson = await response.json()

    if (!responseJson || responseJson.errors) {
      throw new Error(`HappyFetch failed :( Response:\n ${responseJson}`)
    }

    return responseJson.data
  }
}
