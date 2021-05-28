import * as api from '../api'

import { SIGN_IN, SIGN_OUT } from '../types/index'


export const signIn = (userParams) => async (dispatch) => {
  const { data } = await api.signIn(userParams)
  localStorage.setItem('auth', JSON.stringify(data))

  dispatch({
    type: SIGN_IN,
    payload: data
  })
}

export const signOut = () =>  async (dispatch) => {
  localStorage.setItem('auth', null)
  dispatch({
    type: SIGN_OUT
  })

}