import * as api from '../api'
import { CREATE_USER } from '../types/index'


export const createUser = (userParams) => async (dispatch) => {
  try {
    const { data } = await api.createUser(userParams)
    localStorage.setItem('auth', JSON.stringify(data))

    dispatch({
      type: CREATE_USER,
      payload: data
    })

  } catch (error) {
    console.log(error)
  }
}