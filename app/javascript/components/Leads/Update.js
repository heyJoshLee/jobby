import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { updateLead, destroyLead } from '../../actions/leads'
import { useHistory } from "react-router-dom";

const Update = ({lead, toggleEditing, slug}) => {

  const dispatch = useDispatch()
  const history = useHistory()

  const [formData, setFormData] = useState({
    job_title: lead.attributes.job_title,
    company_name: lead.attributes.company_name,
    company_url: lead.attributes.company_url,
    job_listing_url: lead.attributes.job_listing_url,
    about_us_page: lead.attributes.about_us_page,
    company_email: lead.attributes.company_email,
    contact_first: lead.attributes.contact_first,
    contact_last: lead.attributes.contact_last,
    salary_range: lead.attributes.salary_range,
    cover_letter_url: lead.attributes.cover_letter_url,
    resume_url: lead.attributes.resume_url,
    notes: lead.attributes.job_title.notes
  })

  const handleDestroy = () => {
    let wantToDelete = confirm("Are you sure you want to delete this lead and all of it's activity?")
    if (wantToDelete) {
      dispatch(destroyLead(slug))
      history.push('/leads')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(slug)
    dispatch(updateLead(slug, formData))
    toggleEditing()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="row banded--even">
        <div className="col">
            <p className="underline">Title</p>
            <input onChange={(e) => setFormData({...formData, job_title: e.target.value})} type="text" className="form-control" value={formData.job_title} />
        </div> 
        <div className="col">
          <p className="underline">Company Name</p>
          <input onChange={(e) => setFormData({...formData, company_name: e.target.value})} type="text" className="form-control" value={formData.company_name} />

          </div> 
        </div>
        <div className="row banded--odd">
          <div className="col">
            <p className="underline">Company URL</p>
            <input onChange={(e) => setFormData({...formData, company_url: e.target.value})} type="text" className="form-control" value={formData.company_url} />

          </div> 
          <div className="col">
            <p className="underline">Job Listing URL</p>
            <input onChange={(e) => setFormData({...formData, job_listing_url: e.target.value})} type="text" className="form-control" value={formData.job_listing_url} />

          </div> 
          <div className="col">
            <p className="underline">About Us URL</p>
            <input onChange={(e) => setFormData({...formData, about_us_page: e.target.value})} type="text" className="form-control" value={formData.about_us_page} />
          </div> 
        </div>
        <div className="row banded--even">
          <div className="col">
            <p className="underline">Company Email</p>
            <input onChange={(e) => setFormData({...formData, company_email: e.target.value})} type="text" className="form-control" value={formData.company_email} />

          </div> 
            <div className="col">
              <p className="underline">Contact First</p>
              <input onChange={(e) => setFormData({...formData, contact_first: e.target.value})} type="text" className="form-control" value={formData.contact_first} />

            </div> 
            <div className="col">
              <p className="underline">Contact Last</p>
              <input onChange={(e) => setFormData({...formData, contact_last: e.target.value})} type="text" className="form-control" value={formData.contact_last} />

            </div> 
            <div className="col">
              <p className="underline">Salary Range</p>
              <input onChange={(e) => setFormData({...formData, salary_range: e.target.value})} type="text" className="form-control" value={formData.salary_range} />

          </div>
        </div>
        <div className="row banded--odd">
          <div className="col">
            <p className="underline">Cover Letter URL</p>
            <input onChange={(e) => setFormData({...formData, cover_letter_url: e.target.value})} type="text" className="form-control" value={formData.cover_letter_url} />

          </div> 
          <div className="col">
            <p className="underline">Resume URL</p>
            <input onChange={(e) => setFormData({...formData, resume_url: e.target.value})} type="text" className="form-control" value={formData.resume_url} />

          </div> 
        </div>
        <div className="row banded--even">
          <div className="col">
            <p className="underline">Notes</p>
          <textarea onChange={(e) => setFormData({...formData, notes: e.target.value})} className="form-control" value={formData.notes}> </textarea>
          </div>
        </div>

        <div>
          <div className="row">
            <div className="col">
              <button 
                onClick={handleDestroy}
                className="btn btn-danger btn-block mt-4"> Delete Lead 
              </button>
            </div>
            <div className="col">
              <input
                type="submit"
                value="Save"
                className="btn btn-primary btn-block mt-4" /> 
            </div>
          </div>
 
        </div>
    </form>

  )
}

export default Update