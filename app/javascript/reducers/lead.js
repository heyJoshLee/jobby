import { GET_LEAD} from '../types/index'

export default (lead = null, action) => {
  switch (action.type) {
    case GET_LEAD:
      return action.payload
    default:
      return lead
  }
}

