import { GET_LEADS, GET_LEAD, CREATE_LEAD, UPDATE_LEAD, DESTROY_LEAD } from '../types/index'

export default (leads = [], action) => {
  switch (action.type) {
    case GET_LEADS:
      return action.payload
    case CREATE_LEAD:
      return [...leads, action.payload]
    case DESTROY_LEAD:
      console.log(leads)
      return leads.filter(lead => lead.attributes.slug != action.payload)
    case UPDATE_LEAD:
      let updatedLeads = leads.map(lead => {
        if (lead.id === action.payload.id) {
          return action.payload
        } else {
          return lead
        }
      })
      return updatedLeads
    default:
      return leads
  }
}

