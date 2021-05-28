import axios from 'axios'

let token = JSON.parse(localStorage.getItem('auth'))?.token;
let configFromLocalStorage = null

if (token) {
  configFromLocalStorage = {
    headers: {
      'Authorization': token
    }
  }
}

const BASE_URL = '/api/v1'
const LEADS_URL = `${BASE_URL}/leads`
const USERS_URL = `${BASE_URL}/users`
const SIGN_IN_URL = `${BASE_URL}/signin`
// leads

export const getLeads = () => {
  return axios.get(LEADS_URL)
}

export const createLead = (lead_params) => {
  return axios.post(LEADS_URL, lead_params)
}

export const getLead = (leadSlug) => {
  return axios.get(`${LEADS_URL}/${leadSlug}`)
}

export const updateLead = (leadSlug, leadParams) => {
  return axios.patch(`${LEADS_URL}/${leadSlug}`, leadParams)
}

export const destroyLead = (leadSlug) => {
  return axios.delete(`${LEADS_URL}/${leadSlug}`)
}

// touches

export const getTouches = (leadSlug) => {
  return axios.get(`${LEADS_URL}/${leadSlug}/touches`)
}

// users
export const createUser = (userParams) => {
  return axios.post(`${USERS_URL}`, userParams)
}

// auth

export const signIn = (userParams) => {
  return axios.post(SIGN_IN_URL, userParams)
}