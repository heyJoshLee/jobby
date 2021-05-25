import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Leads = () => {
  const [leads, setLeads] = useState([])
  useEffect(() => {

    axios.get('/api/v1/leads.json')
    .then(res => {
      console.log(res.data.data)
      setLeads(res.data.data)
    })
    .catch(res => console.log(res))
  }, [leads.length])


  const leadsList = leads.map(lead => {
    return <li key={lead.id}>{lead.attributes.job_title}</li>
  })



  return(
    <>
      <h1>My Leads</h1>
      <ul>
        {leadsList}
      </ul>
    </>
  )
}

export default Leads;