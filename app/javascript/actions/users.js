import * as api from '../api'
import { CREATE_USER } from '../types/index'


export const createUser = (userParams) => async (dispatch) => {
  try {
    const { data } = await api.createUser(userParams)
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}