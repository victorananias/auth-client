const baseUrl = 'http://localhost:8080'
export const login = (username, password) => {
  const headers = new Headers()
  headers.append('Content-Type', 'application/json')
  headers.append('Access-Control-Allow-Origin', '*')
  headers.append('Access-Control-Allow-Methods', 'DELETE, POST, GET, OPTIONS')
  headers.append('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With')
  const body = {
    username,
    password
  }
  const init = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(body)
  }
  return fetch(`${baseUrl}`, init)
}