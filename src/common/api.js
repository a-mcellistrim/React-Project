// This file handles setting up and talking to an API
// Only required when starting to look at API integration

// Get the API URL from the environment
const API_URL = process.env.REACT_APP_API_URL

// Basic error handling if an API URL was not found
if (!API_URL) {
  console.error('No API URL found!')
}

/**
 * Sends a GET request
 * GET requests are used for reading data from a server
 * @param endpoint - The URL to send the request to
 * @return The response data, otherwise an error
 */
const getRequest = (endpoint) => {
  const url = new URL(endpoint, API_URL).href
  return fetch(url).then(r => {
    if (r.ok) {
      return r.json();
    }
    throw new Error(`Error connecting to: ${url}`);
  })
}

/**
 * Sends a POST request
 * POST requests are used for creating data on a server
 * @param endpoint - The URL to send the request to
 * @param data - The data to send
 * @return The response data, otherwise an error
 */
const postRequest = (endpoint, data) => {
  const url = new URL(endpoint, API_URL).href
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(r => {
    if (r.ok) {
      return r.json();
    }
    throw new Error(`Error connecting to: ${url}`);
  });
}

/**
 * Sends a PUT request
 * PUT requests are used for updating on a server
 * @param endpoint - The URL to send the request to
 * @param data - The data to send
 * @return The response data, otherwise an error
 */
const putRequest = (endpoint, data) => {
  const url = new URL(endpoint, API_URL).href
  return fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(r => {
    if (r.ok) {
      return r.json();
    }
    throw new Error(`Error connecting to: ${url}`);
  });
}

/**
 * Sends a DELETE request
 * DELETE requests are used for deleting data on a server
 * @param endpoint - The URL to send the request to
 */
const deleteRequest = (endpoint) => {
  const url = new URL(endpoint, API_URL).href
  return fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

export { getRequest, postRequest, putRequest, deleteRequest }
