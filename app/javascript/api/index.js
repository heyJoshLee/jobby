import axios from 'axios'

let token = JSON.parse(localStorage.getItem('auth'))?.token;
let configFromLocalStorage = null

if (token) {
  configFromLocalStorage = {
    headers: {
      'x-auth-token': token
    }
  }
}

const BASE_URL = '/api/v1'
const LEADS_URL = `${BASE_URL}/leads`


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