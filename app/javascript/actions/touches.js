import * as api from '../api'

import { GET_TOUCHES } from '../types/index'

export const getTouches = (leadSlug) => async (dispatch) => {
  const { data } = await api.getTouches(leadSlug)
  dispatch({
    type: GET_TOUCHES,
    payload: data.data
  })
}