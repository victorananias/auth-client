import axios from 'axios'

const http = axios.create({ baseURL: 'http://localhost:8080', headers: {} })

export const login = async (username, password) => await http.post('login', { username, password })