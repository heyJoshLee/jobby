import { GET_TOUCHES } from '../types/index'

export default (touches = [], action) => {
  switch (action.type) {
    case GET_TOUCHES:
      return action.payload
    default:
      return touches
  }
}

