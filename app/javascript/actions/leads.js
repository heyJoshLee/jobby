import * as api from '../api'

import { GET_LEADS, CREATE_LEAD } from '../types/index'

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