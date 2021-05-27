import React, { useState } from 'react'
import DatePicker from 'react-date-picker'

const Edit = ({touch, toggleEdit}) => {

  const [formData, setFormData] = useState({
    date: "",
    title: "",
    body: "",
    status: ""
  })

  const cancelEditing = () => {
    toggleEdit()
  }

  return(
    <li>
      <div className="card">
        <form>
          <div className="card-header" id={`activity-${touch.id}`}>
            <button className="btn btn-link btn-block row" data-toggle="collapse" data-target={`#collapse-${touch.id}`} aria-expanded="true" aria-controls={`collapse-${touch.id}`}>
                <div className="row activity-item-heading">
                  <div className="col-3">
                    <select 
                      value={formData.status}
                      onChange={(e) => setFormData({...formData, status: e.target.value})}
                      className="form-control" id="activity-status">
                      <option value="Todo">Todo</option>
                      <option value="Completed">Completed</option>
                      <option value="Canceled">Canceled</option>
                    </select>
                  </div>
                  <div className="col-3">
                    <DatePicker 
// @ts-ignore
                    value={formData.date} onChange={(e) => setFormData({...formData, date: e })} />
                  </div>
                  <div className="col">
                    <input type="text" value={formData.title} name="title" />
                  </div>
              </div>
            </button>
          </div>
          <div id={`collapse-${touch.id}`} className="show collapse" aria-labelledby={`activity-${touch.id}`} data-parent="#activity-log-accordion">
            <div className="card-body">
              <textarea value={formData.body} className="form-control"></textarea>
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