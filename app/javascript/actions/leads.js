import * as api from '../api'

import { GET_LEADS, CREATE_LEAD, GET_LEAD, UPDATE_LEAD, DESTROY_LEAD } from '../types/index'

export const getLeads = () => async (dispatch) => {
  try {
    const {data} = await api.getLeads()
    dispatch({
      type: GET_LEADS,
      payload: data.data
    })
  } catch (error) {
    console.log(error)
  }
}

export const createLead = (leadParams) => async (dispatch) => {
  try {
    const { data } = await api.createLead(leadParams)
    console.log(data.data)
    dispatch({
      type: CREATE_LEAD, 
      payload: data.data
    })
  } catch (error) {
    console.log(error)
  }
}


export const getLead = (leadSlug) => async (dispatch) => {
  try {
    const { data } = await api.getLead(leadSlug)
    console.log(data.data)
    dispatch({
      type: GET_LEAD,
      payload: data.data
    })
  } catch (error) {
    console.log(error)
  }
}

export const updateLead = (leadSlug, leadParams) => async (dispatch) => {
  try {
    const { data } = await api.updateLead(leadSlug, leadParams)
    console.log(data.data)
    dispatch({
      type: UPDATE_LEAD,
      payload: data.data
    })
  } catch (error) {
    console.log(error)
  }
}

export const destroyLead = (leadSlug) => async (dispatch) => {
  try {
    await api.destroyLead(leadSlug)
    dispatch({
      type: DESTROY_LEAD,
      payload: leadSlug
    })
  } catch (error) {
    console.log(error)
  }
}