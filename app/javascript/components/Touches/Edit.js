import React, { useState } from 'react'
import DatePicker from 'react-date-picker'
import { useDispatch } from 'react-redux'
import{ updateTouch } from '../../actions/touches'

const Edit = ({slug, touch, toggleEdit}) => {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    date: touch.data,
    title: touch.title,
    body: touch.body,
    status: touch.status
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(updateTouch(slug, touch.id, formData))
    cancelEditing()
  }

  const cancelEditing = () => {
    toggleEdit()
  }

  return(
    <li>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <div className="card-header" id={`activity-${touch.id}`}>
            <div className="btn btn-link btn-block row">
                <div className="row activity-item-heading">
                  <div className="col-3">
                    {/* <select 
                      value={formData.status}
                      onChange={(e) => setFormData({...formData, status: e.target.value})}
                      className="form-control" id="activity-status">
                      <option value="Todo">Todo</option>
                      <option value="Completed">Completed</option>
                      <option value="Canceled">Canceled</option>
                    </select> */}
                  </div>
                  <div className="col-3">
                    {/* <DatePicker 
                    value={formData.date} onChange={(e) => setFormData({...formData, date: e })} /> */}
                  </div>
                  <div className="col">
                    <input onChange={(e) =>  setFormData({...formData, title: e.target.value})} type="text" value={formData.title} name="title" />
                  </div>
              </div>
            </div>
          </div>
          <div id={`collapse-${touch.id}`} className="show collapse" aria-labelledby={`activity-${touch.id}`} data-parent="#activity-log-accordion">
            <div className="card-body">
              <textarea onChange={(e) =>  setFormData({...formData, body: e.target.value})} value={formData.body} className="form-control"></textarea>
            </div>
            <div className="row">
              <div className="col">
                <input type="submit" value="Save" className="btn btn-primary btn-block" />
              </div>
              <div className="col">
                <button onClick={cancelEditing} className="btn btn-secondary btn-block">Cancel</button>
              </div>
            </div>
    
          </div>
        </form>
      </div>

    </li>
  )
}

export default Edit