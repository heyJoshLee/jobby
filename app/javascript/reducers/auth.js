import { CREATE_USER, SIGN_IN, SIGN_OUT } from '../types'

const defaultState = JSON.parse(localStorage.getItem('auth'));

export default (auth = defaultState, action ) => {
  switch (action.type) {
    case SIGN_IN:
    case CREATE_USER:
      return action.payload
    case SIGN_OUT:
      return null
    default:
      return auth
  }
}