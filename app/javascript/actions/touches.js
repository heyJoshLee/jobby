import * as api from '../api'

import { GET_TOUCHES, CREATE_TOUCH, DESTROY_TOUCH, UPDATE_TOUCH } from '../types/index'

export const getTouches = (leadSlug) => async (dispatch) => {
  const { data } = await api.getTouches(leadSlug)
  dispatch({
    type: GET_TOUCHES,
    payload: data.data
  })
}

export const createTouch = (leadSlug, touchParams) => async (dispatch) => {
  const { data } = await api.createTouch(leadSlug, touchParams)
  dispatch({
    type: CREATE_TOUCH,
    payload: data.data
  })
}

export const deleteTouch = (leadSlug, touchId) => async (dispatch) => {
  await api.destroyTouch(leadSlug, touchId)
  dispatch({
    type: DESTROY_TOUCH,
    payload: touchId
  })
}

export const updateTouch = (leadSlug, touchId, touchParams) => async (dispatch) => {
  const { data } = await api.updateTouch(leadSlug, touchId, touchParams)
  dispatch({
    type: UPDATE_TOUCH,
    payload: data.data
  })
}