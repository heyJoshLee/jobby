import React, { useState, useEffect } from 'react';
import axios from 'axios'
import NewLead from './New'
import { Link } from 'react-router-dom'
import { getLeads } from '../../actions/leads'
import { useDispatch, useSelector} from 'react-redux'

const Leads = () => {
  const dispatch = useDispatch();
  // @ts-ignore
  const leads = useSelector(state => state.leads)
  useEffect( () => {
    dispatch(getLeads())
  }, [leads.length])

  if (leads.length === 0) {
    return <div>Loading...</div>
  }

  const leadsList = leads.map(lead => {
    return( 
      <li key={lead.id}>
        <Link to={`/leads/${lead.attributes.slug}`}>
          {lead.attributes.job_title}
        </Link>
      </li>
    )
  })



  return(
    <>
      <div className="row">
        <div className="col-6">
          <h1>My Leads</h1>
        </div>
        <div className="col-6">
          <NewLead />
        </div>
      </div>
      <ul>
        {leadsList}
      </ul>
    </>
  )
}

export default Leads;