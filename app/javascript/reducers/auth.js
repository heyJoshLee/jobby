import { CREATE_USER, SIGN_IN } from '../types'

const defaultState = JSON.parse(localStorage.getItem('auth'));

export default (auth = defaultState, action ) => {
  switch (action.type) {
    case SIGN_IN:
      console.log("SOULD SIGN IN!!!!!!!!")
      return action.payload
    default:
      return auth
  }
}