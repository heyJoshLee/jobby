import React, { useState } from 'react'
import { createLead } from '../../actions/leads'
import { useDispatch, useSelector } from 'react-redux'
import jQuery from 'jquery'
const New = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    job_title: "",
    company_name: "",
    company_url: "",
    job_listing_url: "",
    about_us_page: "",
    company_email: "",
    contact_first: "",
    contact_last: "",
    salary_range: "",
    cover_letter_url: "",
    resume_url: "",
    notes: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    dispatch(createLead(formData))
    jQuery('#close-button').click()
  }

  return(
    <>
    <div>
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#new-lead-modal">
      New Lead
      </button>
    </div>
    <div className="modal fade" id="new-lead-modal" tabIndex={-1} role="dialog" aria-labelledby="new-lead-modal-label" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">New Lead</h5>
            <button id="close-button" type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="col">
                    <label htmlFor="job-title">Title</label>
                    <input value={formData.job_title} onChange={(e) => setFormData({...formData, job_title: e.target.value })} name="job-title" className="form-control col" id="job-title" />        
                </div> 
                <div className="col">
                  <label htmlFor="company_name">Company Name</label>
                  <input value={formData.company_name} onChange={(e) => setFormData({...formData, company_name: e.target.value })} name="company_name" className="form-control col" id="company_name" />        
                </div> 
              </div>
              <div className="form-row">
                <div className="col">
                  <label htmlFor="company_url">Company URL</label>
                  <input value={formData.company_url} onChange={(e) => setFormData({...formData, company_url: e.target.value })} name="company_url" className="form-control col" id="company_url" />        
                </div> 
                <div className="col">
                  <label htmlFor="job_listing_url">Job Listing URL</label>
                  <input value={formData.job_listing_url} onChange={(e) => setFormData({...formData, job_listing_url: e.target.value })} name="job_listing_url" className="form-control" id="job_listing_url" />        
                </div> 
                <div className="col">
                  <label htmlFor="about_us_page">About Us URL</label>
                  <input value={formData.about_us_page} onChange={(e) => setFormData({...formData, about_us_page: e.target.value })} name="about_us_page" className="form-control" id="about_us_page" />        
                </div> 
              </div>
              <div className="form-row">
                <div className="col">
                  <label htmlFor="company_email">Company Email</label>
                  <input value={formData.company_email} onChange={(e) => setFormData({...formData, company_email: e.target.value })} name="company_email" type="email" className="form-control" id="company_email" />        
                </div> 
              <div className="form-row">
                  <div className="col">
                    <label htmlFor="contact_first">Contact First</label>
                    <input value={formData.contact_first} onChange={(e) => setFormData({...formData, contact_first: e.target.value })} name="contact_first" className="form-control" id="contact_first" />        
                  </div> 
                  <div className="col">
                    <label htmlFor="contact_last">Contact Last</label>
                    <input value={formData.contact_last} onChange={(e) => setFormData({...formData, contact_last: e.target.value })} name="contact_last" className="form-control" id="contact_last" />        
                  </div> 
                  <div className="col">
                    <label htmlFor="salary_range">Salary Range</label>
                    <input value={formData.salary_range} onChange={(e) => setFormData({...formData, salary_range: e.target.value })} name="salary_range" className="form-control" id="salary_range" />        
                  </div> 
                </div>
              </div>
              <div className="form-row">
                <div className="col">
                  <label htmlFor="cover_letter_url">Cover Letter URL</label>
                  <input value={formData.cover_letter_url} onChange={(e) => setFormData({...formData, cover_letter_url: e.target.value })} name="cover_letter_url" className="form-control" id="cover_letter_url" />        
                </div> 
                <div className="col">
                  <label htmlFor="resume_url">Resume URL</label>
                  <input value={formData.resume_url} onChange={(e) => setFormData({...formData, resume_url: e.target.value })} name="resume_url" className="form-control" id="resume_url" />        
                </div> 
              </div>
              <div className="form-row">
                <div className="col">
                  <p>Notes</p>
                    <textarea value={formData.notes} onChange={(e) => setFormData({...formData, notes: e.target.value})} className="form-control" name="notes" id="" cols={30} form-rows={10}></textarea>
                </div>
              </div>

              <div className="form-group">
                <input type="submit" value="Create Lead" className="btn btn-primary btn-block mt-4" />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div> 
      </div>
    </div>
    </>

  )
}

export default New