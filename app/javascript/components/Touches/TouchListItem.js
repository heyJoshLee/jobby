import React, {useState } from 'react'
import { Pencil, Trash } from 'react-bootstrap-icons';
import EditForm from './Edit'

const TouchListItem = ({touch}) => {

  const [state, setState] = useState({
    editing: false
  })


  const renderStatusButtonClass = (status) => {
    switch(status) {
      case 'todo':
        return 'btn-primary';
      case 'canceled':
        return 'btn-danger';
      case 'done':
        return 'btn-success'
    }
  }

  const toggleEdit = () => {
    setState({...state, editing: !state.editing})
  }

  const handleDelete = () => {
    const wantToDelete = window.confirm("Are you sure you want to delete this activity?")
    if (wantToDelete) {
      console.log("Delete me!")
    }
  }

  if (state.editing) { return <EditForm toggleEdit={toggleEdit} touch={touch} />}

  return(
    <li>
      <div className="card">
        <div className="card-header" id={`activity-${touch.id}`}>
          <button className="btn btn-link btn-block row" data-toggle="collapse" data-target={`#collapse-${touch.id}`} aria-expanded="true" aria-controls={`collapse-${touch.id}`}>
              <div className="row activity-item-heading">
                <div className="col-3">
                  <button className={`btn ${renderStatusButtonClass(touch.status)}`}>{touch.status.charAt(0).toUpperCase() + touch.status.slice(1)}</button>
                </div>
                <div className="col-3">
                  <p>{touch.date}</p>
                </div>
                <div className="col">
                  <p>{touch.title}</p>
                </div>
      
            </div>
          </button>
        </div>
        <div id={`collapse-${touch.id}`} className="collapse" aria-labelledby={`activity-${touch.id}`} data-parent="#activity-log-accordion">
          <div className="card-body">
            {touch.body}
          </div>
          <div className="float-right">
            <Pencil onClick={toggleEdit} className="hover" />
            <Trash onClick={handleDelete} className="ml-2 mr-2 hover" />
          </div>
        </div>
      </div>

    </li>
  )
}

export default TouchListItem