import React, {useState } from 'react'
import { Pencil, Trash } from 'react-bootstrap-icons';
import EditForm from './Edit'
import { deleteTouch } from '../../actions/touches'
import { useDispatch } from 'react-redux'

const TouchListItem = ({touch, slug}) => {
  const dispatch = useDispatch()
  const [state, setState] = useState({
    editing: false
  })


  const renderStatusButtonClass = (status) => {
    switch(status) {
      case 'Todo':
        return 'btn-primary';
      case 'Canceled':
        return 'btn-danger';
      case 'Done':
        return 'btn-success'
    }
  }

  const toggleEdit = () => {
    setState({...state, editing: !state.editing})
  }

  const handleDelete = () => {
    const wantToDelete = window.confirm("Are you sure you want to delete this activity?")
    if (wantToDelete) {
      dispatch(deleteTouch(slug, touch.id))
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
                  <button className={`btn ${renderStatusButtonClass(touch.attributes.status)}`}>{touch.attributes.status.charAt(0).toUpperCase() + touch.attributes.status.slice(1)}</button>
                </div>
                <div className="col-3">
                  <p>{touch.attributes.date}</p>
                </div>
                <div className="col">
                  <p>{touch.attributes.title}</p>
                </div>
      
            </div>
          </button>
        </div>
        <div id={`collapse-${touch.id}`} className="collapse" aria-labelledby={`activity-${touch.id}`} data-parent="#activity-log-accordion">
          <div className="card-body">
            {touch.attributes.body}
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