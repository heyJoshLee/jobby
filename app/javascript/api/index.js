import axios from 'axios'

let token = JSON.parse(localStorage.getItem('auth'))

const BASE_URL = '/api/v1'
const LEADS_URL = `${BASE_URL}/leads`
const USERS_URL = `${BASE_URL}/users`
const SIGN_IN_URL = `${BASE_URL}/signin`
// leads

export const getLeads = () => {
  return axios.get(LEADS_URL, { 
    headers: {
      'Authorization': JSON.parse(localStorage.getItem('auth'))
    }
  })
}

export const createLead = (lead_params) => {
  return axios.post(LEADS_URL, lead_params, { 
    headers: {
      'Authorization': JSON.parse(localStorage.getItem('auth'))
    }
  })
}

export const getLead = (leadSlug) => {
  return axios.get(`${LEADS_URL}/${leadSlug}`, { 
    headers: {
      'Authorization': JSON.parse(localStorage.getItem('auth'))
    }
  })
}

export const updateLead = (leadSlug, leadParams) => {
  return axios.patch(`${LEADS_URL}/${leadSlug}`, leadParams, { 
    headers: {
      'Authorization': JSON.parse(localStorage.getItem('auth'))
    }
  })
}

export const destroyLead = (leadSlug) => {
  return axios.delete(`${LEADS_URL}/${leadSlug}`, { 
    headers: {
      'Authorization': JSON.parse(localStorage.getItem('auth'))
    }
  })
}

// touches

export const getTouches = (leadSlug) => {
  return axios.get(`${LEADS_URL}/${leadSlug}/touches`, { 
    headers: {
      'Authorization': JSON.parse(localStorage.getItem('auth'))
    }
  })
}

export const createTouch = (leadSlug, touchParams) => {
  return axios.post(`${LEADS_URL}/${leadSlug}/touches`, touchParams, { 
    headers: {
      'Authorization': JSON.parse(localStorage.getItem('auth'))
    }
  })
}

export const updateTouch = (leadSlug, touchId, touchParams) => {
  return axios.put(`${LEADS_URL}/${leadSlug}/touches/${touchId}`, touchParams, { 
    headers: {
      'Authorization': JSON.parse(localStorage.getItem('auth'))
    }
  })
}

export const destroyTouch = (leadSlug, touchId) => {
  return axios.delete(`${LEADS_URL}/${leadSlug}/touches/${touchId}`,{ 
    headers: {
      'Authorization': JSON.parse(localStorage.getItem('auth'))
    }
  })
}

// users
export const createUser = (userParams) => {
  return axios.post(`${USERS_URL}`, userParams)
}

// auth

export const signIn = (userParams) => {
  return axios.post(SIGN_IN_URL, userParams)
}