import { GET_TOUCHES, DESTROY_TOUCH, CREATE_TOUCH, UPDATE_TOUCH } from '../types/index'

export default (touches = [], action) => {
  switch (action.type) {
    case GET_TOUCHES:
      return action.payload
    case CREATE_TOUCH:
      return [action.payload, ...touches]
    case DESTROY_TOUCH:
      return touches.filter(touch => touch.id != action.payload)
    case UPDATE_TOUCH:
      let updatedTouches = touches.map(touch => {
        if (touch.id === action.payload.id) {
          return action.payload
        } else {
          return touch
        }
      })
      return updatedTouches
    default:
      return touches
  }
}

