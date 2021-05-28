import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.REACT_APP_MARVEL_URL,
  params: {
    apikey: process.env.REACT_APP_PUBLIC_KEY_MARVEL,
    ts: process.env.REACT_APP_TS,
    hash: process.env.REACT_APP_HASH,
    limit: 100
  }
})