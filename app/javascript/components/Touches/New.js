import React, { useState } from 'react'
import DatePicker from 'react-date-picker'
import { useDispatch } from 'react-redux'
import { createTouch } from '../../actions/touches'
import jQuery from 'jquery'

const New = ({ slug }) => {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    date: new Date(),
    title: "",
    body: "",
    status: "Todo"
  })

  const clearForm = () => {
    setFormData({
      date: new Date(),
      title: "",
      body: "",
      status: "Todo"
    })
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createTouch(slug, {touch: formData})) 
    clearForm()
    jQuery('#activity-close-button').click()

  }

  return(
    <div>
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#new-activity-modal">
        New Activity
      </button>

      <div className="modal fade" id="new-activity-modal" tabIndex={-1} role="dialog" aria-labelledby="new-activity-modalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="new-activity-modalLabel">Modal title</h5>
              <button id="activity-close-button" type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                  <div className="form-group">
                    <label htmlFor="touch-title">Title</label>
                    <input 
                      value={formData.title} 
                      onChange={(e) => setFormData({...formData, title: e.target.value})} 
                      className="form-control" 
                      type="text" 
                      id="touch-title" 
                      name="title" 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="touch-body">Body</label>
                    <textarea
                      value={formData.body} 
                      onChange={(e) => setFormData({...formData, body: e.target.value})} 
                      className="form-control" 
                      name="body" 
                      id="touch-body" 
                      cols={30} 
                      rows={5}>
                    </textarea>
                  </div>
                  <div className="form-group">
                    <div className="row">
                      <div className="col">
                        {/* <label htmlFor="activity-status">Status</label> */}
                        {/* <select 
                          value={formData.status}
                          onChange={(e) => setFormData({...formData, status: e.target.value})}
                          className="form-control" id="activity-status">
                          <option value="Todo">Todo</option>
                          <option value="Completed">Completed</option>
                          <option value="Canceled">Canceled</option>
                        </select> */}
                      </div>
                      <div className="col">
                         {/* <p>Date</p> */}
                        {/* <DatePicker value={formData.date} onChange={(e) => setFormData({...formData, date: e })} /> */}
                      </div>
                    </div>
                  </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <input type="submit" value="Save" className="btn btn-primary" />
              </div>
            </form>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default New