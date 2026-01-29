import axios from 'axios'
import { STORE_API } from '../constants'

export const storeApi = axios.create({
  baseURL: STORE_API,
  headers: {
    'Content-Type': 'application/json'
  }
})
