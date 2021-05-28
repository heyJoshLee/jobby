import { combineReducers } from 'redux'

import leads from './leads'
import lead from './lead'
import touches from './touches'
import auth from './auth'


export default combineReducers({
  leads,
  lead,
  touches,
  auth
})