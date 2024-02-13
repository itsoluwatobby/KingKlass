import axios from 'axios';
import { urlPath, Endpoints } from './endpoints'

const BASEURL = 'http://web-02.obimbasmart.tech/'

const requests = axios.create(
  {
    baseURL: BASEURL,
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  }
)