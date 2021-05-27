import React, { useEffect, useState } from 'react'
import TouchList from '../Touches/TouchList'
import NewTouch from '../Touches/New'
import UpdateForm from './Update'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getLead } from '../../actions/leads'

const Lead = (props) => {
  const dispatch = useDispatch()
  // @ts-ignore
  const lead = useSelector(state => state.lead)
  let slug = props.match.params.slug

  useEffect(() => {
    dispatch(getLead(slug))
  }, [])

  const [editing, setEditing] = useState(false)
  const toggleEditing = () => { setEditing(!editing)}

  if (!lead) { return <div>Loading...</div>}
  if (editing) { return <UpdateForm slug={slug} lead={lead} toggleEditing={toggleEditing} />}

  return(
    <div>
      <Link to="/leads">Back to leads</Link>
       <div>
        <div className="row banded--even">
          <div className="col">
              <p className="underline">Title</p>
              <p>{lead.attributes.job_title}</p>
          </div> 
          <div className="col">
            <p className="underline">Company Name</p>
            <p>{lead.attributes.company_name}</p>

            </div> 
          </div>
          <div className="row banded--odd">
            <div className="col">
              <p className="underline">Company URL</p>
              <a target="_blank" href={`http://${lead.attributes.company_url}`}>{lead.attributes.company_url}</a>

            </div> 
            <div className="col">
              <p className="underline">Job Listing URL</p>
              <a target="_blank" href={`http://${lead.attributes.job_listing_url}`}>{lead.attributes.job_listing_url}</a>

            </div> 
            <div className="col">
              <p className="underline">About Us URL</p>
              <a target="_blank" href={`http://${lead.attributes.about_us_page}`}>{lead.attributes.about_us_page}</a>

            </div> 
          </div>
          <div className="row banded--even">
            <div className="col">
              <p className="underline">Company Email</p>
              <p>{lead.attributes.company_email}</p>

            </div> 
              <div className="col">
                <p className="underline">Contact First</p>
                <p>{lead.attributes.contact_first}</p>

              </div> 
              <div className="col">
                <p className="underline">Contact Last</p>
                <p>{lead.attributes.contact_last}</p>

              </div> 
              <div className="col">
                <p className="underline">Salary Range</p>
                <p>{lead.attributes.salary_range}</p>

            </div>
          </div>
          <div className="row banded--odd">
            <div className="col">
              <p className="underline">Cover Letter URL</p>
              <a target="_blank" href={`http://${lead.attributes.cover_letter_url}`}>{lead.attributes.cover_letter_url}</a>

            </div> 
            <div className="col">
              <p className="underline">Resume URL</p>
              <a target="_blank" href={`http://${lead.attributes.resume_url}`}>{lead.attributes.resume_url}</a>

            </div> 
          </div>
          <div className="row banded--even">
            <div className="col">
              <p className="underline">Notes</p>
              <p>{lead.attributes.notes}</p>
            </div>
          </div>

          <div>
            <button 
              onClick={toggleEditing}
              className="btn btn-primary btn-block mt-4"> Edit Lead </button>
          </div>
        </div>

        <div>
          <h2>Activity Log</h2> 
          <hr />
          <NewTouch />
          <br />
          <TouchList />
        </div>
    </div>
  )
}

export default Lead;